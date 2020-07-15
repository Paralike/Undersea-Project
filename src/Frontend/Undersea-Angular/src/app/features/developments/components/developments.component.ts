import { Component, OnInit, Inject } from '@angular/core';
import { DevelopmentModel } from '../../developments/model/development.model';
import { FeatureService } from '../../service/feature.service';
import { DEVELOPMENTS } from '../../developments/model/mockDevelopment';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UpgradeAttributeDto, UpgradeDto } from 'src/app/shared';
import { elementAt } from 'rxjs/operators';

interface Development {
  type: any;
  status: any;
}
@Component({
  selector: 'app-developments',
  templateUrl: './developments.component.html',
  styleUrls: ['./developments.component.scss']
})


export class DevelopmentsComponent implements OnInit {
  public upgrades: UpgradeAttributeDto[];
  public selectedDevelopment: number;
  public id: string;
  public status: UpgradeDto[];
  upgraded: boolean;
  array;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: number[],
    private featureService: FeatureService,
    public dialogRef: MatDialogRef<DevelopmentsComponent>,
    private snackbar: MatSnackBar,

  ) {
    // console.log(this.bought);
  }


  ngOnInit(): void {
    this.upgrades = [];
    this.array = [];
    this.status = [];
    this.featureService.getDevelopments().subscribe(res => {
      this.upgrades = res;
    });
    this.featureService.getUpgradesinfos().subscribe(res => {
      this.status = res;
      console.log(this.status);
      res.forEach(element => this.status.push(element));
      console.log(res);

      const response: Development = {
        type: res.upgradeType,
        status: res.upgradeStatus
      };
      this.array.push(response);
      console.log(this.array);
    });
  }

  selected(upgrade: UpgradeAttributeDto) {
    this.selectedDevelopment = upgrade.upgradeType;
    console.log(upgrade);
  }

  sendData() {
    this.featureService.startUpgrades(this.selectedDevelopment).subscribe();
    console.log(this.selectedDevelopment);
    console.log(this.upgrades);
    this.dialogRef.close();
    this.snackbar.open('Sikeres vásárlás!', 'Bezár', {
      duration: 3000
    });
  }
}


