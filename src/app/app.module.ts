import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GtechComponent } from './gtech/gtech.component';

import { FormsModule } from '@angular/forms';
import { EmployerlistComponent } from './employerlist/employerlist.component';
import { EmployerdetailsComponent } from './employerdetails/employerdetails.component';
import { AbirdataserviceService } from './abirdataservice.service';

import { HttpClientModule }    from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GtechComponent,
    EmployerlistComponent,
    EmployerdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AbirdataserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
