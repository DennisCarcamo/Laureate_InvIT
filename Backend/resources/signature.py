from flask import Flask, request
from flask_restful import Resource, Api, reqparse
from flask_jwt import JWT, jwt_required, current_identity
#from flask_sqlalchemy import SQLAlchemy
#from models.Item import ItemModel
from models.signature import TypeModel, SignatureSheetModel, SignatureProductsModel, ImageModel
import requests
import datetime

class Type(Resource):
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
    #parser.add_argument('enable', type=in)
    #cuidado con el parse es case sensitive, al enviar el json desde el postman o desde el front end enviar bien los argumentos

    def get(self):
        tipo = TypeModel.query.all()
        if tipo:
            return{ 'Types':  list(map(lambda x: x.json(), TypeModel.query.all()))}
        
        return {'message': 'Nothing found'}

    def post(self):
        #validar que el id no exista. no olvidalo el id es serial.
        data = Types.parser.parse_args()
        tipo = TypeModel(data['name'], data['address'], data['phone'], data['terms'], 1)
        try:
            tipo.insert()
            return {'message': 'Item correctly inserted'}
        except:
            return{'messege': "something wrong probably item already exist"}

class SignatureSheets(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('id_signature')
    parser.add_argument('id_type')
    parser.add_argument('id_employee')
    parser.add_argument('first_name')
    parser.add_argument('last_name')

    def get(self):
        sheet = SignatureSheetModel.query.all()
        if sheet:
            return{ 'SignatureSheets':  list(map(lambda x: x.json(), SignatureSheetModel.query.all()))}
        return{'message': 'Nothing found'}

    def post(self):
        date = datetime.datetime.now()
        data = SignatureSheets.parser.parse_args()
        sheet = SignatureSheetModel(date, data['id_type'], data['id_employee'], date['first_name'], data['last_name'], 1,1)

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


  
class SignatureProducts(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('id_signature')
    parser.add_argument('id_product')

    def get(self):
        sheetproduct = SignatureProductsModel.query.all()
        if sheetproduct:
            return {'sheetproducts': list(map(lambda x: x.json(), SignatureProductsModel.query.all())) } 
        return{'message': 'Nothing found'}  

    def post(self):
        data = SignatureProducts.parser.parse_args()
        sp = SignatureProductsModel(data['id_signature'], data['id_product'])
        
        try:
            sp.insert()
            return {'message': 'Row correctly inserted'}
        except:
            return{'message': 'Row could not be inserted'} 

class Signatureproduct(Resource):
    #parser = reqparse.RequestParser()
    #parser.add_argument('id_signature')
    #parser.add_argument('id_product')

    def get(self, id_signature):
        sheet = SignatureProductsModel.find_by_id(id_signature)
        if sheet:
            return { 'SignatureSheets':  list(map(lambda x: x.json(), sheet ))}

        return {'message': 'Nothing Found'}
    
