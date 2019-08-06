import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { fail } from 'assert';
import { forEach } from '@angular/router/src/utils/collection';
import { SearchEmployeeService } from '../search-employee.service';
import { ElementAst } from '@angular/compiler';

import { TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { CookieService } from 'ngx-cookie-service';
import {Router} from '@angular/router';
import * as jwt_decode from 'jwt-decode';
import { PdfSheetService } from '../../pdf-sheet.service';

@Component({
  selector: 'app-createsheet',
  templateUrl: './createsheet.component.html',
  styleUrls: ['./createsheet.component.css']
})
export class CreatesheetComponent implements OnInit {


 
  public boolemployee:any = false;
  public boolproducts:any = false;
  public boolready:any = false;
  public boolfirst:any = true;
  //data a enviar
  public selectemploye:any = [];
  public productsevent:any = [];
  public option: any;
  public date: any;
  public confirmation: any = false;
  modalRef: BsModalRef
  public privilege = false;
  public validation = 0;

  public fullImagePath;
  public siteInfo = false;
  public disable_flag = 1;

  constructor(private httpClient:HttpClient, private searchEmployeeService : SearchEmployeeService, private modalService: BsModalService, private cookieService: CookieService ,private router : Router) {

    this.fullImagePath = '/assets/images/black-coffee-cactus-cellphone-875514.jpg'
   }

  ngOnInit() {
    //if(!this.cookieService.get('user_name')){
      //this.router.navigateByUrl('/');
    //}
    let val = this.cookieService.get("token");
    if(val){

      let djtw = jwt_decode(val);
      let identity = djtw['identity'];
      for (var _i = 0; _i < identity.length; _i++) {
        if(identity[_i]['privilege'] == 'create_sheet' ){
          this.privilege = true;
          
        }
      }
  
      if(this.privilege){
  
      }
      else{
        window.location.href = '/login';
      }
    }
    else{
      //this.privilege = true;
      window.location.href = '/login';
    }
  }

  openModal(template: TemplateRef<any>) {
    let x = this.selectemploye[0];
    if(x.EMPLOYEE_ID){
      this.modalRef = this.modalService.show(template);
    }
    else{
      this.confirmation = true;
      //alert("The employee does not have Employee Id, please make sure to get all the info ready before proceding");
    }
    
  }

  validate(){
    //alert(this.date + "" + this.option );
    if(this.date && this.option){
      this.boolemployee = true;
      this.boolfirst = false;
    }
    else{
      alert('Select Type and Date first!');
    }
  }

  start(){
    this.boolfirst = true;
    this.boolemployee = false;
    this.boolready = false;
    this.boolproducts = false;
    
  }

  continueemployee(template: TemplateRef<any>){
    let x = this.selectemploye[0];
    if(x.EMPLOYEE_ID){
      let x = this.selectemploye[0];
      //validacion
      let m;
      this.searchEmployeeService.processValidation(x.EMPLOYEE_ID)
      .subscribe( res => {
        m = res['message'];
        console.log(res);
        if(this.option == 1 && m == 'null'){
          this.validation = 1;
          this.boolemployee = false;
          this.boolproducts = true;
        }
        if((this.option == 1) && (m['id_type'] == 2)){
          this.validation = 1;
          this.boolemployee = false;
          this.boolproducts = true;
        }
  
        if(this.option == 3 && m['id_type'] != 2 && m != 'null'){
          this.validation = 1;
          this.boolemployee = false;
          this.boolproducts = true;
        }

        if(this.validation == 0 && this.option == 1){
          this.modalRef = this.modalService.show(template);
        }
        if(this.validation == 0 && this.option == 3){
          this.modalRef = this.modalService.show(template);
        }

  
        /*if(m['id_type'] == '4'){
          alert('aqui');
          this.validation = 1
        }*/
  

      })

    }
    else{
      alert('Select a employee first, with employee id');
    }
  }

  backemployee(){
    this.boolemployee = false;
    this.boolfirst = true;
  }

  backproducts(){
    this.boolproducts = false;
    this.boolemployee = true;
    this.boolfirst = false;
  }

  ok(){
    window.location.href = '/newsheet';
  }

  siteInformation(){
    if(this.siteInfo){
      this.siteInfo = false;
    }
    else{
      this.siteInfo = true;
    }  
  }


 /* insertSheet(){
    let x = this.selectemploye[0];
    let response;
    let l = this.productsevent.length
    if(x && (l != 0)){
      this.searchEmployeeService.insertSignatureSheet(this.option, x.EMPLOYEE_ID, x.FIRST_NAME, x.LAST_NAME, x.EMAIL, this.date)
      .subscribe(data => response = data );
      //alert(response);
       alert("Response alert");
      //pendiente aun #### 
      this.createSignatureSheet(x, this.productsevent);
      alert('SIgnature sheet successfully created.!!');
    }
    else{
      alert('Make sure to select a employee and at least one Product');
    }

    
    window.location.href = '/newsheet';
      
  } */
  insertSheet(){
    this.disable_flag = 0;
    let x = this.selectemploye[0];

    let response;
    let l = this.productsevent.length
    if(x && (l != 0) && this.validation == 1){
      this.searchEmployeeService.insertSignatureSheet(this.option, x.EMPLOYEE_ID, x.FIRST_NAME, x.LAST_NAME, x.EMAIL, this.date)
      .subscribe(res =>{
        console.log(res);
        if(res['message'] == 'Signature Sheet correctly inserted'){
          console.log('Hoja creada');
          alert('Hoja creada');
        }
        else{
          console.log('Hoja no creada.');
          alert('Hoja no creada');
        }
      
      });
      //alert(response);
       alert("Creating sheet..");
      //pendiente aun #### 
      this.createSignatureSheet(x, this.productsevent);
      alert('Signature sheet successfully created.!!');
    }
    else{
      if(this.validation == 0 && this.option == 1){
        alert('You cannot create this signature sheet, offboarding sheet is needed')
      }
      if(this.validation == 0 && this.option == 3){
        alert('You have to create an onboarding sheet first');
      }
      if( (l == 0)){
        alert('Make sure to select at least one Product');

      }
    }

    
    //window.location.href = '/newsheet'; 
      
  }

  insertSheet2(){
    this.disable_flag = 0;
    let x = this.selectemploye[0];

    let response;
    let l = this.productsevent.length
    if(x && (l != 0) && this.validation == 1){
      this.searchEmployeeService.updateSheetInsert(this.option, x.EMPLOYEE_ID, x.FIRST_NAME, x.LAST_NAME, x.EMAIL, this.date)
      .subscribe(result =>{
        //alert("Preparing to update..");
        console.log(result);
        if(result['message'] == "Signature Sheet correctly inserted"){
          console.log('Dentro del condicionante del mensaje')
          alert("Creating sheet this could take a few seconds.!");
          //this.createSignatureSheet(x, this.productsevent);
          this.searchEmployeeService.saveRelationships(x, this.productsevent)
          .subscribe(result => {
            console.log(result);
            alert("Done");
            //alert('Signature Sheet successfully created.!');
            window.location.href = '/newsheet'; 
          })
          //alert('Carajo1');


        }
        else{
          alert('Something wrong contact your System Admin.');
        }
      } );
      
      //alert(response);
      // alert("Creating sheet..");
      //pendiente aun #### 
      //this.createSignatureSheet(x, this.productsevent);
      //alert('Signature sheet successfully created.!!');

  
    }
    else{
      if(this.validation == 0 && this.option == 1){
        alert('You cannot create this signature sheet, offboarding sheet is needed')
      }
      if(this.validation == 0 && this.option == 3){
        alert('You have to create an onboarding sheet first');
      }
      if( (l == 0)){
        alert('Make sure to select at least one Product');

      }
    }

    //alert('Signature Sheet successfully created.!');
    //window.location.href = '/newsheet'; 
      
  }


  createSignatureSheet(x,y ){
    let user = this.selectemploye[0];
    let response = this.searchEmployeeService.saveRelationships(x, y);
    //alert(response);
  }

  confirm(){
    let x = this.selectemploye[0];
    if(x.EMPLOYEE_ID){
      this.confirmation = true;
    }
    else{
      alert("The employee does not have Employee Id, please make sure to get all the info ready before proceding");
    }
    
  }

  abort(){
    window.location.href = '/newsheet';
  }

  testalert(){
    alert(this.option);
  }
}

interface responde {
  message : string;
}
