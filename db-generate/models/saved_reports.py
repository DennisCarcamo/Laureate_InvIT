from db import db
from sqlalchemy import Table, Column, Float, Integer, String, MetaData, ForeignKey, DateTime, Date
from datetime import datetime
import json


class SavedReportModel(db.Model):
    __tablename__ = 'tbl_saved_reports'
    id_report = db.Column(db.Integer, autoincrement = True, primary_key = True)
    created_by = db.Column(db.String (100),  nullable = False)
    created_at = db.Column(db.String (15),  nullable = False)
    description = db.Column(db.String (255),  nullable = False)  
    report_type = db.Column(db.String (30),  nullable = False)
    report_values = db.Column(db.String (300),  nullable = False)  
    report_name = db.Column(db.String (255),  nullable = False)

    def __init__(self,created_by, created_at, description, report_type, report_values, report_name):
        self.created_by = created_by
        self.created_at = created_at
        self.description = description
        self.report_type = report_type
        self.report_values = report_values
        self.report_name = report_name
    
    def json(self):
        return {
            'id_report': self.id_report,
            'created_by':self.created_by,
            'created_at':self.created_at,
            'description':self.description,
            'report_type':self.report_type,
            'report_values':self.report_values,
            'report_name':self.report_name
        }
    
    def insert(self):
        db.session.add(self)
        db.session.commit()
    
    
    @classmethod
    def bring_all(cls):
        return cls.query.all()