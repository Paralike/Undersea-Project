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

  constructor(private featureService: FeatureService) { }

  ngOnInit(): void {
    this.reload();

  }

  reload() {
    this.featureService.getProfile().subscribe(res => {
      this.city = res;
      this.city.buildings = [1, 0];
    },
      err => {
        console.error(err);
      });
  }


}
