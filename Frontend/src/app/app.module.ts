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

import { ShareModuleModule } from './share-module/share-module.module';

import { PdfModuleModule } from './pdf/pdf-module/pdf-module.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardService } from './dashboard.service';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    DashboardComponent,
        

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CreateSignatureSheetModule,
    UpdateSignatureSheetModule,
    ShareModuleModule,
    PdfModuleModule,

  ],
  providers: [SearchEmployeeService, DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
