import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './../app-routing.module';

import { UpdatesheetComponent } from './updatesheet/updatesheet.component';
import { ShareModuleModule } from '../share-module/share-module.module'
import { CreateSignatureSheetModule } from '../create-signature-sheet/create-signature-sheet.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CreateSignatureSheetModule
  ],
  exports: [
    UpdatesheetComponent,

  ],

  declarations: [
    UpdatesheetComponent,

  ]
})
export class UpdateSignatureSheetModule { }
