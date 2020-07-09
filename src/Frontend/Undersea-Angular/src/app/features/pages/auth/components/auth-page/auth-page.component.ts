import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { AuthpageService } from '../../service/authpage.service';

import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { error } from '@angular/compiler/src/util';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit {

  public isReg = false;

  loginForm = new FormGroup({
    name: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  registerForm = new FormGroup({
    name: new FormControl('', Validators.required),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8)]),
    password2: new FormControl('',
      Validators.required),
    cityName: new FormControl('', Validators.required),

  });

  constructor(private authService: AuthpageService, private router: Router, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
  }

  get name() { return this.loginForm.get('name'); }

  get password() { return this.loginForm.get('password'); }

  get namer() { return this.registerForm.get('name'); }

  get passwordr() { return this.registerForm.get('password'); }

  get passwordr2() { return this.registerForm.get('password2'); }

  get cityNamer() { return this.registerForm.get('cityName'); }


  login() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value.name, this.loginForm.value.password).subscribe(res => {

        if (res.token != null) {
          localStorage.setItem('token', res.token);
          this.router.navigate(['/main']);
        }

      },
        (err) => {
          this.snackbar.open('Hibás felhasználónév vagy jelszó', 'Bezár');
          console.error('HURKAAAAA', err);
        });

    }

  }


  register() {

    if (this.registerForm.valid) {
      if (this.registerForm.value.password === this.registerForm.value.password2) {
        this.authService.register(
          this.registerForm.value.name,
          this.registerForm.value.password,
          this.registerForm.value.password2,
          this.registerForm.value.cityName,
        ).subscribe(res => {
          if (res.token != null) {
            localStorage.setItem('token', res.token);
            this.router.navigate(['/main']);

          }
          // tslint:disable-next-line:no-unused-expression
        }, (err) => {
          this.snackbar.open('Hoppá, valami nem jó, próbálj másik névvel regisztrálni', 'kuka');
          console.error('HURKAAAAA', err);
        });
      }


      else {
        this.snackbar.open('A 2 jelszó nem egyezik', 'kuka', {
          duration: 5000
        });
      }
    }
  }

  changeMode(mode: boolean) {
    this.isReg = mode;
    this.ngOnInit();
  }

}
