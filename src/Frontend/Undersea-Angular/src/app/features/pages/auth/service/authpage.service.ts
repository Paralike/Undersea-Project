import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { LoginDto, AuthClient, FileResponse, RegisterDto } from 'src/app/shared';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthPageComponent } from '../components/auth-page/auth-page.component';


@Injectable({
  providedIn: 'root'
})
export class AuthpageService {

  // tslint:disable:new-parens
  logind = new LoginDto;
  registerd = new RegisterDto;

  constructor(private authClient: AuthClient, public jwtHelper: JwtHelperService) {
    this.jwtHelper = new JwtHelperService();
  }

  login(name: string, pwd: string): Observable<FileResponse> {
    this.logind.username = name;
    this.logind.password = pwd;

    return from(this.authClient.authenticateUser(this.logind));

  }



  register(name: string, pwd: string, pwd2: string, cityName: string): Observable<FileResponse> {

    this.registerd.username = name;
    this.registerd.password = pwd;
    this.registerd.city = cityName;

    return from(this.authClient.registerUser(this.registerd));

  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    // Check whether the token is expired and return
    // true or false
    // return !this.jwtHelper.isTokenExpired(token);
    return true;
  }
}
