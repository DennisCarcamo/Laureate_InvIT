import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
//import {Http, Headers, RequestOptions} from '@angular/http';
import { CookieService } from "ngx-cookie-service";
import { Observable } from "rxjs/Observable";
import { element } from "protractor";
import "rxjs/add/operator/map";

@Injectable()
export class DashboardService {
  constructor(
    private httpClient: HttpClient,
    private cookieService: CookieService
  ) {}
  //public  val = this.cookieService.get("token");

  /*createAuthorizationHeader(headers: Headers) {
    let val = this.cookieService.get("token");
    headers.append('Content-Type', 'application/json');
    headers.append('authentication', val);
  } */

  getTest() {
    return "Hello Dashboard";
  }

  loadInitialDashboard() {
    //let _headers = new HttpHeaders();
    //const headers = _headers.append('Content-Type', 'application/json')

    //let headers = new Headers({ 'Authorization': 'Bearer ' + this.cookieService.get("token") });
    //let options = new RequestOptions({ headers: headers });

    //this.createAuthorizationHeader(headers);
    let x = "Bearer" + " " + this.cookieService.get("token");
    const headers = new HttpHeaders().set("Authorization", x);
    return this.httpClient
      .get(`http://hnlnoinvitqa.hnsc.net/api/v1/dashboard`, { headers })
      .map((result) => result);
  }

  inStoreModels(type, state) {
    let x = "Bearer" + " " + this.cookieService.get("token");
    const headers = new HttpHeaders().set("Authorization", x);
    return this.httpClient
      .get(
        `http://hnlnoinvitqa.hnsc.net/api/v1/dashboarddetail/${type}/${state}`,
        { headers }
      )
      .map((result) => result);
  }

  stateTable(datefrom, dateto, page) {
    let x = "Bearer" + " " + this.cookieService.get("token");
    const headers = new HttpHeaders().set("Authorization", x);

    return this.httpClient
      .get(
        `http://hnlnoinvitqa.hnsc.net/api/v1/dashboardstatetable?datefrom=${datefrom}&dateto=${dateto}&page=${page}`,
        { headers }
      )
      .map((result) => result);
  }

  searchProductState(product, page) {
    let x = "Bearer" + " " + this.cookieService.get("token");
    const headers = new HttpHeaders().set("Authorization", x);

    return this.httpClient
      .get(
        `http://hnlnoinvitqa.hnsc.net/api/v1/dashboardseachproductstate?paramSearch=${product}&page=${page}`,
        { headers }
      )
      .map((result) => result);
  }

  searchLifetime() {
    let x = "Bearer" + " " + this.cookieService.get("token");
    const headers = new HttpHeaders().set("Authorization", x);
    return this.httpClient
      .get(`http://hnlnoinvitqa.hnsc.net/api/v1/dashboardlifetime`, { headers })
      .map((result) => result);
  }

  searchLifetimeDetail(less, number, state, page) {
    let x = "Bearer" + " " + this.cookieService.get("token");
    const headers = new HttpHeaders().set("Authorization", x);
    return this.httpClient
      .get(
        `http://hnlnoinvitqa.hnsc.net/api/v1/dashboardlifetimedetail?less=${less}&number=${number}&state=${state}&page=${page}`
      )
      .map((result) => result);
  }

  searchItemLifetimeDetail(page, text) {
    let x = "Bearer" + " " + this.cookieService.get("token");
    const headers = new HttpHeaders().set("Authorization", x);
    return this.httpClient
      .get(
        `http://hnlnoinvitqa.hnsc.net/api/v1/dashboardsearchlifetimedetail?text=${text}&page=${page}`
      )
      .map((result) => result);
  }

  serversCount() {
    let x = "Bearer" + " " + this.cookieService.get("token");
    const headers = new HttpHeaders().set("Authorization", x);
    return this.httpClient
      .get(`http://hnlnoinvitqa.hnsc.net/api/v1/dashboradserverscount`)
      .map((result) => result);
  }

  crossCheck() {
    let x = "Bearer" + " " + this.cookieService.get("token");
    const headers = new HttpHeaders().set("Authorization", x);
    return this.httpClient
      .get(`http://hnlnoinvitqa.hnsc.net/api/v1/dashboard-crosscheck`)
      .map((result) => result);
  }

  GetAccessToken(ClientId: string, ClientSecret: string) {
    return this.httpClient
      .post(`http://hnlnoinvitqa.hnsc.net/api/v1/bitlygettoken`, {
        ClientId,
        ClientSecret,
      })
      .map((res) => res);
  }

  CreateBiltink(
    Domain: string,
    Title: string,
    GroupGuid: string,
    LongURL: string,
    BearerToken: string
  ) {
    // const Head = 'Bearer ' + BearerToken;
    // const headers = new HttpHeaders().set('Authorization', Head).set('Content-Type', 'application/json');
    const data = {
      domain: Domain,
      title: Title,
      group_guid: GroupGuid,
      long_url: LongURL,
      bearer_token: BearerToken,
    };
    //console.log(data);
    return this.httpClient
      .post(`http://hnlnoinvitqa.hnsc.net/api/v1/createbitlink`, {
        domain: Domain,
        title: Title,
        group_guid: GroupGuid,
        long_url: LongURL,
        bearer_token: BearerToken,
      })
      .map((result) => result);
  }

  GetBitlinkInfo(Bitlink: string, BearerToken: string) {
    const Head = "Bearer " + BearerToken;
    const headers = new HttpHeaders().set("Authorization", Head);
    return this.httpClient
      .get(`https://api-ssl.bitly.com/v4/bitlinks/${Bitlink}`, { headers })
      .map((result) => result);
  }

  RedirectBitlink(
    BitlinkId: string,
    CustomBitlink: string,
    BearerToken: string
  ) {
    // const Head = 'Bearer ' + BearerToken;
    // const headers = new HttpHeaders().set('Authorization', Head).set('Content-Type', 'application/json');
    const data = {
      bitlink_id: BitlinkId,
      custom_bitlink: CustomBitlink,
      bearer_token: BearerToken,
    };
    return this.httpClient
      .patch(`http://hnlnoinvitqa.hnsc.net/api/v1/createbitlink`, {
        bitlink_id: BitlinkId,
        custom_bitlink: CustomBitlink,
        bearer_token: BearerToken,
      })
      .map((result) => result);
  }

  GetGroupGuid(BearerToken: string) {
    const Head = "Bearer " + BearerToken;
    const headers = new HttpHeaders().set("Authorization", Head);
    return this.httpClient
      .get("https://api-ssl.bitly.com/v4/groups", { headers })
      .map((result) => result);
  }
}
