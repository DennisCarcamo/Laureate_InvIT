from db import db
from sqlalchemy import Table, Column, Float, Integer, String, MetaData, ForeignKey, DateTime
from datetime import datetime

class Type(db.Model):
    __tablename__ = 'tbl_type'
    id_type = db.Column(db.Integer, autoincrement=True, primary_key = True)
    name =    db.Column(db.String(40), nullable=False)
    address = db.Column(db.String(80), nullable = False)
    phone =   db.Column(db.String(15), nullable = False)
    terms =   db.Column(db.String(200), nullable = False)
    image =   db.Column(db.String(30), nullable = True)

    def __init__(self, id_type, name, address, phone, terms, image):
        self.id_type = id_type
        self.name = name
        self.address = address,
        self.phone = phone
        self.terms = terms
        self.image = image

    def json(self):
        return{
                'id_type':self.id_type,
                'name': self.name,
                'address': self.address,
                'phone': self.phone,
                'terms': self.terms,
                'image': self.image
              }

    def insert(self):
        db.session.add(self)
        db.session.commit()


    @classmethod
    def find_by_name(cls, name):
        return cls.query.filter_by(name=name).first()

    @classmethod
    def bring_all(cls):
        return cls.query.all()

    def delete_item(self):
        db.session.delete(self)
        db.session.commit()

class SignatureSheet(db.Model):
    __tablename__ = 'tbl_signature_sheet'
    id_signature = db.Column(db.String(10), primary_key= True)
    updated = db.Column(db.DateTime, nullable = False )
    image_url = db.Column(db.String(50), nullable = True)
    id_type = db.Column(db.Integer, db.ForeignKey('tbl_type.id_type'), nullable= False)
    type = db.relationship('Type', backref = db.backref('post', lazy = True))

    def __init__(self, id_signature,updated,image_url, id_type):
        self.id_signature = id_signature
        self.updated = updated
        self.image_url = image_url
        self.id_type = id_type

class SignatureProducts(db.Model):
    __tablename__ = 'tbl_signature_x_product'
    id = db.Column(db.Integer, autoincrement = True, unique = True)
    id_product = db.Column(db.String(15), primary_key = True, nullable = False)
    id_signature = db.Column(db.String(10), db.ForeignKey('tbl_signature_sheet.id_signature'), nullable = False, primary_key = True)

    def __init__(self, id, id_signature, id_product):
        self.id = id
        self.id_signature = id_signature
        self.id_product = id_product