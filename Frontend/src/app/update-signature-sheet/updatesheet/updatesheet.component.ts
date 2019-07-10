import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { fail } from 'assert';
import { forEach } from '@angular/router/src/utils/collection';
import { SearchEmployeeService } from '../../create-signature-sheet/search-employee.service';
import { ElementAst } from '@angular/compiler';

import { TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { CookieService } from 'ngx-cookie-service';
import {Router} from '@angular/router';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-updatesheet',
  templateUrl: './updatesheet.component.html',
  styleUrls: ['./updatesheet.component.css']
})
export class UpdatesheetComponent implements OnInit {

  public fullImagePath;
  constructor(private _searchEmployees : SearchEmployeeService,  private modalService: BsModalService, private cookieService: CookieService, private router : Router) {
    this.fullImagePath = '/assets/images/blurred-background-close-up-coffee-cup-908284.jpg'
   }

  public boolemployee:any = false;
  public boolproducts:any = false;
  public boolready:any = false;
  public boolfirst:any = true;
  //data a enviar
  public selectemploye:any = [];
  public productsevent:any = [];
  public option: any = 4;
  public date: any;
  public confirmation: any = false;
  modalRef: BsModalRef

  //updating
  public userprod = "BVB";
  public currentproducts = false;
  public selectproducts:any = [];
  public productremovesevent:any = [];
  public privilege = false;
  public validation = 0;

  public siteInfo = false;

  public disable_flag = 1;



  ngOnInit() {
    /*if(!this.cookieService.get('user_name')){
      this.router.navigateByUrl('/');
    }*/
    let val = this.cookieService.get("token");
    if(val){

      let djtw = jwt_decode(val);
      let identity = djtw['identity'];
      for (var _i = 0; _i < identity.length; _i++) {
        if(identity[_i]['privilege'] == 'update_sheet' ){
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
      this.privilege = true;
      //window.location.href = '/login';
    }
  }

  openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
  }

  start(){
    this.boolfirst = true;
    this.boolemployee = false;
    this.boolready = false;
    this.boolproducts = false;
    
  }

  siteInformation(){
    if(this.siteInfo){
      this.siteInfo = false;
    }
    else{
      this.siteInfo = true;
    }  
  }

  validate(){
    //if user select on boarding no product table needed
    if( this.option){
      this.boolemployee = true;
      this.boolfirst = false;
    }
    else{
      alert('Select Type and Date first!');
    }
  }

  continueemployee(template: TemplateRef<any>){
    //faltan los ifs;
    let x = this.selectemploye[0];
    if(x){
      //this.boolproducts = true;
      //console.log(this.selectemploye);

      let m;
      this._searchEmployees.processValidation(x.EMPLOYEE_ID)
      .subscribe( res => {
        m = res['message'];
        console.log(res);
        if(this.option == 4 && m == 'null'){
          this.validation = 0;
          this.modalRef = this.modalService.show(template);

        }
        if((this.option == 4) && (m['id_type'] == 2)){
          this.validation = 0;
          this.modalRef = this.modalService.show(template);

        }
  
        if(this.option == 4 && m['id_type'] != 2 && m != 'null'){
          this.validation = 1;
          this.currentproducts = true;
          //request de productos en la hoja utilizando el select employee
          this.boolemployee = false;
        }
  
        /*if(m['id_type'] == '4'){
          alert('aqui');
          this.validation = 1
        }*/
  
        //console.log(m['id_type']);
        //console.log(this.validation);
        //console.log(this.option);

      })

    }else{
      alert('select employee first')
    }

  }

  ok(){
    window.location.href = '/updatesheet';
  }

  continueprods(){
    if(this.selectproducts){
      //alert("No esta definido");
      console.log(this.selectproducts);
      if(this.selectproducts.length == 0)
      {
        alert('Nothing to remove? Select Remove Nothing to Continue.!');
        console.log(this.selectproducts);
      }
      else{
        this.currentproducts = false;
        this.boolproducts = true;
        this.boolemployee = false;
  
      }
    }else
    {
      this.selectproducts = [];
      console.log(this.selectproducts);
      this.currentproducts = false;
      this.boolproducts = true;
      this.boolemployee = false;
    }
  }

  backemployee(){
    this.boolemployee = false;
    this.boolfirst = true;
    this.currentproducts = false;
  }

  backproducts(){
    this.boolproducts = false;
    this.boolemployee = true;
    this.boolfirst = false;
  }

  testAlert(){
    console.log(".....Products to remove.....");
    console.log(this.productremovesevent);
    console.log(".....Products to add.....");
    console.log(this.productsevent);
    console.log("....pending currentproducts.....");
    console.log(this.selectproducts);
    console.log(".....user info.....");
    console.log(this.selectemploye);
    console.log(this.selectemploye[0]['EMPLOYEE_ID'])
  }

  confirm(){
    this.confirmation = true;
  }

  abort(){
    window.location.href = '/updatesheet';
  }

  updateSheet(){
    this.disable_flag = 0;
    let l = this.selectproducts.length;
    let x = this.selectemploye[0];
    if( (this.productremovesevent.length != 0 || this.productsevent.length != 0) && x){
      this._searchEmployees.updateSheet(this.option, x.EMPLOYEE_ID, x.FIRST_NAME, x.LAST_NAME, x.EMAIL)
      .subscribe(result =>{
        //alert("Preparing to update..");
        console.log(result);
        if(result['message'] == "Signature Sheet correctly inserted"){
          this._searchEmployees.updateSignatureSheet(this.productremovesevent,this.productsevent, this.selectproducts,this.selectemploye,this.option,this.selectemploye[0]['EMPLOYEE_ID'])
          .subscribe(result =>{
            console.log(result);
            alert("updated");
            window.location.href = '/updatesheet';
          })
        }
      } );

    }
    else{
      alert("make sure to select employee and products correctly");
    }
  }



}
