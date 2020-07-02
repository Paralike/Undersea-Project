import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { AuthpageService } from '../../service/authpage.service'

import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, ReactiveFormsModule  } from '@angular/forms';

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

  constructor(private authService: AuthpageService, private router: Router ) {}

  ngOnInit(): void {
  }

  get name() {return this.loginForm.get('name')}

  get password() {return this.loginForm.get('password')}

  get namer() {return this.registerForm.get('name')}

  get passwordr() {return this.registerForm.get('password')}

  get passwordr2() {return this.registerForm.get('password2')}

  get cityNamer() {return this.registerForm.get('cityName')}

  login(){
    console.log("login")
    if (this.loginForm.valid) {
      if(this.authService.login(this.loginForm.value['name'], this.loginForm.value['password']) == 200)
        this.router.navigate(['/main'])
    }

  }

  register(name: string, pwd: string, cityName: string){
    console.log("register");
    if (this.registerForm.valid) {
     if(this.authService.register(this.registerForm.value['name'], this.registerForm.value['password'], this.registerForm.value['cityName']) == 200)
       this.router.navigate(['/main'])
     }

  }

  changeMode(mode: boolean){
    this.isReg = mode;
    this.ngOnInit();
  }

}
