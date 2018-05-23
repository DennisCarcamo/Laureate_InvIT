import { Component, OnInit, trigger } from '@angular/core';
import { NgModel } from '@angular/forms';
import { SearchEmployeeService } from '../../create-signature-sheet/search-employee.service';
import { HttpClient } from '@angular/common/http';
import { fail } from 'assert';
import { forEach } from '@angular/router/src/utils/collection';
import { UrlHandlingStrategy } from '@angular/router/src/url_handling_strategy';
import { CookieService } from 'ngx-cookie-service';
import {Router} from '@angular/router';
import * as jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-pdfs',
  templateUrl: './pdfs.component.html',
  styleUrls: ['./pdfs.component.css']
})
export class PdfsComponent implements OnInit {
  public fullImagePath;

  constructor(private _Service : SearchEmployeeService, private httpClient:HttpClient, private cookieService: CookieService, private router : Router) {
    this.fullImagePath = '/assets/images/advice-advise-advisor-7096.jpg'
   }

  public text;
  public pdfFile;
  public boolpdfroute = false
  public url;
  public selectedFile: File = null;

  //table params
  public page = 1;
  public limit = 10;
  public searchText = "";
  public search;
  public readyUpload = false; 

  //service response
  public sheets = [];
  public meta = [];
  public shownext: any = false;
  public showpreview: any = false;
  public privilege = false;
  public siteInfo = false;


  ngOnInit() {
    /*if(!this.cookieService.get('user_name')){
      this.router.navigateByUrl('/');
    }*/
    let val = this.cookieService.get("token");
    if(val){
      let djtw = jwt_decode(val);
      let identity = djtw['identity'];
      for (var _i = 0; _i < identity.length; _i++) {
        if(identity[_i]['privilege'] == 'pdf' ){
          this.privilege = true;
        }
      }

    }else{
      window.location.href = '/login';
    }

    if(this.privilege){

        this._Service.searchSignatureSheets(this.page, this.searchText, this.limit)
        .subscribe(res => {
          let x = res['SignatureSheets'];
          let y = res['meta'];
          this.sheets = x;
          this.meta = y;
          this.page = this.page + 1;
    
    
          if(this.meta['more']){
            this.shownext = true;
          }else{
            this.shownext = false;
          }
    
          if(this.meta['cursor'] == 11){
            this.showpreview = false
          }
          else{
            this.showpreview = true;
          }
          //this.currentproducts = this.selectproducts;
        })
    }
    else{
      window.location.href = '/login';
    }

  }

  test(){
    alert(this.search);
    }

  siteInformation(){
    if(this.siteInfo){
      this.siteInfo = false;
    }
    else{
      this.siteInfo = true;
    }  
  }


    searchPdf(){
      this.boolpdfroute = true;
      this.url = `http://127.0.0.1:5000/pdf/${this.text}`;
      window.location.href = this.url;
    }

    searchScannedPdf(){
      this.boolpdfroute = true;
      this.url = `http://127.0.0.1:5000/scannedpdf/${this.text}`;
      window.location.href = this.url;
    }  

    searchSheet(event:any){
      this.search = event.target.value
    }

    onSelect(selectedItem: any){
      let x = {
        'ID_SIGNATURE': selectedItem.id_signature,
       'EMPLOYEE_ID': selectedItem.id_employee,
       
       };

       let pdfname = x['ID_SIGNATURE'] + x['EMPLOYEE_ID'];
       this.text = pdfname;

    }
    onselectUpload(selectedItem: any){
      let x = {
       'ID_SIGNATURE': selectedItem.id_signature,
       'EMPLOYEE_ID': selectedItem.id_employee,
       'DATE': selectedItem.updated,
       'FIRST_NAME': selectedItem.first_name,
       'LAST_NAME': selectedItem.last_name
       
       };
       
       let pdfname = x['ID_SIGNATURE'] + x['EMPLOYEE_ID'];
       this.pdfFile = pdfname;
       this.readyUpload = true;

    }

    next(){
      if(this.search){
        this.search = this.search;
      }
      else{
        this.search = "";  
      }
      this._Service.searchSignatureSheets(this.page, this.search, this.limit)
    .subscribe(res => {
      let x = res['SignatureSheets'];
      let y = res['meta'];
      this.sheets = x;
      this.meta = y;
      this.page = this.page + 1;

      if(this.meta['more']){
        this.shownext = true;
      }else{
        this.shownext = false;
      }

      if(this.meta['cursor'] == 11){
        this.showpreview = false
      }
      else{
        this.showpreview = true;
      }
      //this.currentproducts = this.selectproducts;
    })

    }

    preview(){
      this.page = this.page - 2;
      this.next();
    }

    find(){
      this.page = 1;
      this.next();
    }

    onFileSelected(event){
      this.selectedFile = <File>event.target.files[0];
    }

    onUpload(){
      const fd = new FormData();
      fd.append('pdf', this.selectedFile, this.selectedFile.name)
      this.httpClient.post(`http://127.0.0.1:5000/upload/${this.pdfFile}`, fd)
      .subscribe(result => {
          if(result['message'] == 'Done'){
            window.location.href = '/pdf';
          }
      });
    }
}
