import { Component, OnInit, Inject } from '@angular/core';
import { ARMY } from '../model/mock-army';
import { ArmyModel } from '../model/army.model';

import { MAT_DIALOG_DATA, MatDialogRef, throwMatDialogContentAlreadyAttachedError } from '@angular/material/dialog';
import { FeatureService } from '../../service/feature.service';
import { UnitList } from '../../pages/main/model/profile.model';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    public dialogRef: MatDialogRef<ArmyComponent>,
    private snackbar: MatSnackBar
    ) {

    this.addUnit = [0, 0, 0];
  }

  ngOnInit(): void {
    console.log(this.data);

    this.featureService.getArmy().subscribe( res => {
      this.army = res;
    },
    (err) => {
      console.log(err);
    });

    this.featureService.getCityArmy().subscribe( res => {
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
    if (this.addUnit[0] === 0 && this.addUnit[1] === 0 && this.addUnit[2] === 0 ){
      this.snackbar.open('Válaszd ki mit szeretnél vásárolni!', 'Bezár');
    }else {
      console.log(this.addUnit);
      this.dialogRef.close();
      this.snackbar.open('Sikeres vásárlás!', 'Bezár');
    }
  }
  // selected(building: BuildingModel) {
  //   this.selectedBuilding = building.buildingType;
  //   document.getElementById('buildButton').style.opacity = '1';

  // }

}
