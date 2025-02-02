

#from flask_jwt import JWT, jwt_required, current_identity

#from resources.signature import Type, Types, SignatureSheets, SignatureSheet, SignatureProducts, Signatureproduct 
#from resources.Item import Item, ItemList, items, Workstation
#from resources.assetexplorer import AssetexplorerUsers, AssetexplorerResources, Assetworkstations, AssetUsersSearch, AssetProductSearch
#from resources.asset import CI, test
#from Backend.db import db

import os
import uuid
import pdfkit
import time
#import StringIO
from flask_marshmallow import Marshmallow
from flask_restful import Resource, Api, reqparse
from flask_sqlalchemy import SQLAlchemy
from werkzeug.utils import secure_filename
#todo lo de canvas
from reportlab.lib.enums import TA_JUSTIFY
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Image
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus.tables import Table,TableStyle
from reportlab.pdfbase.pdfmetrics import stringWidth
from io import StringIO
from backend import db
from werkzeug.datastructures import FileStorage
from flask_wtf import FlaskForm

from wtforms import Form, BooleanField, StringField, PasswordField, validators
from flask_jwt_extended import ( JWTManager, jwt_required, create_access_token, get_jwt_identity)
from flask_jwt import *
#from backend.resources.auth import Token

#reports
#Autogenerated by ReportLab guiedit do not edit
from reportlab.graphics.shapes import Rect, Circle
from reportlab.pdfgen.canvas import Canvas
from reportlab.lib.colors import CMYKColorSep
from flask import Flask, request, render_template, make_response, send_from_directory, current_app, redirect, url_for,flash, jsonify, flash, send_file

#email
import smtplib

#from webargs import fields
#from webargs.flaskparser import use_args
#from security import authenticate, identity

app = Flask(__name__)

app.config.from_pyfile(os.environ.get('CONFIG_FILE', 'qa.cfg'))
#db = SQLAlchemy(app)
app.secret_key = '23456787654323456678jkhgfdsfkjhgfd'
api = Api(app)
settings = app.config


app.config['SQLALCHEMY_DATABASE_URI'] =  settings['URLDB'] 
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_POOL_SIZE'] = 20
app.config['SQLALCHEMY_MAX_OVERFLOW'] = 10


db.init_app(app)
ma = Marshmallow(app)
jwt = JWTManager(app)
app.config['JWT_SECRET_KEY'] = 'kwajsiwd56d4w962wd6262326t543kwuhi")jhb/&%$3S67)(u09?¡jhv228573w3e41frerf186g54g4565534uig367t7636rtujyhgbt!$6yc56/&v76jehdbjfe1ry354h3rt5h4156yh'
ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])


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

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route('/upload/<string:name>', methods=['POST'])
def upload_file(name):
    if request.method == 'POST':
        #file = request.files['file']
        #quietar la contrapleca en produccion.
        #desarrollo
        #f = settings['UPLOAD_FOLDER'] + '\{}.pdf'.format(name)
        #produccion
        f = settings['UPLOAD_FOLDER'] + '{}.pdf'.format(name)
        fa = request.files.get('pdf')
        fa.save(f)
        res = {'message': 'Done'}
        return jsonify(res)


@app.route('/')
def home():
    name = request.cookies.get('token')
    if name:
        return render_template('index.html')
    else:
        resp = make_response(redirect('/login'))
        return resp


class RegistrationForm(Form):
    username = StringField('', [validators.Length(min=4, max=25)])
    password = StringField('', [validators.Length(min=4, max=25)])

@app.route('/newsheet')
def newsheet():
    name = request.cookies.get('token')
    if name:
        return render_template('index.html')
    else:
        resp = make_response(redirect('/login'))
        return resp

@app.route('/updatesheet')
def updatesheet():
    name = request.cookies.get('token')
    if name:
        return render_template('index.html')
    else:
        resp = make_response(redirect('/login'))
        return resp

@app.route('/tables')
def table():
    name = request.cookies.get('token')
    if name:
        return render_template('index.html')
    else:
        resp = make_response(redirect('/login'))
        return resp

@app.route('/lifetime')
def lifetime():
    name = request.cookies.get('token')
    if name:
        return render_template('index.html')
    else:
        resp = make_response(redirect('/login'))
        return resp

@app.route('/loan')
def loan():
    name = request.cookies.get('token')
    if name:
        return render_template('index.html')
    else:
        resp = make_response(redirect('/login'))
        return resp

@app.route('/pdf')
def pdf():
    name = request.cookies.get('token')
    if name:
        return render_template('index.html')
    else:
        resp = make_response(redirect('/login'))
        return resp

@app.route('/loansheets')
def loansheets():
    name = request.cookies.get('token')
    if name:
        return render_template('index.html')
    else:
        resp = make_response(redirect('/login'))
        return resp

@app.route('/reports')
def reports():
    name = request.cookies.get('token')
    if name:
        return render_template('index.html')
    else:
        resp = make_response(redirect('/login'))
        return resp

@app.route('/dashboard')
def dashboard():
    name = request.cookies.get('token')
    if name:
        return render_template('index.html')
    else:
        resp = make_response(redirect('/login'))
        return resp

@app.route('/admin')
def admin():
    name = request.cookies.get('token')
    if name:
        return render_template('index.html')
    else:
        resp = make_response(redirect('/login'))
        return resp


@app.route('/login', methods=['GET', 'POST'])
def register():
    form = RegistrationForm(request.form)
    if request.method == 'POST' and form.validate():
        validation = UserAuthentication()
        value = validation.loginAuthentication(request.form.get('username'), request.form.get('password'))


        if value == 'authenticated':
            user = UsersModel.query.filter_by(user_name=request.form.get('username')).add_columns(UsersModel.id_role ).first()
            p = PrivilegesRolesModel.query.filter_by(id_role = user[1]).join(PrivilegesModel, PrivilegesRolesModel.id_privilege==PrivilegesModel.id).add_columns(PrivilegesModel.privilege_name,PrivilegesModel.id )
            x =[]
            if p:
                for item in p:
                    x.append({'privilege' : item[1]})

            auth = Token()
            token = auth.createToken(request.form.get('username'), x)
            #return jsonify(token)
            resp = make_response(render_template('index.html'))
            resp.set_cookie('token', token)
            return resp
        else:
            #print(value)
            return render_template('login.html', form=form)

    return render_template('login.html', form=form)

@app.route('/getcookie')
def getcookie():
    name = request.cookies.get('token')
    res = {'message': 'Done'}

    return jsonify(res)


@app.route('/logout')
def descookie():
    resp = make_response(redirect('/login'))
    resp.set_cookie('token','', expires=0 )
    return resp


@app.route('/template')
def temp():
    email_user = 'rrastapon@gmail.com'
    email_send = 'julio.zuniga@laureate.net'

    server = smtplib.SMTP('smtp.gmail.com',587)
    server.starttls()
    server.login(email_user, 'Javascript96')

    message = 'GG'
    server.sendmail(email_user, email_send, message)
    server.quit()
    return 'hello0'


@app.route("/pdf/<string:pdf_name>")
def pdfs(pdf_name):
    name = pdf_name + '.pdf'
    return send_from_directory(settings['PDFSAVEPATH'], name, as_attachment=True)

@app.route("/scannedpdf/<string:pdf_name>")
def searchPdf(pdf_name):
    name = pdf_name + '.pdf'
    return send_from_directory(settings['UPLOAD_FOLDER'], name, as_attachment=True)

@app.route("/assets/images/<string:image_name>")
def searchImages(image_name):
    name = image_name + '.jpg'
    #return send_from_directory(settings['FRONTENDIMAGESPATH'], image_name)
    #print(image_name)
    #return url_for('static', filename=image_name)
    path = './templates/assets/images/' + image_name
    return send_file(path, mimetype='image')

from backend.resources.assetexplorer import *
from backend.resources.signatureTypes import *
from backend.resources.signaturesheets import *
from backend.resources.signaturesheetproducts import *
from backend.resources.dashboard import *
from backend.resources.auth import *
from backend.resources.user_management import *
from backend.resources.loansheets import *
from backend.resources.lifetime import *
from backend.resources.dashboardStates import *
from backend.resources.images import *


if __name__ == '__main__':
 
    app.run(debug=True)  # important to mention debug=True


    