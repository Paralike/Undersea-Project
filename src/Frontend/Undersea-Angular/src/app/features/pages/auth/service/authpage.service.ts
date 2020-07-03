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

  constructor(private authClient: AuthClient) { }

  login(name: string, pwd: string): Observable<FileResponse> {
    this.logind.username = name;
    this.logind.password = pwd;

    return from(this.authClient.authenticateUser(this.logind))


  }

  register(name: string, pwd: string, cityName: string): Observable<FileResponse> {
    this.registerd.username = name;
    this.registerd.password = pwd;
    this.registerd.city = cityName;

    return from(this.authClient.registerUser(this.registerd));

  }
}
