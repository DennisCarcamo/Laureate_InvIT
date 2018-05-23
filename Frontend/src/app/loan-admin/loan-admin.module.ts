import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoanAComponent } from './loan-a/loan-a.component';
import { ShareModuleModule } from '../share-module/share-module.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ShareModuleModule,
    FormsModule
  ],

  exports: [
    LoanAComponent

  ],
  declarations: [LoanAComponent]
})
export class LoanAdminModule { }
