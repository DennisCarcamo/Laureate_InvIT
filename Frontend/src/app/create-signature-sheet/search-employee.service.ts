import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { element } from 'protractor';
import 'rxjs/add/operator/map';

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
  public httpserverurl = 'http://127.0.0.1:5000/api/v1/'

  getTest(){
    return "Hello service"
  }

  searchEmployees(curso, text): Observable<elementos[]>{
    //this.url = 'http://127.0.0.1:5000/api/v1/assetusersearch?page='+this.cursor + '&limit=10&text=' + this.search;
    this.url = `http://127.0.0.1:5000/api/v1/assetusersearch?page=${curso}&limit=10&text=${text}`;
    return this.httpClient.get<elementos[]>(this.url)

  }


  insertSignatureSheet(option, id, f_name, l_name, email, date): Observable<responde[]>{
    let answ;
    let url = `http://127.0.0.1:5000/api/v1/signaturesheets?id_type=${option}&id_employee=${id}&first_name=${f_name}&last_name=${l_name}&email=${email}&updated=${date}`
    return this.httpClient.post<responde[]>(url, {}).map(result => result);
    /*.subscribe(
      (data) => {
        answ = data.message;
        alert(answ);
       }
      
       )
       return(answ); */

  }

  updateSheet(option, id, f_name, l_name, email): Observable<responde[]>{
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

  getUserProducts(id_employee){
    return this.httpClient.get(`http://127.0.0.1:5000/api/v1/signatureproduct/${id_employee}`).map(result => result);
  }

  updateSignatureSheet(pr,pa,cp,userinfo,typ, id_employee){
    return this.httpClient.put(`http://127.0.0.1:5000/api/v1/signatureproduct/${id_employee}`,{
      Products_to_remove:JSON.stringify(pr),
      Products_to_add:JSON.stringify(pa),
      current_products:JSON.stringify(cp),
      type: typ,
      user_info: JSON.stringify(userinfo)

    }).map(result => result);

  }

  searchSignatureSheets(page, text , limit, sheet_option, status_option){
    return this.httpClient.get(`http://127.0.0.1:5000/api/v1/signaturesheet?page=${page}&text=${text}&limit=${limit}&idsheet=${sheet_option}&status=${status_option}`).map(result => result);
  }

  searchLoanSignatureSheets(page, text , limit, type){
    return this.httpClient.get(`http://127.0.0.1:5000/api/v1/loansignaturesheets?page=${page}&text=${text}&limit=${limit}&type=${type}`).map(result => result);
  }

  searchLoanSheetsProducts(id){
    return this.httpClient.get(`http://127.0.0.1:5000/api/v1/loansheetproducts?id_signature=${id}`).map(result => result);
  }

  updateOffLoanSheetsProducts(products, id_employee, id_sheet){
    return this.httpClient.post(`http://127.0.0.1:5000/api/v1/loansheetproducts`,{
      Products:JSON.stringify(products),
      id_employee: JSON.stringify(id_employee),
      id_signature:id_sheet
    }).map(result => result);
  }

  createOffboarding(products_, id_employee_){
    return this.httpClient.post(`http://127.0.0.1:5000/api/v1/offboardingsheet`,
    {
      Products: JSON.stringify(products_),
      id_employee: id_employee_
    }).map(result => result);
  }

  processValidation(employee_id){
    return this.httpClient.get(`http://127.0.0.1:5000/api/v1/offboardingsheetvalidation/${employee_id}`).map(result => result);
  }

  searchLoanProducts(text_, page_, limit_, status_){
    return this.httpClient.get(`http://127.0.0.1:5000/api/v1/loanstatussearch?text=${text_}&page=${page_}&limit=${limit_}&status=${status_}`).map(result => result);
  }

  pdf_validation(id_signature){
    return this.httpClient.get(`http://127.0.0.1:5000/api/v1/pdfimages?id_signature=${id_signature}`).map(result => result);
  }

  pdf_image_insert(id_signature_, doc_name_){
    return this.httpClient.post(` http://127.0.0.1:5000/api/v1/pdfimages`, {
      id_signature: id_signature_,
      doc_name:doc_name_
    }).map(result => result);
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
