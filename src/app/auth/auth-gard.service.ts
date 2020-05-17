import { Injectable } from '@angular/core';
import { Router, CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { Observable} from 'rxjs';

import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGardService implements CanActivate {

  constructor(private router:Router, private authService:AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    const redirectUrl = route['_routerState']['url'];


    if (this.authService.isAuthenticated()) {
        return true;
    }
    
    // navigate to login page
    //this.router.navigate(['/login']);


    this.router.navigateByUrl(
      this.router.createUrlTree(
        ['/login'], {
          queryParams: {
            redirectUrl
          }
        }
      )
    );

    // you can save redirect url so after authing we can move them back to the page they requested
    return false;
  }
}
