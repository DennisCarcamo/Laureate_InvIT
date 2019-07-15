import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { LicenseService } from '../services/license.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {
  reporte: any;
  modalRef: BsModalRef;
  license: any;
  submitted: boolean;
  isEditing: boolean;
  limit: number;
  offset: number;

  constructor(
    private licenseService: LicenseService) {}

  ngOnInit() {
    this.reporte = [];
    this.submitted = false;
    this.isEditing = false;
    

    this.licenseService.getReport().subscribe(data => {
      this.reporte = data['data'];
    });
  }
}
