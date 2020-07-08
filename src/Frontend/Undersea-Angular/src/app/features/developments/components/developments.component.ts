import { Component, OnInit, Inject } from '@angular/core';
import { BuildingModel } from '../../buildings/model/building.model';
import { FeatureService } from '../../service/feature.service';
import { BUIDLDINGS } from '../../buildings/model/mockBuildings';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BuildingData } from '../../pages/main/components/navbar/navbar.component';
@Component({
  selector: 'app-developments',
  templateUrl: './developments.component.html',
  styleUrls: ['./developments.component.scss']
})
export class DevelopmentsComponent implements OnInit {
  public buildings: BuildingModel[];
  public selectedBuilding: number;
  public id: string;
  constructor(private featureService: FeatureService, @Inject(MAT_DIALOG_DATA) public data: BuildingData) { }

  ngOnInit(): void {
    this.buildings = [];
    this.featureService.getBuildings().subscribe(res => {
      this.buildings = BUIDLDINGS;
    });
  }

  selected(building: BuildingModel) {
    this.selectedBuilding = building.buildingType;
    document.getElementById('buildButton').style.opacity = '1';

  }
}
