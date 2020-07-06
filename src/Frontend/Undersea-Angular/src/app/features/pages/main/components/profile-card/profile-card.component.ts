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
    if(this.authPageService.newUser == false){
      this.name = this.authPageService.logind.username;
    } else if(this.authPageService.newUser == true){
      this.name = this.authPageService.registerd.username;
    }
    
  }

}
