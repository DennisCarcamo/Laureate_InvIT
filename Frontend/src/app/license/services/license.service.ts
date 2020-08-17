import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LicenseService {
  private apiUrl = 'http://hnlnoinvitqa.hnsc.net/api/v1'

  constructor(private httpClient: HttpClient) { }

  get(identifier: number): Observable<any> {
    const url = `${this.apiUrl}/license/${identifier}`;
    return this.httpClient.get<any>(url)
  }

  getUsers(identifier: number): Observable<any> {
    const url = `${this.apiUrl}/workstations-license/license/${identifier}/users`;
    return this.httpClient.get<any>(url)
  }
  
  create(params: any): Observable<any> {
    const url = `${this.apiUrl}/license`;
    return this.httpClient.put(url, params)
  }

  update(id: string, params: any): Observable<any> {
    const url = `${this.apiUrl}/license/${id}`;
    return this.httpClient.post(url, params)
  }
  
  getList(params: any): Observable<any> {
    const url = `${this.apiUrl}/license`;
    return this.httpClient.get<any>(url, { params })
  }

  delete(licenseId: string): Observable<any> {
    const url = `${this.apiUrl}/license/${licenseId}`;
    return this.httpClient.delete(url);
  }

  assign(params: any): Observable<any> {
    const url = `${this.apiUrl}/workstations-license`;
    return this.httpClient.put(url, params);
  }

  disableUser(id: string, params: any): Observable<any> {
    const url = `${this.apiUrl}/workstations-license/${id}`;
    return this.httpClient.post(url, params)
  }

  getReport(params : any): Observable<any> {
    const url = `${this.apiUrl}/workstations-license/report`;
    return this.httpClient.get<any>(url, { params })
  }

  searchAssetProduct(params: any): Observable<any[]>{
    const url = `${this.apiUrl}/assetProduct`;
    return this.httpClient.get<any>(url, { params })
  }

}


