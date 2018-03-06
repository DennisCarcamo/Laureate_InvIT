import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './../app-routing.module';

//import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { CreatesheetComponent } from './createsheet/createsheet.component';
import { TypeComponent } from './type/type.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SelectedProductsComponent } from './selected-products/selected-products.component';
import { SearchEmployeeService } from './search-employee.service';

import { ShareModuleModule } from '../share-module/share-module.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ShareModuleModule
  ],
  exports: [
    //EmployeeTableComponent,
    CreatesheetComponent,
    TypeComponent,
    ProductListComponent,
    SelectedProductsComponent
  ],
  declarations: [
    //EmployeeTableComponent,
    CreatesheetComponent,
    TypeComponent,
    ProductListComponent,
    SelectedProductsComponent,
    
  ]
})
export class CreateSignatureSheetModule { }
