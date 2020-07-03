import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { LoginDto, AuthClient, FileResponse, RegisterDto } from 'src/app/shared';
import { EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';


@Injectable({
  providedIn: 'root'
})
export class AuthpageService {

  logind = new LoginDto;
  registerd = new RegisterDto;

  constructor() { }

  login(name: string, pwd: string): Observable<Number>{
    this.logind.password = pwd;
    this.logind.username = name;

  // return from(this.authClient.authenticateUser(this.logind))
    return of(200);
    
  }

  register(name: string, pwd: string, cityName: string): Observable<Number>{
    this.registerd.init([name, pwd, cityName]);

   // return from(this.authClient.registerUser(this.registerd))
    return of(200);
  }
}
