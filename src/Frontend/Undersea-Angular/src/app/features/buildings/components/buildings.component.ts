import { Component, OnInit, Inject } from '@angular/core';
import { BuildingModel } from '../model/building.model';
import { FeatureService } from '../../service/feature.service';
import { BUIDLDINGS } from '../model/mockBuildings';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.scss']
})
export class BuildingsComponent implements OnInit {
  public buildings: BuildingModel[];
  public selectedBuilding: number;
  public id: string;


  constructor(
    private featureService: FeatureService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<BuildingsComponent>,
    private snackbar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.buildings = [];
    console.log('DATA', this.data);
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
    console.log(this.buildings[this.selectedBuilding - 1].name);
    this.dialogRef.close();
    this.snackbar.open('Sikeres vásárlás!', 'Bezár');

  }
}
