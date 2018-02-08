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



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CreateSignatureSheetModule

  ],
  providers: [SearchEmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
