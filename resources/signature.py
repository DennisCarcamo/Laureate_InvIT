from flask import Flask, request
from flask_restful import Resource, Api, reqparse
from flask_jwt import JWT, jwt_required, current_identity
#from flask_sqlalchemy import SQLAlchemy
#from models.Item import ItemModel
from models.signature import TypeModel, SignatureSheetModel, SignatureProductsModel
import requests

class Type(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('name')
    parser.add_argument('address')
    parser.add_argument('phone')
    parser.add_argument('terms')
    #parser.add_argument('image')
    
    def get(self, id):
        tipo = TypeModel.find_by_id(id)

        if tipo:
            return tipo.json()

        return {'message': 'Not Type Found'}
      

class Types(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('name')
    parser.add_argument('address')
    parser.add_argument('phone')
    parser.add_argument('terms')
    #cuidado con el parse es case sensitive, al enviar el json desde el postman o desde el front end enviar bien los argumentos

    def get(self):
        tipo = TypeModel.query.all()
        if tipo:
            return{ 'Types':  list(map(lambda x: x.json(), TypeModel.query.all()))}
        
        return {'message': 'Nothing found'}

    def post(self ):
        #validar que el id no exista. no olvidalo el id es serial.
        data = Type.parser.parse_args()
        tipo = TypeModel(data['name'], data['address'], data['phone'], data['terms'])

        try:
            tipo.insert()
            return {'message': 'Type correctly Inserted'}
        except:
            return{'messege': "something wrong probably item already exist"}

class SignatureSheets(Resource):
    def get(self):
        sheet = SignatureSheetModel.query.all()
        if sheet:
            return{ 'Signature Sheets':  list(map(lambda x: x.json(), SignatureSheetModel.query.all()))}
        return{'message': 'Nothing found'}