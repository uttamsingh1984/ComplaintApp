import { Component } from '@angular/core';
import {Router} from '@angular/router';

import { AuthService } from './auth/auth.service';
import { JwtHelperService} from '@auth0/angular-jwt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Consumer Complaint';
  searchText:string;
  isLoggedIn: boolean=false;
  loggedInUserName:string;
  constructor(private router: Router, private authService:AuthService, private jwtHelper: JwtHelperService){    
    if(this.authService.isAuthenticated()){
      this.isLoggedIn=true;      
      var data= this.jwtHelper.decodeToken(AuthService.getToken())
      console.log(data);
      this.loggedInUserName = data.FirstName +" "+ data.LastName;
    }
    else{
      this.isLoggedIn=false;
    }
  }

  onInit(){
    
  }

  logout(){
    this.authService.logout();
  }



  searchComplaint(){
    this.router.navigate(['/complaint-list',this.searchText])
  }
}
