import json
from marshmallow import fields
from app import api
from webargs.flaskparser import use_args
from flask_restful import Resource
from backend.models.license import LicenseModel


class License(Resource):
    license_fields = {
        'name_product': fields.Str(required=True),
        'licences': fields.Str(required=True),
        'vendor': fields.Str(required=True),
        'adquisition_date': fields.Date(required=True),
        'date_expiration': fields.Date(required=True),
        'version_product': fields.Str(required=True),
        'max_users': fields.Int(required=True),
        'accountable': fields.Str(required=True),
        'price': fields.Int(required=True),
        'enable': fields.Int(required=True),
    }

    def get(self):
        page = 1
        per_page = 10
        records = LicenseModel.query.order_by(LicenseModel.id_license.desc()).limit(
            per_page).offset((page - 1) * per_page)
        if records:
            return{'license_list':  list(map(lambda x: x.json(), records))}

        return{'message': 'Nothing found'}

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

        return {'message': 'License correctly updated'}, 200

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

        return {'message': 'License correctly inserted'}, 200

    def delete(self, license_id):
        print(license_id)

        license_item = LicenseModel.query.filter(
            LicenseModel.id_license == license_id).first()
        license_item.delete_item()

        return {'message': 'License correctly deleted'}, 200


api.add_resource(
    License,
    '/api/v1/license',
    '/api/v1/license/<license_id>')
