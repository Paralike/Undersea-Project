import { Component, OnInit, Inject } from '@angular/core';
import { BuildingModel } from '../model/building.model';
import { FeatureService } from '../../service/feature.service';
import { BUIDLDINGS } from '../model/mockBuildings';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BuildingData } from '../../pages/main/components/navbar/navbar.component';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.scss']
})
export class BuildingsComponent implements OnInit {
  public buildings: BuildingModel[];
  public selectedBuilding: number;
  public id: string;


  constructor(private featureService: FeatureService, @Inject(MAT_DIALOG_DATA) public data: BuildingData) { }

  ngOnInit(): void {
    this.buildings = [];
    this.featureService.getBuildings().subscribe(res => this.buildings = res,
    (err) => {
      console.log(err);
    });
  }

  selected(building: BuildingModel) {
    this.selectedBuilding = building.buildingType;
    document.getElementById('buildButton').style.opacity = '1';

  }

  sendData(){
    console.log(this.selectedBuilding);
    console.log(this.buildings[this.selectedBuilding - 1].name);
  }
}
