import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable(
  
)
export class JwtInterceptor implements HttpInterceptor {

  constructor(private userService:UserService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = this.userService.getUser().token;
    if(token){
      request = request.clone({
        setHeaders:{Authorization : `Bearer ${token}`}
      })
    }
    return next.handle(request);
  }
}
