from flask import Flask, request
from flask_restful import Resource, Api, reqparse
from flask_jwt import JWT, jwt_required, current_identity
from flask_sqlalchemy import SQLAlchemy
from resources.signature import Type, Types, SignatureSheets, SignatureSheet, SignatureProducts, Signatureproduct 
from resources.Item import Item, ItemList, items, Workstation
from resources.assetexplorer import AssetexplorerUsers, AssetexplorerResources, Assetworkstations, AssetUsersSearch, AssetProductSearch
from resources.asset import CI, test
from db import db
import os
#from webargs import fields
#from webargs.flaskparser import use_args



#from security import authenticate, identity

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] =  'postgresql://postgres:Javascript@localhost:5432/migrateTest' 
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config.from_pyfile(os.environ.get('CONFIG_FILE', 'qa.cfg'))
#db = SQLAlchemy(app)
#app.secret_key = 'jose'
api = Api(app)
settings = app.config

db.init_app(app)

@app.after_request
def after_request(response):
    """after_request."""
    valid_headers = [
        "Access-Control-Allow-Origin",
        "Content-Type",
        "Authorization"]

    response.headers.add('Access-Control-Allow-Origin', '*')
    #response.headers.add('Cache-Control', 'no-cache,no-store')
    
    response.headers.add(
        'Access-Control-Allow-Headers',
        ", ".join(valid_headers))
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')

    return response 

@app.route("/")
def hello():
    return settings['URLDB'] + 'YEY' 


from resources.asset import *

#jwt = JWT(app, authenticate, identity)
api.add_resource(Item, '/api/v1/item/<string:name>')
api.add_resource(ItemList, '/api/v1/items')
api.add_resource(CI, '/api/v1/ci/<string:name>/<int:page>')
api.add_resource(Type, '/api/v1/type/<int:id>')
api.add_resource(Types, '/api/v1/types')
api.add_resource(SignatureSheets, '/api/v1/signaturesheets')
api.add_resource(SignatureSheet, '/api/v1/signaturesheet/<string:id>')
api.add_resource(SignatureProducts, '/api/v1/signatureproducts')
api.add_resource(Signatureproduct, '/api/v1/signatureproduct/<string:id_signature>')
api.add_resource(AssetexplorerUsers, '/api/v1/assetexplorerusers/<int:page>')
api.add_resource(AssetUsersSearch, '/api/v1/assetusersearch')
api.add_resource(AssetProductSearch, '/api/v1/assetproductsearch')
api.add_resource(AssetexplorerResources, '/api/v1/assetexplorerresources')
api.add_resource(Assetworkstations, '/api/v1/assetexplorerworkstations')

api.add_resource(test, '/api/v1/test')

if __name__ == '__main__':
 
    
    app.run(debug=True)  # important to mention debug=True


    