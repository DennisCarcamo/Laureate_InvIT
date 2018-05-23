from flask import Flask, request
#from flask_sqlalchemy import SQLAlchemy
import requests
import datetime
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
from ldap3 import *
import ldap3
from flask_jwt_extended import ( JWTManager, jwt_required, create_access_token, get_jwt_identity)
from flask_jwt import *

class DomainController(object):
    def getUsername(self, email):
        server = Server('hnlnodc1.hnsc.net', get_info=ALL )
        #put system validation
        #variables en cfg
        conn = Connection(server, user='HNSCNET\invit',password='Mer@k!2018', authentication=NTLM)
        #person = ObjectDef('Julio Zuniga')
        filter_ = '(mail={})'.format(email)

        if conn.bind():
            #print(conn.bind())
            #ldap3.Reader(conn, person, '(&(member=CN=Julio Zuniga,DC=hnsc,DC=net)(objectClass=group))', 'dc=hnsc,dc=net').search()
            z = conn.search('dc=hnsc , dc=net', filter_ , attributes=['cn', 'mail', 'sAMAccountName'])
            #comparison = conn.compare('cn=jzuniga,ou=COPR,o=COMPANY', 'company', 'Laureate International Universities')
            #print(comparison)

            x = conn.entries[0].entry_to_json()
            conn.unbind()

        if not conn.bind():
            x = 'error'
            print('error', conn.result)
    

        
        return x

class Token(object):
    def createToken(self,username, privileges_):
        #expires = datetime.timedelta(days=365)
        x = privileges_
        x.append({'username' : username})
        z = json.dumps(x)
        q = json.loads(z)
        access_token = create_access_token(identity = q, expires_delta=False)
        return access_token


class UserAuthentication(object):
    def loginAuthentication(self, username, userpassword):
        #query to model
        user = UsersModel.query.filter_by(user_name=username).first()
        #print(user)
        
        if user:
        #domain controler validation
            server = Server('hnlnodc1.hnsc.net', get_info=ALL )
            user_name = 'HNSCNET\{}'.format(username)
            password_ = userpassword
            conn = Connection(server, user=user_name,password=password_, authentication=NTLM)

            if conn.bind():
                return 'authenticated'

            if not conn.bind():
                return 'no_authenticated'
        else:
            return 'failed'
#api.add_resource(DomainController, '/api/v1/domaincontroller')