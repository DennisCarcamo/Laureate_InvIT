import { Component, OnInit, TemplateRef } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { LicenseService } from "../services/license.service";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";

import { CookieService } from "ngx-cookie-service";
import * as jwt_decode from "jwt-decode";
import { Router } from "@angular/router";

import { setEnviromentVariables } from "../../../environments/appEnviromentConfig";

@Component({
  selector: "app-license-list",
  templateUrl: "./license-list.component.html",
  styleUrls: ["./license-list.component.css"],
})
export class LicenseListComponent implements OnInit {
  licenseList: any;
  modalRef: BsModalRef;
  licenseForm: FormGroup;
  license: any;
  submitted: boolean;
  isEditing: boolean;
  moreResults: boolean;
  limit: number;
  offset: number;

  public privilege = false;

  constructor(
    private licenseService: LicenseService,
    private modalService: BsModalService,
    private cookieService: CookieService,
    private formBuilder: FormBuilder
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
      this.licenseList = [];
      this.submitted = false;
      this.isEditing = false;
      this.moreResults = true;
      this.limit = 10;
      this.offset = 0;
      this.loadLicenseList();
    } else {
      window.location.href = "/login";
    }
  }

  loadLicenseList() {
    this.licenseService
      .getList({
        limit: this.limit,
        offset: this.offset,
      })
      .subscribe((data) => {
        const newData = data["data"];
        if (newData.length === this.limit) {
          this.licenseList = newData;
          this.moreResults = true;
        }

        if (newData.length < this.limit && newData.length > 0) {
          this.licenseList = newData;
          this.moreResults = false;
        }

        if (newData.length === 0) {
          this.moreResults = false;
        }
      });
  }

  createMode() {
    this.isEditing = false;

    this.licenseForm = this.formBuilder.group({
      productName: ["", Validators.required],
      licenses: ["", Validators.required],
      vendor: ["", Validators.required],
      adquisitionDate: ["", Validators.required],
      expirationDate: ["", Validators.required],
      productVersion: ["", Validators.required],
      maxUsers: ["", Validators.required],
      accountable: ["", [Validators.required, Validators.email]],
      price: ["", Validators.required],
      enable: ["", Validators.required],
    });
  }

  delete(licenseId: string) {
    this.licenseService.delete(licenseId).subscribe((data) => {
      this.licenseList = this.licenseList.filter((element) => {
        return element["id_license"] !== licenseId;
      });
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  selectLicense(license: any) {
    this.license = license;
  }

  editMode() {
    this.isEditing = true;

    this.licenseForm = this.formBuilder.group({
      productName: [this.license["name_product"], Validators.required],
      licenses: [this.license["licences"], Validators.required],
      vendor: [this.license["vendor"], Validators.required],
      adquisitionDate: [this.license["adquisition_date"], Validators.required],
      expirationDate: [this.license["date_expiration"], Validators.required],
      productVersion: [this.license["version_product"], Validators.required],
      maxUsers: [this.license["max_users"], Validators.required],
      accountable: [
        this.license["accountable"],
        [Validators.required, Validators.email],
      ],
      price: [this.license["price"], Validators.required],
      enable: [this.license["enable"], Validators.required],
    });
  }

  get controls() {
    return this.licenseForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.licenseForm.invalid) {
      return;
    }

    const params = {
      name_product: this.licenseForm.value.productName,
      licences: this.licenseForm.value.licenses,
      vendor: this.licenseForm.value.vendor,
      adquisition_date: this.licenseForm.value.adquisitionDate,
      date_expiration: this.licenseForm.value.expirationDate,
      version_product: this.licenseForm.value.productVersion,
      max_users: this.licenseForm.value.maxUsers,
      accountable: this.licenseForm.value.accountable,
      price: this.licenseForm.value.price,
      enable: this.licenseForm.value.enable,
    };

    // Edit License
    if (this.isEditing) {
      this.licenseService
        .update(this.license["id_license"], params)
        .subscribe((resp) => {
          const newData = resp["data"];
          this.licenseList = this.licenseList.map((element) => {
            if (element.id_license === newData["id_license"]) {
              return newData;
            } else {
              return element;
            }
          });

          this.modalRef.hide();
        });
      // Create License
    } else {
      this.licenseService.create(params).subscribe((resp) => {
        this.licenseList.unshift(resp["data"]);
        this.modalRef.hide();
      });
    }
  }

  previous() {
    this.offset = this.offset - this.limit;
    this.loadLicenseList();
  }

  next() {
    this.offset = this.offset + this.limit;
    this.loadLicenseList();
  }
}
