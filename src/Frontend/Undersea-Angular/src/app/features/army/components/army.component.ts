import { Component, OnInit, Inject } from '@angular/core';
import { ArmyModel, ArmyUnitModel } from '../model/army.model';

import { MAT_DIALOG_DATA, MatDialogRef, throwMatDialogContentAlreadyAttachedError } from '@angular/material/dialog';
import { FeatureService } from '../../service/feature.service';
import { UnitList } from '../../pages/main/model/profile.model';

import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ArmyUnitDto, UnitType } from 'src/app/shared';


@Component({
  selector: 'app-army',
  templateUrl: './army.component.html',
  styleUrls: ['./army.component.scss']
})
export class ArmyComponent implements OnInit {
  public army: ArmyModel[];
  public addUnit: ArmyUnitModel[];
  gyongy = 'Gyöngy';


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private featureService: FeatureService,
    public dialogRef: MatDialogRef<ArmyComponent>,
    private snackbar: MatSnackBar
  ) {
    this.addUnit = data.units.map((x): ArmyUnitModel => ({ ...x }));
    this.addUnit.forEach(unit => unit.unitCount = 0);
  }

  ngOnInit(): void {

    this.featureService.getArmy().subscribe(res => this.army = res,
      (err) => {
        console.log(err);
      });

    console.log('ARMY', this.army);
  }

  plusUnit(unit: number) {
    this.addUnit[unit].unitCount++;
  }

  minusUnit(unit: number) {
    if (this.addUnit[unit].unitCount > 0) {
      this.addUnit[unit].unitCount--;
    }
  }

  sendData() {
    if (!this.addUnit.some(x => x.unitCount !== 0)) {
      this.snackbar.open('Válaszd ki mit szeretnél vásárolni!', 'Bezár', {
        duration: 3000
      });
    } else {
      this.featureService.purchaseUnits(this.addUnit).subscribe(() => {
        this.dialogRef.close();
        this.snackbar.open('Sikeres vásárlás!', 'Bezár', {
          duration: 3000
        });
      }, (err) => {
       this.snackbar.open(JSON.parse(err.response).Message, 'Bezár', {
          duration: 5000
         });
      });
    }


  }

}
