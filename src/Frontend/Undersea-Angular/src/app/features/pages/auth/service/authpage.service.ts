import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthpageService {

  constructor() { }

  login(name: string, pwd: string): Observable<number>{
    console.log(name, pwd);
    return of(200);
  }

  register(name: string, pwd: string, cityName: string): Observable<number>{
    console.log(name, pwd, cityName);
    return of(200);
  }
}
