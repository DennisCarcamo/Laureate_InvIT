import { Component, OnInit } from '@angular/core';
import { BitlyApiService } from '../../bitly-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public clientId: string;
  public clientSecret: string;

  // public GroupGui: string;
  // public Domain: string;
  // public Title: string;
  // public GroupGuid: string;
  // public Tags: [];
  // public Deeplinks: [];
  // public LongUrl: string;
  // tslint:disable-next-line:variable-name

  // tslint:disable-next-line:variable-name
  constructor(private _bitlyApiService: BitlyApiService) { }

  ngOnInit() { }

  CallBitlyServiceGetAccessToken() {
    this._bitlyApiService.GetAccessToken(this.clientId, this.clientSecret).subscribe(result => {
      console.log(result);
    });
   }

  loadData(userIdValue, passwordValue) {
    this.clientId = userIdValue as string;
    this.clientSecret = passwordValue as string;
    this.CallBitlyServiceGetAccessToken();
  }
}
