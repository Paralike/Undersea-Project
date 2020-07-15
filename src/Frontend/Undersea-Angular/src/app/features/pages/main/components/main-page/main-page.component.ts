import { Component, OnInit } from '@angular/core';
import { AuthClient, ProfileClient, CityDto, RankDto } from 'src/app/shared';
import { ProfileModel } from '../../model/profile.model';
import { FeatureService } from 'src/app/features/service/feature.service';
import { SignalViewModel } from '../../../../../core/models/signal-view-model';
import { SignalRService } from '../../../../../core/services/signal-r.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  city: CityDto;
  profile: RankDto;
  array: [];
  signalList: SignalViewModel[] = [];
  constructor(private featureService: FeatureService, private signalRService: SignalRService) { }

  ngOnInit(): void {
    this.array = [];
    this.signalRService.signalReceived.subscribe((signal: SignalViewModel) => {
      console.log('Signal:', signal);
      this.signalList.push(signal);
    });
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
