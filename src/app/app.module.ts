import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SignInComponent } from './component/sign-in/sign-in.component';
import { JwtInterceptor } from './jwt.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LicensePlateTableComponent } from './component/license-plate-table/license-plate-table.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RepresentationLicensePlateComponent } from './component/representation-license-plate/representation-license-plate.component';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { RegisterComponent } from './component/register/register.component';
import { ParkingSpaceViewerComponent } from './component/parking-space-viewer/parking-space-viewer.component';

@NgModule({
  declarations: [AppComponent, SignInComponent, DashboardComponent, LicensePlateTableComponent, RepresentationLicensePlateComponent, RegisterComponent, ParkingSpaceViewerComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, ReactiveFormsModule, BrowserAnimationsModule, TableModule, ButtonModule, DialogModule, DropdownModule, InputTextModule, CalendarModule, InputNumberModule],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },],
  bootstrap: [AppComponent],
})
export class AppModule {}