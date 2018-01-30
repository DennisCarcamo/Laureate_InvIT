import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { fail } from 'assert';

@Component({
  selector: 'app-createsheet',
  templateUrl: './createsheet.component.html',
  styleUrls: ['./createsheet.component.css']
})
export class CreatesheetComponent implements OnInit {

  public date: any;
  public option: any;
  public boolemployee:any = false;
  public boolproducts:any = false;
  public boolready:any = false;
  public boolfirst:any = false;
  public selectemploye:any = [];
  public productsevent:any = [];

  constructor() { }

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

}
