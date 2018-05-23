
from flask import Flask, request
#from flask_sqlalchemy import SQLAlchemy
import requests
import datetime
import time

import sqlalchemy
import json
import json
#import psycopg2
from sqlalchemy import create_engine
from webargs import fields
from marshmallow import fields
from app import settings, app, api
from webargs.flaskparser import use_args
from flask_restful import Resource, Api, reqparse
from sqlalchemy.orm import sessionmaker, scoped_session
from flask_jwt import JWT, jwt_required, current_identity
from backend.models.signature import TypeModel, SignatureSheetModel, SignatureProductsModel
from backend.models.auth import *
from flask_jwt_extended import create_access_token, create_refresh_token, jwt_required, jwt_refresh_token_required, get_jwt_identity, get_raw_jwt



class BasicDashboard(Resource):
    #@jwt_required
    def get(self):
        engine = create_engine(settings['ASSETDB'], pool_pre_ping=True, pool_size=20, max_overflow=5 )
            #Session = sessionmaker(autocommit = False, bind=engine) 
        s = engine.connect()
        #s = Session()
        result = s.execute('select count(*), c.componenttypename,d.displaystate from resources as a left join componentdefinition as b on (a.componentid = b.componentid) left join componenttype as c on (b.componenttypeid = c.componenttypeid) left join resourcestate as d on (d.resourcestateid = a.resourcestateid) where c.componenttypeid = 1 or  c.componenttypeid = 311 or  c.componenttypeid = 304 or  c.componenttypeid = 16 or  c.componenttypeid = 7 or  c.componenttypeid = 305 or  c.componenttypeid = 318 group by c.componenttypename,d.displaystate order by c.componenttypename')
        query = json.dumps( [dict(ix) for ix in result] ) 

        r = s.execute('select f.resourcename,f.assettag, d.displaystate as "State", g.statedesc as "Prev" from (select a.resourcestateid,a.resourceid, b.displaystate, a.prevresourcestateid,a.starttime from resourcestatehistory as a inner join resourcestate as b on (a.resourcestateid = b.resourcestateid)) as d inner join resources as f on (d.resourceid = f.resourceid) inner join resourcestate as g on (d.prevresourcestateid = g.resourcestateid) order by d.starttime desc limit 6')
        q = json.dumps( [dict(ix) for ix in r] )

        return {
                    'query': json.loads(query),
                    'History': json.loads(q) 
               }  

        s.close()
        engine.close() 


class DashboardModel(Resource):
    #@jwt_required
    def get(self, type, state):
        if(state == 1):
            text = 'In Store'
        else:
            text = 'In Use'


        
        param = "'" + text + "'"
        
        engine = create_engine(settings['ASSETDB'],  pool_pre_ping=True, pool_size=20, max_overflow=5) 
        #engine = sqlalchemy.create_engine(settings['ASSETDB'],  pool_pre_ping=True)
        Session = scoped_session(sessionmaker(autocommit = False, bind=engine)) 
        s = Session()
        result = s.execute('select count(*), b.componentname from resources as a left join componentdefinition as b on (a.componentid = b.componentid)  left join resourcestate as d on (d.resourcestateid = a.resourcestateid) left join componenttype as f on (b.componenttypeid = f.componenttypeid) where d.displaystate = {} and (f.componenttypeid = {} ) group by b.componentname,d.displaystate,  f.componenttypename  order by count(*) desc'.format(param, type))
        query = json.dumps( [dict(ix) for ix in result] ) 

        s.close()
        #engine.close() 
        return {
                    "query": json.loads(query)
               }  



#class HistoryDashboard(Resource):
    #def get(self):
        
        #engine = create_engine(settings['ASSETDB'], pool_pre_ping=True )
        #Session = scoped_session(sessionmaker(autocommit = False, bind=engine)) 
        #s = Session()
        #r = s.execute('select f.resourcename,f.assettag, d.displaystate as "State", g.statedesc as "Prev" from (select a.resourcestateid,a.resourceid, b.displaystate, a.prevresourcestateid,a.starttime from resourcestatehistory as a inner join resourcestate as b on (a.resourcestateid = b.resourcestateid)) as d inner join resources as f on (d.resourceid = f.resourceid) inner join resourcestate as g on (d.prevresourcestateid = g.resourcestateid) order by d.starttime desc limit 10')
       # q = json.dumps( [dict(ix) for ix in r] ) 

        #return {
                    #"query": json.loads(q)
               #}  

       # s.close()
        #engine.close() 
class DashboardStatesTable(Resource):
    dahboardtable = {
        'datefrom': fields.Date(required = True),
        'dateto': fields.Date(required = True),
        'page': fields.Int(required = True),

    }
    #@jwt_required
    @use_args(dahboardtable)
    def get(self,args):
        datefrom_ = args.get('datefrom', None)
        dateto_ = args.get('dateto', None)
        page = args.get('page')
        
        validate_dates = (dateto_ - datefrom_)
        x =validate_dates.days
        if x <= 0:
            return {'message':'wrong_dates'}

        str_date_from =datefrom_.strftime("%Y-%m-%d")
        quote_str_date_from = "'"+str_date_from+"'"
        str_date_to = dateto_.strftime("%Y-%m-%d")
        quote_str_date_to = "'"+str_date_to+"'"


        engine = create_engine(settings['ASSETDB'],  pool_pre_ping=True, pool_size=20, max_overflow=5) 
        engine = sqlalchemy.create_engine(settings['ASSETDB'],  pool_pre_ping=True)
        Session = scoped_session(sessionmaker(autocommit = False, bind=engine)) 
        s = Session()

        result = s.execute('SELECT EXTRACT(EPOCH FROM TIMESTAMP WITH TIME ZONE {}) * 1000 as date'.format(quote_str_date_from))

        query = json.dumps( [dict(ix) for ix in result] )
        y = json.loads(query)
        timestamp_datefrom = y[0].get('date')
        #print(timestamp_datefrom) 

        result2 = s.execute('SELECT EXTRACT(EPOCH FROM TIMESTAMP WITH TIME ZONE {}) * 1000 as date'.format(quote_str_date_to))
        query2 = json.dumps( [dict(ix) for ix in result2] )
        y2 = json.loads(query2)
        timestamp_dateto = y2[0].get('date')
        #print(timestamp_dateto) 


        format_ = "'"+'DD/MM/YYYY'+"'"
        space_ = "'"+ ' '+ "'" 
        d =s.execute('SELECT F.RESOURCENAME,F.ASSETTAG, D.DISPLAYSTATE AS "STATE", G.STATEDESC AS "PREV", TO_CHAR(TO_TIMESTAMP(D.STARTTIME / 1000), {}) AS "DATE", K.FIRSTNAME || {} || K.LASTNAME AS "NAME" FROM (SELECT A.RESOURCESTATEID,A.RESOURCEID, B.DISPLAYSTATE, A.PREVRESOURCESTATEID,A.STARTTIME, A.statehistoryid FROM RESOURCESTATEHISTORY AS A  LEFT JOIN RESOURCESTATE AS B ON (A.RESOURCESTATEID = B.RESOURCESTATEID)) AS D LEFT JOIN RESOURCES AS F ON (D.RESOURCEID = F.RESOURCEID)  LEFT JOIN RESOURCESTATE AS G ON (D.PREVRESOURCESTATEID = G.RESOURCESTATEID) LEFT JOIN RESOURCEOWNER AS J ON(J.RESOURCEID = F.RESOURCEID) left join resourceownerhistory as l on(l.statehistoryid = d.statehistoryid) left JOIN SDUSER AS K ON(l.USERID = K.USERID) WHERE D.STARTTIME BETWEEN {} AND {}  ORDER BY D.STARTTIME DESC limit 10 offset {}'.format(format_, space_, timestamp_datefrom,timestamp_dateto, page))
        dquery = json.dumps( [dict(ix) for ix in d] )

        count = s.execute('SELECT count(*) FROM (SELECT A.RESOURCESTATEID,A.RESOURCEID, B.DISPLAYSTATE, A.PREVRESOURCESTATEID,A.STARTTIME, A.statehistoryid FROM RESOURCESTATEHISTORY AS A  LEFT JOIN RESOURCESTATE AS B ON (A.RESOURCESTATEID = B.RESOURCESTATEID)) AS D LEFT JOIN RESOURCES AS F ON (D.RESOURCEID = F.RESOURCEID)  LEFT JOIN RESOURCESTATE AS G ON (D.PREVRESOURCESTATEID = G.RESOURCESTATEID) LEFT JOIN RESOURCEOWNER AS J ON(J.RESOURCEID = F.RESOURCEID) left join resourceownerhistory as l on(l.statehistoryid = d.statehistoryid) left JOIN SDUSER AS K ON(l.USERID = K.USERID)  WHERE D.STARTTIME BETWEEN {} AND {}'.format(timestamp_datefrom,timestamp_dateto))
        
        c = json.dumps( [dict(ix) for ix in count] )
        c = json.loads(c)
        count_number = c[0].get('count')

        s.close()
        #engine.close()

        return {
                    "query": json.loads(dquery),
                    "meta": {
                        "count": count_number,
                        "cursor": page + 10,
                        "more": (page + 10) < count_number
                    }
               }  



class DashboardStatesSearchTable(Resource):
    dahboardSearchtableArgs = {
        'paramSearch': fields.String(required = True),
        'page': fields.Int(required = True),
    }

    #@jwt_required
    @use_args(dahboardSearchtableArgs)
    def get(self, args):
        paramSearch = args.get('paramSearch', None)
        paramSearch_ = "'" + paramSearch + "%'"
        page = args.get('page')

        
        format_ = "'"+'DD/MM/YYYY'+"'"
        space_ = "'"+ ' '+ "'" 

        engine = create_engine(settings['ASSETDB'],  pool_pre_ping=True, pool_size=20, max_overflow=5) 
        engine = sqlalchemy.create_engine(settings['ASSETDB'],  pool_pre_ping=True)
        Session = scoped_session(sessionmaker(autocommit = False, bind=engine)) 
        s = Session()
        
        d =s.execute('SELECT F.RESOURCENAME,F.ASSETTAG, D.DISPLAYSTATE AS "STATE", G.STATEDESC AS "PREV", TO_CHAR(TO_TIMESTAMP(D.STARTTIME / 1000), {}) AS "DATE", K.FIRSTNAME || {} || K.LASTNAME AS "NAME" FROM (SELECT A.RESOURCESTATEID,A.RESOURCEID, B.DISPLAYSTATE, A.PREVRESOURCESTATEID,A.STARTTIME, A.statehistoryid FROM RESOURCESTATEHISTORY AS A  LEFT JOIN RESOURCESTATE AS B ON (A.RESOURCESTATEID = B.RESOURCESTATEID)) AS D LEFT JOIN RESOURCES AS F ON (D.RESOURCEID = F.RESOURCEID)  LEFT JOIN RESOURCESTATE AS G ON (D.PREVRESOURCESTATEID = G.RESOURCESTATEID) LEFT JOIN RESOURCEOWNER AS J ON(J.RESOURCEID = F.RESOURCEID) left join resourceownerhistory as l on(l.statehistoryid = d.statehistoryid) left JOIN SDUSER AS K ON(l.USERID = K.USERID) WHERE F.ASSETTAG LIKE {} or  F.RESOURCENAME like {} or F.SERIALNO LIKE {} ORDER BY D.STARTTIME DESC LIMIT 10 offset {}'.format(format_, space_,paramSearch_,paramSearch_,paramSearch_ , page))
        dquery = json.dumps( [dict(ix) for ix in d] )

        count = s.execute('SELECT count(*) FROM (SELECT A.RESOURCESTATEID,A.RESOURCEID, B.DISPLAYSTATE, A.PREVRESOURCESTATEID,A.STARTTIME, A.statehistoryid FROM RESOURCESTATEHISTORY AS A  LEFT JOIN RESOURCESTATE AS B ON (A.RESOURCESTATEID = B.RESOURCESTATEID)) AS D LEFT JOIN RESOURCES AS F ON (D.RESOURCEID = F.RESOURCEID)  LEFT JOIN RESOURCESTATE AS G ON (D.PREVRESOURCESTATEID = G.RESOURCESTATEID) LEFT JOIN RESOURCEOWNER AS J ON(J.RESOURCEID = F.RESOURCEID) left join resourceownerhistory as l on(l.statehistoryid = d.statehistoryid) left JOIN SDUSER AS K ON(l.USERID = K.USERID)  WHERE F.ASSETTAG LIKE {} or  F.RESOURCENAME like {} or F.SERIALNO LIKE {}'.format(paramSearch_,paramSearch_,paramSearch_))
        c = json.dumps( [dict(ix) for ix in count] )
        c = json.loads(c)
        count_number = c[0].get('count')

        s.close()
        return {
            "query": json.loads(dquery),
            "meta": {
            "count": count_number,
            "cursor": page + 10,
            "more": (page + 10) < count_number
            }
        }  

class DashboardLifetime(Resource):
    #@jwt_required
    def get(self):
        engine = create_engine(settings['ASSETDB'],  pool_pre_ping=True, pool_size=20, max_overflow=5) 
        engine = sqlalchemy.create_engine(settings['ASSETDB'],  pool_pre_ping=True)
        Session = scoped_session(sessionmaker(autocommit = False, bind=engine)) 
        s = Session()
        #in use workstation lifetime
        yy = 'yy'
        yy_ = "'" + yy + "'"

        mm = 'mm'
        mm_ = "'" + mm + "'"

        state = 'Workstation'
        state_ = "'" + state + "'"

        state2 = 'In Store'
        state2_ = "'"+ state2 +"'"

        d =s.execute('select  count(*)  AS "Lifetime_Count" from resources as a inner join componentdefinition as b on(a.componentid = b.componentid) inner join componenttype as c on (b.componenttypeid = c.componenttypeid) where ((cast( To_char(Age(To_timestamp(acquisitiondate / 1000)),{}) as int)*12    + cast(To_char(Age(To_timestamp(acquisitiondate / 1000)),{})  as int) ) > 40) and (a.resourcestateid = 2 and c.componenttypename = {});'.format(yy_, mm_, state_))
        dquery = json.dumps( [dict(ix) for ix in d] )
        dqueryjson = json.loads(dquery)
        countInUse = dqueryjson[0].get('Lifetime_Count')

        d2 =s.execute('select  count(*)  AS "Lifetime_Count" from resources as a inner join componentdefinition as b on(a.componentid = b.componentid) inner join componenttype as c on (b.componenttypeid = c.componenttypeid) where ((cast( To_char(Age(To_timestamp(acquisitiondate / 1000)),{}) as int)*12    + cast(To_char(Age(To_timestamp(acquisitiondate / 1000)),{})  as int) ) > 40) and (a.resourcestateid = 1 and c.componenttypename = {});'.format(yy_, mm_, state_))
        dquery2 = json.dumps( [dict(ix) for ix in d2] )
        dquery2json = json.loads(dquery2)
        countInStore = dquery2json[0].get('Lifetime_Count')

        s.close()
        return{
            "query_in_use": countInUse,
            "query_in_store": countInStore
        }


class DashboardLifetimeDetail(Resource):
    dashboardLifeTimetDetaiTable = {
        'less': fields.Int(required = True),
        'page': fields.Int(required = True),
        'state': fields.Int(required = True),
        'number': fields.Int(required = True),
    }
    #@jwt_required
    @use_args(dashboardLifeTimetDetaiTable)
    def get(self, args):

        less = args.get('less', None)
        page = args.get('page', None)
        states = args.get('state', None)
        numberSearch_ = args.get('number', None)

        less_ = ''
        state = ''
        inUse = ''
        inUse_ = ''
        inStore = ''
        inStore_ = ''
        

        if(less == 1):
            less_ = '<'


        if(less == 2):
            less_ = '>'

        #if(less == 1):
            #less_ = '>'
        
        #if(less == 2):
            #less_ = '<'

        #print(less_)
        yy = 'yy'
        yy_ = "'" + yy + "'"

        mm = 'mm'
        mm_ = "'" + mm + "'"

        DD = 'DD/MM/YYYY'
        DD_ = "'"+DD+"'"

        if(states == 1):
            inUse = 'In Store'
            inUse_ = "'"+inUse+"'"
            inStore = 'In Store'
            inStore_ = "'"+inStore+"'"


        if(states == 2):
            inUse = 'In Use'
            inUse_ = "'"+inUse+"'"
            inStore = 'In Use'
            inStore_ = "'"+inStore+"'"
        
        if(states == 3):
            inUse = 'In Use'
            inUse_ = "'"+inUse+"'"
            inStore = 'In Store'
            inStore_ = "'"+inStore+"'"


        engine = create_engine(settings['ASSETDB'],  pool_pre_ping=True, pool_size=20, max_overflow=5) 
        engine = sqlalchemy.create_engine(settings['ASSETDB'],  pool_pre_ping=True)
        Session = scoped_session(sessionmaker(autocommit = False, bind=engine)) 
        s = Session()

        d =s.execute('SELECT first_name AS "User",model AS "Model",displaystate AS "State",assettag AS "Product_Code", servicetag  AS "Service_Tag",  To_char(To_timestamp(acquisitiondate / 1000), {}) AS "Acquisition_Date", To_char(To_timestamp(warrantyexpiry / 1000), {})  AS "Warranty_Expiry", (cast( To_char(Age(To_timestamp(acquisitiondate / 1000)),{}) as int)*12    + cast(To_char(Age(To_timestamp(acquisitiondate / 1000)),{})  as int) )  AS "Lifetime" FROM   aaauser RIGHT JOIN sduser ON aaauser.user_id = sduser.userid RIGHT JOIN userdepartment ON userdepartment.userid = sduser.userid  RIGHT JOIN departmentdefinition ON departmentdefinition.deptid = userdepartment.deptid RIGHT JOIN resourceowner  ON resourceowner.userid = sduser.userid  RIGHT JOIN resources ON resources.resourceid = resourceowner.resourceid RIGHT JOIN systeminfo ON systeminfo.workstationid = resources.resourceid  RIGHT JOIN resourcestate ON resourcestate.resourcestateid = resources.resourcestateid  LEFT JOIN resourcecost ON resourcecost.resourceid = resources.resourceid WHERE  ( (resourcestate.displaystate = {} or resourcestate.displaystate = {}) and ((cast( To_char(Age(To_timestamp(acquisitiondate / 1000)),{}) as int)*12    + cast(To_char(Age(To_timestamp(acquisitiondate / 1000)),{})  as int) ) {} {}))   order by "Lifetime" LIMIT  10 offset {}'.format(DD_,DD_, yy_, mm_,inUse_, inStore_,yy_,mm_,less_,numberSearch_,page))
        dquery = json.dumps( [dict(ix) for ix in d] )

        c =s.execute('SELECT count(*)  AS "count" FROM   aaauser RIGHT JOIN sduser ON aaauser.user_id = sduser.userid RIGHT JOIN userdepartment ON userdepartment.userid = sduser.userid  RIGHT JOIN departmentdefinition ON departmentdefinition.deptid = userdepartment.deptid RIGHT JOIN resourceowner  ON resourceowner.userid = sduser.userid  RIGHT JOIN resources ON resources.resourceid = resourceowner.resourceid RIGHT JOIN systeminfo ON systeminfo.workstationid = resources.resourceid  RIGHT JOIN resourcestate ON resourcestate.resourcestateid = resources.resourcestateid  LEFT JOIN resourcecost ON resourcecost.resourceid = resources.resourceid WHERE  ( (resourcestate.displaystate = {} or resourcestate.displaystate = {}) and ((cast( To_char(Age(To_timestamp(acquisitiondate / 1000)),{}) as int)*12    + cast(To_char(Age(To_timestamp(acquisitiondate / 1000)),{})  as int) ) {} {})) '.format(inUse_, inStore_,yy_,mm_,less_,numberSearch_))
        count = json.dumps( [dict(ix) for ix in c] )
        count_ = json.loads(count)
        number = count_[0].get('count')
        
        s.close()

        return {
            "query": json.loads(dquery),
            "count": number,
            "cursor": page + 10,
            "more": (page + 10) < number
        }


class DashboardSearchLifetimeDetail(Resource):
    dashboardsearchLifeTimetDetaiTable = {
        'text': fields.String(required = True),
        'page': fields.Int(required = True),
    }
    @use_args(dashboardsearchLifeTimetDetaiTable)
    def get(self, args):
        text = args.get('text', None)
        page = args.get('page', None)
        text_ = "'" + text + "%'"
        state = 'In Use'
        state_ = "'" + state + "'"

        state2 = 'In Store'
        state2_ = "'"+ state2 +"'"
        
        yy = 'yy'
        yy_ = "'" + yy + "'"

        mm = 'mm'
        mm_ = "'" + mm + "'"

        DD = 'DD/MM/YYYY'
        DD_ = "'"+DD+"'"

        print(text_)
        print(page)

        engine = create_engine(settings['ASSETDB'],  pool_pre_ping=True, pool_size=20, max_overflow=5) 
        engine = sqlalchemy.create_engine(settings['ASSETDB'],  pool_pre_ping=True)
        Session = scoped_session(sessionmaker(autocommit = False, bind=engine)) 
        s = Session()

        d =s.execute('SELECT first_name AS "User",model AS "Model",displaystate AS "State",assettag AS "Product_Code", servicetag  AS "Service_Tag",  To_char(To_timestamp(acquisitiondate / 1000), {}) AS "Acquisition_Date", To_char(To_timestamp(warrantyexpiry / 1000), {})  AS "Warranty_Expiry", (cast( To_char(Age(To_timestamp(acquisitiondate / 1000)),{}) as int)*12    + cast(To_char(Age(To_timestamp(acquisitiondate / 1000)),{})  as int) )  AS "Lifetime" FROM   aaauser RIGHT JOIN sduser ON aaauser.user_id = sduser.userid RIGHT JOIN userdepartment ON userdepartment.userid = sduser.userid  RIGHT JOIN departmentdefinition ON departmentdefinition.deptid = userdepartment.deptid RIGHT JOIN resourceowner  ON resourceowner.userid = sduser.userid  RIGHT JOIN resources ON resources.resourceid = resourceowner.resourceid RIGHT JOIN systeminfo ON systeminfo.workstationid = resources.resourceid  RIGHT JOIN resourcestate ON resourcestate.resourcestateid = resources.resourcestateid  LEFT JOIN resourcecost ON resourcecost.resourceid = resources.resourceid WHERE  ( (resourcestate.displaystate = {} or resourcestate.displaystate = {}) and (model like {} or first_name like {} or assettag like {} or servicetag like {}) )   order by "Lifetime" LIMIT  10 offset {}'.format(DD_,DD_, yy_, mm_,state_, state2_,text_,text_,text_,text_,page))
        dquery = json.dumps( [dict(ix) for ix in d] )

        c =s.execute('SELECT count(*) FROM   aaauser RIGHT JOIN sduser ON aaauser.user_id = sduser.userid RIGHT JOIN userdepartment ON userdepartment.userid = sduser.userid  RIGHT JOIN departmentdefinition ON departmentdefinition.deptid = userdepartment.deptid RIGHT JOIN resourceowner  ON resourceowner.userid = sduser.userid  RIGHT JOIN resources ON resources.resourceid = resourceowner.resourceid RIGHT JOIN systeminfo ON systeminfo.workstationid = resources.resourceid  RIGHT JOIN resourcestate ON resourcestate.resourcestateid = resources.resourcestateid  LEFT JOIN resourcecost ON resourcecost.resourceid = resources.resourceid WHERE  ( (resourcestate.displaystate = {} or resourcestate.displaystate = {}) and (model like {} or first_name like {} or assettag like {} or servicetag like {}) ) '.format(state_, state2_,text_,text_,text_,text_))
        cc = json.dumps( [dict(ix) for ix in c] )
        count_ = json.loads(cc)
        number = count_[0].get('count')

        s.close()
        return {
            'query': json.loads(dquery),
            "count": number,
            "cursor": page + 10,
            "more": (page + 10) < number
        }

class DashboardTest(Resource):
    @jwt_required
    def get(self):
        return {'message': 'Done'}


api.add_resource(BasicDashboard, '/api/v1/dashboard')
#api.add_resource(HistoryDashboard, '/api/v1/dashboardhistory')
api.add_resource(DashboardModel, '/api/v1/dashboarddetail/<int:type>/<int:state>')
api.add_resource(DashboardStatesTable, '/api/v1/dashboardstatetable')
api.add_resource(DashboardStatesSearchTable, '/api/v1/dashboardseachproductstate')
api.add_resource(DashboardLifetime, '/api/v1/dashboardlifetime')
api.add_resource(DashboardLifetimeDetail, '/api/v1/dashboardlifetimedetail')
api.add_resource(DashboardSearchLifetimeDetail, '/api/v1/dashboardsearchlifetimedetail')
api.add_resource(DashboardTest, '/api/v1/dashtest')
