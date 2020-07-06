import { Component, OnInit } from '@angular/core';
import { AuthpageService } from '../../../auth/service/authpage.service';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {

  constructor(private authPageService: AuthpageService) { }

  name;
  ngOnInit(): void {
    this.name = this.authPageService.logind.username;
  }

}
