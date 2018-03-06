import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './../app-routing.module';

import { EmployeeTableComponent } from '../create-signature-sheet/employee-table/employee-table.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],

  exports: [
    EmployeeTableComponent,
  ],
  declarations: [EmployeeTableComponent]
})
export class ShareModuleModule { }
