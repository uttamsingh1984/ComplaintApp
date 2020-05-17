import { NgModule } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';

import {AuthService} from './auth/auth.service';

const routes: any = {
  config: {
    tokenGetter: AuthService.getToken,
    whitelistedDomains: ['localhost:4200'],
    blacklistedRoutes: ['localhost:4200/api/auth']
  }
};

@NgModule({
  imports: [JwtModule.forRoot(routes)],
  exports: [JwtModule]
})
export class AppAuthModule { }
