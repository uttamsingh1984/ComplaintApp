import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';

import { OrganizationService } from '../Services/organization.service';
import { Organization } from '../Models/organization';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  org: Organization;
  constructor(private organizationService: OrganizationService, private route: ActivatedRoute) 
  {
      this.route.params.subscribe(params=> this.getOrgDetails(params['id']));
  }

  ngOnInit() {
  }

  getOrgDetails(id:string){
    this.organizationService.getOrganizationDetails(id).subscribe(data=>{
      this.org= data;
    });
  }

  registerComplaint(){
    
  }

}
