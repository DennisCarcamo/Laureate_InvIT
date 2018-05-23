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
from backend.resources.relationshipsAsset import *
from backend.resources.createpdf import *
from backend.models.signature import SignatureProductsModel, SignatureSheetModel
from webargs.flaskparser import use_args
from marshmallow import fields
from flask import Flask, request, render_template, make_response, send_from_directory, current_app
from backend.models.auth import *
from backend.resources.auth import *

class RolePrivileges(Resource):
    """Class for the table TBL_PRIVILEGES_X_ROL"""
    parser = reqparse.RequestParser()
    parser.add_argument('id_rol', any)
    parser.add_argument('id_privilege', any)

    def post(self):
        parser = reqparse.RequestParser()
        args = RolePrivileges.parser.parse_args()

        id_ = args['id_rol']
        id_rol = json.loads(id_)

        id_p = args['id_privilege']
        id_privilege = json.loads(id_p)
        
        r_privileges = PrivilegesRolesModel(id_rol, id_privilege)
        try:
            r_privileges.insert()
            return{'message': 'Item correctly inserted'}
        
        except:
            return {'messege': "something wrong probably item already exist"}
        
        return{'message': 'baia baia'}


class Roles_x_Privileges(Resource):
    """Class for the table TBL_PRIVILEGES_X_ROL"""
    def get(self, ids):
        p = PrivilegesRolesModel.query.filter_by(id_role = ids).join(PrivilegesModel, PrivilegesRolesModel.id_privilege==PrivilegesModel.id).add_columns(PrivilegesModel.privilege_name,PrivilegesModel.id )
        x =[]
        if p:
            #return{ 'Privileges':  list(map(lambda x: x.json(), p))}
            for item in p:
                x.append({'privilege' : item[1]})

            z = json.dumps(x)
            q = json.loads(z)
            return {'p': q}       
        else:
             return {'messege': "something wrong probably item do not exist"}


class Roles(Resource):
    """Class for the table TBL_ROLES"""
    parser = reqparse.RequestParser()
    parser.add_argument('rol_name', any)
    parser.add_argument('privileges', any)

    def post(self):
        parser = reqparse.RequestParser()
        args = Roles.parser.parse_args()

        name = args['rol_name']
        privileges = args['privileges']
        privileges_ = json.loads(privileges)

        #current_role = RolesModel.query.filter_by(role_name=name).add_columns(RolesModel.id_role).first()
        #print(current_role[1])
        #rol_name = json.loads(name)

        role = RolesModel(name)
        
        try:
            role.insert()
            current_role = RolesModel.query.filter_by(role_name=name).add_columns(RolesModel.id_role).first()
            privilege_rol = 0
            for x in privileges_:
                if x['name'] == 'Dashboard':
                    privilege_rol = 1
                
                if x['name'] == 'PDF':
                    privilege_rol = 5                
                
                if x['name'] == 'Create Signature Sheet':
                    privilege_rol = 2                
                
                if x['name'] == 'Update Signature Sheet':
                    privilege_rol = 3                
                
                if x['name'] == 'Offboarding-loan admin':
                    privilege_rol = 4                
                
                if x['name'] == 'Reports':
                    privilege_rol = 7                
                
                if x['name'] == 'User Management':
                    privilege_rol = 6
                print(current_role[1])
                print(privilege_rol)
                item = PrivilegesRolesModel(current_role[1], privilege_rol)
                item.insert()
            
            
            return{'message': 'Items correctly inserted'}
        
        except:
            return {'messege': "something wrong probably item already exist"}
        #return 'yes'


    def get(self):
        roles = RolesModel.query.all()
        
        if roles:
            return{ 'Roles':  list(map(lambda x: x.json(), roles))}
        
        return {'message': 'Nothing found'}

class UserAdmins(Resource):
    """Class for the table tbl_users"""
    parser = reqparse.RequestParser()
    parser.add_argument('user_name', any)
    parser.add_argument('id_role', any)

    def get(self):
        users = UsersModel.query.join(RolesModel, UsersModel.id_role==RolesModel.id_role).add_columns(UsersModel.id,UsersModel.user_name, RolesModel.role_name)
        roles = RolesModel.query.all()
        #PrivilegesRolesModel.query.filter_by(id_role = ids).join(PrivilegesModel, PrivilegesRolesModel.id_privilege==PrivilegesModel.id).add_columns(PrivilegesModel.privilege_name,PrivilegesModel.id )
        x =[]
        if users:
            #return{ 'Privileges':  list(map(lambda x: x.json(), p))}
            for item in users:
                x.append({'privilege' : {'id': item[1], 'name':item[2], 'rol': item[3]}})

            z = json.dumps(x)
            q = json.loads(z)
            return {'p': q}   

        return {'message': 'Nothing found'}
        #if users:
            #return{ 'Users':  list(map(lambda x: x.json(), users))}
        
    
    def post(self):
        parser = reqparse.RequestParser()
        args = UserAdmins.parser.parse_args()

        user_name_ = args['user_name']
        #user_name = json.loads(user_name_)

        id_role_ = args['id_role']

        date = datetime.now()

        user = DomainController()

        x = user.getUsername(user_name_)
        if x == 'error':
            return {'messege': "item wrong"}

        else:
            values = json.loads(x)
            va = values['attributes']
            sAMAccountName = va['sAMAccountName']
            user = UsersModel(sAMAccountName[0], id_role_, 'administrator', 'administrator', date, date)
            try:
                user.insert()
                return{'message': 'Item correctly inserted'}
        
            except:
                return {'messege': "something wrong"}


    def put(self):
        parser = reqparse.RequestParser()
        args = UserAdmins.parser.parse_args()

        user_name_ = args['user_name']
        #user_name = json.loads(user_name_)

        id_role_ = args['id_role']        

        print(user_name_)
        print(id_role_)

        if user_name_ == 'invit':
            return {'message': 'superuser'}

        try:
            user = UsersModel.query.filter(UsersModel.id == id_role_).first()
            #UsersModel.query.filter(UsersModel.id == id_role_).delete()
            user.delete_item()
            return {'message': 'done'}
        except:
            return {'message': 'wrong'}

api.add_resource(RolePrivileges, '/api/v1/rolesprivileges')
api.add_resource(Roles, '/api/v1/roles')
api.add_resource(UserAdmins, '/api/v1/usersadmins')
api.add_resource(Roles_x_Privileges, '/api/v1/roles_x_privileges/<int:ids>')
