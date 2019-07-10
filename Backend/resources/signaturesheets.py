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
from sqlalchemy import or_, and_
from webargs.flaskparser import use_args
from sqlalchemy.orm import sessionmaker, scoped_session
from backend.models.signature import SignatureSheetModel, SignatureProductsModel
from webargs.flaskparser import use_args
from marshmallow import fields
from backend.resources.createpdf import *
from backend.resources.relationshipsAsset import *
from backend.resources.loansheets import *

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
        records = SignatureSheetModel.query.order_by(SignatureSheetModel.id_signature.desc()).limit(per_page).offset((page - 1) * per_page)
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
            print('Hoja insertada')
            return{'message': 'Signature Sheet correctly inserted'}
        except:
            return {'message': "something wrong probably item already exist"}
        
#pdf
class SignatureSheet(Resource):
    search_args = {
        'page': fields.Int(required = True),
        'text': fields.Str(required = True),
        'limit': fields.Int(required = True),
        'idsheet': fields.Str(required= True),
        'status':fields.Str(required= True)
    }

    @use_args(search_args)
    def get(self, args):
        text = args.get('text', None)
        page = args.get('page', None)
        limit = args.get('limit', None)
        sheet_option = args.get('idsheet', None)
        status_option = args.get('status', None)
        param =   text + "%"

        #print("IDS")
        #print(sheet_option + ' ' + status_option)

        _page = page 
        per_page = limit

        if sheet_option == '5':
            records = SignatureSheetModel.query.filter(or_(SignatureSheetModel.email.like(param),  SignatureSheetModel.last_name.like(param), SignatureSheetModel.id_employee.like(param))).order_by(SignatureSheetModel.id_signature.desc()).limit(per_page).offset((_page - 1) * per_page).all()
            count = SignatureSheetModel.query.filter(or_(SignatureSheetModel.email.like(param),  SignatureSheetModel.last_name.like(param), SignatureSheetModel.id_employee.like(param))).count()
        else:
            records = SignatureSheetModel.query.filter(or_(SignatureSheetModel.email.like(param),  SignatureSheetModel.last_name.like(param), SignatureSheetModel.id_employee.like(param)), and_(SignatureSheetModel.id_type == sheet_option, SignatureSheetModel.status == status_option)).order_by(SignatureSheetModel.id_signature.desc()).limit(per_page).offset((_page - 1) * per_page).all()
            count = SignatureSheetModel.query.filter(or_(SignatureSheetModel.email.like(param),  SignatureSheetModel.last_name.like(param), SignatureSheetModel.id_employee.like(param)) , and_(SignatureSheetModel.id_type == sheet_option, SignatureSheetModel.status == status_option)).count()
        
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


class LoanSignatureSheets(Resource):
    search_loan_args = {
        'page': fields.Int(required = True),
        'text': fields.Str(required = True),
        'limit': fields.Int(required = True),
        'type':fields.Int(required = True)
    }

    @use_args(search_loan_args)
    def get(self, args):
        text = args.get('text', None)
        page = args.get('page', None)
        limit = args.get('limit', None)
        type_ = args.get('type', None)

        param =   text + "%"
        _page = page 
        per_page = limit

        records = SignatureSheetModel.query.filter(and_(SignatureSheetModel.email.like(param), SignatureSheetModel.id_type == type_, SignatureSheetModel.status == 1)).order_by(SignatureSheetModel.id_signature.desc()).limit(per_page).offset((_page - 1) * per_page).all()
        count = SignatureSheetModel.query.filter(and_(SignatureSheetModel.email.like(param), SignatureSheetModel.id_type == type_, SignatureSheetModel.status == 1)).count()

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

class LoanSheetProducts(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('Products', any)
    parser.add_argument('id_employee', any)
    parser.add_argument('id_signature', any)
    loan_sheet_args = {
        'id_signature':fields.Int(required=True)
    }

    @use_args(loan_sheet_args)
    def get(self,args):
        id_ = args.get('id_signature', None)
        print(id_)
        records = SignatureProductsModel.query.filter(SignatureProductsModel.id_signature == id_).all()
        if records:
            return {
                'Products': list(map(lambda x: x.json(),records))
            }
        return{'message': 'Nothing found'}

    ##cambiar status##
    def post(self):
        parser = reqparse.RequestParser()
        args = LoanSheetProducts.parser.parse_args()

        val = args['Products']
        value = json.loads(val)
        id_ = args['id_employee']
        id_emp = json.loads(id_)
        id_sheet = args['id_signature']
        id_sheet_ = json.loads(id_sheet)
        
        relationships = AssetRelationships()
        for x in value:
            print(x['ciid'])
            relationships.DeleteRelationship(id_emp, x['ciid'])

        loan_sheet_status = LoanStatus()
        loan_sheet_status.StatusTwo(id_sheet_)
        #print(value)
        #print(id_emp)

        return {'message': 'Done'}

class OffboardingSheet(Resource):
    """Class for the offboarding sheet"""
    parser = reqparse.RequestParser()
    parser.add_argument('Products', any)
    parser.add_argument('id_employee', any)
    #parser.add_argument('requesterid', any)

    def post(self):
        parser = reqparse.RequestParser()
        args = OffboardingSheet.parser.parse_args()

        val = args['Products']
        value = json.loads(val)

        id_employ = args['id_employee']
        #id_employee = json.loads(id_employ)

        #requ_id = args['requesterid']
        #requester_id = json.loads(requ_id)

        sheet_signature = SignatureSheetModel.get_last_sheet(id_employ)
        id_ss = sheet_signature.json()
        signature_sheet_id = id_ss['id_signature']

            
        onboarding_date = SignatureSheetModel.get_onboarding(id_employ)
        if onboarding_date:
            onboarding_date_json = onboarding_date.json()
            onboarding_date__ = onboarding_date_json['updated']
        else:
            onboarding_date__ = "0000-00-00"

        ref = []
        canvas = CreatePDF()
        relationship = AssetRelationships()
        pdf_name = str(signature_sheet_id) + str(id_employ)
        #signature_sheet_id = id_ss['id_signature']

        #hacer un insert primero y luego llamar aqui el query para conseguir la hoja
        #for x in value:
            #print(x)
        for prod in value:
            #print(prod['ciid'])
            #val = relationship.createRelationship(requ_id, prod['CIID'])
            val =  relationship.DeleteRelationship(id_employ, prod['ciid'] )


            #-----
            print(val)
            if(val == "Done" ):
                sp = SignatureProductsModel(signature_sheet_id, prod['id_product'], prod['product_name'] , prod['serial_number'], prod['model'], prod['ciid'])
                try:
                    sp.insert()
                    print("product inserted")

                except:
                    return{'message': 'Row could not be inserted'}
                    print("item not inserted")


        canvas.createTemplate(signature_sheet_id, ref, id_ss, pdf_name, value , onboarding_date__)
        path =  pdf_name + ".pdf"

        return {'message': 'done'}

class OffboardingValidation(Resource):
    """Validate if user already has an offboarding sheet"""
    def get(self, id):
        val = SignatureSheetModel.query.filter_by(id_employee=id).order_by(SignatureSheetModel.id_signature.desc()).first()
        print("(((((((((((((((((((((((((((((((((((((((((((((())))))))))))))))))))))))))))))))))))))))))))))))")
        print(val.json())
        if val:
            return {'message': val.json()}
        else:
            return {'message': 'null'}
        



api.add_resource(SignatureSheets, '/api/v1/signaturesheets')
api.add_resource(SignatureSheet, '/api/v1/signaturesheet')
api.add_resource(LoanSignatureSheets, '/api/v1/loansignaturesheets')
api.add_resource(LoanSheetProducts, '/api/v1/loansheetproducts')
api.add_resource(OffboardingSheet, '/api/v1/offboardingsheet')
api.add_resource(OffboardingValidation, '/api/v1/offboardingsheetvalidation/<string:id>')