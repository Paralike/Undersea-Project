import { Component, OnInit, Input } from '@angular/core';
import { AuthpageService } from '../../../auth/service/authpage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {
  @Input() name: string;

  constructor(private authPageService: AuthpageService, private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    localStorage.setItem('token', null);
    this.router.navigate(['login']);



  }

}
