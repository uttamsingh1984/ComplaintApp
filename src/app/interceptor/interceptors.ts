import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent,HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';

@Injectable()
export class ResponseHttpInterceptor implements HttpInterceptor{
    intercept( 
        req: HttpRequest<any>,
        next: HttpHandler
        ) : Observable<HttpEvent<any>>
    {
        return next.handle(req).pipe(
            map(resp =>{
                if(resp instanceof HttpResponse){
                    return  resp;//.clone({ body: [{title: 'Replaced data in interceptor'}] });
                }
            }
        ));
    }
}



@Injectable()
export class RequestHttpInterceptor implements HttpInterceptor{

    //constructor(private loginService: LoginService) {}

    intercept( 
        req: HttpRequest<any>,
        next: HttpHandler
        ) : Observable<HttpEvent<any>>
    {
        let newHeaders = req.headers;
        //newHeaders = newHeaders.append('authtoken11', 'jwtTokenhere');
        const authReq = req.clone({headers: newHeaders});
        return next.handle(authReq);
    }
}