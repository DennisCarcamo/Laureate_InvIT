import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import {Http, Headers, RequestOptions} from '@angular/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs/Observable';
import { element } from 'protractor';
import 'rxjs/add/operator/map';

@Injectable()
export class PdfSheetService {

  constructor(private httpClient:HttpClient, private cookieService: CookieService) { }

  getTestPdf(){
    return "Hello Dashboard"
  }

}//end
