import { Component, OnInit } from '@angular/core';
import { AuthClient, ProfileClient } from 'src/app/shared';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(private profileClient: ProfileClient) { }

  ngOnInit(): void {

  }

}
