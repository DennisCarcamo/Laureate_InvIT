from db import db
from sqlalchemy import Table, Column, Float, Integer, String, MetaData, ForeignKey, DateTime, Date
from datetime import datetime
import json


class LicenseModel(db.Model):
    __tablename__ = 'tbl_license'
    id_license = db.Column(db.Integer, autoincrement=True, primary_key=True)
    name_product = db.Column(db.String(150), nullable=False)
    licences = db.Column(db.String(100), nullable=False)
    vendor = db.Column(db.String(100), nullable=False)
    adquisition_date = db.Column(db.Date, nullable=False)
    date_expiration = db.Column(db.Date, nullable=False)
    version_product = db.Column(db.String(8), nullable=False)
    max_users = db.Column(db.Integer, nullable=False)
    accountable = db.Column(db.String(50), nullable=True)
    price = db.Column(db.Integer, nullable=False)
    enable = db.Column(db.SMALLINT, nullable=False)

    def __init__(self, name_product, licences, vendor, adquisition_date,
        date_expiration, version_product, max_users, accountable, price, enable):
        self.name_product = name_product
        self.licences = licences
        self.vendor = vendor
        self.adquisition_date = adquisition_date
        self.date_expiration = date_expiration
        self.version_product = version_product
        self.max_users = max_users
        self.accountable = accountable
        self.price = price
        self.enable = enable

    def json(self):
        return{
            'id_license': self.id_license,
            'name_product': self.name_product,
            'licences': self.licences,
            'vendor': self.vendor,
            'adquisition_date': self.adquisition_date.__str__(),
            'date_expiration': self.date_expiration.__str__(),
            'version_product': self.version_product,
            'max_users': self.max_users,
            'accountable': self.accountable,
            'price': self.price,
            'enable': self.enable
        }

    def insert(self):
        db.session.add(self)
        db.session.commit()

    def delete_item(self):
        db.session.delete(self)
        db.session.commit()

    def insert_item(self):
        db.session.commit()


class workstatiosModel(db.Model):
    __tablename__ = 'tbl_workstatios_license'
    id_relationship = db.Column(
        db.Integer, autoincrement=True, primary_key=True)
    id_license = db.Column(db.Integer, db.ForeignKey(
        'tbl_license.id_license'), nullable=False)
    name_computer = db.Column(db.String(50), nullable=False)
    tag = db.Column(db.String(20), nullable=False)
    serial = db.Column(db.String(30), nullable=False)
    enable = db.Column(db.SMALLINT, nullable=False)

    def __init__(self, id_relationship, id_license, name_computer, tag, serial):
        self.id_relationship = id_relationship,
        self.id_license = id_license,
        self.name_computer = name_computer,
        self.tag = tag,
        self.serial = serial
        self.enable = enable

    def json(self):
        return{
            'id_relationship': self.id_relationship,
            'id_license': self.id_license,
            'name_computer': self.name_computer,
            'tag': self.tag,
            'serial': self.serial,
            'enable': self.enable
        }

    def insert(self):
        db.session.add(self)
        db.session.commit()

    # @classmethod
    # def find_by_id(cls, id_type):
    #    return cls.query.filter_by(id_type=id_type).first()

    @classmethod
    def bring_all(cls):
        return cls.query.all()

    def delete_item(self):
        db.session.delete(self)
        db.session.commit()
