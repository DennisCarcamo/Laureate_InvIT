
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


class Dashboardservers(Resource):
    def get(self):
        engine = create_engine(settings['ASSETDB'],  pool_pre_ping=True, pool_size=20, max_overflow=5) 
        engine = sqlalchemy.create_engine(settings['ASSETDB'],  pool_pre_ping=True)
        Session = scoped_session(sessionmaker(autocommit = False, bind=engine)) 
        s = Session()

        d =s.execute('SELECT count(1), C.DISPLAYSTATE FROM RESOURCES AS A INNER JOIN COMPONENTDEFINITION AS B ON (A.COMPONENTID = B.COMPONENTID) INNER JOIN RESOURCESTATE AS C ON (A.RESOURCESTATEID = C.RESOURCESTATEID) WHERE B.COMPONENTTYPEID = 10 group by C.DISPLAYSTATE')
        dquery = json.dumps( [dict(ix) for ix in d] )
        dquery2 = json.loads(dquery)
        #print(dquery2)
        #server_in_use = dquery2[0]
        s.close()
        return {'message': dquery2}



api.add_resource(BasicDashboard, '/api/v1/dashboard')
api.add_resource(DashboardModel, '/api/v1/dashboarddetail/<int:type>/<int:state>')
api.add_resource(Dashboardservers, '/api/v1/dashboradserverscount')
