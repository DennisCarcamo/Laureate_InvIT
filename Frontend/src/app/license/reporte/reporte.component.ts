import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { LicenseService } from "../services/license.service";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";

import { CookieService } from "ngx-cookie-service";
import * as jwt_decode from "jwt-decode";
import { Router } from "@angular/router";
import { setEnviromentVariables } from "../../../environments/appEnviromentConfig";

@Component({
  selector: "app-reporte",
  templateUrl: "./reporte.component.html",
  styleUrls: ["./reporte.component.css"],
})
export class ReporteComponent implements OnInit {
  reporte: any;
  modalRef: BsModalRef;
  license: any;
  submitted: boolean;
  isEditing: boolean;
  limit: number;
  offset: number;
  more: boolean;

  public privilege = false;

  constructor(
    private licenseService: LicenseService,
    private cookieService: CookieService
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
    if(val){
      let djtw = jwt_decode(val);
      let identity = djtw['identity'];
      for (var _i = 0; _i < identity.length; _i++) {
        if(identity[_i]['privilege'] == 'pdf' ){
          this.privilege = true;
        }
      }

    }else{
      //this.privilege = true;
      window.location.href = '/login';
    }
    Before Dennis Changes*/

    if (this.privilege) {
      this.reporte = [];
      this.submitted = false;
      this.isEditing = false;
      this.limit = 10;
      this.offset = 0;
      this.more = true;
      this.loadReportList();
    } else {
      window.location.href = "/login";
    }
  }

  loadReportList() {
    this.licenseService
      .getReport({
        limit: this.limit,
        offset: this.offset,
      })
      .subscribe((data) => {
        const newData = data["data"];
        if (newData.length === this.limit) {
          this.reporte = newData;
          this.more = true;
        }

        if (newData.length < this.limit && newData.length > 0) {
          this.reporte = newData;
          this.more = false;
        }

        if (newData.length === 0) {
          this.more = false;
        }
      });
  }

  previous() {
    this.offset = this.offset - this.limit;
    this.loadReportList();
  }

  next() {
    this.offset = this.offset + this.limit;
    this.loadReportList();
    console.log(this.reporte);
    console.log(this.offset);
    console.log(this.limit);
  }
}
