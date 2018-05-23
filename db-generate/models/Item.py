from db import db
from sqlalchemy import Table, Column, Float, Integer, String, MetaData, ForeignKey

class ItemModel(db.Model):
    __tablename__ = 'tbl_items'
    name = db.Column(db.String(60), primary_key = True)
    price = db.Column(db.Float(2), unique = False)

    def __init__(self, name,price):
        self.name = name
        self.price = price

    def insert(self):
        db.session.add(self)
        db.session.commit()


    @classmethod
    def find_by_name(cls, name):
        return cls.query.filter_by(name=name).first()

    def json(self):
        return {'name':self.name, 'price':self.price}

    @classmethod
    def bring_all(cls):
        return cls.query.all()

    def delete_item(self):
        db.session.delete(self)
        db.session.commit()

    #def update_item():
