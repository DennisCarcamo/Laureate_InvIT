import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { element } from 'protractor';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  private isUserLoggedIn = false;
  private userName;
  constructor(private httpClient:HttpClient) {
     this.isUserLoggedIn = false;
   }

   setUserLoggedIn(){
     this.isUserLoggedIn = true;
   }

   getUserLoggedIn(){
     return this.isUserLoggedIn;
   }

   getCookie(){
     return this.httpClient.get(`http://hnlnoinvitqa.hnsc.net/getcookie`).map(result => result);
   }

   test(){
    return 'baia baia'
  }

  logout(){
    return this.httpClient.get(`http://hnlnoinvitqa.hnsc.net/logout`).map(result => result);
  }

}
