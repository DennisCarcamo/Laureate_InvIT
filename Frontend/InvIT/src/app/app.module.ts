import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { CreatesheetComponent } from './createsheet/createsheet.component';
import { TypeComponent } from './type/type.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SelectedProductsComponent } from './selected-products/selected-products.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    EmployeeTableComponent,
    CreatesheetComponent,
    TypeComponent,
    ProductListComponent,
    SelectedProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
