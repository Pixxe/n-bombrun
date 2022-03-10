import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { RegionDetailsComponent } from './region-details/region-details.component';
import { DepartementDetailsComponent } from './departement-details/departement-details.component';
import { CommuneListComponent } from './commune-list/commune-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RegionDetailsComponent,
    DepartementDetailsComponent,
    CommuneListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
