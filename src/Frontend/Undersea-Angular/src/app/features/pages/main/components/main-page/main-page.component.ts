import { Component, OnInit } from '@angular/core';
import { AuthClient, ProfileClient, CityDto, RankDto } from 'src/app/shared';
import { ProfileModel } from '../../model/profile.model';
import { FeatureService } from 'src/app/features/service/feature.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  city: CityDto;
  profile: RankDto;
  array: [];
  constructor(private featureService: FeatureService) { }

  ngOnInit(): void {
    this.array = [];
    this.reload();

  }

  reload() {
    this.featureService.getCity().subscribe(res => {
      this.city = res;

    },
      err => {
        console.error(err);
      });
    this.featureService.getProfile().subscribe(res => {
      this.profile = res;

    });
  }


}
