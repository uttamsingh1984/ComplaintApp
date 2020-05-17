import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import { Complaint } from '../Models/complaint';
import {ComplaintService} from "src/app/Services/complaint.service";

@Component({
  selector: 'app-complaint-details',
  templateUrl: './complaint-details.component.html',
  styleUrls: ['./complaint-details.component.css']
})
export class ComplaintDetailsComponent implements OnInit {

  complaintDetails:Complaint;
  constructor(private router: Router, private route:ActivatedRoute, private complaintService:ComplaintService) {
    this.route.params.subscribe(params=> this.getComplaintDetails(params['id']) );    
   }

  ngOnInit() {
  }

  getComplaintDetails(id:string){
    this.complaintService.getComplaintDetails(id).subscribe(data=>{
      this.complaintDetails= data;
    });
  }

  registerComplaint(){
    this.router.navigate(['/complaint-register']);    
  }

}
