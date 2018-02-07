import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { fail } from 'assert';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-createsheet',
  templateUrl: './createsheet.component.html',
  styleUrls: ['./createsheet.component.css']
})
export class CreatesheetComponent implements OnInit {


 
  public boolemployee:any = false;
  public boolproducts:any = false;
  public boolready:any = false;
  public boolfirst:any = false;
  //data a enviar
  public selectemploye:any = [];
  public productsevent:any = [];
  public option: any;
  public date: any;

  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
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

  continueemployee(){
    //faltan los ifs;
     this.boolemployee = false;
     this.boolproducts = true;
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

  create_json(){
    let x = this.selectemploye[0];
    
   /* let payload = {
      "products" : this.productsevent,
      "signature_id" : this.selectemploye 

    }*/
    let url = `http://127.0.0.1:5000/api/v1/signaturesheets?id_type=${this.option}&id_employee=${x.EMPLOYEE_ID}&first_name=${x.FIRST_NAME}&last_name=${x.LAST_NAME}&email=${x.EMAIL}`
    let answ;

    this.httpClient.post
    (url, {})
    .subscribe(
      (data) => {
        answ = data;
        alert(data);
       }
      
       )
    /*for(let item of this.selectemploye){
      alert(item.EMAIL);
    }*/

     
    
  }

}
