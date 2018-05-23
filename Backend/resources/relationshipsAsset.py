from flask import Flask, request
from flask_restful import Resource, Api, reqparse
from flask_jwt import JWT, jwt_required, current_identity
#from flask_sqlalchemy import SQLAlchemy
#from models.Item import ItemModel
from backend.models.signature import TypeModel, SignatureSheetModel, SignatureProductsModel
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

class AssetRelationships(object):
    """Create all the relationships of user and products """
    def createRelationship(self, ciid, ciid2):
        """Function that insert the relationships in the assset explorer database also update the state of the products to in use,
         the params ciid is the user id and ciid2 is the product id, the function return a message withe the result of the transaction """
        
        engine = sqlalchemy.create_engine(settings['ASSETDB'],pool_pre_ping=True, pool_size=20, max_overflow=5)
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

        #Get MAX Resource owner id 
        z = s.execute('SELECT MAX(RESOURCEOWNERID) FROM RESOURCEOWNER')
        x =  json.dumps( [dict(ix) for ix in z] )
        y = json.loads(x)        
        max_resource_id = y[0].get('max')
        resource_owner_id = max_resource_id + 1
        
        #Get MAX Resource state history id
        z = s.execute('SELECT MAX(STATEHISTORYID) FROM RESOURCESTATEHISTORY')
        x =  json.dumps( [dict(ix) for ix in z] )
        y = json.loads(x)
        _max = y[0].get('max')
        resource_history_id = _max +1

        #Get Time stamp
        z = s.execute(' select extract(epoch from now()) * 1000 as "time"')
        x =  json.dumps( [dict(ix) for ix in z] )
        y = json.loads(x)
        timestamp = y[0].get('time')

        #Create a transaction
        s.begin()

        try_relationship = s.execute('SELECT COUNT(*) FROM CIRELATIONSHIPS WHERE CIID = {} AND CIID2 = {}'.format(ciid, ciid2))
        oo =  json.dumps( [dict(ix) for ix in try_relationship] )
        uuu = json.loads(oo)
        uu = uuu[0].get('count')
        print(uu)
        print('validaciones up and down')


        try_relationship2 = s.execute('SELECT COUNT(*) FROM CIRELATIONSHIPS WHERE CIID = {} AND CIID2 = {}'.format(ciid2, ciid))
        oo2 =  json.dumps( [dict(ix) for ix in try_relationship2] )
        uuu2 = json.loads(oo2)
        uu2 = uuu2[0].get('count')
        print(uu2)

        try_state = s.execute('select resourcestateid  from resources where resourceid = {}'.format(resource_id))
        str_state = json.dumps( [dict(ix) for ix in try_state] )
        json_state = json.loads(str_state)
        ciid_state = json_state[0].get('resourcestateid')
        print('state')
        print(ciid_state)
        
        f = 'f'

        try:
            #regresar el update history
            #update state
            #Insert all the relationships.
            if uu == 0:
                s.execute('INSERT INTO cirelationships(cirelationshipid, ciid, ciid2, relationshiptypeid) VALUES ({}, {}, {}, {})'.format(relationship_id_user, ciid, ciid2, type_uses))
                #insert the resource owner
                s.execute('INSERT INTO resourceowner(resourceownerid, resourceid, userid, cirelationshipid) VALUES ({}, {}, {},{})'.format(resource_owner_id,resource_id, user_id , relationship_id_user))
                print('sinrelacion')
            if uu2 == 0:
                s.execute('INSERT INTO cirelationships(cirelationshipid, ciid, ciid2, relationshiptypeid) VALUES ({}, {}, {}, {})'.format(relationship_id_product, ciid2, ciid, type_used_by))
            #Insert History
            
            if ciid_state == 1:
                s.execute('UPDATE RESOURCES SET  resourcestateid = 2 WHERE resourceid = {}'.format(resource_id))  
                s.execute('INSERT INTO resourcestatehistory(statehistoryid, resourceid, resourcestateid, prevresourcestateid, starttime, userid) VALUES ({}, {}, 2, 1, {}, 2)'.format(resource_history_id, resource_id, timestamp)) 
                #s.execute('INSERT INTO resourcestatehistory(resourceid, resourceownerid, statehistoryid, starttime, taskuserid, userid, deptid, isleased ) VALUES ({}, {}, {}, {}, 2, {}, 411,{} )'.format(resource_id,resource_owner_id, resource_history_id, timestamp,  user_id, f))

            s.commit() 
            s.close()
            #print("item inserted")
        except:
            s.rollback()
            s.close()
            print("item wrong")
            return "Something wrong"


        return "Done"
        #Session.close()

    def DeleteRelationship(self, employee_id, ciid_product):
        """Function that remove the relationships, and change the state os the preoducts to 'In Store', the return is the result of the transaction 
        in the AssetExplorer Data base."""
        engine = sqlalchemy.create_engine(settings['ASSETDB'], pool_pre_ping=True, pool_size=20, max_overflow=5)
        session = scoped_session(sessionmaker(autocommit = True, bind=engine))
        s = session()



        # get the user ciid
        #employee id is a string
        param = "'" + employee_id + "'"
        z = s.execute('SELECT CIID FROM SDUSER WHERE EMPLOYEEID = {}'.format(param))
        x =  json.dumps( [dict(ix) for ix in z] )
        y = json.loads(x)
        user_ciid = y[0].get('ciid')

        #get all the cirelationships for the user_ciid
        z = s.execute('SELECT CIRELATIONSHIPS FROM CIRELATIONSHIPS WHERE CIID = {}'.format(user_ciid))
        x =  json.dumps( [dict(ix) for ix in z] )
        user_relationships = json.loads(x)

        #Get MAX Resource state history id
        z = s.execute('SELECT MAX(STATEHISTORYID) FROM RESOURCESTATEHISTORY')
        x =  json.dumps( [dict(ix) for ix in z] )
        y = json.loads(x)
        _max = y[0].get('max')
        resource_history_id = _max +1

        #Get Time stamp
        z = s.execute(' select extract(epoch from now()) * 1000 as "time"')
        x =  json.dumps( [dict(ix) for ix in z] )
        y = json.loads(x)
        timestamp = y[0].get('time')

        #get the resourceid
        
        z = s.execute('SELECT resourceid FROM RESOURCES WHERE CIID = {}'.format(ciid_product))
        if z:
            x =  json.dumps( [dict(ix) for ix in z] )
            y = json.loads(x)
            resource_id = y[0].get('resourceid')
        else:
            return "Done"
            

        s.begin()
        try:
            #Remove relationships
            s.execute('DELETE FROM cirelationships WHERE ciid = {} and ciid2 = {}'.format(user_ciid, ciid_product))
            s.execute('DELETE FROM cirelationships WHERE ciid = {} and ciid2 = {}'.format(ciid_product, user_ciid))
            print(user_ciid)
            print(ciid_product)
            #Update state
            s.execute('UPDATE RESOURCES SET  resourcestateid = 1 WHERE resourceid = {}'.format(resource_id))
            s.execute('INSERT INTO resourcestatehistory(statehistoryid, resourceid, resourcestateid, prevresourcestateid, starttime, userid) VALUES ({}, {}, 1, 2, {}, 2)'.format(resource_history_id, resource_id, timestamp)) 
            s.commit() 
            s.close()
            print("item deleted from db")
            return "Done"            
        except:
            s.rollback()
            s.close()
            print("item wrong")
            return "Something Wrong"