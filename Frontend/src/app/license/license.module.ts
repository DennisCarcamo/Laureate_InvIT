import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalModule } from 'ngx-bootstrap/modal';

import { LicenseListComponent } from './license-list/license-list.component'
import { LicenseService } from './services/license.service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    LicenseListComponent
  ],
  exports: [
    LicenseListComponent
  ],
  providers: [
    LicenseService
  ]
})
export class LicenseModule { }
