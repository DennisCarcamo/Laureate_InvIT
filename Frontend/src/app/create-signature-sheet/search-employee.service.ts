import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { element } from 'protractor';

@Injectable()
export class SearchEmployeeService {

  constructor(private httpClient:HttpClient) { }
  public cont: any = 0;
  public url;
  public meta: any = [];
  public page: any = 0;
  public count: any;
  public cursor: any = 0;
  public more: any;
  public search: any;
  private answer: any = [];
  private data: any = [];

  public employees:any = [];
  public showmeta: any = false;
  public shownext: any = false;
  public showpreview: any = false;

  getTest(){
    return "Hello service"
  }

  searchEmployees(curso, text): Observable<elementos[]>{
    //this.url = 'http://127.0.0.1:5000/api/v1/assetusersearch?page='+this.cursor + '&limit=10&text=' + this.search;
    this.url = `http://127.0.0.1:5000/api/v1/assetusersearch?page=${curso}&limit=10&text=${text}`;
    return this.httpClient.get<elementos[]>(this.url)
    //alert(this.url);
     //this.httpClient.get<elementos>(this.url).subscribe((data) => this.data = data.query );
     //alert(this.data);
     //return this.data;
 /*   .subscribe(
      (data) => {
        this.data = data;
        this.employees = data.query;
        this.answer[0] = data.query;

        this.meta = data.meta;
        this.answer[1] = data.meta;

        this.count = this.meta.count;
        this.cursor = this.meta.cursor;
        this.more = this.meta.more;
        this.showmeta = true;

        //console.log(this.employees);

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
        //let answer: any = [];
        //this.answer[0] = this.employees;
        //this.answer[1] = this.meta;
        this.answer[2] = this.shownext;
        this.answer[3] = this.showpreview;
        this.answer[4] = this.showmeta;
        this.answer[5] = this.count;
        this.answer[6] = this.cursor;
        this.answer[7] = this.more;
        console.log(this.employees);
        
        
       }
       
      
       )


       console.log(this.meta);
       return (this.answer);
       //return(this.employees)*/
  }


  insertSignatureSheet(option, id, f_name, l_name, email): Observable<responde[]>{
    let answ;
    let url = `http://127.0.0.1:5000/api/v1/signaturesheets?id_type=${option}&id_employee=${id}&first_name=${f_name}&last_name=${l_name}&email=${email}`
    return this.httpClient.post<responde[]>(url, {})
    /*.subscribe(
      (data) => {
        answ = data.message;
        alert(answ);
       }
      
       )
       return(answ); */

  }

  saveRelationships(user, products){
    //Insert into my ASSET Data base

    this.httpClient.post(`http://127.0.0.1:5000/api/v1/signatureproducts`,
    {
      Products:JSON.stringify(products),
      id_employee: user.EMPLOYEE_ID,
      requesterid: user.CIID

    })
    .subscribe(
      (data:any) => {
        console.log(JSON.stringify(products));
        this.getTest();
      }
    )



  }

}

interface elementos {
  query : string;
  meta: string;
  count: number;

}

interface responde {
  message : string;
}
