from flask import Flask, request, render_template, make_response, send_from_directory, current_app
from flask_restful import Resource, Api, reqparse
#from flask_jwt import JWT, jwt_required, current_identity
from flask_sqlalchemy import SQLAlchemy
#from resources.signature import Type, Types, SignatureSheets, SignatureSheet, SignatureProducts, Signatureproduct 
#from resources.Item import Item, ItemList, items, Workstation
#from resources.assetexplorer import AssetexplorerUsers, AssetexplorerResources, Assetworkstations, AssetUsersSearch, AssetProductSearch
#from resources.asset import CI, test
from db import db
import os
import pdfkit
#import StringIO
from flask_marshmallow import Marshmallow
#todo lo de canvas
import time
from reportlab.lib.enums import TA_JUSTIFY
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Image
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus.tables import Table,TableStyle
from reportlab.pdfbase.pdfmetrics import stringWidth
from io import StringIO
import uuid
#from webargs import fields
#from webargs.flaskparser import use_args
#from security import authenticate, identity

app = Flask(__name__)

app.config.from_pyfile(os.environ.get('CONFIG_FILE', 'qa.cfg'))
#db = SQLAlchemy(app)
#app.secret_key = 'jose'
api = Api(app)
settings = app.config

app.config['SQLALCHEMY_DATABASE_URI'] =  settings['URLDB'] 
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)
ma = Marshmallow(app)
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
    """Returns a random string of length string_length."""
    string_length = 10
    random = str(uuid.uuid4()) # Convert UUID format to a Python string.
    random = random.upper() # Make all characters uppercase.
    random = random.replace("-","") # Remove the UUID '-'.
    pdf_name = random[0:string_length]
    path = "pdfs/" + pdf_name + ".pdf"
    
    formatted_time = time.ctime()
    #pdf_name = formatted_time + '.pdf'
    name = 'Julio Zuniga'
    #address
    
    Building = 'CEUTEC Building, 8th Floor'
    Town = 'Col, Matamoros Tegucigalpa '
    county = 'Francisco Morazan, Honduras'
    Phone = '2275-5780' 

    text = 'The user must answer for any damages or partial or total loss, it is your responsability to return the computer equipment or devices in good condition within the established schedule service. to request any device or computer equipment must submit a ticket directed to the email: helpdeskit@laureate.net'
    #text = stringWidth(text, 'Helvetica-Bold', 9)
    #p = Paragraph(text, para)
    c = canvas.Canvas(path)
    c.setFont('Helvetica', 9)
    #city = stringWidth(Town, 'Helvetica-Bold', 9 )
    #Estructura
    c.drawImage('log.jpg', 20, 700, height=130, width=100)
    c.roundRect(408, 800, 1.8*inch, 0.30*inch, radius=2)
    c.rect(170,760,2*inch,0.40*inch)
    
    c.rect(170,726,2*inch,0.20*inch)
    c.rect(170,712,2*inch,0.20*inch)
    
    c.rect(170,678,2*inch,0.20*inch)
    c.rect(170,664,2*inch,0.20*inch)

    c.rect(400,760,2*inch,0.40*inch)

    c.rect(400,726,2*inch,0.20*inch)
    c.rect(400,712,2*inch,0.20*inch)

    c.rect(400,678,2*inch,0.20*inch)
    c.rect(400,664,2*inch,0.20*inch)

    c.drawString(20,690, Building)
    c.drawString(20,680, Town)
    c.drawString(20,670, county)
    c.drawString(20,660, Phone)

    c.rect(35,280, 7.3*inch, 5*inch )
    c.rect(35,280, 1.1*inch, 5*inch)
    c.rect(35,280, 3.6*inch, 5*inch)
    c.rect(35,280, 5.6*inch, 5*inch)
    c.rect(35,280, 7.3*inch, 5*inch)

    c.rect(35,604, 7.3*inch, 0.5*inch)

    c.rect(35,170, 7.3*inch, 1.1*inch )

    c.line(75, 80, 275,80)
    c.line(335, 80, 535,80)

    #encabezados
    email = 'Email Addres' 
    contact = 'Contact Name'
    office = 'Office'
    phone = 'Customer Phone'

    product_code = 'Product code'
    product_name = 'Product Name'
    serial = 'Serial'
    model = 'Model'

    it_agent = 'IT Agent'



    #Asignar Tereminos 
    length = len(text)
    part1 = text[0:125]
    part2 = text[125: 245]
    part3 = text[245:length]
    textobject1 = c.beginText(45, 220)
    textobject2 = c.beginText(45,210 )
    textobject3 = c.beginText(45, 200)
    
    textobject1.textLine(part1)
    textobject2.textLine(part2)
    textobject3.textLine(part3)
    c.drawText(textobject1)
    c.drawText(textobject2)
    c.drawText(textobject3)  

    #Asignar Encabezados

    textemail = c.beginText(213,729)
    textcontact = c.beginText(213,681)
    textoffice = c.beginText(458,729)
    textphone = c.beginText(443,681)

    textemail.textLine(email)
    textcontact.textLine(contact)
    textoffice.textLine(office)
    textphone.textLine(phone)

    c.setFont('Helvetica-Bold', 8)
    c.drawText(textemail)
    c.drawText(textcontact)
    c.drawText(textoffice)
    c.drawText(textphone)
    c.setFont('Helvetica', 8)
    #encabezados de tabla
    textpcode = c.beginText(41, 616)
    textpname = c.beginText(177, 616)
    textserial = c.beginText(350, 616)
    textmodel = c.beginText(480, 616)

    textpcode.textLine(product_code)
    textpname.textLine(product_name)
    textserial.textLine(serial)
    textmodel.textLine(model)

    c.drawText(textpcode)
    c.drawText(textpname)
    c.drawText(textserial)
    c.drawText(textmodel)

    #texto de firmas
    textitagent = c.beginText(145,65)
    textnamesign = c.beginText(405,65)

    textitagent.textLine(it_agent)
    textnamesign.textLine(name)
    c.setFont('Helvetica-Bold', 8)
    c.drawText(textitagent)
    c.drawText(textnamesign)

 # move the origin up and to the left
   # c.translate(inch,inch)
 # define a large font
    #c.setFont("Helvetica", 80)
 # choose some colors
    #c.setStrokeColorRGB(0.2,0.5,0.3)
    #c.setFillColorRGB(1,0,1)
 # draw a rectangle
    #c.rect(inch,inch,6*inch,9*inch, fill=1)
 # make text go straight up
    #c.rotate(90)
 # change color
   # c.setFillColorRGB(0,0,0.77)
 # say hello (note after rotate the y coord needs to be negative!)
   # c.drawString(3*inch, -3*inch, "Hello World")
   # c.showPage()
    c.save()

    return send_from_directory(settings['PDFPATH'], 'plantilla.pdf', as_attachment=True)
    
    #return "Hola carlos"
    ################################## story ######################
    #buffer = self.buffer
   # c = canvas.Canvas("sample5.pdf")
   # z=200
   # y = 50
   # collection = ['hey', 'hey2' , 'hey3']
   # for x in collection:
   #     c.drawString(z, y, x)
   #     z = z-10
   #     y = y +10
   # c.save()
   # doc = SimpleDocTemplate("form_letter17.pdf",pagesize=letter, rightMargin=10,leftMargin=10, topMargin=10,bottomMargin=10)
   # Story=[]
   # logo = "logo.png"    
   # magName = "Pythonista"
   # issueNum = 12
   # subPrice = "99.00"
   # limitedDate = "03/05/2010"
   # freeGift = "tin foil hat"
 
   # formatted_time = time.ctime()
    #full_name = "Mike Driscoll"
   # address_parts = ["CEUTEC Building, 8th Floor", "Col. Matamoros Tegucigalpa", "Francisco Morazan Honduras" "Phone 22755780"]
    #addres = 'CEUTEC Building, 8th Floor, '
    #addresstext = '<font size=12>%s</font>' % addres


    #im = Image(logo, 2.5*inch, 0.8*inch,  hAlign='LEFT')
    
   # styles=getSampleStyleSheet()
   # styles.add(ParagraphStyle(name='Justify', alignment=TA_JUSTIFY))
    #Story.append(Paragraph(addresstext, styles["Normal"]))
    #Story.append(Spacer(, 0, isGlue=False))
   # Story.append(im)

   # ptext = 'Updated' + '<font size=12>%s</font>' % formatted_time
 
   # Story.append(Paragraph(ptext, styles["Normal"]))
   # Story.append(Spacer(1, 12))
 
# Create return address
    #ptext = '<font size=12>%s</font>' % full_name
    #Story.append(Paragraph(ptext, styles["Normal"]))       
   # for part in address_parts:
   #     ptext = '<font size=12>%s</font>' % part.strip()
   #     Story.append(Paragraph(ptext, styles["Normal"]))   

    #ptext = '<font size=12>Dear %s:</font>' % full_name.split()[0].strip()
    #Story.append(Paragraph(ptext, styles["Normal"]))
   # Story.append(Spacer(1, 12))
   # data= [['Porduct Code', 'Product name', 'Serial Number', 'Model']]
        
    #t=Table(data,5*[2*inch], 4*[3*inch])
    #t.setStyle(TableStyle([('ALIGN','CENTER')]))
    #Story.append(t)
 
    #ptext = '<font size=12>We would like to welcome you to our subscriber base for %s Magazine! \
    #        You will receive %s issues at the excellent introductory price of $%s. Please respond by\
    #        %s to start receiving your subscription and get the following free gift: %s.</font>' % (magName, 
    #                                                                                            issueNum,
    #                                                                                            subPrice,
    #                                                                                            limitedDate,
    #                                                                                            freeGift)
    #Story.append(Paragraph(ptext, styles["Justify"]))
    #Story.append(Spacer(1, 12))
 
    #doc.build(Story)
    #pdf = buffer.getvalue()
    #buffer.close()
    #return formatted_time


 #-------------------------------------------------------------------------------------------------------------
    #path_wkthmltopdf = r'C:\Program Files\wkhtmltopdf\bin\wkhtmltopdf.exe'
    #config = pdfkit.configuration(wkhtmltopdf=path_wkthmltopdf)
    #rendered = render_template('pdf_template.html')
    #pdfkit.from_url("https://pypi.python.org/pypi/pdfkit", "templates/out42.pdf", configuration=config)

    #return "pdf"

    #file = open('out2.pdf', 'r')
    #response = make_response(file)
    #response.headers['Content-Type']= 'application/pdf'
    #response.headers['Content-disposition'] = 'inline; filename=out3.pdf'

    #return response
#------------------------------------------------------------wkhtmltopdf---------------------------------------------

from resources.assetexplorer import *
from resources.signatureTypes import *
from resources.signaturesheets import *
from resources.signaturesheetproducts import *
#from resources.createAssetRelationships import *

#jwt = JWT(app, authenticate, identity)
#api.add_resource(Item, '/api/v1/item/<string:name>')
#api.add_resource(ItemList, '/api/v1/items')
#api.add_resource(CI, '/api/v1/ci/<string:name>/<int:page>')
#api.add_resource(Type, '/api/v1/type/<int:id>')
#api.add_resource(Types, '/api/v1/types')
#api.add_resource(SignatureSheets, '/api/v1/signaturesheets')
#api.add_resource(SignatureSheet, '/api/v1/signaturesheet/<string:id>')
#api.add_resource(SignatureProducts, '/api/v1/signatureproducts')
#api.add_resource(Signatureproduct, '/api/v1/signatureproduct/<string:id_signature>')
#api.add_resource(AssetexplorerUsers, '/api/v1/assetexplorerusers/<int:page>')
#api.add_resource(AssetUsersSearch, '/api/v1/assetusersearch')
#api.add_resource(AssetProductSearch, '/api/v1/assetproductsearch')
#api.add_resource(AssetexplorerResources, '/api/v1/assetexplorerresources')
#api.add_resource(Assetworkstations, '/api/v1/assetexplorerworkstations')

#api.add_resource(test, '/api/v1/test')

if __name__ == '__main__':
 
    
    app.run(debug=True)  # important to mention debug=True


    