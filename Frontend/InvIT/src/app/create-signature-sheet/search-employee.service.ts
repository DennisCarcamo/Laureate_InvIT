import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  public answer: any = [];

  public employees:any = [];
  public showmeta: any = false;
  public shownext: any = false;
  public showpreview: any = false;

  getTest(){
    return "Hello service"
  }

  searchEmployees(curso, text){
    //this.url = 'http://127.0.0.1:5000/api/v1/assetusersearch?page='+this.cursor + '&limit=10&text=' + this.search;
    this.url = `http://127.0.0.1:5000/api/v1/assetusersearch?page=${curso}&limit=10&text=${text}`;
    alert(this.url);
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

       this.answer[0] = this.employees;
       this.answer[1] = this.meta;
       this.answer[2] = this.shownext;
       this.answer[3] = this.showpreview;
       this.answer[4] = this.showmeta;
       this.answer[5] = this.count;
       this.answer[6] = this.cursor;
       this.answer[7] = this.more;
       return (this.answer);
  }


}

interface elementos {
  query : string;
  meta: string;
  count: number;

}
