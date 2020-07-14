import { Component, OnInit } from '@angular/core';
import { AuthClient, ProfileClient, CityDto } from 'src/app/shared';
import { ProfileModel } from '../../model/profile.model';
import { FeatureService } from 'src/app/features/service/feature.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  city: CityDto;
  array: [];
  constructor(private featureService: FeatureService) { }

  ngOnInit(): void {
    this.array = [];
    this.reload();

  }

  reload() {
    this.featureService.getProfile().subscribe(res => {
      this.city = res;
      console.log(this.city);
      if (!this.city.buildings) {
        this.city.buildings = [0, 0];
      }

    },
      err => {
        console.error(err);
      });
  }


}
