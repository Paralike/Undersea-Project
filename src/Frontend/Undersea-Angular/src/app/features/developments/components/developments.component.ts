import { Component, OnInit, Inject } from '@angular/core';
import { DevelopmentModel } from '../../developments/model/development.model';
import { FeatureService } from '../../service/feature.service';
import { DEVELOPMENTS } from '../../developments/model/mockDevelopment';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UpgradeAttributeDto } from 'src/app/shared';

@Component({
  selector: 'app-developments',
  templateUrl: './developments.component.html',
  styleUrls: ['./developments.component.scss']
})
export class DevelopmentsComponent implements OnInit {
  public upgrades: UpgradeAttributeDto[];
  public selectedDevelopment: number;
  public id: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: number[],
    private featureService: FeatureService,
    public dialogRef: MatDialogRef<DevelopmentsComponent>,
    private snackbar: MatSnackBar
  ) { }


  ngOnInit(): void {
    this.upgrades = [];
    this.featureService.getDevelopments().subscribe(res => {
      this.upgrades = res;
    });
    this.featureService.getUpgradesinfos().subscribe(res => {
      console.log(res);
    })
  }

  selected(upgrade: UpgradeAttributeDto) {
    this.selectedDevelopment = upgrade.upgradeType;

  }

  sendData() {
    this.featureService.startUpgrades(this.selectedDevelopment).subscribe();
    this.dialogRef.close();
    this.snackbar.open('Sikeres vásárlás!', 'Bezár', {
      duration: 3000
    });
  }
}
