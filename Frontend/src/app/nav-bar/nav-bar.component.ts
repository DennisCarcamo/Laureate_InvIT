import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {Router} from '@angular/router';
import * as jwt_decode from 'jwt-decode';
import {LoginService} from '../login.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private cookieService: CookieService, private router : Router, private loginService: LoginService,private httpClient:HttpClient) { }
  public loggedIn = true;
  public loggedInPending;
  public privilegeDashboard = false;
  public privilegeCreate = false;
  public privilegeUpdtae = false;
  public privilegeLoan = false;
  public privilegePdf = false;
  public privilegeReports = false;
  public privilegeAdmin = false;
  public dropdown = false;
  public dropdownPdf_ = false;
  ngOnInit() {
   /* if(this.cookieService.get('user_name')){
      this.loggedIn = true;
      this.loggedInPending = false;
    }
    else{
      this.loggedInPending = true;
      this.loggedIn = false;
    }*/

    //comentar la funcion dev only al deployar;
    this.devOnly();


    //descomentar al deployar;
    /*
    let val = this.cookieService.get("token");
    let djtw = jwt_decode(val);
    console.log(djtw);
    console.log("up");
    let identity = djtw['identity'];
    for (var _i = 0; _i < identity.length; _i++) {
      if(identity[_i]['privilege'] == 'dashboard' ){
        this.privilegeDashboard = true;
      }
      if(identity[_i]['privilege'] == 'create_sheet' ){
        this.privilegeCreate = true;
      }
      if(identity[_i]['privilege'] == 'update_sheet' ){
        this.privilegeUpdtae = true;
      }
      if(identity[_i]['privilege'] == 'offboarding-loan' ){
        this.privilegeLoan = true;
      }
      if(identity[_i]['privilege'] == 'pdf' ){
        this.privilegePdf = true;
      }
      if(identity[_i]['privilege'] == 'user_management' ){
        this.privilegeAdmin = true;
      }
      if(identity[_i]['privilege'] == 'reports' ){
        this.privilegeReports = true;
      }
    }

    //

    */


  }

  Logout(){
    //destruir ss python
    this.loginService.logout()
    .subscribe(res => {
      this.cookieService.deleteAll();
      window.location.href = '/login';

    }) 
    this.cookieService.deleteAll();
    let url = `http://127.0.0.1:5000/logout`;
    window.location.href = url;
  }

  dropd(){
    if(this.dropdown){
      this.dropdown = false;
    }
    else{
      this.dropdown = true;
    }
  }


  dropdPdf(){
    if(this.dropdownPdf_){
      this.dropdownPdf_ = false;
    }
    else{
      this.dropdownPdf_ = true;
    }
  }

  devOnly(){
    //OJO manejo de los permisos del nav bar se removeran solo para el ambiente de desarrollo comentar lo de abajo y descomentar lo de arriba. 
    //comentar desde aqui
    this.privilegeDashboard = true;
    this.privilegeAdmin = true;
    this.privilegeCreate = true;
    this.privilegeLoan = true;
    this.privilegePdf = true;
    this.privilegeReports = true
    this.privilegeUpdtae = true;
    //alert("Done");

    //hasta aqui.
  }
}
