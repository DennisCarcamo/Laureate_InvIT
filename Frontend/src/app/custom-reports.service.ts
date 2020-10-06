import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class CustomReportsService {
  constructor(private httpClient: HttpClient) { }

  employeeReports(
    jobtitle: string,
    jobtitleGroup: string,
    jobtitleFrom: Date,
    jobtitleTo: Date, 
    jobtitleAsset: string,
    jobtitleStatus: string, 
    jobtitleRange: string, 
    jobtitleMonths: number
  ) {

    // tslint:disable-next-line: max-line-length
    return this.httpClient.post(`http://127.0.0.1:5000/api/v1/employeesreports`,{
    jobtitle: jobtitle,
    jobtitleGroup: jobtitleGroup,
    jobtitleFrom: jobtitleFrom,
    jobtitleTo: jobtitleTo,
    jobtitleAsset: jobtitleAsset,
    jobtitleAssetStatus: jobtitleStatus,
    jobtitleAssetRange: jobtitleRange,
    jobtitleAssetMonths: jobtitleMonths})
    .map((result) => result);
  }

  inventoryPageReports(
    inventoryPageType: string,
    inventoryPageFrom: Date,
    inventoryPageTo: Date,
  ) {

    console.log(typeof(inventoryPageType) + inventoryPageType);
    console.log(typeof(inventoryPageFrom) + inventoryPageFrom);
    console.log(typeof(inventoryPageTo) + inventoryPageTo);

    return this.httpClient.post('http://127.0.0.1:5000/api/v1/inventorypagesreport',{
      inventoryPageType: inventoryPageType,
      inventoryPageFrom: inventoryPageFrom,
      inventoryPageTo:  inventoryPageTo})
      .map((result) => result);
  }

  assetReports(
    assetType: string,
    assetStatus: string,
    assetFrom: string,
    assetTo: string,
    assetRange: string,
    assetMonths: number,
  ) { 

    console.log(typeof(assetType) + assetType);
    console.log(typeof(assetStatus) + assetStatus);
    console.log(typeof(assetFrom) + assetFrom);
    console.log(typeof(assetTo) + assetTo);
    console.log(typeof(assetRange) + assetRange);
    console.log(typeof(assetMonths) + assetMonths);


    return this.httpClient.post('http://127.0.0.1:5000/api/v1/assetreports',{
    assetType: assetType,
    assetStatus: assetStatus,
    assetFrom: assetFrom,
    assetTo: assetTo,
    assetRange: assetRange,
    assetMonths: assetMonths,
    })
   }

   saveReport(
    created_by: string,
    created_at: string,
    description: string,
    report_type: string,
    report_values: string,
    report_name: string,
   ) {
     return this.httpClient.post('http://127.0.0.1:5000/api/v1/savedreport',{
      created_by: created_by,
      created_at: created_at,
      description: description,
      report_type: report_type,
      report_values: report_values,
      report_name: report_name
     } ).map((results) => results);
   }

  getSavedReports() { }
}
