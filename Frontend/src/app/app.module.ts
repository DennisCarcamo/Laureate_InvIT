import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';

import { CreateSignatureSheetModule } from './create-signature-sheet/create-signature-sheet.module';
import { SearchEmployeeService } from './create-signature-sheet/search-employee.service';
import { UpdateSignatureSheetModule } from './update-signature-sheet/update-signature-sheet.module';
import { LicenseModule } from './license/license.module'

import { ShareModuleModule } from './share-module/share-module.module';

import { PdfModuleModule } from './pdf/pdf-module/pdf-module.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardService } from './dashboard.service';
import { LoanAdminModule } from './loan-admin/loan-admin.module';
import { LoginComponent } from './login/login.component'
import { LoginService } from './login.service';
import { AuthGuard } from './auth.guard';
import { CookieService } from 'ngx-cookie-service';
import { UserAdminComponent } from './user-admin/user-admin.component';
import {ManagementService } from './management.service';

import { NgDragDropModule } from 'ng-drag-drop';
import { DashboardTablesComponent } from './dashboard-tables/dashboard-tables.component';
import { LifetimeChartComponent } from './lifetime-chart/lifetime-chart.component';
import { LifetimeTableComponent } from './lifetime-table/lifetime-table.component';
import { LoanAssetsComponent } from './pdf/loan-assets/loan-assets.component';
import { BitlyLoginComponent } from './bitly-login/bitly-login.component';
import { MainBitlyComponent } from './main-bitly/main-bitly.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    DashboardComponent,
    LoginComponent,
    UserAdminComponent,
    DashboardTablesComponent,
    LifetimeChartComponent,
    LifetimeTableComponent,
    LoanAssetsComponent,
    BitlyLoginComponent,
    MainBitlyComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CreateSignatureSheetModule,
    LicenseModule,
    UpdateSignatureSheetModule,
    ShareModuleModule,
    PdfModuleModule,
    LoanAdminModule,
    NgDragDropModule.forRoot()

  ],
  providers: [SearchEmployeeService, DashboardService, LoginService, AuthGuard, CookieService, ManagementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
