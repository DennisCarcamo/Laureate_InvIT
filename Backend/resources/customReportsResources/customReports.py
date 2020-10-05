from flask import Flask, request
from flask_restful import Resource, Api, reqparse
from flask_jwt import JWT, jwt_required, current_identity
from sqlalchemy import create_engine, text, or_, null
from backend.models.signature import TypeModel, SignatureSheetModel, SignatureProductsModel, ImageModel, SavedReportModel
import requests
import datetime
from dateutil.relativedelta import *
import sqlalchemy
import json
from sqlalchemy.orm import sessionmaker, scoped_session
from webargs import fields
from webargs.flaskparser import use_args
from app import settings, app, api
from marshmallow import fields


class EmployeeReports(Resource):
    data = {
    'jobtitle': fields.Str(required = True),
    'jobtitleGroup': fields.Str(required = True),
    'jobtitleFrom':fields.Str(required = True),
    'jobtitleTo':fields.Str(required = True),
    'jobtitleAsset': fields.Str(required = True),
    'jobtitleAssetStatus': fields.Str(required = True),
    'jobtitleAssetRange': fields.Str(required = True),
    'jobtitleAssetMonths':fields.Int(required = True),
    }

    @use_args(data)
    def post(self,args):
        jobtitle = args.get('jobtitle', None)
        jobtitleGroup = args.get('jobtitleGroup', None)
        jobtitleFrom = args.get('jobtitleFrom', None) 
        jobtitleTo = args.get('jobtitleTo', None)
        jobtitleAsset = args.get('jobtitleAsset', None)
        jobtitleAssetStatus = args.get('jobtitleAssetStatus', None)
        jobtitleAssetRange = args.get('jobtitleAssetRange', None)
        jobtitleAssetMonths = args.get('jobtitleAssetMonths', None)
        

        engine = create_engine(settings['ASSETDB'],  pool_pre_ping=True, pool_size=20, max_overflow=5) 
        s = engine.connect()
        
        #getting user info
        queryFix =  "SELECT user1.userid, user1.employeeid, user1.jobtitle, user1.status, user1.firstname, user1.middlename, user1.lastname, contract.createdtime "
        queryFix += "FROM public.sduser AS user1 "
        queryFix += "LEFT JOIN Aaauser as contract "
        queryFix += "on user1.userid = contract.user_id "
        tempUser1 = queryFix
        tempUser1 = "("+tempUser1+") m1 "
        queryFix = "SELECT * FROM " + tempUser1
        
        if(jobtitle == "Fulltime"):
            queryFix += "WHERE m1.jobtitle NOT LIKE \'%%Intern%%\' "
            queryFix += "AND m1.jobtitle NOT LIKE \'%%Practicum%%\' "
            queryFix += "AND m1.jobtitle NOT LIKE \'%%Contractor%%\' "
            queryFix += "AND m1.jobtitle NOT LIKE \'%%Null%%\' "
        elif(jobtitle == "Undefined"):
            queryFix += "WHERE m1.jobtitle =  \'\' "
        elif(jobtitle == "All"):
            queryFix += "WHERE m1.jobtitle <>  \'\' "
        else:
            jobtitle = "\'%%"+jobtitle+"%%\'"
            queryFix += "WHERE m1.jobtitle LIKE {} "

        tempUserquery = queryFix
        queryFix = ""
        
        #getting department info
        queryFix = "SELECT d1.userid, d2.deptname "
        queryFix += "FROM userdepartment as d1 "
        queryFix += "LEFT JOIN departmentdefinition as d2 "
        queryFix += "on d2.deptid = d1.deptid "
        tempDeptquery = queryFix
        queryFix = "" 

        #users info by department
        tempUserquery = "("+tempUserquery+") s4 "
        tempDeptquery = "("+tempDeptquery+") s3 "
        queryFix = "SELECT s4.userid, s4.employeeid, s4.jobtitle, s4.firstname, s4.lastname, s4.createdtime, s3.deptname "
        queryFix += "FROM "+tempUserquery
        queryFix += "LEFT JOIN "+tempDeptquery
        queryFix += "ON s3.userid = s4.userid "
        tempUser_Deptquery = queryFix
        queryFix = ""

        #user info by department and assets wiht the owner 
        tempUser_Deptquery = "("+tempUser_Deptquery+") s5 "
        queryFix = "SELECT s5.userid, s5.employeeid, s5.firstname, s5.lastname, s5.createdtime, s5.deptname, s5.jobtitle " 
        queryFix += "FROM "+tempUser_Deptquery
        queryFix += "LEFT JOIN resourceowner as ro "
        queryFix += "on ro.userid = s5.userid "
        tempUserDepart_AssetOwner = queryFix
        queryFix = ""

        #resources with component info

        queryFix = "SELECT r1.resourceid, r1.resourcename,r1.assettag, r1.acquisitiondate, r2.componentname, r1.resourcestateid, r2.componenttypeid "
        queryFix += "FROM resources as r1 "
        queryFix += "LEFT JOIN componentdefinition AS r2 "
        queryFix += "ON r1.componentid = r2.componentid "
        tempResourceQuery = queryFix
        tempResourceQuery = "("+tempResourceQuery+") ct1 "
        queryFix = "SELECT ct1.resourceid, ct1.resourcename, ct1.assettag, ct1.acquisitiondate, ct1.componentname, ct1.resourcestateid, ct2.componenttypename "
        queryFix += "FROM "+tempResourceQuery
        queryFix += "LEFT JOIN componenttype AS ct2 "
        queryFix += "on ct1.componenttypeid =  ct2.componenttypeid"
        tempResourceQuery2 = queryFix
        queryFix = "" 

        #getting asset and the store state
        tempResourceQuery2 = "("+tempResourceQuery2+") ct3 "
        queryFix = "SELECT ct3.resourceid, ct3.resourcename, ct3.assettag, ct3.acquisitiondate, ct3.componentname, ct3.componenttypename, RT.displaystate " 
        queryFix +="FROM "+ tempResourceQuery2
        queryFix +="LEFT JOIN resourcestate AS RT "
        queryFix +="ON RT.resourcestateid =  ct3.resourcestateid "
        tempComponent_ResourcesId = queryFix


        #resources with user id
        queryFix = "SELECT rw.resourceid, rw.userid " 
        queryFix += "FROM resourceowner AS rw " 
        tempResources_Userid = queryFix
        queryFix = ""

        #resource Info by user with resorceId. 
        tempResources_Userid = "("+tempResources_Userid+") rr "
        tempComponent_ResourcesId = "("+tempComponent_ResourcesId+") re "
        queryFix = "SELECT * " 
        queryFix += "FROM "+tempComponent_ResourcesId 
        queryFix += "LEFT JOIN "+tempResources_Userid
        queryFix += "ON rr.resourceid = re.resourceid "
        tempComponentsInfo = queryFix
        queryFix = "" 


        #UsersInfo with ItemsInfo
        tempUserDepart_AssetOwner = "("+tempUserDepart_AssetOwner+") users "
        tempComponentsInfo = "("+tempComponentsInfo+") items "
        queryFix = "SELECT * "
        queryFix += "FROM "+tempUserDepart_AssetOwner
        queryFix += "LEFT JOIN "+tempComponentsInfo
        queryFix += "ON users.userid = items.userid "

        #applying department order by
        if jobtitleGroup == 'Department':
            queryFix = queryFix+ "order by deptname"
        
        #Query execution values
        result = s.execute(queryFix.format(jobtitle)) 
        query = json.dumps([dict(ix) for ix in result] )
        dict2 = json.loads(query)
        filtered = ""

        #applying the contracted date filter by comverting the dates to timestamp format    
        jobtitleFromObj = datetime.datetime.strptime(jobtitleFrom, '%Y-%m-%d' )
        jobtitleFromTimestamp = int(datetime.datetime.timestamp(jobtitleFromObj))*1000
        jobtitleToObj = datetime.datetime.strptime(jobtitleTo, '%Y-%m-%d')
        jobtitleToTimestamp = int(datetime.datetime.timestamp(jobtitleToObj))*1000
            #applying the filter
        def isGreaterEqual(obj):
            try:
                int_val = int(str(obj.get('createdtime')))
            except ValueError:
                return False

            if(int_val >= jobtitleFromTimestamp):
                return True
            else:
                return False

        def isLessEqual(obj):
            try:
                int_val = int(str(obj.get('createdtime')))
            except ValueError:
                return False

            if(int_val <= jobtitleToTimestamp):
                return True
            else:
                return False

        filtered = [obj for obj in dict2 if(isGreaterEqual(obj) and isLessEqual(obj))]

        #applying the asset filter
        if jobtitleAsset == "WorkStation":
            filtered  =  [obj for obj in filtered if(obj['componenttypename'] == "Workstation")]
        elif jobtitleAsset == "Monitor":
            filtered  =  [obj for obj in filtered if(obj['componenttypename'] == "Monitor")]
        elif jobtitleAsset == "UPS":
            filtered  =  [obj for obj in filtered if(obj['componenttypename'] == "UPS")]
        elif jobtitleAsset == "Mouse":
            filtered  =  [obj for obj in filtered if(obj['componenttypename'] == "Mouse")]
        elif jobtitleAsset == "Keyboard":
            filtered  =  [obj for obj in filtered if(obj['componenttypename'] == "Keyboard")]
        elif jobtitleAsset == "Server":
            filtered  =  [obj for obj in filtered if(obj['componenttypename'] == "Server")]
        elif jobtitleAsset == "All":
            filtered  =  [obj for obj in filtered if(obj['componenttypename'] == "Server" or
            obj['componenttypename'] == "Workstation" or obj['componenttypename'] == "Monitor" or obj['componenttypename'] == "UPS" or
            obj['componenttypename'] == "Mouse" or obj['componenttypename'] == "Keyboard" or obj['componenttypename'] == "Server")]
        

        #applying the asset age filter
            #getting the todays date 
        today = datetime.datetime.now();
        today = today + relativedelta(months = -jobtitleAssetMonths)
        today = today.strftime('%x');
        todayObj = datetime.datetime.strptime(today,'%m/%d/%y')
        todayLessMonthsTimestap = int( datetime.datetime.timestamp(todayObj))*1000

        
        def isgreater(obj):
            try:
                int_val = int(str(obj.get('acquisitiondate')))
            except ValueError:
                return False

            if(int_val < todayLessMonthsTimestap):
                return True
            else:
                return False

       
        def isLess (obj):
            try:
                int_val =  int(str(obj.get('acquisitiondate')))
            except ValueError:
                return False
            if(int_val > todayLessMonthsTimestap):
                return True
            else:
                return False
        
        def isEqual (obj):
            try:
                int_val =  int(str(obj.get('acquisitiondate')))
            except ValueError:
                return False
            if(int_val == todayLessMonthsTimestap):
                return True
            else:
                return False
       
        if jobtitleAssetRange == "Greater":
            filtered = [obj for obj in filtered if(isgreater(obj))]
        elif jobtitleAssetRange == "Equals":
            filtered = [obj for obj in filtered if(isEqual(obj))]
        elif jobtitleAssetRange == "Less": 
            filtered = [obj for obj in filtered if(isLess(obj))]

        
        #filtered = [obj for obj in dict2 if(str(obj['componenttypename']).find("Headset") != -1)]
        uniques = {x['assettag']: x for x in filtered}


        return {
               "values": uniques
            }  

        s.close()
        engine.close()

class InventoryPagesReport(Resource):
    #data we expect to receive
    user_args = {
        'inventoryPageType': fields.Str(required = True),
        'inventoryPageFrom': fields.Str(required = True),
        'inventoryPageTo': fields.Str(required = True)
    }

    #extracting the data
    @use_args(user_args)
    def post(self,args):
        inventoryPageType = args.get('inventoryPageType',None)
        inventoryPageFrom = args.get('inventoryPageFrom',None)
        inventoryPageTo = args.get('inventoryPageTo',None)
        
       
        # queryFix = "SELECT images.image_url, sheet_sheetType.id_employee, sheet_sheetType.updated, sheet_sheetType.id_signature, sheet_sheetType.first_name, sheet_sheetType.last_name, sheet_sheetType.name "
        # queryFix += "FROM (SELECT sheet.updated, sheet.id_employee, sheet.id_signature, sheet.first_name, sheet.last_name, sheet.email, sheet.id_type, sheetType.name "
        # queryFix += "FROM (SELECT id_employee, id_signature, first_name, last_name, email, status, last, id_type, updated "
        # queryFix += "FROM tbl_signature_sheet) sheet "
        # queryFix += "LEFT JOIN tbl_type AS sheetType "
        # queryFix += "ON sheet.id_type = sheetType.id_type) sheet_sheetType "
        # queryFix += "LEFT JOIN tbl_images as images "
        # queryFix += "ON sheet_sheetType.id_signature = images.id_signature"}
        def dateValidation(d):
            try:
                return '{:%Y/%m/%d}'.format(d)
            except:
                return None

        results = ImageModel.query.join(SignatureSheetModel, ImageModel.id_signature == SignatureSheetModel.id_signature, full=True).join(
            TypeModel, TypeModel.id_type == SignatureSheetModel.id_type).add_columns(
            TypeModel.name, SignatureSheetModel.id_signature, SignatureSheetModel.id_employee, SignatureSheetModel.first_name, 
            SignatureSheetModel.last_name, ImageModel.image_url, SignatureSheetModel.updated)

        tempArray = []
        if results:
            for i in results:
                tempArray.append({'Page Type': i[1], 'Page ID':i[2], 'Employee ID':i[3], 'First Name':i[4],'Last Name':i[5], 'Image URL': i[6], 'Updated': dateValidation(i[7])})
            queryJsonString = json.dumps(tempArray)
            jsonValues = json.loads(queryJsonString)
            filtered = ""

            #applying the pageType Filter
            if inventoryPageType == "Onboardings":
             filtered  =  [obj for obj in jsonValues if(obj['Page Type'] == "Onboarding")]
            elif inventoryPageType == "Offboardings":
             filtered  =  [obj for obj in jsonValues if(obj['Page Type'] == "Offboarding")]
            elif inventoryPageType == "Updates":
             filtered  =  [obj for obj in jsonValues if(obj['Page Type'] == "Update")]
            elif inventoryPageType == "Loans":
             filtered  =  [obj for obj in jsonValues if(obj['Page Type'] == "Loan")]
            elif inventoryPageType == "Not Scanned Pages":
             filtered  =  [obj for obj in jsonValues if(obj['Image URL'] is None)]
            elif inventoryPageType == "All Sheets":
             filtered  =  jsonValues

            
            #applying the date filter
            pageFromObj = datetime.datetime.strptime(inventoryPageFrom, '%Y-%m-%d')
            pageFromTimestamp = int(datetime.datetime.timestamp(pageFromObj))
            #print(pageFromTimestamp)
            pageToObj = datetime.datetime.strptime(inventoryPageTo, '%Y-%m-%d' )
            pageToTimestamp = int(datetime.datetime.timestamp(pageToObj))
            #print(pageToTimestamp)

            def checkDates(obj):
                if obj.get('Updated') != None:
                    objDate = datetime.datetime.strptime(obj.get('Updated'), '%Y/%m/%d')
                    objDateTimestamp = int(datetime.datetime.timestamp(objDate))
                    #print(objDateTimestamp)
                    if objDateTimestamp >= pageFromTimestamp and objDateTimestamp <= pageToTimestamp : 
                        return True
                    else:
                        return False
                else:
                    return False

            filtered2 = ""

            filtered2 =  [obj for obj in filtered if(checkDates(obj))]

            return {"values" : filtered2}
        else:
            return {'message':'nah'}

class AssetReport(Resource): 
    data = {
        'assetType' : fields.Str(required = True),
        'assetStatus' : fields.Str(required = True),
        'assetFrom' : fields.Str(required = True),
        'assetTo' : fields.Str(required = True),
        'assetRange' : fields.Str(required = True),
        'assetMonths' : fields.Int(required = True)
    }

    @use_args(data)
    def post(self,args):
        assetType = args.get('assetType',None)
        assetStatus = args.get( 'assetStatus', None)
        assetFrom = args.get('assetFrom',None)
        assetTo = args.get('assetTo',None) 
        assetRange = args.get( 'assetRange',None)
        assetMonths = args.get( 'assetMonths', None)

        #connecting to the Data base. 
        engine = create_engine(settings['ASSETDB'],  pool_pre_ping=True, pool_size=20, max_overflow=5) 
        s = engine.connect()

        #creating the Query
            #allcomponents info
        queryFix = "SELECT r1.resourceid, r1.resourcename,r1.assettag, r1.serialno, r1.acquisitiondate, r1.resourcestateid, r2.componentname, r2.componenttypeid "
        queryFix += "FROM resources as r1 "
        queryFix += "LEFT JOIN componentdefinition AS r2 "
        queryFix += "on r1.componentid=r2.componentid "
        tempAllComponentsQuery = queryFix
        queryFix = ""
            #all components info with the type of asset1
        tempAllComponentsQuery = "("+tempAllComponentsQuery+") ct1 "
        queryFix = "SELECT ct1.resourceid, ct1.resourcename, ct1.assettag, ct1.serialno, ct1.acquisitiondate, ct1.resourcestateid, ct1.componentname, ct2.componenttypename "
        queryFix += "FROM "+tempAllComponentsQuery
        queryFix += "LEFT JOIN componenttype AS ct2 "
        queryFix += "ON ct1.componenttypeid = ct2.componenttypeid "
        tempAllComponentsQuery1 = queryFix
        queryFix = ""

        tempAllComponentsQuery1 = "("+tempAllComponentsQuery1+")comp "
        queryFix = "SELECT comp.resourceid, comp.resourcename, comp.assettag, comp.serialno, comp.acquisitiondate, comp.resourcestateid, comp.componentname, comp.componenttypename "
        queryFix +="FROM "+tempAllComponentsQuery1
        if (assetType!="All"):
            assetType = "\'"+assetType+"\'"
            queryFix +="Where comp.componenttypename = {} "
        tempAllCompType = queryFix
        queryFix = ""

            #all components info with the typename and the displaystore
        tempAllCompType = "("+ tempAllCompType+") ct3 "
        queryFix = "SELECT ct3.resourceid, ct3.resourcename, ct3.assettag, ct3.serialno, ct3.acquisitiondate, ct3.componentname, ct3.componenttypename, RT.displaystate "
        queryFix += "FROM "+tempAllCompType
        queryFix += "LEFT JOIN resourcestate AS RT "
        queryFix += "ON RT.resourcestateid = ct3.resourcestateid "
        tempAllCompTypeStat = queryFix
        queryFix = ""

            #resorceid with the userid
        queryFix = "SELECT rw.resourceid, rw.userid "
        queryFix += "FROM resourceowner as rw "
        otherRe  = queryFix 
        queryfix = ""

            #complete query
        tempAllCompTypeStat = "("+tempAllCompTypeStat+") re "
        otherRe = "("+otherRe+")rr "
        queryFix = "SELECT * FROM "+tempAllCompTypeStat
        queryFix += "LEFT JOIN "+otherRe
        queryFix += "on rr.resourceid = re.resourceid "

        print(assetStatus)

        
        result = s.execute(queryFix.format(assetType)) 
        query = json.dumps([dict(ix) for ix in result] )
        dict2 = json.loads(query)
        filtered = ""

        #for obj in dict2:
        #   print(obj['displaystate'])

        #aplying the Status Filter
        if assetStatus == "In Use":
            filtered  =  [obj for obj in dict2 if(obj['displaystate'] == "In Use")]
        elif assetStatus == "In Store":
            filtered  =  [obj for obj in dict2 if(obj['displaystate'] == "In Store")]
        elif assetStatus == "Expired":
            filtered  =  [obj for obj in dict2 if(obj['displaystate'] == "Expired")]
        elif assetStatus == "Disposed":
            filtered  =  [obj for obj in dict2 if(obj['displaystate'] == "Disposed")]
        elif assetStatus == "Disrepair":
            filtered  =  [obj for obj in dict2 if(obj['displaystate'] == "Disrepair")]
        elif assetStatus == "Donation":
            filtered  =  [obj for obj in dict2 if(obj['displaystate'] == "Donation")]
        elif assetStatus == "Out of Office":
            filtered  =  [obj for obj in dict2 if(obj['displaystate'] == "Out of Office")]
        elif assetStatus == "Expired":
            filtered  =  [obj for obj in dict2 if(obj['displaystate'] == "Expired")]
        else: 
            filtered = dict2

        #for obj in filtered:
        #   print(obj['displaystate'])

        #apliying the createdtime date filter
        assetFromObj = datetime.datetime.strptime(assetFrom, '%Y-%m-%d' )
        assetFromTimestamp = int(datetime.datetime.timestamp(assetFromObj))*1000
        assetToObj = datetime.datetime.strptime(assetTo, '%Y-%m-%d')
        assetToTimestamp = int(datetime.datetime.timestamp(assetToObj))*1000

        def isGreaterEqual(obj):
            try:
                int_val = int(str(obj.get('acquisitiondate')))
            except ValueError:
                return False

            if(int_val >= assetFromTimestamp):
                return True
            else:
                return False

        def isLessEqual(obj):
            try:
                int_val = int(str(obj.get('acquisitiondate')))
            except ValueError:
                return False

            if(int_val <= assetToTimestamp):
                return True
            else:
                return False

        filtered = [obj for obj in filtered if(isGreaterEqual(obj) and isLessEqual(obj))]

        #apliying the antiquiness filter
        today = datetime.datetime.now();
        today = today + relativedelta(months = -assetMonths)
        today = today.strftime('%x');
        todayObj = datetime.datetime.strptime(today,'%m/%d/%y')
        todayLessMonthsTimestap = int( datetime.datetime.timestamp(todayObj))*1000

        
        def isgreater(obj):
            try:
                int_val = int(str(obj.get('acquisitiondate')))
            except ValueError:
                return False

            if(int_val < todayLessMonthsTimestap):
                return True
            else:
                return False

       
        def isLess (obj):
            try:
                int_val =  int(str(obj.get('acquisitiondate')))
            except ValueError:
                return False
            if(int_val > todayLessMonthsTimestap):
                return True
            else:
                return False
        
        def isEqual (obj):
            try:
                int_val =  int(str(obj.get('acquisitiondate')))
            except ValueError:
                return False
            if(int_val == todayLessMonthsTimestap):
                return True
            else:
                return False
       
        if assetRange == "Greater":
            filtered = [obj for obj in filtered if(isgreater(obj))]
        elif assetRange == "Equals":
            filtered = [obj for obj in filtered if(isEqual(obj))]
        elif assetRange == "Less": 
            filtered = [obj for obj in filtered if(isLess(obj))]

        #removing duplicates
        uniques = {x['serialno']: x for x in filtered}

        return {
            "values": uniques
        }

        s.close()
        engine.close()

class SavedReports(Resource):
    data = {
        'created_by': fields.Str(required = True),
        'created_at':fields.Str(required = True),
        'description':fields.Str(required = True),
        'report_type':fields.Str(required = True),
        'report_values':fields.Str(required = True),
        'report_name':fields.Str(required = True),
    }

    @use_args(data)
    def post(self,args):
        created_by = args.get('created_by',None)
        created_at = args.get('created_at',None)
        description = args.get('description',None)
        report_type = args.get('report_type',None)
        report_values = args.get('report_values',None)
        report_name = args.get('report_name',None)


        results = SavedReportModel.bring_all()

        if results:
            return{ 'SignatureSheets': list(map(lambda x: x.json(),results))}
        return{'message': 'Nothing found'}

      

api.add_resource(EmployeeReports,'/api/v1/employeesreports')
api.add_resource(InventoryPagesReport,'/api/v1/inventorypagesreport')
api.add_resource(AssetReport,'/api/v1/assetreports')
api.add_resource(SavedReports,'/api/v1/savedreport')
