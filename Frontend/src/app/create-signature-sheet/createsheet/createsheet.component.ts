import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { fail } from 'assert';
import { forEach } from '@angular/router/src/utils/collection';
import { SearchEmployeeService } from '../search-employee.service';

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
  public confirmation: any = false;

  constructor(private httpClient:HttpClient, private searchEmployeeService : SearchEmployeeService) { }

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


  insertSheet(){
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
      
  }

  createSignatureSheet(x,y ){
    let user = this.selectemploye[0];
    let response = this.searchEmployeeService.saveRelationships(x, y);
    //alert(response);
  }

  confirm(){
    this.confirmation = true;
  }

  abort(){
    window.location.href = '/newsheet';
  }

  testalert(){
    alert(this.date);
  }
}

interface responde {
  message : string;
}
