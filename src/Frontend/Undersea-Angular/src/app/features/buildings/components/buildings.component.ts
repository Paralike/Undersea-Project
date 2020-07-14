import { Component, OnInit, Inject } from '@angular/core';
import { BuildingModel } from '../model/building.model';
import { FeatureService } from '../../service/feature.service';
import { BUIDLDINGS } from '../model/mockBuildings';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BuildingDto } from 'src/app/shared';

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.scss']
})
export class BuildingsComponent implements OnInit {
  public buildings: BuildingModel[];
  public selectedBuilding: number;
  public addBuilding: BuildingDto;
  public id: string;


  constructor(
    private featureService: FeatureService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<BuildingsComponent>,
    private snackbar: MatSnackBar
    ) {
      console.log(data);
      this.addBuilding = data.building.map((x): BuildingDto => new BuildingDto({ ...x }));

    }

  ngOnInit(): void {
    this.buildings = [];
    this.featureService.getBuildings().subscribe(res => this.buildings = res,
      (err) => {
        console.log(err);
      });
  }

  selected(building: BuildingModel) {
    this.selectedBuilding = building.buildingType;

  }

  sendData() {
    console.log(this.selectedBuilding);
    this.featureService.purchaseBuildings(this.addBuilding).subscribe(() => {
      console.log(this.buildings[this.selectedBuilding - 1].name);
      console.log(this.data);
      this.data.building[this.selectedBuilding - 1] ++;
      this.dialogRef.close();
      this.snackbar.open('Sikeres vásárlás!', 'Bezár', {
        duration: 3000
      });
    });
    

  }
}
