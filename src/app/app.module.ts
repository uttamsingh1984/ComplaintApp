import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppAuthModule } from './app-auth.module';

import { AppComponent } from './app.component';
import { ComplaintListComponent } from './complaint-list/complaint-list.component';
import { ComplaintDetailsComponent } from './complaint-details/complaint-details.component';
import { HomeComponent } from './home/home.component';
import { ComplaintCreateComponent } from './complaint-create/complaint-create.component'

import { RequestHttpInterceptor,ResponseHttpInterceptor } from './interceptor/interceptors';

import {ComplaintService} from './Services/complaint.service'
import {CategoryService} from './Services/category.service'
import {CountryService} from './Services/country.service';
import { CompanyComponent } from './company/company.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { LoginComponent } from './login/login.component'


@NgModule({
  declarations: [
    AppComponent,
    ComplaintListComponent,
    ComplaintDetailsComponent,
    HomeComponent,
    ComplaintCreateComponent,
    CompanyComponent,
    RegisterUserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppAuthModule
  ],
  providers: [
    ComplaintService,
    CategoryService,
    CountryService,
    {provide: HTTP_INTERCEPTORS, useClass: RequestHttpInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ResponseHttpInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
