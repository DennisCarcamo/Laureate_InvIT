from db import db
from sqlalchemy import Table, Column, Float, Integer, String, MetaData, ForeignKey, DateTime
from datetime import datetime
import json

class TypeModel(db.Model):
    __tablename__ = 'tbl_type'
    id_type = db.Column(db.Integer, autoincrement=True, primary_key = True)
    name =    db.Column(db.String(40), nullable=False)
    address = db.Column(db.String(80), nullable = False)
    phone =   db.Column(db.String(15), nullable = False)
    terms =   db.Column(db.String(200), nullable = False)
    image =   db.Column(db.String(30), nullable = True)
    enable = db.Column(db.SMALLINT, nullable = True)

    def __init__(self, name, address, phone, terms, num):
        self.name = name
        self.address = address,
        self.phone = phone
        self.terms = terms
        #self.image = image
        self.enable = num

    def json(self):
        return{
                'id_type':self.id_type,
                'name': self.name,
                'address': self.address,
                'phone': self.phone,
                'terms': self.terms,
                'enable': self.enable
                #'image': self.image
              }

    def insert(self):
        db.session.add(self)
        db.session.commit()


    @classmethod
    def find_by_id(cls, id_type):
        return cls.query.filter_by(id_type=id_type).first()

    @classmethod
    def bring_all(cls):
        return cls.query.all()

    def delete_item(self):
        db.session.delete(self)
        db.session.commit()

class SignatureSheetModel(db.Model):
    __tablename__ = 'tbl_signature_sheet'
    id_signature = db.Column(db.String(10), primary_key= True)
    updated = db.Column(db.DateTime, nullable = False )
    image_url = db.Column(db.String(50), nullable = True)
    id_type = db.Column(db.Integer, db.ForeignKey('tbl_type.id_type'), nullable= False)
    id_employee = db.Column(db.String(12), nullable = False)
    #type = db.relationship('TypeModel', backref = db.backref('post', lazy = True))

    def __init__(self, id_signature,updated,image_url, id_type, id_employee):
        self.id_signature = id_signature
        self.updated = updated
        self.image_url = image_url
        self.id_type = id_type
        self.id_employee = id_employee

    def json(self):
        date = self.myConvertor()
        return{
                'id_signature': self.id_signature,
                #ojo con las fechas  Object of type 'datetime' is not JSON serializable
                'updated': date,
                'image_url': self.image_url,
                'id_type': self.id_type,
                'id_employee': self.id_employee
                #pendiente jalar la relacion type
              }

    def insert(self):
        db.session.add(self)
        db.session.commit()

    @classmethod
    def find_by_id(cls, id_signature):
        return cls.query.filter_by(id_signature=id_signature).first()

    @classmethod
    def bring_all(cls):
        return cls.query.all()

    def delete_item(self):
        db.session.delete(self)
        db.session.commit()

    def myConvertor(self):
            return self.updated.__str__()
   

class SignatureProductsModel(db.Model):
    __tablename__ = 'tbl_signature_x_product'
    id = db.Column(db.Integer, autoincrement = True, unique = True)
    id_product = db.Column(db.String(15), primary_key = True, nullable = False)
    id_signature = db.Column(db.String(10), db.ForeignKey('tbl_signature_sheet.id_signature'), nullable = False, primary_key = True)

    def __init__(self, id, id_signature, id_product):
        self.id = id
        self.id_signature = id_signature
        self.id_product = id_product

    def json(self):
        return {
                    'id': self.id,
                    'id_product': self.id_product,
                    'id_signature': self.id_signature
               }

    def insert(self):
        db.session.add(self)
        db.session.commit()

    @classmethod
    def find_by_id(cls, id):
        return cls.query.filter_by(id=id).first()

    @classmethod
    def bring_all(cls):
        return cls.query.all()

    def delete_item(self):
        db.session.delete(self)
        db.session.commit()

    

    