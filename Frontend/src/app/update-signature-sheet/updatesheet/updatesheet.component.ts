import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { fail } from 'assert';
import { forEach } from '@angular/router/src/utils/collection';
import { SearchEmployeeService } from '../../create-signature-sheet/search-employee.service';
import { ElementAst } from '@angular/compiler';

@Component({
  selector: 'app-updatesheet',
  templateUrl: './updatesheet.component.html',
  styleUrls: ['./updatesheet.component.css']
})
export class UpdatesheetComponent implements OnInit {

  constructor(private _searchEmployees : SearchEmployeeService) { }

  public boolemployee:any = false;
  public boolproducts:any = false;
  public boolready:any = false;
  public boolfirst:any = false;
  //data a enviar
  public selectemploye:any = [];
  public productsevent:any = [];
  public option: any;
  public date: any;
  public confirmation: any = false;

  //updating
  public userprod = "BVB";
  public currentproducts = false;
  public selectproducts:any = [];
  public productremovesevent:any = [];

  ngOnInit() {
  }

  start(){
    this.boolfirst = true;
    this.boolemployee = false;
    this.boolready = false;
    this.boolproducts = false;
    
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

  continueemployee(){
    //faltan los ifs;
     this.boolemployee = false;
     //this.boolproducts = true;
     //console.log(this.selectemploye);
     this.currentproducts = true;
     //request de productos en la hoja utilizando el select employee

  }

  continueprods(){
    /*let x = this.selectemploye[0];
    this._searchEmployees.getUserProducts(this.selectemploye[0]['EMPLOYEE_ID'])
    .subscribe(res => {
       let x = res['SignatureSheetsProducts'];
       this.currentproducts = x;
       console.log(this.currentproducts);
       console.log(x);
       //this.currentproducts = this.selectproducts;
     })*/
    
    this.currentproducts = false;
    this.boolproducts = true;
    this.boolemployee = false;
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
    let l = this.selectproducts.length;
    let x = this.selectemploye[0];
    if(l != 0 && (this.productremovesevent.length != 0 || this.productsevent.length != 0) && x){
      this._searchEmployees.updateSheet(this.option, x.EMPLOYEE_ID, x.FIRST_NAME, x.LAST_NAME, x.EMAIL)
      .subscribe(result =>{
        alert("Preparing to update..");
        console.log(result);
        if(result['message'] == "Signature Sheet correctly inserted"){
          this._searchEmployees.updateSignatureSheet(this.productremovesevent,this.productsevent, this.selectproducts,this.selectemploye,this.option,this.selectemploye[0]['EMPLOYEE_ID'])
          .subscribe(result =>{
            console.log(result);
            alert("updated");
          })
        }
      } );
      //alert(response);
      //this._searchEmployees.updateSignatureSheet(this.productremovesevent,this.productsevent, this.selectproducts,this.selectemploye,this.option,this.selectemploye[0]['EMPLOYEE_ID'])
      //.subscribe(result =>{
       // console.log(result);
       // alert("updated");
      //})
    }
    else{
      alert("make sure to select employee and products correctly");
    }
  }



}
