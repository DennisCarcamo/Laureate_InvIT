import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private loggedIn;
  private loggenInPending;
  
  
  constructor(private cookieService: CookieService, private router : Router){}

  ngOnInit() {
    /*if(this.cookieService.get('user_name')){
      this.loggedIn = true;
      this.loggenInPending = false; 
    }
    else{
      this.loggedIn = false;
      this.loggenInPending = true;
    }*/

    
  }
}
