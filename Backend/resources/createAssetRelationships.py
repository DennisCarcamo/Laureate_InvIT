from flask import Flask, request
from flask_restful import Resource, Api, reqparse
from flask_jwt import JWT, jwt_required, current_identity
#from flask_sqlalchemy import SQLAlchemy
#from models.Item import ItemModel
from Backend.models.signature import TypeModel, SignatureSheetModel, SignatureProductsModel
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

class CreateAssetRelationships(object):
    """Create all the relationships of user and products """
    def createRelationship(self, ciid, ciid2):
        """Function that insert the relationships in the assset explorer database also update the state of the products to in use,
         the params ciid is the user id and ciid2 is the product id, the function return a message withe the result of the transaction """
        
        engine = sqlalchemy.create_engine(settings['ASSETDB'])
        session = scoped_session(sessionmaker(autocommit = True, bind=engine))
        s = session()
        #Get the max relationship id number
        max_relationship = s.execute('SELECT MAX(CIRELATIONSHIPID) FROM CIRELATIONSHIPS')
        x =  json.dumps( [dict(ix) for ix in max_relationship] )
        y = json.loads(x)
        max_relationship = y[0].get('max')
        type_uses = 3
        type_used_by = 4
        relationship_id_user = max_relationship + 1
        relationship_id_product = relationship_id_user + 1
        #Ciid => Requester id
        
        #Get the resource id of the product with the ciid2 id.
        z = s.execute('select resourceid from resources where ciid = {}'.format(ciid2))
        x =  json.dumps( [dict(ix) for ix in z] )
        y = json.loads(x)
        resource_id = y[0].get('resourceid')

        #Get the user id  
        z = s.execute('SELECT USERID FROM SDUSER WHERE CIID = {}'.format(ciid))
        x =  json.dumps( [dict(ix) for ix in z] )
        y = json.loads(x)
        user_id = y[0].get('userid')

        z = s.execute('SELECT MAX(RESOURCEOWNERID) FROM RESOURCEOWNER')
        x =  json.dumps( [dict(ix) for ix in z] )
        y = json.loads(x)        
        max_resource_id = y[0].get('max')
        resource_owner_id = max_resource_id + 1
        
        #Create a transaction
        s.begin()
        try:

            #insertamos en la tabla para crear las relaciones.
            s.execute('INSERT INTO cirelationships(cirelationshipid, ciid, ciid2, relationshiptypeid) VALUES ({}, {}, {}, {})'.format(relationship_id_user, ciid, ciid2, type_uses))
            s.execute('INSERT INTO cirelationships(cirelationshipid, ciid, ciid2, relationshiptypeid) VALUES ({}, {}, {}, {})'.format(relationship_id_product, ciid2, ciid, type_used_by))
            #insertamos en resouce-owner
            s.execute('INSERT INTO resourceowner(resourceownerid, resourceid, userid, cirelationshipid) VALUES ({}, {}, {},{})'.format(resource_owner_id,resource_id, user_id , relationship_id_user))
            #update state
            s.execute('UPDATE RESOURCES SET  resourcestateid = 2 WHERE resourceid = {}'.format(resource_id))  
            s.commit() 
            s.close()
        except:
            s.rollback()
            s.close()
            return "Something wrong"


        return "Done"
        #Session.close()