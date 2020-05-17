import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category } from '../Models/complaint';
import { Observable, throwError } from 'rxjs';
import { map,retry, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiURL:string;
  constructor(private httpClient:HttpClient) { 
    this.apiURL= environment.Web_API_Url;
  }

  getCategoryList(): Observable<Category>{    
    return this.httpClient.get<Category>(this.apiURL +'/category/list').pipe(map(
      (data: any)=> {
        return data.map((item:any)=>{ return this.categoryAdapter(item)});
      }))
    .pipe(retry(1),catchError(this.handleError));
  }
  categoryAdapter(json: any): Category {
    return {
      Text: json.name,
      Value: json.id
    };
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
