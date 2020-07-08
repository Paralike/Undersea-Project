import { Component, OnInit, Input } from '@angular/core';
import { ProfileModel } from '../../model/profile.model';
import { FeatureService } from 'src/app/features/service/feature.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() city: ProfileModel;

  constructor(private featureService: FeatureService) { }

  ngOnInit(): void {
  }
}


