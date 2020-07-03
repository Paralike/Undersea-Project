import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthpageService } from './authpage.service';
@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public auth: AuthpageService, public router: Router) { }
  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
