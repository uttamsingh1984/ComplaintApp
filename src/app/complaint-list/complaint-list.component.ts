import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { ComplaintService } from "src/app/Services/complaint.service"
import { Complaint } from '../Models/complaint';

@Component({
  selector: 'app-complaint-list',
  templateUrl: './complaint-list.component.html',
  styleUrls: ['./complaint-list.component.css']
})
export class ComplaintListComponent implements OnInit {

  searchText:string;
  complaintList:any=[];
  constructor(private route: ActivatedRoute,
    private complaintService:ComplaintService) { 
    this.route.params.subscribe( params => this.doSearch(params['searchText'])); (1)
  }

  ngOnInit() {
  }
  doSearch(searchText:string){
    this.searchText=searchText;
    this.complaintService.getComplaintList(searchText).subscribe(data=> {
      this.complaintList= data;
    });
  }

}
