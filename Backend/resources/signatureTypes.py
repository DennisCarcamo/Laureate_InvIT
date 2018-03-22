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
from webargs.flaskparser import use_args
from sqlalchemy.orm import sessionmaker, scoped_session
from backend.models.signature import TypeModel
from webargs.flaskparser import use_args
from marshmallow import fields



class FindType(Resource):
    def get(self, id):
        tipo = TypeModel.find_by_id(id)

        if tipo:
            return tipo.json()

        return {'message': 'Not Type Found invit'}

class InvitTypes(Resource):
    type_args = {
        'name': fields.Str(required = True),
        'address': fields.Str(required = True),
        'phone': fields.Str(required = True),
        'terms': fields.Str(required = True)
    }

    #parser.add_argument('enable', type=in)
    #cuidado con el parse es case sensitive, al enviar el json desde el postman o desde el front end enviar bien los argumentos

    def get(self):
        tipo = TypeModel.query.all()
        if tipo:
            return{ 'Types':  list(map(lambda x: x.json(), TypeModel.query.all()))}
        
        return {'message': 'Nothing found invit'}


    @use_args(type_args)
    def post(self, args):
        #validar que el id no exista. no olvidalo el id es serial.
        name = args.get('name', None)
        address = args.get('address', None)
        phone = args.get('phone', None)
        terms = args.get('terms', None)

        tipo = TypeModel(name, address, phone, terms, 1)
        try:
            tipo.insert()
            return {'message': 'Item correctly inserted'}
        except:
            return{'messege': "something wrong probably item already exist"}


api.add_resource(FindType, '/api/v1/type/<int:id>')
api.add_resource(InvitTypes, '/api/v1/types')