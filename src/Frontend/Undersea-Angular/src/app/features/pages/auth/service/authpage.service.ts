import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthpageService {

  constructor() { }

  login(name: string, pwd: string){
    console.log(name, pwd);
  }
}
