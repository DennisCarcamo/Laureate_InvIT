import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './../app-routing.module';

import { EmployeeTableComponent } from '../create-signature-sheet/employee-table/employee-table.component';
import { ProductListComponent } from '../create-signature-sheet/product-list/product-list.component';
import { SelectedProductsComponent } from '../create-signature-sheet/selected-products/selected-products.component';
import { SearchEmployeeService } from '../create-signature-sheet/search-employee.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],

  exports: [
    EmployeeTableComponent,
    ProductListComponent,
    SelectedProductsComponent
  ],
  declarations: [
    EmployeeTableComponent,
    ProductListComponent,
    SelectedProductsComponent
  
  ]
})
export class ShareModuleModule { }
