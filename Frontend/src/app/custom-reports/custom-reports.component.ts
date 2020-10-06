import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { CustomReportsService } from '../custom-reports.service';
import { forEach } from '@angular/router/src/utils/collection';
import { ExcelGeneratorService } from '../excel-generator.service';
import { CookieService } from "ngx-cookie-service";


@Component({
  selector: 'app-custom-reports',
  templateUrl: './custom-reports.component.html',
  styleUrls: ['./custom-reports.component.css'],
})
export class CustomReportsComponent implements OnInit {
  constructor(
    private _customReportsService: CustomReportsService,
    private excelService: ExcelGeneratorService,
    private cookieService: CookieService,
    
  ) {}
  // variables que maneja la vista de los componentes
  activeReport = 'Laureate IT Operations Reports';
  loggedUSer = this.cookieService.get('user_name');
  todaysDate = this.todayDate();
  showall = false;
  showJobtitleComponent = this.showall;
  showInventoryPagesComponente = this.showall;
  showAssetsComponent = this.showall;
  showSavedReportsComponent = this.showall;
  showEmployeeTable = false;
  showButtons = false;
  /*for production
  showJobtitleComponent: false;
  showDatesComponent: false;
  showInventoryPagesComponente: false;
  showAssetsComponent: false;
  */
 /*********************Reports Variables ********************************/
 // Employeess Variables
 jobtitle: any;
 jobtitleGroup: any;
 jobtitleFrom: any;
 jobtitleTo: any;
 jobtitleAsset: any;
 jobtitleAssetStatus: any;
 jobtitleAssetRange: any;
 jobtitleAssetMonths: number;
 jobtitleResult = [];

  jobtitleOptions: any[] = [
    { id: 1, job: 'Fulltime' },
    { id: 2, job: 'Intern' },
    { id: 3, job: 'Contractor' },
    { id: 4, job: 'Undefined' },
    { id: 5, job: 'Practicum' },
    { id: 6, job: 'All' },
  ];

  jobtitleGroupOptions: any[] = [
    { id: 1, group: 'Department' },
    { id: 2, group: 'None' },
  ];

  jobtitleAssetOptions: any[] = [
    { id: 1, asset: 'WorkStation' },
    { id: 2, asset: 'Monitor' },
    { id: 3, asset: 'UPS' },
    { id: 4, asset: 'Mouse' },
    { id: 5, asset: 'Keyboard' },
    { id: 6, asset: 'Server' },
    { id: 7, asset: 'All' },
  ];

  jobtitleAssetStatusOptions: any[] = [
    { id: 1, status: 'In Use' },
    { id: 2, status: 'Loans' },
  ];

  jobtitleAssetRangeOptions: any[] = [
    { id: 1, range: 'Less' },
    { id: 2, range: 'Greater' },
    { id: 3, range: 'Equals' },
  ];
  // Inventory Variables
  inventoryPageType: any;
  inventoryPageFrom: any;
  inventoryPageTo: any;
  inventroyPageResults = [];
  showInventoryPagesTable = false;

  inventoryPageTypeOptions: any[] = [
    { id: 1, type: 'All Sheets' },
    { id: 2, type: 'Onboardings' },
    { id: 4, type: 'Offboardings' },
    { id: 5, type: 'Updates' },
    { id: 6, type: 'Loans' },
    { id: 7, type: 'Not Scanned Pages' },
  ];

  // Assets Variables
  assetType: any;
  assetStatus: any;
  assetFrom: any;
  assetTo: any;
  assetGroupBy: any;
  assetRange: any;
  assetMonths: number;
  assetResults = [];
  showAssetTable = false;

  assetStatusOptions: any[] = [
    { id: 1, status: 'In Use' },
    { id: 2, status: 'In Store' },
    { id: 3, status: 'Expired' },
    { id: 5, status: 'Disposed' },
    { id: 6, status: 'Disrepair' },
    { id: 7, status: 'Donation' },
    { id: 8, status: 'Out of Office' },
    { id: 9, status: 'Expired' },
  ];

  assetGroupOptions: any[] = [
    { id: 1, group: 'Brand' },
    { id: 2, group: 'OS' },
  ];

  assetRangeOptions: any[] = [
    { id: 1, status: 'Less' },
    { id: 2, status: 'Greater' },
    { id: 3, status: 'Equals' },
  ];

  savedReportsResults = [];

  /*********************Reports Variables ********************************/

  /********************* Enabling/Disabling Report start***********************/
  showEmployeeReport() {
    this.activeReport = 'Employee Report';
    this.showJobtitleComponent = true;
    this.showInventoryPagesComponente = false;
    this.showInventoryPagesTable = false; 
    this.showAssetsComponent = false;
    this.showSavedReportsComponent = false;
    this.showButtons = true;
  }
  showInventoryReport() {
    this.activeReport = 'Inventory Pages Report';
    this.showJobtitleComponent = false;
    this.showEmployeeTable = false;
    this.showInventoryPagesComponente = true;
    this.showAssetsComponent = false;
    this.showSavedReportsComponent = false;
    this.showButtons = true;
  }

  showAssetReport() {
    this.activeReport = 'Assets Report';
    this.showJobtitleComponent = false;
    this.showInventoryPagesComponente = false;
    this.showInventoryPagesTable = false;
    this.showEmployeeTable = false;
    this.showAssetsComponent = true;
    this.showSavedReportsComponent = false;
    this.showButtons = true;
  }

  showSavedReport() {
    this.activeReport = 'Saved Reports';
    this.showJobtitleComponent = false;
    this.showEmployeeTable = false;
    this.showInventoryPagesComponente = false;
    this.showInventoryPagesTable = false;
    this.showAssetsComponent = false;
    this.showAssetTable = false;
    this.showSavedReportsComponent = true;
    this.showButtons = true;
  }
  /********************* Enabling/Disabling Reports end***********************/
  exportAsXLSX(): void {
    if(this.showJobtitleComponent){
      this.excelService.exportAsExcelFile(this.jobtitleResult, 'Employee_Report');
    }else if (this.showInventoryPagesComponente){
      this.excelService.exportAsExcelFile(this.inventroyPageResults, 'InvIT_Pages_Report');
    }else if (this.showAssetsComponent){
      this.excelService.exportAsExcelFile(this.assetResults, 'Assets_Report');
    }
  }

  todayDate(){
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    return `${yyyy}/${mm}/${dd}`;
  }

  popupReportName(commingname: string){
   
  }

  saveReport(): void{
    if(this.showJobtitleComponent){
      let description = '';
      let values = '';
      let name = '';
      this._customReportsService.saveReport(
        this.loggedUSer,
        this.todaysDate,
        description,
        'Employee',
        values,
        name
      )
      .subscribe((result) => console.log(result));
    }else if(this.showInventoryPagesComponente){
      
    }else if(this.showAssetsComponent){

    }
  }
  /********************* Checking which Report to Run start ******************/
  showOptions() {
    if (this.showJobtitleComponent) {
      this._customReportsService
        .employeeReports(
          this.jobtitle.job,
          this.jobtitleGroup.group,
          this.jobtitleFrom,
          this.jobtitleTo,
          this.jobtitleAsset.asset,
          this.jobtitleAssetStatus.status,
          this.jobtitleAssetRange.range,
          this.jobtitleAssetMonths
        )
        .subscribe((result) => {
          let res = result['values'];
          this.jobtitleResult = Object.keys(res).map((e) => res[e]);
          this.showEmployeeTable = true;
          console.log(this.jobtitleResult);
        });
    } else if (this.showInventoryPagesComponente) {
      this._customReportsService
        .inventoryPageReports(
          this.inventoryPageType.type,
          this.inventoryPageFrom,
          this.inventoryPageTo
        )
        .subscribe((result) => {
        let res = result['values']
        this.inventroyPageResults = Object.keys(res).map((e) => res[e]);
        this.showInventoryPagesTable = true;
        console.log(this.assetResults)
        });

    } else if (this.showAssetsComponent) {
      this._customReportsService.assetReports(
        this.assetType.asset,
        this.assetStatus.status,
        this.assetFrom,
        this.assetTo,
        this.assetRange.status,
        this.assetMonths
      ).subscribe((result) => {
        let res = result['values']
        this.assetResults = Object.keys(res).map((e) => res[e]);
        this.showAssetTable = true;
        console.log(this.assetResults)});
    } else if (this.showSavedReportsComponent) {
    } else {
      /* no report view Selected*/
    }
  }
  /********************* Checking which Report to Run end ********************/

  /********************** Reset the reports Values ***************************/
  resetValues() {
    if (this.showJobtitleComponent) {
      this.jobtitle = '';
      this.jobtitleGroup = '';
      this.jobtitleFrom = null;
      this.jobtitleTo = null;
      this.jobtitleAsset = '';
      this.jobtitleAssetStatus = '';
      this.jobtitleAssetRange = '';
      this.jobtitleAssetMonths = null;
      this.showEmployeeTable = false;
      this.jobtitleResult = [];

    } else if (this.showInventoryPagesComponente) {
      this.inventoryPageType = '';
      this.inventoryPageFrom = null;
      this.inventoryPageTo = null;
      this.showInventoryPagesTable = false;
      this.inventroyPageResults = [];

    } else if (this.showAssetsComponent) {
      this.assetType = '';
      this.assetStatus = '';
      this.assetFrom = '';
      this.assetTo = '';
      this.assetRange = '',
      this.assetMonths = null;
      this.showAssetTable = false;
      this.assetResults = [];

    } else if (this.showSavedReportsComponent) {
    } else {
      /* no report view Selected*/
    }
  }
  /********************** Reset the reports Values ***************************/

  ngOnInit() {}
}
