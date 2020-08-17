import { Component, OnInit } from "@angular/core";
import { NgModel } from "@angular/forms";
import { SearchEmployeeService } from "../../create-signature-sheet/search-employee.service";
import { HttpClient } from "@angular/common/http";
import { TemplateRef } from "@angular/core";
import { fail } from "assert";
import { forEach } from "@angular/router/src/utils/collection";
import { UrlHandlingStrategy } from "@angular/router/src/url_handling_strategy";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import * as jwt_decode from "jwt-decode";
import { setEnviromentVariables } from "../../../environments/appEnviromentConfig";

@Component({
  selector: "app-loan-assets",
  templateUrl: "./loan-assets.component.html",
  styleUrls: ["./loan-assets.component.css"],
})
export class LoanAssetsComponent implements OnInit {
  public privilege = true;
  public search;
  public status_option = "3";
  public page = 1;
  public sheets = [];
  public meta = [];
  public shownext: any = false;
  public showpreview: any = false;
  public count = 0;
  public more = false;
  public cursor;
  public meta_ = false;

  constructor(
    private _Service: SearchEmployeeService,
    private httpClient: HttpClient,
    private cookieService: CookieService,
    private router: Router
  ) {}

  ngOnInit() {
    if (setEnviromentVariables() == "dev") {
      this.privilege = true;
    } else if (setEnviromentVariables() == "prod") {
      let val = this.cookieService.get("token");
      if (val) {
        let djtw = jwt_decode(val);
        let identity = djtw["identity"];
        for (var _i = 0; _i < identity.length; _i++) {
          if (identity[_i]["privilege"] == "pdf") {
            this.privilege = true;
          }
        }
      } else {
        //this.privilege = true;
        window.location.href = "/login";
      }
    }

    /*Before Dennis Changes
    let val = this.cookieService.get("token");
    if (val) {
      let djtw = jwt_decode(val);
      let identity = djtw["identity"];
      for (var _i = 0; _i < identity.length; _i++) {
        if (identity[_i]["privilege"] == "pdf") {
          this.privilege = true;
        }
      }
    } else {
      //this.privilege = true;
      window.location.href = "/login";
    }

    if (this.privilege) {
      this.find();
    } else {
      window.location.href = "/login";
    }
    Before Dennis Changes*/
  }

  next() {
    if (!this.search) {
      this.search = "";
    }
    this._Service
      .searchLoanProducts(this.search, this.page, 10, this.status_option)
      .subscribe((res) => {
        //console.log(res);
        if (res["products"]) {
          let x = res["products"];
          this.cursor = res["cursor"];
          this.sheets = x;
          this.page = this.page + 1;
          this.count = res["count"];
        }

        //console.log(this.sheets)
        if (!res["products"]) {
          alert("Nothing Found");
          this.search = "";
          //this.shownext = false;
          //this.showpreview = false;
        } else {
          //si no hay nada sustituye los elementos existentes por un null
          if (res["more"]) {
            this.shownext = true;
            this.meta_ = true;
          } else {
            this.shownext = false;
            this.meta_ = false;
          }

          if (res["cursor"] == 11) {
            this.showpreview = false;
          } else {
            this.showpreview = true;
          }
        }
      });
  }

  searchSheet(event: any) {
    this.search = event.target.value;
  }

  test() {
    alert("Hola dennis");
  }

  find() {
    this.page = 1;
    this.next();
  }

  preview() {
    this.page = this.page - 2;
    this.next();
  }
}
