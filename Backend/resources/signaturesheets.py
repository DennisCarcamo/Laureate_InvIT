from flask import Flask, request
import requests
import datetime
import sqlalchemy
import json
import json
#import psycopg2
from webargs import fields
from flask_restful import Resource, Api, reqparse
from app import settings, app, api, ma
from webargs import fields
from sqlalchemy import or_
from webargs.flaskparser import use_args
from sqlalchemy.orm import sessionmaker, scoped_session
from backend.models.signature import SignatureSheetModel
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
        """Return all the signature sheets in the db"""
        page = 1
        per_page = 10
        sheet = SignatureSheetModel.get_last_date()
        records = SignatureSheetModel.query.order_by(SignatureSheetModel.updated.desc()).limit(per_page).offset((page - 1) * per_page)
        if records:
            return{ 'SignatureSheets':  list(map(lambda x: x.json(),records))}
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
        if updated:
            sheet = SignatureSheetModel(updated, id_type, id_employee, first_name, last_name, email, 1,1, "504-xxxx-xxxx")
        else:
            sheet = SignatureSheetModel(date, id_type, id_employee, first_name, last_name, email, 1,1, "504-xxxx-xxxx")

        try: 
            sheet.insert()
            return{'message': 'Signature Sheet correctly inserted'}
        except:
            return {'message': "something wrong probably item already exist"}
        

class SignatureSheet(Resource):
    search_args = {
        'page': fields.Int(required = True),
        'text': fields.Str(required = True),
        'limit': fields.Int(required = True)
    }

    @use_args(search_args)
    def get(self, args):
        text = args.get('text', None)
        page = args.get('page', None)
        limit = args.get('limit', None)
        param =   text + "%"

        _page = page 
        per_page = limit
        records = SignatureSheetModel.query.filter(or_(SignatureSheetModel.email.like(param),  SignatureSheetModel.last_name.like(param), SignatureSheetModel.id_employee.like(param))).order_by(SignatureSheetModel.updated.desc()).limit(per_page).offset((_page - 1) * per_page).all()
        count = SignatureSheetModel.query.filter(or_(SignatureSheetModel.email.like(param),  SignatureSheetModel.last_name.like(param), SignatureSheetModel.id_employee.like(param))).count()
        if records:
            cursor = (page * 10) + 1
            return{ 'SignatureSheets':  list(map(lambda x: x.json(),records)),
                    'meta':{
                        'count': count,
                        "cursor": cursor,
                        "more": cursor <= count
                    }        
                }
        
        return{'message': 'Nothing found'}


        #sheet = SignatureSheetModel.find_by_id(id)

        #if sheet:
            #return sheet.json()

        #return{'message': 'Nothing found'}

api.add_resource(SignatureSheets, '/api/v1/signaturesheets')
api.add_resource(SignatureSheet, '/api/v1/signaturesheet')