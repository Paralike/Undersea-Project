import { Component, OnInit } from '@angular/core';
import { BuildingModel } from '../model/building.model';
import { FeatureService } from '../../service/feature.service';

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.scss']
})
export class BuildingsComponent implements OnInit {
  private buildings: BuildingModel[];

  constructor(private featureService: FeatureService) { }

  ngOnInit(): void {
    this.buildings = [];
    // this.featureService.getBuildings().subscribe( res => {
    //   console.log(res);
    // });
  }

}
