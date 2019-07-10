import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import {Http, Headers, RequestOptions} from '@angular/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs/Observable';
import { element } from 'protractor';
import 'rxjs/add/operator/map';

@Injectable()
export class DashboardService {

  constructor(private httpClient:HttpClient, private cookieService: CookieService) { 
  }
  //public  val = this.cookieService.get("token");

  /*createAuthorizationHeader(headers: Headers) {
    let val = this.cookieService.get("token");
    headers.append('Content-Type', 'application/json');
    headers.append('authentication', val);
  } */

  getTest(){
    return "Hello Dashboard"
  }

  loadInitialDashboard(){
    //let _headers = new HttpHeaders();
    //const headers = _headers.append('Content-Type', 'application/json')

    //let headers = new Headers({ 'Authorization': 'Bearer ' + this.cookieService.get("token") });
    //let options = new RequestOptions({ headers: headers });

    //this.createAuthorizationHeader(headers);
    let x = 'Bearer' + ' ' + this.cookieService.get("token")
    const headers = new HttpHeaders()
      .set( 'Authorization', x);
    return this.httpClient.get(`http://127.0.0.1:5000/api/v1/dashboard`, {headers}).map(result => result);
  }

  inStoreModels(type, state){
    let x = 'Bearer' + ' ' + this.cookieService.get("token")
    const headers = new HttpHeaders()
    .set( 'Authorization', x);
    return this.httpClient.get(`http://127.0.0.1:5000/api/v1/dashboarddetail/${type}/${state}`, {headers}).map(result => result);
  }

  stateTable(datefrom, dateto, page){
    let x = 'Bearer' + ' ' + this.cookieService.get("token")
    const headers = new HttpHeaders()
    .set( 'Authorization', x);
    
    return this.httpClient.get(`http://127.0.0.1:5000/api/v1/dashboardstatetable?datefrom=${datefrom}&dateto=${dateto}&page=${page}`, {headers}).map(result => result);
  }

  searchProductState(product, page){
    let x = 'Bearer' + ' ' + this.cookieService.get("token")
    const headers = new HttpHeaders()
    .set( 'Authorization', x);

    return this.httpClient.get(`http://127.0.0.1:5000/api/v1/dashboardseachproductstate?paramSearch=${product}&page=${page}`, {headers}).map(result => result);
  }

  searchLifetime(){
    let x = 'Bearer' + ' ' + this.cookieService.get("token")
    const headers = new HttpHeaders()
    .set( 'Authorization', x);
    return this.httpClient.get(`http://127.0.0.1:5000/api/v1/dashboardlifetime`, {headers}).map(result => result);
  }

  searchLifetimeDetail(less, number, state, page){
    let x = 'Bearer' + ' ' + this.cookieService.get("token")
    const headers = new HttpHeaders()
    .set( 'Authorization', x);
    return this.httpClient.get(`http://127.0.0.1:5000/api/v1/dashboardlifetimedetail?less=${less}&number=${number}&state=${state}&page=${page}`).map(result => result);
  }

  searchItemLifetimeDetail(page, text){
    let x = 'Bearer' + ' ' + this.cookieService.get("token")
    const headers = new HttpHeaders()
    .set( 'Authorization', x);
    return this.httpClient.get(`http://127.0.0.1:5000/api/v1/dashboardsearchlifetimedetail?text=${text}&page=${page}`).map(result => result);
  }

  serversCount(){
    let x = 'Bearer' + ' ' + this.cookieService.get("token")
    const headers = new HttpHeaders()
    .set( 'Authorization', x);
    return this.httpClient.get(` http://127.0.0.1:5000/api/v1/dashboradserverscount`).map(result => result);
  }

}
