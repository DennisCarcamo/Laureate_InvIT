import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';
import { NgModel } from '@angular/forms';
import { DashboardService } from '../dashboard.service';
import { forEach } from '@angular/router/src/utils/collection';

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

  public state;
  public asset;
  public c = 0;
  public myChart : any;

  constructor( private _dashboardService : DashboardService) { }

  ngAfterViewInit() {

  }

  ngOnInit() {
    this.initialDashboard();
  }

  initialDashboard(){
    this._dashboardService.loadInitialDashboard()
    .subscribe(result => {
      this._initialDashboard = result['query'];
      this._statehistory = result['History'];
      for(let item of this._initialDashboard){
        if(item['componenttypename'] != "Workstation" && item['displaystate'] == "In Store"){
          this.inStorePeriphericalsData.push(item['count']);
          this.inStorePeriphericalsLabel.push(item['componenttypename']);
        }

        if(item['componenttypename'] != "Workstation" && item['displaystate'] == "In Use"){
          this.inUsePeriphericalsData.push(item['count']);
          this.inUsePeriphericalsLabel.push(item['componenttypename']);
        }

        if(item['componenttypename'] == "Workstation" && (item['displaystate'] == "In Use" || item['displaystate'] == "In Store") ){
          if(item['displaystate'] == "In Store"){
            this.inStoreWorkstationData = item['count'];
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
  }

  test(){
    console.log(this.state);
    console.log(this.asset);
    
    //console.log(this.modelData);
    //this.modelsbool = true;
    
  }

  inStorePeriphericalChart(){
    new Chart(document.getElementById("doughnut-chart"), {
      type: 'doughnut',
      data: {
        labels: this.inStorePeriphericalsLabel,
        datasets: [
          {
            label: "Population (millions)",
            backgroundColor: ["#0099cc", "#00ace6","#00bfff","#1ac6ff","#33ccff","#4dd2ff"],
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
          backgroundColor: ["#005ce6", "#0066ff","#1a75ff","#3385ff","#4d94ff","#66a3ff"],
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
            backgroundColor: "#79a6d2",
            data: this.inStoreAssetsData
          }, {
            label: "In Use",
            backgroundColor: "#6699cc",
            
            data: this.inUseAssetsData
          },
          {
            label: "In Repair",
            backgroundColor: "#538cc6",
            data: this.inrepairAssetsData
          }, {
            label: "Disrepair",
            backgroundColor: "#4080bf",
            data: this.disrepairAssetsData
          },
          {
            label: "Expired",
            backgroundColor: "#3973ac",
            data: this.expiredAssetsData
          }, {
            label: "Donation",
            backgroundColor: "#336699",
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
    this.modelsbool = true;
    this.modelLabels.splice(0);
    this.modelData.splice(0);
    this._dashboardService.inStoreModels(this.asset)
    .subscribe(result => {
      for(let item of result['query']){
        this.modelLabels.push(item['componentname'])
        this.modelData.push(item['count'])
      }
      if(this.c == 0){
        this.createModelChart();
      }
      else{
        this.myChart = [];
        this.createModelChart();
      }
        
      
      this.c = this.c +1;


    })
  }

  createModelChart(){
     
     this.myChart = new Chart(document.getElementById('modelChart'), {
      type: 'bar',
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
