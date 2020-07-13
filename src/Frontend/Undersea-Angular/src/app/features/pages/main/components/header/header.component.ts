import { Component, OnInit, Input } from '@angular/core';
import { ProfileModel } from '../../model/profile.model';
import { FeatureService } from 'src/app/features/service/feature.service';
import { CityDto } from 'src/app/shared';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() city: CityDto;
  currentTurn: number;

  constructor(private featureService: FeatureService) { }

  ngOnInit(): void {
    console.log('header city: ', this.city);
    this.getTurnCount();
  }


  getTurnCount() {

    this.featureService.getTurn().subscribe(res => this.currentTurn = res);
  }

  endTurn() {
    this.featureService.endTurn().subscribe(() => {
      this.getTurnCount();
      this.featureService.getProfile().subscribe(res => {
        this.city = res;
        console.log('SZITI', this.city);
      },
        err => {
          console.error(err);
        });
    }, (err) => console.error(err));
  }
}


