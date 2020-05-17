import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Complaint } from '../Models/complaint';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {
  apiURL: string = environment.Web_API_Url;

  public firstPage: string = "";
  public prevPage: string = "";
  public nextPage: string = "";
  public lastPage: string = "";
 
  constructor(private httpClient: HttpClient) { }

  getComplaintList(searchText:string): Observable<Complaint>{
    //return this.complaintList;
    return this.httpClient.get<Complaint>(this.apiURL +'/complaint/list/'+searchText)
    .pipe(retry(1),catchError(this.handleError));
  }
  getComplaintDetails(id:string):Observable<Complaint>{
    //return this.complaintList[0];
    return this.httpClient.get<Complaint>(this.apiURL +'/complaint/get/'+id)
    .pipe(retry(1),catchError(this.handleError));
  }
  createComplaint(complaint:Complaint){    
    return this.httpClient.post<Complaint>(this.apiURL + '/complaint/add', complaint, this.httpOptions)    
    .pipe(retry(1),catchError(this.handleError));
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  } 

  // Error handling 
  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }

}
