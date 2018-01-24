import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent implements OnInit {
     public employees:any = [];
     public empref: any = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
     public ref: any = [];
     public var: any = 2;
     public max;
     public min;
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



}

interface elementos {
  query : string;

}

