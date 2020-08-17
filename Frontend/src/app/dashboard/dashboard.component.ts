import { Component, OnInit, AfterViewInit } from "@angular/core";
import { Chart } from "chart.js";
import { DashboardService } from "../dashboard.service";
import { LoginService } from "../login.service";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import * as jwt_decode from "jwt-decode";
import { setEnviromentVariables } from "../../environments/appEnviromentConfig";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements AfterViewInit {
  public inStorePeriphericalsLabel: any = [];
  public labbels: any = [];
  public _initialDashboard: any = [];
  public _statehistory: any = [];

  public inStorePeriphericalsData: any = [];
  public inUsePeriphericalsData: any = [];
  public inUsePeriphericalsLabel: any = [];

  public inStoreWorkstationData: any;
  public inUseWorkstationData: any;
  public serversInUse: any = 0;
  public serversInStore: any = 0;
  public crosscheckValidation: any;
  public boolCrosscheckValidation: any = false;
  public boolCrosscheckValidation2: any = false;

  public inStoreAssetsLabels: any = [];

  public inStoreAssetsData: any = [];
  public inrepairAssetsData: any = [];
  public inUseAssetsData: any = [];
  public disrepairAssetsData: any = [];
  public expiredAssetsData: any = [];
  public outAssetsData: any = [];

  public inStoreAssetsDataflag: any = [];
  public inrepairAssetsDataflag: any = [];
  public inUseAssetsDataflag: any = [];
  public disrepairAssetsDataflag: any = [];
  public expiredAssetsDataflag: any = [];
  public outAssetsDataflag: any = [];
  public flag_ = 0;

  public allperiphericals = true;
  public modelsbool = false;
  public modelLabels: any = [];
  public modelData: any = [];

  public workstationLifetimeinUse;
  public workstationLifetimeInStore;

  public state;
  public asset;
  public smove;

  public c = 0;
  public myChart: any;
  public logged: any;
  public cookieValue = "UNKNOWN";
  public privilege = false;
  constructor(
    private _dashboardService: DashboardService,
    private login: LoginService,
    private router: Router,
    private cookieService: CookieService
  ) {}

  ngAfterViewInit() {}

  ngOnInit() {
    if (setEnviromentVariables() == "dev") {
      this.privilege = true;
      this.initialDashboard();
      this.getCrosscheck();
      //window.location.href = "/login";
    } else if (setEnviromentVariables() == "prod") {
      let val = this.cookieService.get("token");
      if (val) {
        let djtw = jwt_decode(val);
        let identity = djtw["identity"];
        for (var _i = 0; _i < identity.length; _i++) {
          if (identity[_i]["privilege"] == "dashboard") {
            this.privilege = true;
          }
        }

        if (this.privilege) {
          this.initialDashboard();
          this.getCrosscheck();
        } else {
          window.location.href = "/login";
        }
      }
    }

    /* This is before Dennis changes. 
    //this.cookieValue = this.cookieService.get('user_name');
    //if(this.cookieService.get('user_name')){
    //this.initialDashboard();
    //}
    //else{
    // alert(this.logged);
    //this.router.navigateByUrl('/');
    //}

    //comentar los privilegios en producción y qa;
    //this.privilege = true;
    //OJO

    let val = this.cookieService.get("token");
    if (val) {
      let djtw = jwt_decode(val);
      let identity = djtw["identity"];
      for (var _i = 0; _i < identity.length; _i++) {
        if (identity[_i]["privilege"] == "dashboard") {
          this.privilege = true;
        }
      }

      if (this.privilege) {
        this.initialDashboard();
        this.getCrosscheck();
      } else {
        window.location.href = "/login";
      }
    } else {
      //comentar los privilegios en producción y qa;
      // this.privilege = true;
      // this.initialDashboard();
      // this.getCrosscheck();

      //OJO descomentar el href;
      window.location.href = "/login";
    }*/
  }

  initialDashboard() {
    //------------------------------------------------
    this._dashboardService.loadInitialDashboard().subscribe((result) => {
      console.log(result);
      this._initialDashboard = result["query"];
      this._statehistory = result["History"];
      for (let item of this._initialDashboard) {
        if (
          item["componenttypename"] != "Workstation" &&
          item["displaystate"] == "In Store"
        ) {
          let x = item["componenttypename"] + "(" + item["count"] + ")";
          this.inStorePeriphericalsData.push(item["count"]);
          this.inStorePeriphericalsLabel.push(x);
        }

        if (
          item["componenttypename"] != "Workstation" &&
          item["displaystate"] == "In Use"
        ) {
          let x = item["componenttypename"] + "(" + item["count"] + ")";
          this.inUsePeriphericalsData.push(item["count"]);
          this.inUsePeriphericalsLabel.push(x);
        }

        if (
          item["componenttypename"] == "Workstation" &&
          (item["displaystate"] == "In Use" ||
            item["displaystate"] == "In Store")
        ) {
          if (item["displaystate"] == "In Store") {
            this.inStoreWorkstationData = item["count"] - 1;
          }

          if (item["displaystate"] == "In Use") {
            this.inUseWorkstationData = item["count"];
          }
        }
        if (
          item["componenttypename"] != "Workstation" ||
          item["componenttypename"] == "Workstation"
        ) {
          if (item["displaystate"] == "In Use") {
            this.inUseAssetsData.push({
              componenttypename: item["componenttypename"],
              value: item["count"],
            });
          }
          if (item["displaystate"] == "In Store") {
            this.inStoreAssetsData.push({
              componenttypename: item["componenttypename"],
              value: item["count"],
            });
          }
          if (item["displaystate"] == "Expired") {
            this.expiredAssetsData.push({
              componenttypename: item["componenttypename"],
              value: item["count"],
            });
          }
          if (item["displaystate"] == "Disrepair") {
            this.disrepairAssetsData.push({
              componenttypename: item["componenttypename"],
              value: item["count"],
            });
          }
          if (item["displaystate"] == "Donation") {
            this.outAssetsData.push({
              componenttypename: item["componenttypename"],
              value: item["count"],
            });
          }
          if (item["displaystate"] == "In Repair") {
            this.inrepairAssetsData.push({
              componenttypename: item["componenttypename"],
              value: item["count"],
            });
          }
        }
      } //end for

      this.validatePeriphericalStates();

      this.inStorePeriphericalChart();
    });

    this._dashboardService.searchLifetime().subscribe((res) => {
      //console.log(res);
      this.workstationLifetimeinUse = res["query_in_use"];
      this.workstationLifetimeInStore = res["query_in_store"];
    });

    this._dashboardService.serversCount().subscribe((res) => {
      let x = res["message"];
      //console.log(x[1]);

      for (let item of x) {
        //console.log(item['count']);
        if (item["displaystate"] == "In Store") {
          this.serversInStore = item["count"];
        }
        if (item["displaystate"] == "In Use") {
          this.serversInUse = item["count"];
        }
      }
    });
  }

  getCrosscheck() {
    this._dashboardService.crossCheck().subscribe((res) => {
      let x = res["message"];
      let y: string = x[0];
      console.table(y["diff"]);

      if (y["diff"] == "1") {
        this.crosscheckValidation = "CrossCheck up to Date";
        this.boolCrosscheckValidation = true;
      } else {
        this.crosscheckValidation = "UPDATE CROSSCHECK";
        this.boolCrosscheckValidation2 = true;
      }
    });
  }

  inStorePeriphericalChart() {
    new Chart(document.getElementById("doughnut-chart"), {
      type: "doughnut",
      data: {
        labels: this.inStorePeriphericalsLabel,
        datasets: [
          {
            label: "Population (millions)",
            backgroundColor: [
              "#007399",
              "#0099cc",
              "#00bfff",
              "#33ccff",
              "#66d9ff",
              "#99e6ff",
            ],
            data: this.inStorePeriphericalsData,
            borderWidth: 8,
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "Peripherals in Storage",
        },
        responsive: false,
        display: true,
      },
    });

    new Chart(document.getElementById("bar-chart-horizontal"), {
      type: "horizontalBar",
      data: {
        labels: ["Workstations In Store", "Workstations In Use"],
        datasets: [
          {
            backgroundColor: ["#0080ff", "#ff4d4d"],
            data: [this.inStoreWorkstationData, this.inUseWorkstationData],
          },
        ],
      },
      options: {
        legend: { display: false },
        title: {
          display: false,
          text: "Workstations",
        },
        responsive: false,
        display: true,
        scales: {
          xAxes: [
            {
              stacked: true,
            },
          ],
          yAxes: [
            {
              stacked: true,
            },
          ],
        },
      },
    });

    new Chart(document.getElementById("doughnut-chart2"), {
      type: "doughnut",
      data: {
        labels: this.inUsePeriphericalsLabel,
        datasets: [
          {
            label: "Population (millions)",
            backgroundColor: [
              "#004080",
              "#0059b3",
              "#0073e6",
              "#1a8cff",
              "#4da6ff",
              "#80bfff",
            ],
            data: this.inUsePeriphericalsData,
            borderWidth: 8,
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "Peripherals in Use",
        },
        responsive: false,
        display: true,
      },
    });

    let myChart = new Chart(document.getElementById("myChart"), {
      type: "bar",
      data: {
        labels: [
          "Docking Station",
          "Headset",
          "Keyboard",
          "Monitor",
          "Mouse",
          "Ups",
          "Workstations",
        ],
        datasets: [
          {
            label: "In Store",
            backgroundColor: "#00334d",
            data: this.inStoreAssetsDataflag,
          },
          {
            label: "In Use",
            backgroundColor: "#006699",

            data: this.inUseAssetsDataflag,
          },
          {
            label: "In Repair",
            backgroundColor: "#0099e6",
            data: this.inrepairAssetsDataflag,
          },
          {
            label: "Disrepair",
            backgroundColor: "#33bbff",
            data: this.disrepairAssetsDataflag,
          },
          {
            label: "Expired",
            backgroundColor: "#80d4ff",
            data: this.expiredAssetsDataflag,
          },
          {
            label: "Donation",
            backgroundColor: "#cceeff",
            data: this.outAssetsDataflag,
          },
        ],
      },
      options: {
        title: {
          text: "Population growth (millions)",
        },
      },
    });
  }

  watchAllPeripherical() {
    this.allperiphericals = true;
  }

  inStoreWorkstationModels() {
    this.modelsbool = false;
    this.modelLabels.splice(0);
    this.modelData.splice(0);
    this.myChart = null;
    this.modelsbool = true;
    this._dashboardService
      .inStoreModels(this.asset, this.state)
      .subscribe((result) => {
        for (let item of result["query"]) {
          this.modelLabels.push(item["componentname"]);
          this.modelData.push(item["count"]);
        }
        if (this.c == 0) {
          this.createModelChart();
        } else {
          window.myChart.update();
        }

        this.c = this.c + 1;

        //this.createModelChart();
      });
  }

  createModelChart() {
    window.myChart = new Chart(document.getElementById("modelChart"), {
      type: "horizontalBar",
      data: {
        labels: this.modelLabels,
        datasets: [
          {
            label: "Quantity",
            backgroundColor: "#3e95cd",
            data: this.modelData,
          },
        ],
      },
      options: {
        title: {
          text: "Models",
        },
      },
    });
  }

  validatePeriphericalStates() {
    let xExpireDocking = 0;
    let xExpireheadsets = 0;
    let xExpireKeyboard = 0;
    let xExpireMonitor = 0;
    let xExpireMouse = 0;
    let xExpireUPS = 0;
    let xExpireWorkstation = 0;

    let flag = 0;

    for (let item of this.expiredAssetsData) {
      if (item["componenttypename"] == "Docking Station") {
        xExpireDocking = item["value"];
      }

      if (item["componenttypename"] == "Headset") {
        xExpireheadsets = item["value"];
      }

      if (item["componenttypename"] == "Keyboard") {
        xExpireKeyboard = item["value"];
      }

      if (item["componenttypename"] == "Monitor") {
        xExpireMonitor = item["value"];
      }

      if (item["componenttypename"] == "Mouse") {
        xExpireMouse = item["value"];
      }

      if (item["componenttypename"] == "UPS") {
        xExpireUPS = item["value"];
      }

      if (item["componenttypename"] == "Workstation") {
        xExpireWorkstation = item["value"];
      }
    }

    //console.log('###### Expire Array ####');
    //console.log(xExpireDocking,xExpireheadsets, xExpireKeyboard, xExpireMonitor, xExpireMouse, xExpireUPS, xExpireWorkstation )
    this.expiredAssetsDataflag.push(
      xExpireDocking,
      xExpireheadsets,
      xExpireKeyboard,
      xExpireMonitor,
      xExpireMouse,
      xExpireUPS,
      xExpireWorkstation
    );

    let xInStoreDocking = 0;
    let xInStoreheadsets = 0;
    let xInStoreKeyboard = 0;
    let xInStoreMonitor = 0;
    let xInStoreMouse = 0;
    let xInStoreUPS = 0;
    let xInStoreWorkstation = 0;

    for (let item of this.inStoreAssetsData) {
      if (item["componenttypename"] == "Docking Station") {
        xInStoreDocking = item["value"];
      }

      if (item["componenttypename"] == "Headset") {
        xInStoreheadsets = item["value"];
      }

      if (item["componenttypename"] == "Keyboard") {
        xInStoreKeyboard = item["value"];
      }

      if (item["componenttypename"] == "Monitor") {
        xInStoreMonitor = item["value"];
      }

      if (item["componenttypename"] == "Mouse") {
        xInStoreMouse = item["value"];
      }

      if (item["componenttypename"] == "UPS") {
        xInStoreUPS = item["value"];
      }

      if (item["componenttypename"] == "Workstation") {
        xInStoreWorkstation = item["value"];
      }
    }

    //console.log('###### InStore Array ####');
    //console.log(xInStoreDocking,xInStoreheadsets, xInStoreKeyboard, xInStoreMonitor, xInStoreMouse, xInStoreUPS, xInStoreWorkstation )
    this.inStoreAssetsDataflag.push(
      xInStoreDocking,
      xInStoreheadsets,
      xInStoreKeyboard,
      xInStoreMonitor,
      xInStoreMouse,
      xInStoreUPS,
      xInStoreWorkstation
    );

    let xInUseDocking = 0;
    let xInUseheadsets = 0;
    let xInUseKeyboard = 0;
    let xInUseMonitor = 0;
    let xInUseMouse = 0;
    let xInUseUPS = 0;
    let xInUseWorkstation = 0;

    for (let item of this.inUseAssetsData) {
      if (item["componenttypename"] == "Docking Station") {
        xInUseDocking = item["value"];
      }

      if (item["componenttypename"] == "Headset") {
        xInUseheadsets = item["value"];
      }

      if (item["componenttypename"] == "Keyboard") {
        xInUseKeyboard = item["value"];
      }

      if (item["componenttypename"] == "Monitor") {
        xInUseMonitor = item["value"];
      }

      if (item["componenttypename"] == "Mouse") {
        xInUseMouse = item["value"];
      }

      if (item["componenttypename"] == "UPS") {
        xInUseUPS = item["value"];
      }

      if (item["componenttypename"] == "Workstation") {
        xInUseWorkstation = item["value"];
      }
    }

    //console.log('###### InUse Array ####');
    //console.log(xInUseDocking,xInUseheadsets, xInUseKeyboard, xInUseMonitor, xInUseMouse, xInUseUPS, xInUseWorkstation )
    this.inUseAssetsDataflag.push(
      xInUseDocking,
      xInUseheadsets,
      xInUseKeyboard,
      xInUseMonitor,
      xInUseMouse,
      xInUseUPS,
      xInUseWorkstation
    );

    let xDisrepairDocking = 0;
    let xDisrepairheadsets = 0;
    let xDisrepairKeyboard = 0;
    let xDisrepairMonitor = 0;
    let xDisrepairMouse = 0;
    let xDisrepairUPS = 0;
    let xDisrepairWorkstation = 0;

    for (let item of this.disrepairAssetsData) {
      if (item["componenttypename"] == "Docking Station") {
        xDisrepairDocking = item["value"];
      }

      if (item["componenttypename"] == "Headset") {
        xDisrepairheadsets = item["value"];
      }

      if (item["componenttypename"] == "Keyboard") {
        xDisrepairKeyboard = item["value"];
      }

      if (item["componenttypename"] == "Monitor") {
        xDisrepairMonitor = item["value"];
      }

      if (item["componenttypename"] == "Mouse") {
        xDisrepairMouse = item["value"];
      }

      if (item["componenttypename"] == "UPS") {
        xDisrepairUPS = item["value"];
      }

      if (item["componenttypename"] == "Workstation") {
        xDisrepairWorkstation = item["value"];
      }
    }

    //console.log('###### Disrepair Array ####');
    //console.log(xDisrepairDocking,xDisrepairheadsets, xDisrepairKeyboard, xDisrepairMonitor, xDisrepairMouse, xDisrepairUPS, xDisrepairWorkstation )
    this.disrepairAssetsDataflag.push(
      xDisrepairDocking,
      xDisrepairheadsets,
      xDisrepairKeyboard,
      xDisrepairMonitor,
      xDisrepairMouse,
      xDisrepairUPS,
      xDisrepairWorkstation
    );

    let xOutDocking = 0;
    let xOutheadsets = 0;
    let xOutKeyboard = 0;
    let xOutMonitor = 0;
    let xOutMouse = 0;
    let xOutUPS = 0;
    let xOutWorkstation = 0;

    for (let item of this.outAssetsData) {
      if (item["componenttypename"] == "Docking Station") {
        xOutDocking = item["value"];
      }

      if (item["componenttypename"] == "Headset") {
        xOutheadsets = item["value"];
      }

      if (item["componenttypename"] == "Keyboard") {
        xOutKeyboard = item["value"];
      }

      if (item["componenttypename"] == "Monitor") {
        xOutMonitor = item["value"];
      }

      if (item["componenttypename"] == "Mouse") {
        xOutMouse = item["value"];
      }

      if (item["componenttypename"] == "UPS") {
        xOutUPS = item["value"];
      }

      if (item["componenttypename"] == "Workstation") {
        xOutWorkstation = item["value"];
      }
    }

    //console.log('###### Out Array ####');
    //console.log(xOutDocking,xOutheadsets, xOutKeyboard, xOutMonitor, xOutMouse, xOutUPS, xOutWorkstation )
    this.outAssetsDataflag.push(
      xOutDocking,
      xOutheadsets,
      xOutKeyboard,
      xOutMonitor,
      xOutMouse,
      xOutUPS,
      xOutWorkstation
    );

    let xRepairDocking = 0;
    let xRepairheadsets = 0;
    let xRepairKeyboard = 0;
    let xRepairMonitor = 0;
    let xRepairMouse = 0;
    let xRepairUPS = 0;
    let xRepairWorkstation = 0;

    for (let item of this.inrepairAssetsData) {
      if (item["componenttypename"] == "Docking Station") {
        xRepairDocking = item["value"];
      }

      if (item["componenttypename"] == "Headset") {
        xRepairheadsets = item["value"];
      }

      if (item["componenttypename"] == "Keyboard") {
        xRepairKeyboard = item["value"];
      }

      if (item["componenttypename"] == "Monitor") {
        xRepairMonitor = item["value"];
      }

      if (item["componenttypename"] == "Mouse") {
        xRepairMouse = item["value"];
      }

      if (item["componenttypename"] == "UPS") {
        xRepairUPS = item["value"];
      }

      if (item["componenttypename"] == "Workstation") {
        xRepairWorkstation = item["value"];
      }
    }

    //console.log('###### Repair Array ####');
    //console.log(xRepairDocking,xRepairheadsets, xRepairKeyboard, xRepairMonitor, xRepairMouse, xRepairUPS, xRepairWorkstation )
    this.inrepairAssetsDataflag.push(
      xRepairDocking,
      xRepairheadsets,
      xRepairKeyboard,
      xRepairMonitor,
      xRepairMouse,
      xRepairUPS,
      xRepairWorkstation
    );
  } //end Function
}

declare global {
  interface Window {
    myChart: any;
  }
}
