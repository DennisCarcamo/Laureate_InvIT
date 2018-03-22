import { Component, OnInit, trigger } from '@angular/core';
import { NgModel } from '@angular/forms';
import { SearchEmployeeService } from '../../create-signature-sheet/search-employee.service';
import { HttpClient } from '@angular/common/http';
import { fail } from 'assert';
import { forEach } from '@angular/router/src/utils/collection';
import { UrlHandlingStrategy } from '@angular/router/src/url_handling_strategy';
@Component({
  selector: 'app-pdfs',
  templateUrl: './pdfs.component.html',
  styleUrls: ['./pdfs.component.css']
})
export class PdfsComponent implements OnInit {

  constructor(private _Service : SearchEmployeeService, private httpClient:HttpClient) { }

  public text;
  public boolpdfroute = false
  public url;
  public selectedFile: File = null;

  //table params
  public page = 1;
  public limit = 10;
  public searchText = "";
  public search;

  //service response
  public sheets = [];
  public meta = [];
  public shownext: any = false;
  public showpreview: any = false;

  ngOnInit() {
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

  test(){
    alert(this.search);
    }


    searchPdf(){
      this.boolpdfroute = true;
      this.url = `http://127.0.0.1:5000/pdf/${this.text}`;
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
      console.log(this.selectedFile)
      fd.append('pdf', this.selectedFile, this.selectedFile.name)
      this.httpClient.post('http://127.0.0.1:5000/upload', fd)
      .subscribe(result => {
          console.log(result);
      });
    }
}
