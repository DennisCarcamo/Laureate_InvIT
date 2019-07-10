import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { LicenseService } from '../services/license.service'
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-license-list',
  templateUrl: './license-list.component.html',
  styleUrls: ['./license-list.component.css']
})
export class LicenseListComponent implements OnInit {
  licenseList: any;
  modalRef: BsModalRef;
  licenseForm: FormGroup;
  license: any;
  submitted: boolean;
  isEditing: boolean;

  constructor(
    private licenseService: LicenseService,
    private modalService: BsModalService,
    private formBuilder: FormBuilder) {
    this.licenseList = [];
    this.submitted = false;
    this.isEditing = false;
  }

  ngOnInit() {
    this.licenseService.getList().subscribe(data => {
      this.licenseList = data['license_list'];
    });
  }

  createMode() {
    this.isEditing = false;

    this.licenseForm = this.formBuilder.group({
      productName: ['', Validators.required],
      licenses: ['', Validators.required],
      vendor: ['', Validators.required],
      adquisitionDate: ['', Validators.required],
      expirationDate: ['', Validators.required],
      productVersion: ['', Validators.required],
      maxUsers: ['', Validators.required],
      accountable: ['', [Validators.required, Validators.email]],
      price: ['', Validators.required],
      enable: ['', Validators.required],
    });
  }

  delete(licenseId: string) {
    this.licenseService.delete(licenseId).subscribe(data => {
      this.licenseList = this.licenseList.filter(element => {
        return element.id_license !== licenseId;
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
      productName: [this.license.name_product, Validators.required],
      licenses: [this.license.licences, Validators.required],
      vendor: [this.license.vendor, Validators.required],
      adquisitionDate: [this.license.adquisition_date, Validators.required],
      expirationDate: [this.license.date_expiration, Validators.required],
      productVersion: [this.license.version_product, Validators.required],
      maxUsers: [this.license.max_users, Validators.required],
      accountable: [this.license.accountable, [Validators.required, Validators.email]],
      price: [this.license.price, Validators.required],
      enable: [this.license.enable, Validators.required],
    });
  }

  get controls() { return this.licenseForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.licenseForm.invalid) {
      return;
    }

    const params = {
      'name_product': this.licenseForm.value.productName,
      'licences': this.licenseForm.value.licenses,
      'vendor': this.licenseForm.value.vendor,
      'adquisition_date': this.licenseForm.value.adquisitionDate,
      'date_expiration': this.licenseForm.value.expirationDate,
      'version_product': this.licenseForm.value.productVersion,
      'max_users': this.licenseForm.value.maxUsers,
      'accountable': this.licenseForm.value.accountable,
      'price': this.licenseForm.value.price,
      'enable': this.licenseForm.value.enable
    };

    // Edit License
    if (this.isEditing) {
      this.licenseList = this.licenseList.map(element => {
        if (element.id_license === this.license.id_license) {
          return params;
        } else {
          return element
        }
      });
  
      this.licenseService.update(this.license.id_license, params).subscribe(resp => {
        this.modalRef.hide();
      });
    // Create License
    } else {
      this.licenseList.unshift(params);
  
      this.licenseService.create(params).subscribe(resp => {
        this.modalRef.hide();
      });
    }

  }

}
