import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { element } from 'protractor';
import 'rxjs/add/operator/map';

@Injectable()
export class DashboardService {

  constructor(private httpClient:HttpClient) { }


  getTest(){
    return "Hello Dashboard"
  }

  loadInitialDashboard(){
    return this.httpClient.get(`http://127.0.0.1:5000/api/v1/dashboard`).map(result => result);
  }

  inStoreModels(type){
    return this.httpClient.get(`http://127.0.0.1:5000/api/v1/dashboarddetail/${type}`).map(result => result);
  }

}
