from flask import Flask, request
from flask_restful import Resource, Api, reqparse
from flask_jwt import JWT, jwt_required, current_identity
#from flask_sqlalchemy import SQLAlchemy
#from models.Item import ItemModel
from models.signature import TypeModel, SignatureSheetModel, SignatureProductsModel
import requests
import datetime
import sqlalchemy
import json
from sqlalchemy.orm import sessionmaker, scoped_session
import json
import psycopg2
from webargs import fields
from webargs.flaskparser import use_args
from app import settings, app, api

class CreateAssetRelationships():
    def hello(self):
        print("Hello world")