from backend import db
from sqlalchemy import Table, Column, Float, Integer, String, MetaData, ForeignKey, DateTime, Date, and_, or_
from datetime import datetime
import json

class TypeModel(db.Model):
    __tablename__ = 'tbl_type'
    id_type = db.Column(db.Integer, autoincrement=True, primary_key = True)
    name =    db.Column(db.String(80), nullable=False)
    address = db.Column(db.String(400), nullable = False)
    phone =   db.Column(db.String(20), nullable = False)
    terms =   db.Column(db.String(500), nullable = False)
    image =   db.Column(db.String(100), nullable = True)
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
    id_signature = db.Column(db.Integer, autoincrement=True, primary_key = True)
    updated = db.Column(db.Date, nullable = False )
    #image_url = db.Column(db.String(50), nullable = True)
    id_type = db.Column(db.Integer, db.ForeignKey('tbl_type.id_type'), nullable= False)
    id_employee = db.Column(db.String(12), nullable = False)
    first_name = db.Column(db.String(20), nullable = False)
    last_name = db.Column(db.String(20), nullable = False)
    email = db.Column(db.String(55), nullable = False)
    phone = db.Column(db.String(55), nullable = True)

    #type = db.relationship('TypeModel', backref = db.backref('post', lazy = True))
    status = db.Column(db.Integer, nullable= True)
    last = db.Column(db.Integer, nullable = True)

    def __init__(self,updated, id_type, id_employee,first,lastn,email, status, last, phone):
        #self.id_signature = id_signature
        self.updated = updated
        #self.image_url = image_url
        self.id_type = id_type
        self.id_employee = id_employee
        self.first_name = first
        self.last_name = lastn
        self.email = email
        self.status = status
        self.last = last
        self.phone = phone


    def json(self):
        date = self.myConvertor()
        return{
                'id_signature': self.id_signature,
                #ojo con las fechas  Object of type 'datetime' is not JSON serializable
                'updated': date,
                #'image_url': self.image_url,
                'id_type': self.id_type,
                'id_employee': self.id_employee,
                'first_name': self.first_name,
                'last_name': self.last_name,
                'email': self.email,
                'phone': self.phone,
                'status': self.status,
                'last': self.last
                #pendiente jalar la relacion type
              }

    def insert(self):
        db.session.add(self)
        db.session.commit()

    @classmethod
    def find_by_id(cls, id_signature):
        return cls.query.filter_by(id_signature=id_signature).first()

    @classmethod
    def get_last_id(cls, employee_id):
        res = cls.query.filter_by(id_employee= employee_id, id_type = 4 ).order_by(cls.id_signature.desc()).first()
        if res:
            return res
        else:
            res =  cls.query.filter_by(id_employee= employee_id, id_type = 1 ).order_by(cls.id_signature.desc()).first()
            return res

    @classmethod
    def get_last_sheet(cls, employee_id):
        return cls.query.filter_by(id_employee= employee_id).order_by(cls.id_signature.desc()).first()

    @classmethod
    def get_last_date(cls):
        return cls.query.order_by(cls.updated.desc()).all()

    @classmethod
    def get_onboarding(cls,employee_id ):
        #return cls.query.filter_by(and_(id_employee= employee_id, id_type = 1) ).order_by(cls.id_signature.desc()).first()
        return cls.query.filter_by(id_employee= employee_id, id_type = 1).order_by(cls.updated.desc()).first()

    #funcion para jalar fecha de retorno.
    @classmethod
    def get_return_day(cls, id_signature_):
        return cls.query.filter_by(id_signature = id_signature_).order_by(cls.updated.desc()).first()

    @classmethod
    def bring_all(cls):
        return cls.query.all()

    def delete_item(self):
        db.session.delete(self)
        db.session.commit()

    def myConvertor(self):
            return self.updated.__str__()
    
    def commit_(self):
        db.session.commit()

    def updatedLoan(self):
        self.status = 2
        db.session.commit()

        
        

   

class SignatureProductsModel(db.Model):
    __tablename__ = 'tbl_signature_x_product'
    id = db.Column(db.Integer, autoincrement = True, primary_key = True)
    id_product = db.Column(db.String(25),  nullable = False)
    ciid = db.Column(db.Integer,  nullable = True)
    id_signature = db.Column(db.Integer, db.ForeignKey('tbl_signature_sheet.id_signature'), nullable = False)
    product_name =  db.Column(db.String(65),  nullable = False)
    serial_number = db.Column(db.String(35),  nullable = True)
    model =  db.Column(db.String(30),  nullable = True)

    def __init__(self, id_signature, id_product, product_name, serial_number, model, ciid):
        #self.id = id
        self.id_signature = id_signature
        self.id_product = id_product
        self.product_name = product_name
        self.serial_number = serial_number
        self.model = model
        self.ciid = ciid

    def json(self):
        return {
                    'id': self.id,
                    'id_product': self.id_product,
                    'id_signature': self.id_signature,
                    'product_name': self.product_name,
                    'serial_number': self.serial_number,
                    'model': self.model,
                    'ciid': self.ciid
               }
               

    def insert(self):
        db.session.add(self)
        db.session.commit()

    @classmethod
    def find_by_id(cls, id):
        return cls.query.filter_by(id_signature=id).all()

    @classmethod
    def bring_all(cls):
        return cls.query.all()

    def delete_item(self):
        db.session.delete(self)
        db.session.commit()

class ImageModel(db.Model):
    __tablename__ = 'tbl_images'
    id_image = db.Column(db.Integer, autoincrement = True,primary_key = True )
    id_signature = db.Column(db.Integer, db.ForeignKey('tbl_signature_sheet.id_signature'), nullable = False)
    date = db.Column(db.Date, nullable = False)
    image_url = db.Column(db.String(50), nullable = False)

    def __init__(self, id_signature, date, url):
        self.id_signature = id_signature
        self.date = date
        self.image_url = url
    

    def json(self):
        return {
                    'id': self.id_image,
                    'id_signature': self.id_signature,
                    'date': self.date,
                    'image_url': self.image_url 
               }

    def insert(self):
        db.session.add(self)
        db.session.commit()

    @classmethod
    def find_by_id(cls, id):
        return cls.query.filter_by(id_signature=id).all()

    @classmethod
    def bring_all(cls):
        return cls.query.all()

    def delete_item(self):
        db.session.delete(self)
        db.session.commit()



    