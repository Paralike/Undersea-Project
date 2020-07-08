import { Component, OnInit } from '@angular/core';
import { AuthClient, ProfileClient } from 'src/app/shared';
import { ProfileModel } from '../../model/profile.model';
import { FeatureService } from 'src/app/features/service/feature.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  city: ProfileModel;

  constructor(private featureService: FeatureService) { }

  ngOnInit(): void {
    this.featureService.getProfile().subscribe(res => {
      this.city = res;
      console.log('SZITI', this.city);
    },
      err => {
        console.error(err);
      });

  }

}
