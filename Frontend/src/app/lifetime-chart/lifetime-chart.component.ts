import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import * as jwt_decode from 'jwt-decode';
import { NgModel } from '@angular/forms';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-lifetime-chart',
  templateUrl: './lifetime-chart.component.html',
  styleUrls: ['./lifetime-chart.component.css']
})
export class LifetimeChartComponent implements OnInit {

  public privilege = false;
  public items = [];
  public GreaterLess = 1;
  public number = 36;
  public state = 1;
  public boolGenerateTable = false;
  public page = 0;
  public count;
  public more;
  public cursor = 0;
  public shownext = false;
  public showpreview = false;

  public searchInput = '';

  //second table
  public cursor2 = 0;
  public boolGenerateTable2 = false;
  public items2 = [];
  public count2;
  public more2;
  public shownext2 = false;
  public showpreview2 = false;

  constructor( private _dashboardService : DashboardService , private cookieService: CookieService) { }

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

  generateTable(){
    //validaciones
    if(this.GreaterLess == 0 || this.state == 0)
    {
      alert('Empty Fields.!');
    }
    else{
      this.boolGenerateTable = true;
      
      this._dashboardService.searchLifetimeDetail(this.GreaterLess, this.number, this.state, this.cursor)
      .subscribe(res => {
        this.items = res['query'];
        this.count = res['count'];
        this.cursor = res['cursor'];
        this.more = res['more'];

        if(this.more){
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

      })

    }


  }

  search(){
    if(this.searchInput == ''){
      alert('Search Field is empty.!')
    }
    else{
      this.boolGenerateTable2 = true;

      this._dashboardService.searchItemLifetimeDetail(this.cursor2, this.searchInput)
      .subscribe(res => {
        if(res['count'] != 0){
          this.items2 = res['query'];
          this.count2 = res['count'];
          this.cursor2 = res['cursor'];
          this.more2 = res['more'];
          //alert('aqui');

        }
        console.log(res['count']);
        if(res['count'] == 0){
          alert("Nothing Found.!");
          this.searchInput = '';
        }
        else{

          if(this.more2){
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
        }


      })
    }
  }

  test(){
    alert(this.cursor + ' ' + this.searchInput +this.cursor2 );

  }

  preview(){
    this.cursor = this.cursor - 20;
    this.generateTable();
    //alert(this.cursor);
  }

  funStorageMoveTable(){
    this.boolGenerateTable2 = false;
    this.cursor = 0;
    this.generateTable();
  }

  searchField(){
    this.boolGenerateTable = false;
    this.cursor2 = 0;
    this.search();
  }

  preview2(){
    this.cursor2 = this.cursor2 - 20;
    this.search();
    //alert(this.cursor);
  }


}
