from flask import Flask, request
import requests
import datetime
import sqlalchemy
import json
import json
from backend import db
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

class LoanStatus(object):
    def StatusTwo(self,id_loan_signature):
        """Update Loan sheet Status"""
        sheet = SignatureSheetModel.query.filter_by(id_signature=id_loan_signature).update(dict(status=2))
        
        db.session.commit()
        #print(sheet)
        #sheet.updatedLoan()
        #sheet = SignatureSheetModel.updatedLoan(2,2)
        #sheet.updatedLoan(2,2)
        print("Loan Sheet Updated")


class LoanStatusSearch(Resource):
    search_args = {
        'page': fields.Int(required = True),
        'text': fields.Str(required = True),
        'limit': fields.Int(required = True),
        'status':fields.Str(required= True)
    }

    
    @use_args(search_args)
    def get(self, args):
        text = args.get('text', None)
        page = args.get('page', None)
        limit = args.get('limit', None)
        status_option = args.get('status', None)
        param =   text + "%"

        print(text)
        print(page)
        print(status_option)

        #users = UsersModel.query.join(RolesModel, UsersModel.id_role==RolesModel.id_role).add_columns(UsersModel.id,UsersModel.user_name, RolesModel.role_name)
        if status_option == '3':
            print("aqui")
            sheets = SignatureSheetModel.query.filter(or_(SignatureSheetModel.email.like(param), SignatureProductsModel.id_product.like(param), SignatureProductsModel.product_name.like(param) ), and_(SignatureSheetModel.id_type == 3)).join(SignatureProductsModel, SignatureSheetModel.id_signature == SignatureProductsModel.id_signature).add_columns(SignatureProductsModel.id_product, SignatureProductsModel.id_signature, SignatureProductsModel.product_name, SignatureSheetModel.updated, SignatureSheetModel.email, SignatureSheetModel.status).order_by(SignatureSheetModel.id_signature.desc()).limit(10).offset((page - 1) * 10).all()
            count =  SignatureSheetModel.query.filter(or_(SignatureSheetModel.email.like(param), SignatureProductsModel.id_product.like(param), SignatureProductsModel.product_name.like(param) ), and_(SignatureSheetModel.id_type == 3)).join(SignatureProductsModel, SignatureSheetModel.id_signature == SignatureProductsModel.id_signature).count()
        
        else:
            sheets = SignatureSheetModel.query.filter(or_(SignatureSheetModel.email.like(param), SignatureProductsModel.id_product.like(param), SignatureProductsModel.product_name.like(param) ), and_(SignatureSheetModel.id_type == 3, SignatureSheetModel.status == status_option)).join(SignatureProductsModel, SignatureSheetModel.id_signature == SignatureProductsModel.id_signature).add_columns(SignatureProductsModel.id_product, SignatureProductsModel.id_signature, SignatureProductsModel.product_name, SignatureSheetModel.updated, SignatureSheetModel.email, SignatureSheetModel.status).order_by(SignatureSheetModel.id_signature.desc()).limit(10).offset((page - 1) * 10).all()
            count =  SignatureSheetModel.query.filter(or_(SignatureSheetModel.email.like(param), SignatureProductsModel.id_product.like(param), SignatureProductsModel.product_name.like(param) ), and_(SignatureSheetModel.id_type == 3, SignatureSheetModel.status == status_option)).join(SignatureProductsModel, SignatureSheetModel.id_signature == SignatureProductsModel.id_signature).count()
        
        ##falta count
        #signature sheet
        #cursor = (page * 10) + 1
        x =[]
        if sheets:
            cursor = (page * 10) + 1

            for item in sheets:
                #print(item)
                t = item[4]

                x.append({'id_product' : item[1],
                          'id_signature': item[2],
                          'product_name': item[3],
                          'updated': t.strftime('%d/%m/%y'),
                          'email': item[5],
                          'status':item[6]
                        })

            z = json.dumps(x)
            q = json.loads(z)
            return {'products': q,
                    'count': count,
                    'more': cursor <= count,
                    'cursor': cursor
                    }       

        return {'message' : 'Something Wrong'}


api.add_resource(LoanStatusSearch, '/api/v1/loanstatussearch')

