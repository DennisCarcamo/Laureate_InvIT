import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ModalModule } from 'ngx-bootstrap/modal';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { LicenseListComponent } from './license-list/license-list.component';
import { LicenseRelationshipComponent } from './license-relationship/license-relationship.component';
import { ReporteComponent } from './reporte/reporte.component';
import { LicenseService } from './services/license.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    CollapseModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    LicenseListComponent,
    LicenseRelationshipComponent,
    ReporteComponent
  ],
  exports: [
    LicenseListComponent,
    LicenseRelationshipComponent,
    ReporteComponent
  ],
  providers: [
    LicenseService
  ]
})
export class LicenseModule { }
