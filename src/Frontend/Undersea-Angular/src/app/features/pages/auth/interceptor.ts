import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { AuthpageService } from './service/authpage.service';
import { Observable, of } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(public auth: AuthpageService) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = localStorage.getItem('token');
        if (token != null) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${this.auth.getToken()}`
                }
            });
        }
        console.log('intercepted ');
        return next.handle(request);
    }
}
