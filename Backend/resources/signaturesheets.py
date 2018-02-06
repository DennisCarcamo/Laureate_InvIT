from flask import Flask, request
import requests
import datetime
import sqlalchemy
import json
import json
import psycopg2
from webargs import fields
from flask_restful import Resource, Api, reqparse
from app import settings, app, api, ma
from webargs import fields
from webargs.flaskparser import use_args
from sqlalchemy.orm import sessionmaker, scoped_session
from models.signature import SignatureSheetModel
from webargs.flaskparser import use_args
from marshmallow import fields


class SignatureSheets(Resource):
    insert_sheet = {
        'updated': fields.Date(required = False),
        'id_type': fields.Int(required = True),
        'id_employee': fields.Str(required=True),
        'first_name': fields.Str(required=True),
        'last_name': fields.Str(required= True),
        'email': fields.Str(required= True),

    }

    def get(self):
        sheet = SignatureSheetModel.query.all()
        if sheet:
            return{ 'SignatureSheets':  list(map(lambda x: x.json(), SignatureSheetModel.query.all()))}
        return{'message': 'Nothing found'}

    @use_args(insert_sheet)
    def post(self, args):
        updated = args.get('updated', None)
        id_type = args.get('id_type', None)
        id_employee = args.get('id_employee', None)
        first_name = args.get('first_name', None)
        last_name = args.get('last_name', None)
        email = args.get('email', None)
        date = datetime.datetime.now()
        #data = SignatureSheets.parser.parse_args()
        sheet = SignatureSheetModel(date, id_type, id_employee, first_name, last_name, email, 1,1)

        try: 
            sheet.insert()
            return{'message': 'Signature Sheet correctly inserted'}
        except:
            return {'messege': "something wrong probably item already exist"}
        

class SignatureSheet(Resource):
   
    def get(self, id):
        sheet = SignatureSheetModel.find_by_id(id)

        if sheet:
            return sheet.json()

        return{'message': 'Nothing found'}

api.add_resource(SignatureSheets, '/api/v1/signaturesheets')
api.add_resource(SignatureSheet, '/api/v1/signaturesheet/<string:id>')