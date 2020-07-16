import { Component, OnInit, Inject } from '@angular/core';
import { BuildingModel, BuildingAttributeModel } from '../model/building.model';
import { FeatureService } from '../../service/feature.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BuildingDto, BuildingAttributeDto } from 'src/app/shared';

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.scss']
})
export class BuildingsComponent implements OnInit {
  public buildings: BuildingAttributeModel[];
  public selectedBuilding: BuildingModel;
  public addBuilding: BuildingModel[];
  public id: string;
  public canBuild: boolean;


  constructor(
    private featureService: FeatureService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<BuildingsComponent>,
    private snackbar: MatSnackBar
  ) {
    console.log('BuildingData:', data);
    this.addBuilding = data.building.map((x): BuildingModel => ({ ...x }));
    console.log(this.addBuilding);

  }

  ngOnInit(): void {
    this.canBuild = true;
    this.buildings = [];
    this.featureService.getBuildingTypes().subscribe(res => this.buildings = res,
      (err) => {
        console.log(err);
      });
  }

  selected(building: BuildingDto) {
    this.selectedBuilding = building;

  }

  sendData() {
    this.addBuilding.forEach(element => {
      if (element.status === 1) {
        this.canBuild = false;
        this.snackbar.open('Egyszerre csak 1 épületet építhetsz!', 'Bezár', {
          duration: 3000
        });
      }
    });
    if (this.canBuild) {
      this.featureService.purchaseBuildings(this.selectedBuilding.buildingType).subscribe(() => {
        this.dialogRef.close();
        this.snackbar.open('Sikeres vásárlás!', 'Bezár', {
          duration: 3000
        });
      });
    }
  }
}
