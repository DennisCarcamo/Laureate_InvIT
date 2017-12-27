from flask import Flask, request
from flask_restful import Resource, Api, reqparse
from flask_jwt import JWT, jwt_required, current_identity
from flask_sqlalchemy import SQLAlchemy
from resources.Item import Item, ItemList, items

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
api.add_resource(Item, '/item/<string:name>')
api.add_resource(ItemList, '/items')

if __name__ == '__main__':
    app.run(debug=True)  # important to mention debug=True