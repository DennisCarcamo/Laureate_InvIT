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
#from Backend.resources.createAssetRelationships import *
#from Backend.resources.createAssetRelationships import *
#from Backend.resources.AssetRelationships import *
from backend.resources.relationshipsAsset import *
from backend.resources.createpdf import *
from backend.models.signature import SignatureProductsModel, SignatureSheetModel
from webargs.flaskparser import use_args
from marshmallow import fields
from flask import Flask, request, render_template, make_response, send_from_directory, current_app
#

class SignatureProducts(Resource):
    """Class for the table TBL_SIGNATURE_X_PRODUCT"""
    parser = reqparse.RequestParser()
    parser.add_argument('Products', any)
    parser.add_argument('id_employee', any)
    parser.add_argument('requesterid', any)
    #parser.add_argument('id_product')
    #product_args = {
    #    'id_signature' : fields.Int(required= True),
    #    'id_product': fields.Str(required= True),
    #    'product_name': fields.Str(required= True),
    #    'serial': fields.Str(required=True),
    #    'model': fields.Str(required= True)
    #}

    def get(self):
        """Function that Return All the table"""
        sheetproduct = SignatureProductsModel.query.all()
        if sheetproduct:
            return {'sheetproducts': list(map(lambda x: x.json(), SignatureProductsModel.query.all())) } 
        return{'message': 'Nothing found'}  
    #@use_args(product_args)

    def post(self):
        """Function that Insert Products in the table, also create an create Realtionship object to make the changes in the asset Database"""
        parser = reqparse.RequestParser()
        args = SignatureProducts.parser.parse_args()
        #id_signature = args.get('id_signature',None)
        #id_product = args.get('id_product',None)
        #product_name = args.get('product_name',None)
        #serial = args.get('serial', None)
        #model = args.get('model', None)
        #--------------------------------------------------------------------------------------------------------------------
        val = args['Products']
        value = json.loads(val)

        id_employ = args['id_employee']
        id_employee = json.loads(id_employ)

        requ_id = args['requesterid']
        requester_id = json.loads(requ_id)

        #poner un try
        sheet_signature = SignatureSheetModel.get_last_id(id_employ)
        id_ss = sheet_signature.json()
        signature_sheet_id = id_ss['id_signature']
#------------------------------------------------------------------------------------------
   #     canvas = CreatePDF()
   #     canvas.createTemplate(signature_sheet_id, value, id_employee)
   #     pdf_name = str(signature_sheet_id) + str(id_employee)


#-------------------------------------------------------------------------------------------
       #relationship = CreateAssetRelationships()
        relationship = AssetRelationships()
        print(value)
        for prod in value:
            #print(prod['ciid'])
            val = relationship.createRelationship(requ_id, prod['CIID'])
#            print(prod['CIID'])
            #-----
            print(val)
            if(val == "Done" ):
                sp = SignatureProductsModel(signature_sheet_id, prod['PRODUCT_CODE'], prod['CI_NAME'] , prod['SERIAL_NUMBER'], prod['MODEL'], prod['CIID'])
                try:
                    sp.insert()
                    print("product inserted")

                except:
                    return{'message': 'Row could not be inserted'}
                    print("item not inserted")

            
     #---Pendiente cambiar los nombres.
        print("canvas")
        ref = []
        canvas = CreatePDF()
        pdf_name = str(signature_sheet_id) + str(id_employee)
        #canvas.createTemplate(signature_sheet_id, value, id_employee, pdf_name)
        canvas.createTemplate(signature_sheet_id, value, id_ss, pdf_name, ref )
        path =  pdf_name + ".pdf"
        #return send_from_directory(settings['PDFPATH'], '108307000203.pdf', as_attachment=True)
        #return send_from_directory(settings['PDFPATH'], 'plantilla.pdf', as_attachment=True)
        return {'message': 'done'}

       # file_object = open(r"C:\Users\jzuniga\flask\myproject\code\sqla\Backend\pdfs\plantilla.pdf")
  #        pdf = send_from_directory(settings['PDFPATH'], 'plantilla.pdf')
  #        response = make_response(pdf)
  #        response.headers['Content-Type'] = 'application/pdf'
  #        response.headers['Content-Disposition'] = 'inline; filename=plantilla.pdf'

        #return send_from_directory(settings['PDFPATH'], 'plantilla.pdf', as_attachment=True)     
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
    """Class to work with an specific product"""
    parser = reqparse.RequestParser()
    parser.add_argument('Products_to_remove', any)
    parser.add_argument('Products_to_add', any)
    parser.add_argument('current_products', any)
    parser.add_argument('user_info', any)
    parser.add_argument('type', any)

    def get(self, id_employee):
        """Function that use the signature id (FK) as param, and return all the product list of the sheet"""
        sheet_signature = SignatureSheetModel.get_last_id(id_employee)
        id_ss = sheet_signature.json()
        signature_sheet_id = id_ss['id_signature']

        prod = SignatureProductsModel.find_by_id(signature_sheet_id)
        print(prod)

        if prod:
            return {'SignatureSheetsProducts':  list(map(lambda x: x.json(), prod ))}

        return {'message': 'Nothing Found'}
        #return prod.json()
        #sheet = SignatureProductsModel.find_by_id(email)
        #if sheet:
        #    return { 'SignatureSheets':  list(map(lambda x: x.json(), sheet ))}

        #return {'message': 'Nothing Found'}

    def put(self, id_employee):
        parser = reqparse.RequestParser()
        #args = Signatureproduct.parser.parse_args()
        args = Signatureproduct.parser.parse_args()
        pr = args['Products_to_remove']
        product_to_remove = json.loads(pr)

        pa = args['Products_to_add']
        product_to_add = json.loads(pa)

        cp = args['current_products']
        current_products = json.loads(cp)

        us = args['user_info']
        user_info = json.loads(us)

        ty = args['type']
        _type = json.loads(ty)

        ref = []
        for prod in current_products:
            ref.append(prod)

        for prod in current_products:
            for prod2 in product_to_remove:
                 if(prod['ciid'] == prod2['ciid']):
                    ref.remove(prod)

        relationship = AssetRelationships()
        for x in product_to_remove:
            val = relationship.DeleteRelationship(id_employee, x['ciid'])
           
        
        requ_id = user_info[0]
        sheet_signature = SignatureSheetModel.get_last_id(id_employee)
        id_ss = sheet_signature.json()
        signature_sheet_id = id_ss['id_signature']

        for prod in product_to_add:
            print(".................")
            val = relationship.createRelationship(requ_id['CIID'], prod['CIID'])
#            print(prod['CIID'])
            if(val == "Done" ):
                sp = SignatureProductsModel(signature_sheet_id, prod['PRODUCT_CODE'], prod['CI_NAME'] , prod['SERIAL_NUMBER'], prod['MODEL'], prod['CIID'])
                try:
                    sp.insert()
                except:
                    return{'message': 'Row could not be inserted'}
                    

        for prod in ref:
            sp = SignatureProductsModel(signature_sheet_id, prod['id_product'], prod['product_name'] , prod['serial_number'], prod['model'], prod['ciid'])

            try:
                sp.insert()
            except:
                return{'message': 'row could not be inserted'}
                

        #for prod in product_to_add:
            #sp = SignatureProductsModel(signature_sheet_id, prod['PRODUCT_CODE'], prod['CI_NAME'] , prod['SERIAL_NUMBER'], prod['MODEL'], prod['CIID'])
            #try:
            #    sp.insert()
            #    print("product inserted")

            #except:
            #    return{'message': 'Row could not be inserted'}
            #    print("item not inserted")
        
        canvas = CreatePDF()
        pdf_name = str(signature_sheet_id) + str(id_employee)
        #canvas.createTemplate(signature_sheet_id, value, id_employee, pdf_name)
        canvas.createTemplate(signature_sheet_id, product_to_add, id_ss, pdf_name, ref )
        path =  pdf_name + ".pdf"

        
        return {'message': 'done'}


api.add_resource(SignatureProducts, '/api/v1/signatureproducts')
api.add_resource(Signatureproduct, '/api/v1/signatureproduct/<string:id_employee>')