import { Component, OnInit, Inject } from '@angular/core';
import { ARMY } from '../model/mock-army';
import { ArmyModel } from '../model/army.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ArmyData } from '../../pages/main/components/navbar/navbar.component';
import { FeatureService } from '../../service/feature.service';

@Component({
  selector: 'app-army',
  templateUrl: './army.component.html',
  styleUrls: ['./army.component.scss']
})
export class ArmyComponent implements OnInit {
  public army: ArmyModel[];
  public addUnit: number[];
  gyongy = 'Gyöngy';

  constructor(@Inject(MAT_DIALOG_DATA) public data: ArmyData, private featureService: FeatureService) {
    this.addUnit = [0, 0, 0];
  }

  ngOnInit(): void {

    this.featureService.getArmy().subscribe( res => {
      this.army = res;
    },
    (err) => {
      console.log(err);
    });
  }

  plusUnit(unit: number) {
    this.addUnit[unit]++;
    console.log(unit);
  }

  minusUnit(unit: number) {
    if (this.addUnit[unit] > 0) {
      this.addUnit[unit]--;
    }

  }

  // selected(building: BuildingModel) {
  //   this.selectedBuilding = building.buildingType;
  //   document.getElementById('buildButton').style.opacity = '1';

  // }

}
