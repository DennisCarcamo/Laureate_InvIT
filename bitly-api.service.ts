import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { element } from 'protractor';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import axios from 'axios';

const endpoint = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'content-type': 'aplication/json',
  }
});

@Injectable({
  providedIn: 'root'
})
export class BitlyApiService {
  // btoa() btob() base64encode(()
  // tslint:disable-next-line:variable-name
  constructor(private _httpClient: HttpClient) { }

  GetAccessToken(ClientId: string, ClientSecret: string) {
    return this._httpClient.post(`http://localhost:3000/access_token`, { ClientId, ClientSecret }).map(res => res);
  }

  CreateBiltink(Domain: string, Title: string, GroupGuid: string, Tags, Deeplinks, LongURL: string, BearerToken: string) {
    // const Head = 'Bearer ' + BearerToken;
    // const headers = new HttpHeaders().set('Authorization', Head).set('Content-Type', 'application/json');
    const data = {
      domain: Domain,
      title: Title,
      group_guid: GroupGuid,
      tags: Tags,
      deeplinks: Deeplinks,
      long_url: LongURL
    };
    // console.log(data);
    return this._httpClient.post(`http://localhost:3000/v4/bitlinks`, { data, BearerToken }).map(result => result);
  }

  GetBitlinkInfo(Bitlink: string, BearerToken: string) {
    const Head = 'Bearer ' + BearerToken;
    const headers = new HttpHeaders().set('Authorization', Head);
    return this._httpClient.get(`https://api-ssl.bitly.com/v4/bitlinks/${Bitlink}`, { headers }).map(result => result);
  }

  RedirectBitlink(BitlinkId: string, CustomBitlink: string, BearerToken: string) {
    // const Head = 'Bearer ' + BearerToken;
    // const headers = new HttpHeaders().set('Authorization', Head).set('Content-Type', 'application/json');
    const data = {
      bitlink_id: BitlinkId
    };
    return this._httpClient.patch(`http://localhost:3000/redirect` , { data, CustomBitlink, BearerToken}).map(result => result);
  }
}
