import { Component, OnInit, Inject } from '@angular/core';
import { ARMY } from '../model/mock-army';
import { ArmyModel } from '../model/army.model';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FeatureService } from '../../service/feature.service';
import { UnitList } from '../../pages/main/model/profile.model';
import { ArmyUnitDto, UnitType } from 'src/app/shared';

@Component({
  selector: 'app-army',
  templateUrl: './army.component.html',
  styleUrls: ['./army.component.scss']
})
export class ArmyComponent implements OnInit {
  public army: ArmyModel[];
  public addUnit: ArmyUnitDto[];
  gyongy = 'Gyöngy';


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private featureService: FeatureService,

    public dialogRef: MatDialogRef<ArmyComponent>
  ) {
    this.addUnit = [];
    this.addUnit[0] = new ArmyUnitDto({ unitType: UnitType.Csatacsiko, unitCount: 0 });
    this.addUnit[1] = new ArmyUnitDto({ unitType: UnitType.Rohamfoka, unitCount: 0 });
    this.addUnit[2] = new ArmyUnitDto({ unitType: UnitType.Lezercapa, unitCount: 0 });
  }

  ngOnInit(): void {
    console.log(this.data);

    this.featureService.getArmy().subscribe(res => {
      this.army = res;
    },
      (err) => {
        console.log(err);
      });

  }

  plusUnit(unit: number) {
    this.addUnit[unit].unitCount++;
    console.log(unit);
  }

  minusUnit(unit: number) {
    if (this.addUnit[unit].unitCount > 0) {
      this.addUnit[unit].unitCount--;
    }

  }

  sendData() {
    console.log(this.addUnit);
    this.featureService.purchaseUnits(this.addUnit).subscribe(() => {
      this.dialogRef.close();
    });

  }
  // selected(building: BuildingModel) {
  //   this.selectedBuilding = building.buildingType;
  //   document.getElementById('buildButton').style.opacity = '1';

  // }

}
