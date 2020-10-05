
from flask import Flask, request
#from flask_sqlalchemy import SQLAlchemy
import requests
from datetime import date
import time
import os
import requests, base64
import subprocess
import sqlalchemy
import json
import json
import time
import atexit
import mandrill
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
from sqlalchemy.dialects.mssql import pymssql
from apscheduler.schedulers.background import BackgroundScheduler


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

class crossCheck(Resource):
    def get(self):
        #connectionString="Data Source=172.20.33.49;Initial Catalog=CRSCDB;User ID=elpro;Password=Laureate123;MultipleActiveResultSets=True"
        engine = create_engine("mssql+pymssql://elpro:Laureate123@172.20.33.49/CRSCDB",  pool_pre_ping=True, pool_size=20, max_overflow=5)
        Session = scoped_session(sessionmaker(autocommit = False, bind=engine)) 
        s = Session()

        d =s.execute('select top 1 DATEDIFF(day,CheckTime, SYSDATETIME() ) as diff from Checkinout where Sensorid != 99 order by CheckTime desc;')
        dquery = json.dumps( [dict(ix) for ix in d] )
        dquery2 = json.loads(dquery)
        s.close()
        return {'message': dquery2}


def print_date_time():
    print(time.strftime("%A, %d. %B %Y %I:%M:%S %p"))

def print_date_time2():
    print('Baia Baia')

scheduler = BackgroundScheduler()
scheduler.add_job(func=print_date_time, trigger="interval", seconds=3600)
scheduler.start()

# Shut down the scheduler when exiting the app
atexit.register(lambda: scheduler.shutdown())

#######################################################################################################
scheduler = BackgroundScheduler()
scheduler.add_job(func=print_date_time2, trigger="interval", seconds=36000)
scheduler.start()

# Shut down the scheduler when exiting the app
atexit.register(lambda: scheduler.shutdown())


class Test(Resource):
    def get(self):
        mandrill_client = mandrill.Mandrill('j3VdGCRj9OsJiY5LZQlT5g')
        message = {
        'bcc_address': 'message.bcc_address@example.com',
        'from_email': 'no-reply@laureate.net',
        'from_name': 'Crosscheck Alert',
        'global_merge_vars': [{'content': 'merge1 content', 'name': 'merge1'}],
        'headers': {'Reply-To': 'no-reply@laureate.net Crosscheck Flush Alert!!'},
        'html': '<p>The CROSSCHECK flushing seen to be outdated and needs attention.</p>',
        'merge_language': 'mailchimp',
        'merge_vars': [{'rcpt': 'julio.zuniga@laureate.net',
                        'vars': [{'content': 'merge2 content', 'name': 'merge2'}]}],
        'metadata': {'website': 'www.example.com'},
            'preserve_recipients': None,
        'recipient_metadata': [{'rcpt': 'julio.zuniga@laureate.net',
                                'values': {'user_id': 123456}}],
        'return_path_domain': None,
        'signing_domain': None,
        'subaccount': 'Invit System - IT Honduras Site Service',
        'subject': 'Crosscheck Alert',
        'tags': ['password-resets'],
        'text': 'Example text content',
        'to': [{'email': 'julio.zuniga@laureate.net',
                'name': 'Julio',
                'type': 'to'}]}
        #result = mandrill_client.messages.send(message=message, async=False, ip_pool='Main Pool')
        result = "Hello mother"
        print(result)

        return result



api.add_resource(BasicDashboard, '/api/v1/dashboard')
api.add_resource(DashboardModel, '/api/v1/dashboarddetail/<int:type>/<int:state>')
api.add_resource(Dashboardservers, '/api/v1/dashboradserverscount')
api.add_resource(Test, '/api/v1/dashboradtest')
api.add_resource(crossCheck,'/api/v1/dashboard-crosscheck')
