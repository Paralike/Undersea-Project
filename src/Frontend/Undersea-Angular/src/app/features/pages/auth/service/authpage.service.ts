import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { LoginDto, AuthClient, FileResponse, RegisterDto, AuthResponseDto } from 'src/app/shared';
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
  public jwtHelper;
  router: any;
  newUser: boolean;

  constructor(private authClient: AuthClient) {
    this.jwtHelper = new JwtHelperService();
  }


  login(name: string, pwd: string): Observable<AuthResponseDto> {
    this.logind.username = name;
    this.logind.password = pwd;
    this.newUser = false;
    return from(this.authClient.authenticateUser(this.logind));

  }

  getToken() {
    return localStorage.getItem('token');
  }

  register(name: string, pwd: string, pwd2: string, cityName: string): Observable<AuthResponseDto> {

    this.registerd.username = name;
    this.registerd.password = pwd;
    this.registerd.city = cityName;
    this.newUser = true;

    return from(this.authClient.registerUser(this.registerd));

  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    // Check whether the token is expired and return
    // true or false
    if (token === null) {
      return null;
    }
    return !this.jwtHelper.isTokenExpired(token);
  }
}
