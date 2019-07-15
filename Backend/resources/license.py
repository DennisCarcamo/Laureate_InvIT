import json
from flask import request
from marshmallow import fields
from app import api
from webargs.flaskparser import use_args
from flask_restful import Resource
from backend.models.license import LicenseModel, WorkstatiosModel

license_fields = {
    'name_product': fields.Str(required=True),
    'licences': fields.Str(required=True),
    'vendor': fields.Str(required=True),
    'adquisition_date': fields.Date(required=True),
    'date_expiration': fields.Date(required=True),
    'version_product': fields.Float(required=True),
    'max_users': fields.Int(required=True),
    'accountable': fields.Str(required=True),
    'price': fields.Int(required=True),
    'enable': fields.Int(required=True),
}

wl_fields = {
    'id_license': fields.Int(required=False),
    'usuario': fields.Str(required=False),
    'tag': fields.Str(required=False),
    'enable': fields.Int(required=True)
}

class LicenseList(Resource):
    
    def get(self):
        args = request.args
        print(args)

        limit = args.get('limit', 10)
        offset = args.get('offset', 0)
        records = LicenseModel.query.order_by(LicenseModel.id_license.desc()).limit(
            limit).offset(offset)
        if records:
            return{'data':  list(map(lambda x: x.json(), records))}

        return{'message': 'Not found'}

    @use_args(license_fields)
    def put(self, args):
        print(args)
        name_product = args.get('name_product')
        licences = args.get('licences')
        vendor = args.get('vendor')
        adquisition_date = args.get('adquisition_date')
        date_expiration = args.get('date_expiration')
        version_product = args.get('version_product')
        max_users = args.get('max_users')
        accountable = args.get('accountable')
        price = args.get('price')
        enable = args.get('enable')

        new_license = LicenseModel(name_product, licences, vendor, adquisition_date,
                                   date_expiration, version_product, max_users, accountable, price, enable)
        new_license.insert()

        return {
            'message': 'License correctly inserted',
            'data': new_license.json()
        }, 200


class License(Resource):

    def get(self, license_id):
        license_item = LicenseModel.query.filter(
            LicenseModel.id_license == license_id).first()

        if license_item:
            return{'data':  license_item.json()}

        return{'message': 'Not found'}

    @use_args(license_fields)
    def post(self, args, license_id):
        print(args, license_id)

        license_item = LicenseModel.query.filter(
            LicenseModel.id_license == license_id).first()

        license_item.name_product = args.get('name_product')
        license_item.licences = args.get('licences')
        license_item.vendor = args.get('vendor')
        license_item.adquisition_date = args.get('adquisition_date')
        license_item.date_expiration = args.get('date_expiration')
        license_item.version_product = args.get('version_product')
        license_item.max_users = args.get('max_users')
        license_item.accountable = args.get('accountable')
        license_item.price = args.get('price')
        license_item.enable = args.get('enable')

        license_item.insert()

        return {
            'message': 'License correctly updated',
            'data': license_item.json()
        }, 200
    
    def delete(self, license_id):
        print(license_id)

        license_item = LicenseModel.query.filter(
            LicenseModel.id_license == license_id).first()
        license_item.delete_item()

        return {'message': 'License correctly deleted'}, 200


class WorkstationsLicenseList(Resource):

    def get(self):
        args = request.args
        print(args)
        limit = args.get('limit', 10)
        offset = args.get('offset', 0)

        records = WorkstatiosModel.query.order_by(WorkstatiosModel.id_relationship.desc()).limit(
            limit).offset(offset)
        if records:
            return{'data':  list(map(lambda x: x.json(), records))}

        return{'message': 'Not found'}

    @use_args(wl_fields)
    def put(self, args):
        print(args)
        id_license = args.get('id_license')
        usuario = args.get('usuario')
        tag = args.get('tag')
        enable = args.get('enable')

        new_wl = WorkstatiosModel(id_license, usuario, tag, enable)
        new_wl.insert()

        return {
            'message': 'Workstation license correctly inserted',
            'data': new_wl.json()
        }, 200


class WorkstationsLicense(Resource):
    
    def get(self, wl_id):
        wl_item = WorkstatiosModel.query.filter(
            WorkstatiosModel.id_relationship == wl_id).first()

        if wl_item:
            return{'data':  wl_item.json()}

        return{'message': 'Not found'}
        
        
    @use_args(wl_fields)
    def post(self, args, wl_id):
        print(args, wl_id)

        wl_item = WorkstatiosModel.query.filter(
            WorkstatiosModel.id_relationship == wl_id).first()

        wl_item.enable = args.get('enable')

        wl_item.insert()

        return {
            'message': 'Workstation License correctly updated',
            'data': wl_item.json()
        }, 200


class WorkstationsLicenseUsers(Resource):

    def get(self, license_id):
        records = WorkstatiosModel.query.filter(
            WorkstatiosModel.id_license == license_id).filter(
                WorkstatiosModel.enable == 1).order_by(
                    WorkstatiosModel.id_relationship.desc())
        if records:
            return{'data':  list(map(lambda x: x.json(), records))}

        return{'message': 'Not found'}


api.add_resource(
    LicenseList,
    '/api/v1/license')

api.add_resource(
    License,
    '/api/v1/license/<license_id>')

api.add_resource(
    WorkstationsLicenseList,
    '/api/v1/workstations-license')

api.add_resource(
    WorkstationsLicense,
    '/api/v1/workstations-license/<wl_id>')

api.add_resource(
    WorkstationsLicenseUsers,
    '/api/v1/workstations-license/license/<license_id>/users')
