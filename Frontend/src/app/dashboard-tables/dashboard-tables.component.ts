import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { CookieService } from 'ngx-cookie-service';
import * as jwt_decode from 'jwt-decode';
import { NgModel } from '@angular/forms';
import { LoginService } from '../login.service';
import { Chart } from 'chart.js';
import {Router} from '@angular/router';
import { fail } from 'assert';

@Component({
  selector: 'app-dashboard-tables',
  templateUrl: './dashboard-tables.component.html',
  styleUrls: ['./dashboard-tables.component.css']
})
export class DashboardTablesComponent implements OnInit {

  public storageMovesItems :any = [];
  public meta;
  public dateto;
  public datefrom;
  public page = 0;
  public cursor = 0;
  public shownext = false;
  public showpreview = false;
  public count;

  public privilege = false;
  public moveTable = false;

  public searchprod = '';

  public searchTable = false;
  public searchDateTable = false;

//second table
public storageMovesItems2 :any = [];
public meta2;
public shownext2 = false;
public showpreview2 = false;
public cursor2 = 0;
public moveTable2 = false;
public count2;
 
  constructor(private _dashboardService : DashboardService, private login : LoginService, private router : Router, private cookieService: CookieService) { }

  ngOnInit() {

    let val = this.cookieService.get("token");
    if(val){

      let djtw = jwt_decode(val);
      let identity = djtw['identity'];
      for (var _i = 0; _i < identity.length; _i++) {
        if(identity[_i]['privilege'] == 'dashboard' ){
          this.privilege = true;
        }
      }

      if(this.privilege){
        //aqui cargamos movimiento por default si queremos;
        //this.initialDashboard();
      }
      else{
        window.location.href = '/login';
      }
    }
    else{
      this.privilege = true;
      //window.location.href = '/login';
    }
  }

  storageMoveTable(){
    if(!this.datefrom && !this.dateto){
      alert('Incomplete Information ');
    }
    if(this.datefrom && this.dateto){
      /*if(!this.searchDateTable){
        this.searchDateTable = true;
        this.searchTable = false;
        this.cursor = 0;

      }*/

      this._dashboardService.stateTable(this.datefrom, this.dateto, this.cursor)
      .subscribe(res=>{
        //console.log(res);
        if(res['message'] == 'wrong_dates'){
          alert('Incorrect date order.!');
        }else{
          this.storageMovesItems = res['query'];
          this.meta = res['meta'];
          //alert('aqui');
          //console.log(this.meta);
          this.count = this.meta.count;
          this.cursor = this.meta.cursor;
          if(this.meta.more){
            this.shownext = true;
          }else{
            this.shownext = false;
          }
          
          if(this.cursor == 10){
            this.showpreview = false
          }
          else{
            this.showpreview = true;
          }
          this.moveTable = true;
        }
      
      })
    }
    

    
  }

  preview(){
    this.cursor = this.cursor - 20;
    this.storageMoveTable();
    //alert(this.cursor);
  }

  preview2(){
    this.cursor2 = this.cursor2 - 20;
    this.search();
    //alert(this.cursor);
  }

  search(){
    if(this.searchprod == ''){
      alert('Search Field is empty.!')
    }
    else{
      /*this._dashboardService.searchProductState(this.searchprod, this.cursor2)
      .subscribe( res => {
        //console.log(res);
        this.storageMovesItems2 = res['query'];
        this.meta2 = res['meta'];
        //alert('aqui');
        //console.log(this.meta2);
        this.count2 = this.meta2.count;
        this.cursor2 = this.meta2.cursor;
        if(this.meta2.more){
          this.shownext2 = true;
        }else{
          this.shownext2 = false;
        }
        
        if(this.cursor2 == 10){
          this.showpreview2 = false
        }
        else{
          this.showpreview2 = true;
        }
        this.moveTable2 = true;
      }) */

      alert('');

      
      
    }
  }

  test(){
    let day = Date.now();
    alert(this.cursor);
  }

  searchField(){
    this.moveTable = false;
    this.cursor2 = 0;
    this.search();
  }

  funStorageMoveTable(){
    this.moveTable2 = false;
    this.cursor = 0;
    this.storageMoveTable();
  }

}
