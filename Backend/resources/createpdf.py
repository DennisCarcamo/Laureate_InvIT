#todo lo de canvas
import os
import uuid
import pdfkit
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

class CreatePDF(object):
    def createTemplate(self, id_signature, products, user_info, document_name, ref_products):
        """Return the signature sheet template in pdf format."""

        string_length = 10
        random = str(uuid.uuid4()) # Convert UUID format to a Python string.
        random = random.upper() # Make all characters uppercase.
        random = random.replace("-","") # Remove the UUID '-'.
        pdf_name = random[0:string_length]
        path =  "Backend/pdfs/" + document_name + ".pdf"
        # "Backend/pdfs/" +
    
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

        #user info
        _signature_sheet_id = str(id_signature)
        c.drawString(464, 807, _signature_sheet_id)
        c.drawString(178,716, user_info['email'])
        full_name = user_info['first_name'] + " " + user_info['last_name']
        c.drawString(213,668, full_name)
        _updated = str(formatted_time)
        c.drawString(182,770, _updated)


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
        c.setFont('Helvetica-Bold', 9)
        textemail = c.beginText(213,729)
        textcontact = c.beginText(213,681)
        textoffice = c.beginText(458,729)
        textphone = c.beginText(443,681)

        textemail.textLine(email)
        textcontact.textLine(contact)
        textoffice.textLine(office)
        textphone.textLine(phone)

       
        c.drawText(textemail)
        c.drawText(textcontact)
        c.drawText(textoffice)
        c.drawText(textphone)
        c.drawString(45,235, "Terms & Conditions")
        c.setFont('Helvetica', 9)
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

        cord_x_product_code = 40
        cord_x_product_name = 119
        cord_x_product_serial = 299
        cord_x_product_model = 447

        
        cord_y = 592
        #List of products
        for prod in products:
            _product_code = c.beginText(cord_x_product_code, cord_y)
            _product_name = c.beginText(cord_x_product_name, cord_y)
            _product_serial = c.beginText(cord_x_product_serial, cord_y)
            _product_model = c.beginText(cord_x_product_model, cord_y)

            _product_code.textLine(prod['PRODUCT_CODE'])
            _product_name.textLine( prod['CI_NAME'])
            _product_serial.textLine( prod['SERIAL_NUMBER'])
            _product_model.textLine(prod['MODEL'])
        

            c.drawText(_product_code)
            c.drawText(_product_name)
            c.drawText(_product_serial)
            c.drawText(_product_model)

            cord_y = (cord_y - 11)

        for prod in ref_products:
            _product_code = c.beginText(cord_x_product_code, cord_y)
            _product_name = c.beginText(cord_x_product_name, cord_y)
            _product_serial = c.beginText(cord_x_product_serial, cord_y)
            _product_model = c.beginText(cord_x_product_model, cord_y)

            _product_code.textLine(prod['id_product'])
            _product_name.textLine( prod['product_name'])
            _product_serial.textLine( prod['serial_number'])
            _product_model.textLine(prod['model'])

            c.drawText(_product_code)
            c.drawText(_product_name)
            c.drawText(_product_serial)
            c.drawText(_product_model)

            cord_y = (cord_y - 11)
            
        
        #texto de firmas
        textitagent = c.beginText(145,65)
        textnamesign = c.beginText(405,65)

        textitagent.textLine(it_agent)
        textnamesign.textLine(full_name)
        c.setFont('Helvetica-Bold', 8)
        c.drawText(textitagent)
        c.drawText(textnamesign)
        c.save()
        print('guardado')

        #return send_from_directory(settings['PDFPATH'], 'plantilla.pdf', as_attachment=True)