import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './../../app-routing.module';

import { PdfsComponent } from '../pdfs/pdfs.component'
import { ShareModuleModule } from '../../share-module/share-module.module';

@NgModule({
  imports: [
    CommonModule,
    ShareModuleModule,
    FormsModule,
  ],

  exports: [
    PdfsComponent

  ],
  declarations: [
    PdfsComponent

  ]
})
export class PdfModuleModule { }
