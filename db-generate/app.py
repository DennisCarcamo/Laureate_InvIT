from flask_marshmallow import Marshmallow
from flask_restful import Resource, Api, reqparse
from flask_sqlalchemy import SQLAlchemy
from db import db
import os
from flask import Flask, request, render_template, make_response, send_from_directory, current_app

app = Flask(__name__)

app.config.from_pyfile(os.environ.get('CONFIG_FILE', 'qa.cfg'))
#db = SQLAlchemy(app)
#app.secret_key = 'jose'
api = Api(app)
settings = app.config

app.config['SQLALCHEMY_DATABASE_URI'] =  settings['URLDB'] 
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

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

from resources.Item import *

if __name__ == '__main__':
 
    app.run(debug=True) 