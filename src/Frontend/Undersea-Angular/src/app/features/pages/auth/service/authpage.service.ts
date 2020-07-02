import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthpageService {

  constructor() { }

  login(name: string, pwd: string): number{
    console.log(name, pwd);
    return 200;
  }

  register(name: string, pwd: string, cityName: string): number{
    console.log(name, pwd, cityName);
    return 200;
  }
}
