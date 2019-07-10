
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




api.add_resource(DashboardLifetime, '/api/v1/dashboardlifetime')
api.add_resource(DashboardLifetimeDetail, '/api/v1/dashboardlifetimedetail')
api.add_resource(DashboardSearchLifetimeDetail, '/api/v1/dashboardsearchlifetimedetail')