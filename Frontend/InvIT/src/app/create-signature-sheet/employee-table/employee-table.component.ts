import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgIf } from '@angular/common'
import { tick } from '@angular/core/testing';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent implements OnInit {
     public employees:any = [];
     public search: any;
     public meta: any = [];
     public page: any = 0;
     public count: any;
     public cursor: any = 0;
     public more: any;
     public showmeta: any = false;
     public shownext: any = false;
     public showpreview: any = false;

     public ref: any = [];
     @Output() public employeevent = new EventEmitter();
     public var: any = 2;

     public cont: any = 0;
     public url;




  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
  }

  getEmployees(){
    this.url = 'http://127.0.0.1:5000/api/v1/assetexplorerusers/'+ this.cont;
    this.httpClient.get<elementos>
    (this.url)
    .subscribe(
      (data) => {
        this.employees = data.query;
        //console.log(data.query);
       }
      
       )
      this.cont = this.cont + 1;
  }

  searchEmployee(event:any){
    this.search = event.target.value
  }

  searchEmployees(){
    this.url = 'http://127.0.0.1:5000/api/v1/assetusersearch?page='+this.cursor + '&limit=10&text=' + this.search;
    this.url = `http://127.0.0.1:5000/api/v1/assetusersearch?page=${this.cursor}&limit=10&text=${this.search}`;
    this.httpClient.get<elementos>
    (this.url)
    .subscribe(
      (data) => {
        this.employees = data.query;
        this.meta = data.meta;
        this.count = this.meta.count;
        this.cursor = this.meta.cursor;
        this.more = this.meta.more;
        this.showmeta = true;

        if(this.more){
          this.shownext = true;
        }else{
          this.shownext = false;
        }

        if(this.cursor == 10){
          this.showpreview = false
        }
        else{
          this.showpreview = true;
        }
        //alert( this.cursor );
       }
      
       )
  }

  preview(){
    this.cursor = this.cursor - 20;
    this.searchEmployees();
    //alert(this.cursor);
  }

  find(){
    this.cursor = 0;
    this.searchEmployees();
    //alert(this.cursor + "aqui" );
  }

  onSelect(selectedItem: any) {
   // console.log("Selected item Id: ", selectedItem.EMPLOYEE_ID); // You get the Id of the selected item here
   let x = {
    'EMPLOYEE_ID': selectedItem.EMPLOYEE_ID,
    'FIRST_NAME' :selectedItem.FIRST_NAME,
    'EMAIL': selectedItem.EMAIL,
    'DEPARTMENT':  selectedItem.DEPARTMENT,
    'Site':  selectedItem.Site
    
    };
    this.ref.splice(0);
    this.ref.push(x);
    this.employeevent.emit(this.ref);
    //alert(this.ref[0].EMAIL)


  }

}

interface elementos {
  query : string;
  meta: string;
  count: number;

}
