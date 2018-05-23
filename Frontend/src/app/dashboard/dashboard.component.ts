import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';
import { NgModel } from '@angular/forms';
import { DashboardService } from '../dashboard.service';
import { forEach } from '@angular/router/src/utils/collection';
import { LoginService } from '../login.service';
import { log } from 'util';
import {Router} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {

  public inStorePeriphericalsLabel : any = [];
  public labbels : any = [];
  public _initialDashboard : any = [];
  public _statehistory : any = [];
  
  public inStorePeriphericalsData : any = [];
  public inUsePeriphericalsData : any = [];
  public inUsePeriphericalsLabel : any = [];

  public inStoreWorkstationData : any;
  public inUseWorkstationData : any;

  public inStoreAssetsLabels : any = [];
  
  public inStoreAssetsData : any = [];
  public inrepairAssetsData : any = [];
  public inUseAssetsData : any = [];
  public disrepairAssetsData : any = [];
  public expiredAssetsData : any = [];
  public outAssetsData : any = [];
  
  public allperiphericals = true;
  public modelsbool = false;
  public modelLabels : any = [];
  public modelData : any = [];

  public workstationLifetimeinUse;
  public workstationLifetimeInStore;

  public state;
  public asset;
  public smove;
  
  
  public c = 0;
  public myChart : any;
  public logged: any;
  public cookieValue = 'UNKNOWN';
  public privilege = false;
  constructor( private _dashboardService : DashboardService, private login : LoginService, private router : Router, private cookieService: CookieService) { }

  ngAfterViewInit() {

  }
  

  ngOnInit() {

    //this.cookieValue = this.cookieService.get('user_name');
    /*if(this.cookieService.get('user_name')){
      this.initialDashboard();
    }
    else{
     // alert(this.logged);
      this.router.navigateByUrl('/');
    }*/

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
          this.initialDashboard();
        }
        else{
          window.location.href = '/login';
        }
      }
      else{
        window.location.href = '/login';
      }

    
  }

  initialDashboard(){


    //------------------------------------------------
    this._dashboardService.loadInitialDashboard()
    .subscribe(result => {
      this._initialDashboard = result['query'];
      this._statehistory = result['History'];
      for(let item of this._initialDashboard){
        if(item['componenttypename'] != "Workstation" && item['displaystate'] == "In Store"){
          let x =  item['componenttypename']  +'('+ item['count'] +')' ;
          this.inStorePeriphericalsData.push(item['count']);
          this.inStorePeriphericalsLabel.push(x);
        }

        if(item['componenttypename'] != "Workstation" && item['displaystate'] == "In Use"){
          let x =  item['componenttypename']  +'('+ item['count'] +')' ;
          this.inUsePeriphericalsData.push(item['count']);
          this.inUsePeriphericalsLabel.push(x);
        }

        if(item['componenttypename'] == "Workstation" && (item['displaystate'] == "In Use" || item['displaystate'] == "In Store") ){
          if(item['displaystate'] == "In Store"){
            this.inStoreWorkstationData = item['count'] -1 ;
          }

          if(item['displaystate'] == "In Use"){
            this.inUseWorkstationData = item['count'];
          }

        }
        if(item['componenttypename'] != "Workstation" || item['componenttypename'] == "Workstation" ){
          if(item['displaystate'] == "In Use"){
            this.inUseAssetsData.push(item['count'])
          }
          if(item['displaystate'] == "In Store"){
            this.inStoreAssetsData.push(item['count'])
          }
          if(item['displaystate'] == "Expired"){
            this.expiredAssetsData.push(item['count'])
          }
          if(item['displaystate'] == "Disrepair"){
            this.disrepairAssetsData.push(item['count'])
          }
          if(item['displaystate'] == "Donation"){
            this.outAssetsData.push(item['count'])
          }
          if(item['displaystate'] == "In Repair"){
            this.inrepairAssetsData.push(item['count'])
          }
        }



      }
      
      this.inStorePeriphericalChart();

    })

    this._dashboardService.searchLifetime()
    .subscribe(res => {
      console.log(res);
      this.workstationLifetimeinUse = res['query_in_use'];
      this.workstationLifetimeInStore = res['query_in_store'];

    })
  }


  /*storageMoveTable(){
    if(!this.datefrom && !this.dateto){
      alert('Incomplete Information ');
    }
    this._dashboardService.stateTable(this.datefrom, this.dateto, this.cursor)
    .subscribe(res=>{
      console.log(res);
      if(res['message'] == 'wrong_dates'){
        alert('Incorrect date order.!');
      }else{
        this.storageMovesItems = res['query'];
        this.meta = res['meta'];
        //alert('aqui');
        console.log(this.meta);
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
      }
    })
    
    //console.log(this.modelData);
    //this.modelsbool = true;
    
  }

  preview(){
    this.cursor = this.cursor - 20;
    this.storageMoveTable();
    //alert(this.cursor);
  } */

  inStorePeriphericalChart(){
    new Chart(document.getElementById("doughnut-chart"), {
      type: 'doughnut',
      data: {
        labels: this.inStorePeriphericalsLabel,
        datasets: [
          {
            label: "Population (millions)",
            backgroundColor: ["#007399", "#0099cc","#00bfff","#33ccff","#66d9ff","#99e6ff"],
            data: this.inStorePeriphericalsData,
            borderWidth: 8
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Peripherals in Storage'
        },
        responsive: false,
        display:true
      }
    });


    new Chart(document.getElementById("bar-chart-horizontal"), {
      type: 'horizontalBar',
      data: {
        labels: ["Workstations In Store", "Workstations In Use"],
        datasets: [
          {
            backgroundColor: ["#0080ff", "#ff4d4d"],
            data: [this.inStoreWorkstationData,this.inUseWorkstationData]
          }
        ]
      },
      options: {
        legend: { display: false },
        title: {
          display: false,
          text: 'Workstations'
        },
        responsive: false,
        display:true,
        scales: {
          xAxes: [{
              stacked: true
          }],
          yAxes: [{
              stacked: true
          }]
      
        }
      }
  });

  new Chart(document.getElementById("doughnut-chart2"), {
    type: 'doughnut',
    data: {
      labels: this.inUsePeriphericalsLabel,
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#004080", "#0059b3","#0073e6","#1a8cff","#4da6ff","#80bfff"],
          data: this.inUsePeriphericalsData,
          borderWidth: 8
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Peripherals in Use'
      },
      responsive: false,
      display:true
    }
  });

    //this.canvas = document.getElementById('myChart');
    //this.ctx = this.canvas.getContext('2d');
    let myChart = new Chart(document.getElementById('myChart'), {
      type: 'bar',
      data: {
        labels: ["Docking Station", "Headset", "Keyboard", "Monitor", "Mouse", "Ups", "Workstations"],
        datasets: [
          {
            label: "In Store",
            backgroundColor: "#00334d",
            data: this.inStoreAssetsData
          }, {
            label: "In Use",
            backgroundColor: "#006699",
            
            data: this.inUseAssetsData
          },
          {
            label: "In Repair",
            backgroundColor: "#0099e6",
            data: this.inrepairAssetsData
          }, {
            label: "Disrepair",
            backgroundColor: "#33bbff",
            data: this.disrepairAssetsData
          },
          {
            label: "Expired",
            backgroundColor: "#80d4ff",
            data: this.expiredAssetsData
          }, {
            label: "Donation",
            backgroundColor: "#cceeff",
            data: this.outAssetsData
          },
        ]
      },
      options: {
        title: {
          text: 'Population growth (millions)'
        }
      }
    });




  }

  watchAllPeripherical(){
    this.allperiphericals = true;
  }

  inStoreWorkstationModels(){
    this.modelsbool = false;
    this.modelLabels.splice(0);
    this.modelData.splice(0);
    this.myChart = null;
    this.modelsbool = true;
    this._dashboardService.inStoreModels(this.asset, this.state)
    .subscribe(result => {
      for(let item of result['query']){
        this.modelLabels.push(item['componentname'])
        this.modelData.push(item['count'])
      }
      if(this.c == 0){
        this.createModelChart();
      }
      else{
        window.myChart.update();
      }
        
      
      this.c = this.c +1;
      
      //this.createModelChart();

    })
  }

  createModelChart(){
     
     window.myChart = new Chart(document.getElementById('modelChart'), {
      type: 'horizontalBar',
      data: {
        labels: this.modelLabels,
        datasets: [
          {
            label: "Quantity In Store",
            backgroundColor: "#3e95cd",
            data: this.modelData
          }
        ]
      },
      options: {
        title: {
          text: 'Models'
        }
      }
    });

    
  }

}

declare global {
  interface Window { myChart: any; }
}
