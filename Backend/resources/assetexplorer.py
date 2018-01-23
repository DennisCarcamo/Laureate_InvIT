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


class AssetexplorerUsers(Resource):
    def get(self):
        engine = sqlalchemy.create_engine('postgresql://postgres:Laureate123$@172.20.33.55:65433/assetexplorer')
        Session = scoped_session(sessionmaker(autocommit = False, bind=engine))

        s = Session()
        result = s.execute('SELECT A.USERID	AS "USER_ID", A.EMPLOYEEID	AS "EMPLOYEE_ID", A.JOBTITLE	AS "JOB_TITLE", A.DOMAIN_ID	AS "DOMAIN_ID",  A.CIID		AS "CI_ID",  A.FIRSTNAME	AS "FIRST_NAME",  A.LASTNAME	AS "LAST NAME", C.DEPTNAME	AS "DEPARTMENT",   D.NAME		AS "SITE", G.EMAILID AS "EMAIL", G.MOBILE	AS "PHONE" FROM  SDUSER AS A  LEFT JOIN USERDEPARTMENT AS B  ON(A.USERID = B.USERID) LEFT JOIN DEPARTMENTDEFINITION AS C ON (B.DEPTID = C.DEPTID) LEFT JOIN SDORGANIZATION AS D  ON (C.SITEID = D.ORG_ID) LEFT JOIN AAAUSERCONTACTINFO AS F ON (A.USERID = F.USER_ID) INNER JOIN AAACONTACTINFO AS G ON(F.CONTACTINFO_ID = G.CONTACTINFO_ID) LIMIT 10')
        query = json.dumps( [dict(ix) for ix in result] )
        return {"query": json.loads(query) }    
            #no utilizar json. dumps este hace una conversion de un objeto a un string a diferencia del json.loads que hace la conversion a un diccionario 
        s.close()
        engine.close()

class AssetexplorerResources(Resource):
    def get(self):
        engine = sqlalchemy.create_engine('postgresql://postgres:Laureate123$@172.20.33.55:65433/assetexplorer')
        Session = scoped_session(sessionmaker(autocommit = False, bind=engine))

        s = Session()
        result = s.execute('SELECT  A.CIID           AS "ID", A.CINAME         AS "CI_NAME", B.TYPENAME       AS "CI_TYPE", C.RESOURCEID     AS "RESOURCE_ID", C.COMPONENTID    AS "COMPONENT_ID", C.ASSETTAG       AS "PRODUCT_CODE", C.SERIALNO       AS "SERIAL_NUMBER", E.BARCODE        AS "BARCODE", D.NAME           AS "SITE", F.STATEDESC      AS "STATE" FROM  CI AS A  INNER JOIN CITYPE AS B  ON(A.CITYPEID = B.TYPEID) INNER JOIN RESOURCES AS C ON(A.CIID = C.CIID) LEFT JOIN SDORGANIZATION AS D ON(A.SITEID = D.ORG_ID) LEFT JOIN BARCODES AS E ON(C.BARCODEID = E.BARCODEID) INNER JOIN RESOURCESTATE AS F ON(C.RESOURCESTATEID = F.RESOURCESTATEID) ORDER BY (B.TYPENAME) LIMIT 10')
        query = json.dumps( [dict(ix) for ix in result] )
        return {"query": json.loads(query) }    
            #no utilizar json. dumps este hace una conversion de un objeto a un string a diferencia del json.loads que hace la conversion a un diccionario 
        s.close()
        engine.close()

class Assetworkstations(Resource):
     def get(self):
        engine = sqlalchemy.create_engine('postgresql://postgres:Laureate123$@172.20.33.55:65433/assetexplorer')
        Session = scoped_session(sessionmaker(autocommit = False, bind=engine))

        s = Session()
        result = s.execute('SELECT  A.CIID           AS "ID",  A.CINAME         AS "CI_NAME", B.TYPENAME       AS "CI_TYPE", C.RESOURCEID     AS "RESOURCE_ID",  C.COMPONENTID    AS "COMPONENT_ID", C.ASSETTAG       AS "PRODUCT_CODE", C.SERIALNO       AS "SERIAL_NUMBER", E.BARCODE        AS "BARCODE", D.NAME           AS "SITE", F.STATEDESC      AS "STATE" FROM CI AS A INNER JOIN CITYPE AS B  ON(A.CITYPEID = B.TYPEID) INNER JOIN RESOURCES AS C ON(A.CIID = C.CIID) LEFT JOIN SDORGANIZATION AS D ON(A.SITEID = D.ORG_ID) LEFT JOIN BARCODES AS E ON(C.BARCODEID = E.BARCODEID) INNER JOIN RESOURCESTATE AS F ON(C.RESOURCESTATEID = F.RESOURCESTATEID) WHERE B.TYPEID = {} AND F.RESOURCESTATEID = {} LIMIT 500'.format(10,1))
        query = json.dumps( [dict(ix) for ix in result] )
        return {"query": json.loads(query) }    
            #no utilizar json. dumps este hace una conversion de un objeto a un string a diferencia del json.loads que hace la conversion a un diccionario 
        s.close()
        engine.close()   

        

