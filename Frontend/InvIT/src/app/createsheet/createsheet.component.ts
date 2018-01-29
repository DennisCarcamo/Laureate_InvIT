import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

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

  constructor() { }

  ngOnInit() {
  }

  validate(){
    //alert(this.date + "" + this.option );
    if(this.date && this.option){
      this.boolemployee = true;
    }
    else{
      alert('Select Type and Date first!');
    }
  }

}
