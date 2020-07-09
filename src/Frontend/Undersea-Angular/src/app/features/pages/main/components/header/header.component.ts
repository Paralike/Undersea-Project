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

  constructor(private featureService: FeatureService) { }

  ngOnInit(): void {
    console.log('header city: ', this.city);
  }
}


