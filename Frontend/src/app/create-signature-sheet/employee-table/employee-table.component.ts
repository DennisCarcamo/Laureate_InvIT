import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgIf } from '@angular/common'
import { tick } from '@angular/core/testing';
import { Alert } from 'selenium-webdriver';
import { SearchEmployeeService } from '../search-employee.service';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent implements OnInit {
     public employees:any = [];
     public andres:any = [];
     public search: any;
     public meta: any = [];
     public page: any = 0;
     public count: any;
     public cursor: any = 0;
     public more: any;
     public showmeta: any = false;
     public shownext: any = false;
     public showpreview: any = false;
     public a:any = [];

     public ref: any = [];
     @Output() public employeevent = new EventEmitter();
     public var: any = 2;

     public cont: any = 0;
     public url;
     public employees_ready = false;



  constructor(private httpClient:HttpClient, private _searchEmployees : SearchEmployeeService ) { }

  ngOnInit() {
      /*his._searchEmployees.searchEmployees(0, 'julio')
      .subscribe( data =>this.employees = data)
      alert(this.employees);
      console.log(this.employees);*/
    
  }
  testem(){

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
    //this.url = 'http://172.20.33.56/api/v1/assetusersearch?page='+this.cursor + '&limit=10&text=' + this.search;
    this.url = `http://127.0.0.1:5000/api/v1/assetusersearch?page=${this.cursor}&limit=10&text=${this.search}`;
    this.httpClient.get<elementos>
    (this.url)
    .subscribe(
      (data) => {
        this.employees = data.query;
        //console.log(this.employees);
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
       
       }
       
       )
       //alert( this.andres );
       //console.log(this.employees, this.meta, this.shownext, this.showpreview, this.showmeta, this.count, this.cursor, this.more);
       console.log(this.employees);
  }

  employeeSearch(x, y){
    
    this._searchEmployees.searchEmployees(x, y).subscribe(data => this.a);
   
    //this.employees = this.a.query;
    console.log(this.a);
    //console.log(this.answer)
    /*this.employees = this.a[0];
    //this.employees = this.a['query'];
    this.meta = this.a[1];
    this.shownext = this.a[2];
    this.showpreview = this.a[3];
    this.showmeta = this.a[4];
    this.count = this.a[5];
    this.cursor = this.a[6];
    this.more = this.a[7];
    //console.log(this.answer);*/
  }

  preview(){
    this.cursor = this.cursor - 20;
    this.searchEmployees();
    //alert(this.cursor);
  }

  find(){
    this.cursor = 0;
    //alert(this.search);
    //alert(this.cursor);
    //this.employeeSearch(this.cursor, this.search);
    this.searchEmployees();
    //console.log(this.employees);
    //alert(this.cursor + "aqui" );
  }

  onSelect(selectedItem: any) {
   // console.log("Selected item Id: ", selectedItem.EMPLOYEE_ID); // You get the Id of the selected item here
   let x = {
     'CIID': selectedItem.ID,
    'EMPLOYEE_ID': selectedItem.EMPLOYEE_ID,
    'FIRST_NAME' :selectedItem.FIRST_NAME,
    'LAST_NAME' : selectedItem.LAST_NAME,
    'EMAIL': selectedItem.EMAIL,
    'DEPARTMENT':  selectedItem.DEPARTMENT,
    'Site':  selectedItem.Site
    
    };
    //alert(x['CIID']);
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

