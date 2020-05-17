import { Component, OnInit } from '@angular/core';
import {UserService} from '../Services/user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  isMessage:boolean;
  isSubmitted:boolean=false;
  registerUserForm:FormGroup;
  constructor(private userService:UserService) {
    this.registerUserForm= this.createRegistrationForm();
    this.isMessage=false;    
   }

  ngOnInit() {
  }
  get f() {         
    return this.registerUserForm.controls; 
  }

  onSubmit(){
    this.isSubmitted=true; 
    if(this.registerUserForm.invalid){
      return;
    }

    var user = this.registerUserForm.value;
    this.userService.registerUser(user).subscribe((data:any)=>{
      this.isMessage=true;
      this.isSubmitted=false; 
      this.onReset();
    });


  }

  onReset(){
    this.registerUserForm.reset();
  }

  createRegistrationForm(){
    return new FormGroup({
      firstName: new FormControl("",Validators.required),
      lastName: new FormControl(),
      email:new FormControl("",Validators.required),
      password: new FormControl("",Validators.required),
      confirmPassword: new FormControl("",Validators.required)
    });
  }
}
