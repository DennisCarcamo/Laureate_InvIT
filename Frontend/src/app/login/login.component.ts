import { Component, OnInit, TemplateRef  } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { CookieService } from 'ngx-cookie-service';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public fullImagePath;
  private user_name:any;
  private password:any;
  private modalRef: BsModalRef;
  public cookieValue = 'UNKNOWN';
  public sharepointImage;
  public footprintsImage;
  public kaseyaImage;
  public assetImage;
  public elasticx;
  public ricohImage;
  public zoomImage;
  public bitly;
  public officeImage;
  public mainImage;
  public adimage;
  public jamfimage;


  public secondRow = false;
  public thirdRow = false;

  constructor(private router: Router, private modalService: BsModalService, private login: LoginService, private cookieService: CookieService ) { 
    this.fullImagePath = '/assets/images/1248485_300.jpg';
    this.sharepointImage = '/assets/images/shareoint.jpg';
    this.footprintsImage = '/assets/images/footprints.png';
    this.kaseyaImage = '/assets/images/kaseya-logo@2x.png';
    this.assetImage = '/assets/images/405899-manageengine-logo.jpg';
    this.elasticx = '/assets/images/245px-Isotipo-elastix.png';
    this.ricohImage = '/assets/images/61fbTfolvQL.png';
    this.zoomImage = '/assets/images/logo-zoom.png';
    this.bitly = '/assets/images/Logo_bitly.jpg';
    this.officeImage = '/assets/images/office.jpg';
    this.mainImage = '/assets/images/beard-chair-computer-840996.jpg';
    this.adimage = '/assets/images/ad.png';
    this.jamfimage = '/assets/images/jamf.png'
  }

  ngOnInit() {
    /*if(!this.cookieService.get('user_name')){
      this.router.navigateByUrl('/');
    }*/
    this.login.getCookie().subscribe( res => {
      //this.test();
    })
  }
  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    let val = this.cookieService.get("token");
    let djtw = jwt_decode(val);
    let identity = djtw['identity'];
    //this.userName = identity[7]['username'];
  }

  test(){
    alert(this.cookieService.get('user_name') +' '+ this.cookieService.get('password'));
  }

  destroy(){
    this.cookieService.deleteAll();
  }

  checkCredentials(template: TemplateRef<any>){
    if(this.user_name == 'administrator' && this.password == 'Laureate123'){
      //this.login.setUserLoggedIn();
      //alert(this.login.getUserLoggedIn());
      //this.router.navigate(['/dashboard']);
      this.cookieService.set('user_name', this.user_name, 0.25);
      this.cookieService.set('password', this.password, 0.25);
      this.cookieValue = this.cookieService.get('user_name');
      window.location.href = '/dashboard';

    }
    else{
      this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
    }
  }

  test2(){
    let val = this.cookieService.get("token");
    let djtw = jwt_decode(val);
    console.log(djtw);
    let identity = djtw['identity'];
    console.log(identity[6]['privilege']);
    console.log(identity.length);
    for (var _i = 0; _i < identity.length; _i++) {
      console.log(identity[_i]['privilege']);
  }

  }

  viewMore(){
    if(this.secondRow){
      this.thirdRow = true;
    }
    else{
      this.secondRow = true;
    }
  }



}
