
from flask import Flask, request
#from flask_sqlalchemy import SQLAlchemy
import requests
import datetime
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


class BasicDashboard(Resource):
    def get(self):
        
        engine = create_engine(settings['ASSETDB'], pool_pre_ping=True )
        Session = scoped_session(sessionmaker(autocommit = False, bind=engine)) 
        s = Session()
        result = s.execute('select count(*), c.componenttypename,d.displaystate from resources as a left join componentdefinition as b on (a.componentid = b.componentid) left join componenttype as c on (b.componenttypeid = c.componenttypeid) left join resourcestate as d on (d.resourcestateid = a.resourcestateid) where c.componenttypeid = 1 or  c.componenttypeid = 311 or  c.componenttypeid = 304 or  c.componenttypeid = 16 or  c.componenttypeid = 7 or  c.componenttypeid = 305 or  c.componenttypeid = 318 group by c.componenttypename,d.displaystate order by c.componenttypename')
        query = json.dumps( [dict(ix) for ix in result] ) 

        r = s.execute('select f.resourcename,f.assettag, d.displaystate as "State", g.statedesc as "Prev" from (select a.resourcestateid,a.resourceid, b.displaystate, a.prevresourcestateid,a.starttime from resourcestatehistory as a inner join resourcestate as b on (a.resourcestateid = b.resourcestateid)) as d inner join resources as f on (d.resourceid = f.resourceid) inner join resourcestate as g on (d.prevresourcestateid = g.resourcestateid) order by d.starttime desc limit 7')
        q = json.dumps( [dict(ix) for ix in r] )

        return {
                    'query': json.loads(query),
                    'History': json.loads(q) 
               }  

        s.close()
        engine.close() 


class DashboardModel(Resource):
    def get(self, type):
        text = 'In Store'
        param = "'" + text + "'"
        
        engine = create_engine(settings['ASSETDB'],  pool_pre_ping=True) 
        #engine = sqlalchemy.create_engine(settings['ASSETDB'],  pool_pre_ping=True)
        Session = scoped_session(sessionmaker(autocommit = False, bind=engine)) 
        s = Session()
        result = s.execute('select count(*), b.componentname from resources as a left join componentdefinition as b on (a.componentid = b.componentid)  left join resourcestate as d on (d.resourcestateid = a.resourcestateid) left join componenttype as f on (b.componenttypeid = f.componenttypeid) where d.displaystate = {} and (f.componenttypeid = {} ) group by b.componentname,d.displaystate,  f.componenttypename  order by b.componentname'.format(param, type))
        query = json.dumps( [dict(ix) for ix in result] ) 

        return {
                    "query": json.loads(query)
               }  

        s.close()
        engine.close() 


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


api.add_resource(BasicDashboard, '/api/v1/dashboard')
#api.add_resource(HistoryDashboard, '/api/v1/dashboardhistory')
api.add_resource(DashboardModel, '/api/v1/dashboarddetail/<int:type>')