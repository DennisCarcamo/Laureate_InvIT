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
from Backend.resources.createAssetRelationships import *
from Backend.models.signature import SignatureProductsModel, SignatureSheetModel
from webargs.flaskparser import use_args
from marshmallow import fields
#

class SignatureProducts(Resource):
    #parser = reqparse.RequestParser()
    #parser.add_argument('item', any)
    #parser.add_argument('id_product')
    product_args = {
        'id_signature' : fields.Int(required= True),
        'id_product': fields.Str(required= True),
        'product_name': fields.Str(required= True),
        'serial': fields.Str(required=True),
        'model': fields.Str(required= True)
    }

    def get(self):
        sheetproduct = SignatureProductsModel.query.all()
        if sheetproduct:
            return {'sheetproducts': list(map(lambda x: x.json(), SignatureProductsModel.query.all())) } 
        return{'message': 'Nothing found'}  
    #@use_args(product_args)

    def post(self):
        #id_signature = args.get('id_signature',None)
        #id_product = args.get('id_product',None)
        #product_name = args.get('product_name',None)
        #serial = args.get('serial', None)
        #model = args.get('model', None)
        #--------------------------------------------------------------------------------------------------------------------
        value = request.json['Products']
        signature_id = request.json['signature_id']
        
        sheet_signature = SignatureSheetModel.get_last_id(signature_id['id_employee'])
        id_ss = sheet_signature.json()
        signature_sheet_id = id_ss['id_signature']


        relationship = CreateAssetRelationships()
        #"relationship.createRelationship(signature_id['requesterid'], )
        #print(signature_id['requesterid'])
        #print(prod['ciid'])
        for prod in value:
            #print(prod['ciid'])
            val = relationship.createRelationship(signature_id['requesterid'], prod['ciid'])
            #print(val)
            #-----
            sp = SignatureProductsModel(id_ss, prod['id_product'], prod['product_name'] , prod['serial'], prod['model'])
            try:
                sp.insert()
            except:
                return{'message': 'Row could not be inserted'}

        return "Success"       
        #------------------------------------------------------------------------------------------------------------------
        #sp = SignatureProductsModel(id_signature, id_product, product_name , serial, model)
        #print(data.item['Model'])
        #print('hahah')
       # for item in kwargs:
       #     print('que onda')
       #     sp = SignatureProductsModel(item['id_signature'], item['id_product'], item['product_name'] , item['serial'], item['model'])
       #     sp.insert()
        #data = args[0]
        #print(data)
        #try:
            #sp.insert()
         #   return {'message': 'Row correctly inserted'}
        #except:
         #   return{'message': 'Row could not be inserted'} 

class Signatureproduct(Resource):
    #parser = reqparse.RequestParser()
    #parser.add_argument('id_signature')
    #parser.add_argument('id_product')

    def get(self, id_signature):
        sheet = SignatureProductsModel.find_by_id(id_signature)
        if sheet:
            return { 'SignatureSheets':  list(map(lambda x: x.json(), sheet ))}

        return {'message': 'Nothing Found'}


api.add_resource(SignatureProducts, '/api/v1/signatureproducts')
api.add_resource(Signatureproduct, '/api/v1/signatureproduct/<string:id_signature>')