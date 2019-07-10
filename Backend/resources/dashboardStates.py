
from flask import Flask, request
#from flask_sqlalchemy import SQLAlchemy
import requests
import datetime
import time

import sqlalchemy
import json
import json
#import psycopg2
from sqlalchemy import create_engine
from webargs import fields
from marshmallow import fields
from app import settings, app, api
from webargs.flaskparser import use_args
from flask_restful import Resource, Api, reqparse
from sqlalchemy.orm import sessionmaker, scoped_session
from flask_jwt import JWT, jwt_required, current_identity
from backend.models.signature import TypeModel, SignatureSheetModel, SignatureProductsModel
from backend.models.auth import *
from flask_jwt_extended import create_access_token, create_refresh_token, jwt_required, jwt_refresh_token_required, get_jwt_identity, get_raw_jwt

class DashboardStatesTable(Resource):
    dahboardtable = {
        'datefrom': fields.Date(required = True),
        'dateto': fields.Date(required = True),
        'page': fields.Int(required = True),

    }
    #@jwt_required
    @use_args(dahboardtable)
    def get(self,args):
        datefrom_ = args.get('datefrom', None)
        dateto_ = args.get('dateto', None)
        page = args.get('page')
        
        validate_dates = (dateto_ - datefrom_)
        x =validate_dates.days
        if x <= 0:
            return {'message':'wrong_dates'}

        str_date_from =datefrom_.strftime("%Y-%m-%d")
        quote_str_date_from = "'"+str_date_from+"'"
        str_date_to = dateto_.strftime("%Y-%m-%d")
        quote_str_date_to = "'"+str_date_to+"'"


        engine = create_engine(settings['ASSETDB'],  pool_pre_ping=True, pool_size=20, max_overflow=5) 
        engine = sqlalchemy.create_engine(settings['ASSETDB'],  pool_pre_ping=True)
        Session = scoped_session(sessionmaker(autocommit = False, bind=engine)) 
        s = Session()

        result = s.execute('SELECT EXTRACT(EPOCH FROM TIMESTAMP WITH TIME ZONE {}) * 1000 as date'.format(quote_str_date_from))

        query = json.dumps( [dict(ix) for ix in result] )
        y = json.loads(query)
        timestamp_datefrom = y[0].get('date')
        #print(timestamp_datefrom) 

        result2 = s.execute('SELECT EXTRACT(EPOCH FROM TIMESTAMP WITH TIME ZONE {}) * 1000 as date'.format(quote_str_date_to))
        query2 = json.dumps( [dict(ix) for ix in result2] )
        y2 = json.loads(query2)
        timestamp_dateto = y2[0].get('date')
        #print(timestamp_dateto) 


        format_ = "'"+'DD/MM/YYYY'+"'"
        space_ = "'"+ ' '+ "'" 
        d =s.execute('SELECT F.RESOURCENAME,F.ASSETTAG, D.DISPLAYSTATE AS "STATE", G.STATEDESC AS "PREV", TO_CHAR(TO_TIMESTAMP(D.STARTTIME / 1000), {}) AS "DATE", K.FIRSTNAME || {} || K.LASTNAME AS "NAME" FROM (SELECT A.RESOURCESTATEID,A.RESOURCEID, B.DISPLAYSTATE, A.PREVRESOURCESTATEID,A.STARTTIME, A.statehistoryid FROM RESOURCESTATEHISTORY AS A  LEFT JOIN RESOURCESTATE AS B ON (A.RESOURCESTATEID = B.RESOURCESTATEID)) AS D LEFT JOIN RESOURCES AS F ON (D.RESOURCEID = F.RESOURCEID)  LEFT JOIN RESOURCESTATE AS G ON (D.PREVRESOURCESTATEID = G.RESOURCESTATEID) LEFT JOIN RESOURCEOWNER AS J ON(J.RESOURCEID = F.RESOURCEID) left join resourceownerhistory as l on(l.statehistoryid = d.statehistoryid) left JOIN SDUSER AS K ON(l.USERID = K.USERID) WHERE D.STARTTIME BETWEEN {} AND {}  ORDER BY D.STARTTIME DESC limit 10 offset {}'.format(format_, space_, timestamp_datefrom,timestamp_dateto, page))
        dquery = json.dumps( [dict(ix) for ix in d] )

        count = s.execute('SELECT count(*) FROM (SELECT A.RESOURCESTATEID,A.RESOURCEID, B.DISPLAYSTATE, A.PREVRESOURCESTATEID,A.STARTTIME, A.statehistoryid FROM RESOURCESTATEHISTORY AS A  LEFT JOIN RESOURCESTATE AS B ON (A.RESOURCESTATEID = B.RESOURCESTATEID)) AS D LEFT JOIN RESOURCES AS F ON (D.RESOURCEID = F.RESOURCEID)  LEFT JOIN RESOURCESTATE AS G ON (D.PREVRESOURCESTATEID = G.RESOURCESTATEID) LEFT JOIN RESOURCEOWNER AS J ON(J.RESOURCEID = F.RESOURCEID) left join resourceownerhistory as l on(l.statehistoryid = d.statehistoryid) left JOIN SDUSER AS K ON(l.USERID = K.USERID)  WHERE D.STARTTIME BETWEEN {} AND {}'.format(timestamp_datefrom,timestamp_dateto))
        
        c = json.dumps( [dict(ix) for ix in count] )
        c = json.loads(c)
        count_number = c[0].get('count')

        s.close()
        #engine.close()

        return {
                    "query": json.loads(dquery),
                    "meta": {
                        "count": count_number,
                        "cursor": page + 10,
                        "more": (page + 10) < count_number
                    }
               }  



class DashboardStatesSearchTable(Resource):
    dahboardSearchtableArgs = {
        'paramSearch': fields.String(required = True),
        'page': fields.Int(required = True),
    }

    #@jwt_required
    @use_args(dahboardSearchtableArgs)
    def get(self, args):
        paramSearch = args.get('paramSearch', None)
        paramSearch_ = "'" + paramSearch + "%'"
        page = args.get('page')

        
        format_ = "'"+'DD/MM/YYYY'+"'"
        space_ = "'"+ ' '+ "'" 

        engine = create_engine(settings['ASSETDB'],  pool_pre_ping=True, pool_size=20, max_overflow=5) 
        engine = sqlalchemy.create_engine(settings['ASSETDB'],  pool_pre_ping=True)
        Session = scoped_session(sessionmaker(autocommit = False, bind=engine)) 
        s = Session()
        
        d =s.execute('SELECT F.RESOURCENAME,F.ASSETTAG, D.DISPLAYSTATE AS "STATE", G.STATEDESC AS "PREV", TO_CHAR(TO_TIMESTAMP(D.STARTTIME / 1000), {}) AS "DATE", K.FIRSTNAME || {} || K.LASTNAME AS "NAME" FROM (SELECT A.RESOURCESTATEID,A.RESOURCEID, B.DISPLAYSTATE, A.PREVRESOURCESTATEID,A.STARTTIME, A.statehistoryid FROM RESOURCESTATEHISTORY AS A  LEFT JOIN RESOURCESTATE AS B ON (A.RESOURCESTATEID = B.RESOURCESTATEID)) AS D LEFT JOIN RESOURCES AS F ON (D.RESOURCEID = F.RESOURCEID)  LEFT JOIN RESOURCESTATE AS G ON (D.PREVRESOURCESTATEID = G.RESOURCESTATEID) LEFT JOIN RESOURCEOWNER AS J ON(J.RESOURCEID = F.RESOURCEID) left join resourceownerhistory as l on(l.statehistoryid = d.statehistoryid) left JOIN SDUSER AS K ON(l.USERID = K.USERID) WHERE F.ASSETTAG LIKE {} or  F.RESOURCENAME like {} or F.SERIALNO LIKE {} ORDER BY D.STARTTIME DESC LIMIT 10 offset {}'.format(format_, space_,paramSearch_,paramSearch_,paramSearch_ , page))
        dquery = json.dumps( [dict(ix) for ix in d] )

        count = s.execute('SELECT count(*) FROM (SELECT A.RESOURCESTATEID,A.RESOURCEID, B.DISPLAYSTATE, A.PREVRESOURCESTATEID,A.STARTTIME, A.statehistoryid FROM RESOURCESTATEHISTORY AS A  LEFT JOIN RESOURCESTATE AS B ON (A.RESOURCESTATEID = B.RESOURCESTATEID)) AS D LEFT JOIN RESOURCES AS F ON (D.RESOURCEID = F.RESOURCEID)  LEFT JOIN RESOURCESTATE AS G ON (D.PREVRESOURCESTATEID = G.RESOURCESTATEID) LEFT JOIN RESOURCEOWNER AS J ON(J.RESOURCEID = F.RESOURCEID) left join resourceownerhistory as l on(l.statehistoryid = d.statehistoryid) left JOIN SDUSER AS K ON(l.USERID = K.USERID)  WHERE F.ASSETTAG LIKE {} or  F.RESOURCENAME like {} or F.SERIALNO LIKE {}'.format(paramSearch_,paramSearch_,paramSearch_))
        c = json.dumps( [dict(ix) for ix in count] )
        c = json.loads(c)
        count_number = c[0].get('count')

        s.close()
        return {
            "query": json.loads(dquery),
            "meta": {
            "count": count_number,
            "cursor": page + 10,
            "more": (page + 10) < count_number
            }
        }  


class DashboardTest(Resource):
    #@jwt_required
    def get(self):
        headVal = request.headers['test-head']
        print(headVal)
        return {'message': 'Done'}


api.add_resource(DashboardStatesTable, '/api/v1/dashboardstatetable')
api.add_resource(DashboardStatesSearchTable, '/api/v1/dashboardseachproductstate')
api.add_resource(DashboardTest, '/api/v1/dashtest')