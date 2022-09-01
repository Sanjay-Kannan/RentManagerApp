import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyComponent } from './property/property.component';
import { PropertyApiService } from './property-api.service';
import { RoomsComponent } from './rooms/rooms.component';
import { TenantsComponent } from './tenants/tenants.component';
import { RentComponent } from './rent/rent.component';
import { BillsComponent } from './bills/bills.component';
import { MonthComponent } from './month/month.component';
import { YearComponent } from './year/year.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    PropertyComponent,
    RoomsComponent,
    TenantsComponent,
    RentComponent,
    BillsComponent,
    MonthComponent,
    YearComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    // NgbModal,
    
  ],
  providers: [PropertyApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
