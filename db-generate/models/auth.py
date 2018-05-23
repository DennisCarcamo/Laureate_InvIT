from db import db
from sqlalchemy import Table, Column, Float, Integer, String, MetaData, ForeignKey, DateTime, Date, and_, or_
from datetime import datetime
import json

class RolesModel(db.Model):
    __tablename__ = 'tbl_roles'
    id_role = db.Column(db.Integer, autoincrement = True,primary_key = True )
    role_name = db.Column(db.String(70), nullable = False)

    def __init__(self, id_role, role_name):
        self.id_role = id_role
        self.role_name = role_name


    def json(self):
        return{
                'id_role':self.id_role,
                'role_name': self.role_name,
                #'image': self.image
            }

    def insert(self):
        db.session.add(self)
        db.session.commit()


    @classmethod
    def bring_all(cls):
        return cls.query.all()

    def delete_item(self):
        db.session.delete(self)
        db.session.commit()


class UsersModel(db.Model):
    __tablename__ = 'tbl_users'
    id = db.Column(db.Integer, autoincrement = True,primary_key = True)
    user_name =  db.Column(db.String(60), nullable = False)
    id_role = db.Column(db.Integer, db.ForeignKey('tbl_roles.id_role'), nullable= False)
    created_by = db.Column(db.String(60), nullable = True)
    modified_by = db.Column(db.String(60), nullable = True)
    created_at = db.Column(db.Date, nullable = True )
    modified_at = db.Column(db.Date, nullable = True ) 

    def __init__(self, id, user_name, id_role, created_by, modified_by, created_at, modified_at):
        self.id = id
        self.user_name = user_name
        self.id_role = id_role
        self.created_by = created_by
        self.modified_by = modified_by
        self.created_at = created_at
        self.modified_at = modified_at


    def json(self):
        return{
                'id':self.id,
                'user_name': self.user_name,
                'id_role':self.id_role,
                'created_by': self.created_by,
                'modified_by': self.modified_by,
                'created_at': self.created_at,
                'modified_at': self.modified_at
            }

    def insert(self):
        db.session.add(self)
        db.session.commit()


    @classmethod
    def bring_all(cls):
        return cls.query.all()

    def delete_item(self):
        db.session.delete(self)
        db.session.commit()


class PrivilegesModel(db.Model):
    __tablename__ = 'tbl_privileges'
    id =   db.Column(db.Integer, autoincrement = True,primary_key = True)
    privilege_name = db.Column(db.String(60), nullable = False)

    def __init__(self, id, name):
        self.id = id
        self.privilege_name = name

    def json(self):
        return{
                'id': self.id,
                'privilege_name': self.privilege_name
            }

    def insert(self):
        db.session.add(self)
        db.session.commit()


    @classmethod
    def bring_all(cls):
        return cls.query.all()

    def delete_item(self):
        db.session.delete(self)
        db.session.commit()


class PrivilegesRolesModel(db.Model):
    __tablename__ = 'tbl_privileges_x_roles'
    id_role = db.Column(db.Integer, db.ForeignKey('tbl_roles.id_role'), primary_key = True)
    id_privilege = db.Column(db.Integer, db.ForeignKey('tbl_privileges.id'), primary_key = True)

    def __init__(self, id_rol, id):
        self.id_role = id_rol
        self.id_privilege = id

    
    def json(self):
        return{
                'id_rol': self.id_role,
                'id_privilege': self.id_privilege
            }

    def insert(self):
        db.session.add(self)
        db.session.commit()


    @classmethod
    def bring_all(cls):
        return cls.query.all()

    def delete_item(self):
        db.session.delete(self)
        db.session.commit()