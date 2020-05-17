import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'

import { LoginService } from '../Services/login.service';
import { AuthService } from '../auth/auth.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isMessage:boolean;
  isSubmitted:boolean=false;
  loginFrom:FormGroup;
  returnUrl:string;
  constructor( private loginService:LoginService,private router: Router, private authService:AuthService,private route: ActivatedRoute,) {
      this.loginFrom= this.createLoginForm();
   }

  ngOnInit() {    
    this.returnUrl = this.route.snapshot.queryParams['redirectUrl'] || '/';
  }

  get f() {         
    return this.loginFrom.controls; 
  }

  onSubmit(){
    this.isSubmitted=true; 
    if(this.loginFrom.invalid){
      return;
    }

    var user = this.loginFrom.value;
    
    this.loginService.authenticateUser(user).subscribe((data:any)=>{      
      this.authService.setToken(data.auth_token);
      
      this.isMessage=true;
      this.isSubmitted=false; 
      this.onReset();

      this.router.navigateByUrl(this.returnUrl);
      // navigate url
    });


  }

  onReset(){
    this.loginFrom.reset();
  }

  
  createLoginForm(){
    return new FormGroup({
      UserName: new FormControl("",Validators.required),
      password: new FormControl("",Validators.required)
    });
  }



}
