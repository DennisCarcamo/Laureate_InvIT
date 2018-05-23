import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './../app-routing.module';

import { UpdatesheetComponent } from './updatesheet/updatesheet.component';
import { ShareModuleModule } from '../share-module/share-module.module';
import { UserProductsComponent } from './user-products/user-products.component'

import { ModalModule } from 'ngx-bootstrap/modal';
//import { CreateSignatureSheetModule } from '../create-signature-sheet/create-signature-sheet.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ShareModuleModule,
    ModalModule.forRoot()
    //CreateSignatureSheetModule
  ],
  exports: [
    UpdatesheetComponent,
    UserProductsComponent

  ],

  declarations: [
    UpdatesheetComponent,
    UserProductsComponent,

  ]
})
export class UpdateSignatureSheetModule { }
