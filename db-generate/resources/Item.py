from flask import Flask, request
from flask_restful import Resource, Api, reqparse
from flask_jwt import JWT, jwt_required, current_identity
#from flask_sqlalchemy import SQLAlchemy
from models.Item import ItemModel
from models.signature import *
from models.auth import *
from models.license import *

items = []

class Item(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('price',
        type=float,
        required=True,
        help="This field cannot be left blank!"
    )

    #@jwt_required()
    def get(self, name):
        item = ItemModel.find_by_name(name)

        if item:
            return item.json()
        return {'messege': 'nothing found'}

    def post(self, name):
        if next(filter(lambda x: x['name'] == name, items), None) is not None:
            return {'message': "An item with name '{}' already exists.".format(name)}

        data = Item.parser.parse_args()

        item = ItemModel(name, data['price'])
        
        try:
            item.insert()
            #items.append(item)
        except:
            return{'messege': "something wrong probably item already exist"}


        #sql postres try
        return {'messege': "item insert into the data base"}

#    @jwt_required()
    def delete(self, name):
        #global items
        #items = list(filter(lambda x: x['name'] != name, items))
        #data = Item.parser.parse_args()
        item = ItemModel.find_by_name(name)
        
        try:
            item.delete_item()
        except:
            return {'messege': "Item could not be delete probably does not exist"}

        return {'messege': "item deleted"}

    #@jwt_required()
    def put(self, name):
        data = Item.parser.parse_args()
        # Once again, print something not in the args to verify everything works
        #item = next(filter(lambda x: x['name'] == name, items), None)
        #if item is None:
        #    item = {'name': name, 'price': data['price']}
        #    items.append(item)
        #else:
        #    item.update(data)
        #return item
        item = ItemModel.find_by_name(name)
        if item:
            item.price = data['price']
        else:
            return {'message':"Not item found with that name" }
        
        item.insert()
        return{'messege':"Item price updated"}
class ItemList(Resource):
    def get(self):
        item = ItemModel.query.all()
        if item:
            return{'items':  list(map(lambda x: x.json(), ItemModel.query.all()))}
            #return{'items': ItemModel.query.all()} 