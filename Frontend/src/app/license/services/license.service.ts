import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LicenseService {
  private apiUrl = 'http://127.0.0.1:5000/api/v1'

  constructor(private httpClient: HttpClient) { }

  create(params: any): Observable<any> {
    const url = `${this.apiUrl}/license`;
    return this.httpClient.put(url, params)
  }

  update(id: string, params: any): Observable<any> {
    const url = `${this.apiUrl}/license/${id}`;
    return this.httpClient.post(url, params)
  }
  
  getList(): Observable<any[]> {
    const url = `${this.apiUrl}/license`;
    return this.httpClient.get<any[]>(url)
  }

  delete(licenseId: string): Observable<any> {
    const url = `${this.apiUrl}/license/${licenseId}`;
    return this.httpClient.delete(url)
  }

}
