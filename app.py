from flask import Flask, request
from flask_restful import Resource, Api, reqparse
from flask_jwt import JWT, jwt_required, current_identity
from flask_sqlalchemy import SQLAlchemy

#from security import authenticate, identity

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] =  'postgresql://postgres:Javascript@localhost:5432/db_test' 
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
app.secret_key = 'jose'
api = Api(app)

@app.after_request
def after_request(response):
    """after_request."""
    valid_headers = [
        "Access-Control-Allow-Origin",
        "Content-Type",
        "Authorization"]

    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add(
        'Access-Control-Allow-Headers',
        ", ".join(valid_headers))
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')

    return response


#jwt = JWT(app, authenticate, identity)

items = [

    {
    "name": "iMac667",
    "price": 100
    },

     {
    "name": "iMac67",
    "price": 100
    }
]

class userModel(db.Model):
    __tablename__ = 'tbl_users'
    id = db.Column(db.Integer, primary_key = True)
    password = db.Column(db.String(60), unique = False)
    userName = db.Column(db.String(60), unique = True)
   
    
    def __init__(self,id,username,password):
        self.id = id
        self.userName = username
        self.password = password
       


class Item(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('price',
        type=float,
        required=True,
        help="This field cannot be left blank!"
    )

    #@jwt_required()
    def get(self, name):
        return {'item': next(filter(lambda x: x['name'] == name, items), None)}

    def post(self, name):
        if next(filter(lambda x: x['name'] == name, items), None) is not None:
            return {'message': "An item with name '{}' already exists.".format(name)}

        data = Item.parser.parse_args()

        item = {'name': name, 'price': data['price']}
        items.append(item)

        #sql postres try
        user = userModel(29,'julio','zuniga')
        print(user)
        db.session.add(user)
        db.session.commit()
        return item

#    @jwt_required()
    def delete(self, name):
        global items
        items = list(filter(lambda x: x['name'] != name, items))
        return {'message': 'Item deleted'}

    @jwt_required()
    def put(self, name):
        data = Item.parser.parse_args()
        # Once again, print something not in the args to verify everything works
        item = next(filter(lambda x: x['name'] == name, items), None)
        if item is None:
            item = {'name': name, 'price': data['price']}
            items.append(item)
        else:
            item.update(data)
        return item

class ItemList(Resource):
    def get(self):
        return {'items': items}

api.add_resource(Item, '/item/<string:name>')
api.add_resource(ItemList, '/items')

if __name__ == '__main__':
    app.run(debug=True)  # important to mention debug=True