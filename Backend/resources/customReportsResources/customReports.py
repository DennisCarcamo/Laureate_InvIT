from flask import Flask, request
from flask_restful import Resource, Api, reqparse
from flask_jwt import JWT, jwt_required, current_identity
from backend.models.signature import TypeModel, SignatureSheetModel, SignatureProductsModel
import requests
import datetime
import sqlalchemy
import json
from sqlalchemy.orm import sessionmaker, scoped_session
import json
from webargs import fields
from webargs.flaskparser import use_args
from app import settings, app, api
from marshmallow import fields

class CustomReports(Resource):
    #data we expect to receive
    user_args = {
        'email': fields.Str(required=False)
    }

    #extracting the data
    @use_args(user_args)
    def get(self,args):
        email = args.get('email',None)
        
        #connecting to the database
        engine = sqlalchemy.create_engine(settings['ASSETDB'],pool_pre_ping=True, pool_size=20, max_overflow=5)
        Session = scoped_session(sessionmaker(autocommit=False, bind=engine))

        #sending the query to the database
        s = Session()
        result = s.execute('SELECT jobtitle FROM public.sduser')
        #Object to json
        query = json.dumps( [dict(ix) for ix in result] )
        #json to string
        jsonVal = json.loads(query)
        #extract all the possible values for jobtitle key into the json
        jobtittles =  list(map(lambda datum: datum['jobtitle'], jsonVal))
        #delete duplicated values from the array
        newJobttitles = list(set(jobtittles))
        print (newJobttitles)

        #returning the result
        return newJobttitles
        
        #close database conection
        s.close()
        engine.close()

class DennisTest(Resource):

    dennis_use_args = {
        'nombre': fields.Str(required = True),
        'edad': fields.Int(required = True)
    }

    @use_args(dennis_use_args)
    def get(self, args):
        nombre =  args.get('nombre', None)
        edad = int(args.get('edad', None))
        return  SignatureSheetModel.find_by_id(1); 
       
        
        

        # page = 1
        # per_page = 10
        # sheet = SignatureSheetModel.get_last_date()
        # records = SignatureSheetModel.query.order_by(SignatureSheetModel.id_signature.desc()).limit(per_page).offset((page - 1) * per_page)
        # if records:
        #     return{ 'SignatureSheets':  list(map(lambda x: x.json(),records))}
        # return{'message': 'Nothing found'}

api.add_resource(CustomReports,'/api/v1/customreports')
api.add_resource(DennisTest,'/api/v1/dennistests')