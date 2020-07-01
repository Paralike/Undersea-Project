import { Component, OnInit } from '@angular/core';
import { AuthpageService } from '../../service/authpage.service'

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit {

  constructor(private authService: AuthpageService ) {}

  ngOnInit(): void {
  }

  login(name: string, pwd: string){
    this.authService.login(name, pwd);
  }

}
