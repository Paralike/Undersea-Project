import { Component, OnInit, Inject } from '@angular/core';
import { ARMY } from '../model/mock-army';
import { ArmyModel } from '../model/army.model';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FeatureService } from '../../service/feature.service';
import { UnitList } from '../../pages/main/model/profile.model';

@Component({
  selector: 'app-army',
  templateUrl: './army.component.html',
  styleUrls: ['./army.component.scss']
})
export class ArmyComponent implements OnInit {
  public army: ArmyModel[];
  public addUnit: number[];
  gyongy = 'Gyöngy';


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private featureService: FeatureService,
    public dialogRef: MatDialogRef<ArmyComponent>
  ) {

    this.addUnit = [0, 0, 0];
  }

  ngOnInit(): void {
    console.log(this.data);

    this.featureService.getArmy().subscribe(res => {

    },
      (err) => {
        console.log(err);
      });

    this.featureService.getCityArmy().subscribe(res => {
      console.log(res);
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

  sendData() {
    console.log(this.addUnit);
    this.dialogRef.close();
  }
  // selected(building: BuildingModel) {
  //   this.selectedBuilding = building.buildingType;
  //   document.getElementById('buildButton').style.opacity = '1';

  // }

}
