import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { ComplaintListComponent } from "./complaint-list/complaint-list.component";
import { ComplaintDetailsComponent } from "./complaint-details/complaint-details.component";
import { ComplaintCreateComponent } from "./complaint-create/complaint-create.component";
import { CompanyComponent } from './company/company.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { LoginComponent } from './login/login.component';

import {AuthGardService} from './auth/auth-gard.service';

const routes: Routes = [
  { path:"", component:HomeComponent},
  { path:"home", component:HomeComponent},
  { path:"complaint-list/:searchText", component:ComplaintListComponent},
  { path:"complaint-details/:id", component:ComplaintDetailsComponent},
  { path:"complaint-register", component:ComplaintCreateComponent, canActivate:[AuthGardService]},
  { path:"organization/:id", component:CompanyComponent},
  { path:"user-register", component:RegisterUserComponent},
  { path:"login", component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
