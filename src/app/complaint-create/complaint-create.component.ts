import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

import {ComplaintService} from '../Services/complaint.service';
import {CategoryService} from '../Services/category.service';
import {CountryService} from '../Services/country.service';

@Component({
  selector: 'app-complaint-create',
  templateUrl: './complaint-create.component.html',
  styleUrls: ['./complaint-create.component.css']
})
export class ComplaintCreateComponent implements OnInit {

  isSubmitted:boolean=false;
  complaintForm: FormGroup;
  categories:any=[];
  countries:any=[];

  isMessage:boolean;

  constructor(private countryService: CountryService, private categoryService: CategoryService, private complaintService:ComplaintService) { 
    this.complaintForm=this.createComplaintFormGroup();
    this.getCategories();
    this.getCountries();
  }

  ngOnInit() {
  }

  get f() {         
    return this.complaintForm.controls; 
  }
  get g() {    
    return this.complaintForm.controls.organization; 
  }

  onSubmit(){
    this.isSubmitted=true; 
    if (this.complaintForm.invalid) {
            return;
    }

       
    var complant = this.complaintForm.value;
    complant.organization.id=0;
    complant.organization.addresses=[
      {
        Id:0, 
        AddressLine:complant.organization.address,
        PinCode:complant.organization.pinCode,
        Country:{ id: complant.organization.country}
      }
    ]
    complant.category = { id: complant.category  };
    console.log(complant)
    this.complaintService.createComplaint(complant).subscribe((data:any)=>{
      this.isMessage=true;
      this.isSubmitted=false; 
      this.onReset();
    });
  }

  onReset(){
    this.complaintForm.reset();
  }
  

  getCategories(){
    this.categoryService.getCategoryList().subscribe(data=>{
      //this.categories= data;
      this.categories= data;
    })    
  }
  getCountries(){
    this.countryService.getCountryList().subscribe(data=>{      
      this.countries=data;
    })    
  }
  createComplaintFormGroup(){
    return new FormGroup({
      organization: new FormGroup({
        id: new FormControl(),
        companyName: new FormControl("",Validators.required),
        legalName: new FormControl("",Validators.required),
        website: new FormControl("",Validators.required),
        country: new FormControl(null,Validators.required),
        pinCode: new FormControl("",Validators.required),
        address: new FormControl("",Validators.required),
      }),
      title: new FormControl("",Validators.required),
      content: new FormControl("",Validators.required),
      category: new FormControl(null,Validators.required) 
    });
  }

}
