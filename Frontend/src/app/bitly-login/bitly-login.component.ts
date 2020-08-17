import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { CookieService } from 'ngx-cookie-service';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-bitly-login',
  templateUrl: './bitly-login.component.html',
  styleUrls: ['./bitly-login.component.css']
})
export class BitlyLoginComponent implements OnInit {
  public clientId: string;
  public clientSecret: string;
  public GroupGuid : string;
  public Domain = 'laur.cc'
  public privilege = false;

  constructor(private _bitlyApiService: DashboardService, private cookieService: CookieService) { }

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
      //this.privilege = true;
      window.location.href = '/login';
    }
  }

  CallBitlyServiceGetAccessToken() {
    this._bitlyApiService.GetAccessToken(this.clientId, this.clientSecret).subscribe(result => {
      if( result !='{"status_code": 401, "data": null, "status_txt": "INVALID_LOGIN"}'){
        this.cookieService.set( 'btoken', result as string );
        window.location.href = '/mainbitly';
      }else{
        alert('Invalid credentials');
      }
    });
   }

  loadData(userIdValue, passwordValue) {
    this.clientId = userIdValue as string;
    this.clientSecret = passwordValue as string;
    this.CallBitlyServiceGetAccessToken();
  }


}
