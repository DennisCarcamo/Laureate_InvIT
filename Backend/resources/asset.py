
from flask import Flask, request
from flask_restful import Resource, Api, reqparse
from flask_jwt import JWT, jwt_required, current_identity
#from flask_sqlalchemy import SQLAlchemy
#from models.Item import ItemModel
from backend.models.signature import TypeModel, SignatureSheetModel, SignatureProductsModel
import requests
import datetime
import sqlalchemy
import json
from sqlalchemy.orm import sessionmaker, scoped_session
import json
#import psycopg2
from webargs import fields
from webargs.flaskparser import use_args
from app import settings, app, api
from marshmallow import fields

class CI(Resource):
    def post(self,name,page):
        #------------------------------- NO BORRAR FUNCION PARA OBTENER EL JSESSIONID ------------------------------------------------
        #s = requests.Session()
        #s.get('http://172.20.33.55:8080/api/cmdb/ci/list/Workstation')
        #array = []
        #array = s.cookies.items()
        #print(array[0])
        #-----------------------------------------------------------------------------------------------------------------------------
        #requests is a python module used for Posting HTTP requests.
        #module can be downloaded from https://pypi.python.org/pypi/requests
        #Getting the input xml file as argument and post the xml contents in the INPUT_DATA attribute
       
        #fileName = sys.argv[1]
    
        url = 'http://172.20.33.55:8080/api/cmdb/ci/list/{}/{}'.format(name,page)
        xmlcontent = ""
        args = {'OPERATION_NAME':'read','TECHNICIAN_KEY':'E5A0E2B4-A191-4A40-8000-6535DF4EE8F2'}
        response = requests.post(url,params=args)
        return {'response': response.json()}  
       
        #return {'jsession':cookie_params }
       
        #-------------------------------- GET BY THE POST METHOD USING THE URL(BASH) NEEDS THE JSESSION ON THE COOKIE PARAMS -----------------
        #url = 'http://172.20.33.55:8080/api/cmdb/ci/list/Workstation'
        #headers = {
        #    'Pragma':'no-cache',
        #    'Accept-Encoding':'gzip,deflate',
        #    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        #    'Cookie': 'Components=hide; virtual=hide; viewlinks=hide; Softwarediv=hide; barcodeDiv=hide; itassetslinks=hide; nonitassetslinks=show; swHomeDefaultMfg=-1; swHomeDefaultSite=-1; swHomeGraph=sdp.inventory.home.softwaremetering.rarely; %5Bobject%20HTMLTableCellElement%5D=hide; %5Bobject%20HTMLTableElement%5D=hide; %5Bobject%20HTMLTableRowElement%5D=hide; %5Bobject%20HTMLDivElement%5D=hide; JSESSIONID=49EE429C0A3992A3117306377A110484; JSESSIONIDSSO=D835D6ED9D54CBB319E606004863587B',
        #    'Connection':'keep-alive'
        #}
        #r = requests.post(url, headers = headers)
        #return{'message': r.json()} 
    
    def get(self,name,page):
        url = 'http://172.20.33.55:8080/api/cmdb/ci/count/{}'.format(name)
        xmlcontent = ""
        args = {'OPERATION_NAME':'read','TECHNICIAN_KEY':'E5A0E2B4-A191-4A40-8000-6535DF4EE8F2'}
        response = requests.post(url,params=args)
        return {'response': response.json()}   


class test(Resource):
    def get(self):
        return{'url': 'url'}


class Dashboard(Resource):
    def get(self):
        
        engine = sqlalchemy.create_engine(settings['ASSETDB'], pool_pre_ping=True, pool_size=20, max_overflow=5)
        Session = scoped_session(sessionmaker(autocommit = False, bind=engine)) 
        s = Session()
        result = s.execute('select count(*), c.componenttypename,d.displaystate from resources as a left join componentdefinition as b on (a.componentid = b.componentid) left join componenttype as c on (b.componenttypeid = c.componenttypeid) left join resourcestate as d on (d.resourcestateid = a.resourcestateid) group by c.componenttypename,d.displaystate')
        query = json.dumps( [dict(ix) for ix in result] ) 

        return {
                    "query": json.loads(query)
               }  

        s.close()
        engine.close() 

api.add_resource(Dashboard, '/api/v1/dashboard')