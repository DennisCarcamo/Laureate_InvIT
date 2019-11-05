
from flask import Flask, request
#from flask_sqlalchemy import SQLAlchemy
import requests
import datetime
import time
import os
import requests, base64
import subprocess
import sqlalchemy
import json
import json
#import psycopg2
from sqlalchemy import create_engine
from webargs import fields
from marshmallow import fields
from app import settings, app, api
from webargs.flaskparser import use_args
from flask_restful import Resource, Api, reqparse
from sqlalchemy.orm import sessionmaker, scoped_session
from flask_jwt import JWT, jwt_required, current_identity
from backend.models.signature import TypeModel, SignatureSheetModel, SignatureProductsModel
from backend.models.auth import *
from flask_jwt_extended import create_access_token, create_refresh_token, jwt_required, jwt_refresh_token_required, get_jwt_identity, get_raw_jwt


class BitlyLogin(Resource):

    params = {
        'ClientId': fields.Str(required = True),
        'ClientSecret': fields.Str(required = True)
    }
    #login
    @use_args(params)
    def post(self, args):
        _clientId = args.get('ClientId', None)
        _clientSecret = args.get('ClientSecret', None)


        clientParams = "{}:{}".format(_clientId,_clientSecret)
        usrPass = bytes(clientParams, 'utf-8')
        b64Val = base64.b64encode(usrPass).decode('utf-8')
        print(b64Val)
        r=requests.post("https://api-ssl.bitly.com/oauth/access_token", 
               headers={"Authorization": "Basic {}".format(b64Val)},
               data={})
        print(r.text)
        return r.text

class BitlyOperattions(Resource):

    params = {
        'domain': fields.Str(required = True),
        'title': fields.Str(required = True),
        'group_guid': fields.Str(required = True),
        #'tags': fields.Str(required = True),
        #'deeplinks': fields.(required = True),
        'long_url': fields.Str(required = True),
        'bearer_token': fields.Str(requiered = True)
    }

    paramsPatch = {
        'bitlink_id': fields.Str(required = True),
        'custom_bitlink': fields.Str(required = True),
        'bearer_token': fields.Str(required = True)
    }
    #create bitlink
    @use_args(params)
    def post(self, args):
        _domain = args.get('domain', None)
        _title = args.get('title', None)
        _group_guid = args.get('group_guid', None)
        # _tags = args.get('tags', None)
        # _deeplinks = args.get('deeplinks', None)
        _long_url = args.get('long_url', None)
        _bearer_token = args.get('bearer_token', None)

        data = {
            "domain": _domain,
            "title": _title,
            "group_guid": _group_guid,
            "tags": [],
            "deeplinks": [],
            "long_url": _long_url
        }
        print(data)
        
        headers = {"Content-Type":"application/json" ,"Authorization": "Bearer {}".format(_bearer_token)}
        r=requests.post("https://api-ssl.bitly.com/v4/bitlinks",
                headers = headers,
                data = json.dumps(data))
        print(r.text)
        return json.dumps(r.text)

    
    # redirect bitlink 
    @use_args(paramsPatch)
    def patch(self, args):
        _bitlink_id = args.get('bitlink_id', None)
        _custom_bitlink = args.get('custom_bitlink', None)
        _bearer_token = args.get('bearer_token', None)

        data = {
            "bitlink_id":_bitlink_id
        }

        print(data)

        headers = {"Content-Type":"application/json" ,"Authorization": "Bearer {}".format(_bearer_token)}
        url = "https://api-ssl.bitly.com/v4/custom_bitlinks/{}".format(_custom_bitlink)
        print(url)
        r = requests.patch(url,
                headers = headers,
                data = json.dumps(data))
        
        print(r.text)
        return json.dumps(r.text)


    paramsGet = {
        'bearer_token': fields.Str(requiered = True),
        'bitlink':fields.Str(required = True)
    }
    # retrive bitlink information
    @use_args(paramsGet)
    def get(self, args):
        _bearer_token = args.get ('bearer_token', None)
        _bitlink = args.get ('bitlink', None)

        headers = {"Content-Type":"application/json", "Authorization": "Bearer {}".format(_bearer_token)}
        url = "https://api-ssl.bitly.com/v4/custom_bitlinks/{}".format(_bitlink)
        r = requests.get(url,
                headers = headers,
                data = {})
        print (r.text)
        return r.text

api.add_resource(BitlyLogin, '/api/v1/bitlygettoken')
api.add_resource(BitlyOperattions, '/api/v1/createbitlink')
