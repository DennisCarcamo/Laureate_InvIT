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
from backend.models.signature import SignatureSheetModel, SignatureProductsModel, ImageModel
from webargs.flaskparser import use_args
from marshmallow import fields
from backend.resources.createpdf import *
from backend.resources.relationshipsAsset import *
from backend.resources.loansheets import *


def verification(param_id_signature):
    #count = SignatureSheetModel.query.filter(or_(SignatureSheetModel.email.like(param),  SignatureSheetModel.last_name.like(param), SignatureSheetModel.id_employee.like(param)) , and_(SignatureSheetModel.id_type == sheet_option, SignatureSheetModel.status == status_option)).count()
    count = ImageModel.query.filter(ImageModel.id_signature == param_id_signature ).count()
    return count

class PDFImages(Resource):

    insert_sheet = {

        'id_signature': fields.Int(required = True),
        #'date': fields.Date(required = False),
        'doc_name': fields.Str(required=True)
    }

    get_validation = { 'id_signature': fields.Int(required = True) }

    @use_args(insert_sheet)
    def post(self, args):

        ##Funcion validar si existe una hoja el el mismo name. if

        #date = args.get('date', None)
        id_signature = args.get('id_signature', None)
        doc_name = args.get('doc_name', None)
        date = datetime.datetime.now()

        #print(date)
        print(id_signature)
        print(doc_name)
        count = verification(id_signature)

        #insert    
        if count == 0:
            pdf_sheet = ImageModel(id_signature, date, doc_name )
            try:
                pdf_sheet.insert()
            except:
               return {'message' : 'Wrong'} 

        else:
            return {'message' : 'Wrong'}    

        return { 'message': 'Done'}


    @use_args(get_validation)
    def get(self,args):
        id_signature = args.get('id_signature', None)
        count = verification(id_signature)

        if count == 1:
            return { 'message': 'Yes' }

        else:
            return { 'message': 'No' }



    
api.add_resource(PDFImages, '/api/v1/pdfimages')
