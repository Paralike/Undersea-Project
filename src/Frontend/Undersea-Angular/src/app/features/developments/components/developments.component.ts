import { Component, OnInit, Inject } from '@angular/core';
import { UpgradeAttributeModel, UpgradeModel } from '../../developments/model/development.model';
import { FeatureService } from '../../service/feature.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UpgradeAttributeDto, UpgradeDto } from 'src/app/shared';
import { elementAt } from 'rxjs/operators';

interface Development {
  type: any;
  currentTurn: any;
  status: any;
}
@Component({
  selector: 'app-developments',
  templateUrl: './developments.component.html',
  styleUrls: ['./developments.component.scss']
})


export class DevelopmentsComponent implements OnInit {
  public upgrades: UpgradeAttributeModel[];
  public selectedDevelopment: number;
  public id: string;
  public status: UpgradeModel[];
  upgraded: boolean;
  array;
  canPurchase: boolean;

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
    this.canPurchase = true;
    this.featureService.getDevelopments().subscribe(res => {
      this.upgrades = res.map((x): UpgradeAttributeModel => ({ ...x }));
    });
    this.featureService.getUpgradesinfos().subscribe(res => {

      res.forEach(element => this.status.push(element));
      console.log(res);

      res.forEach(element => {
        const response: Development = {
          type: element.upgradeType,
          currentTurn: element.currentTurn,
          status: element.status
        };
        this.array.push(response);
      });
      console.log(this.array);
    });
  }

  selected(upgrade: UpgradeAttributeDto) {
    this.selectedDevelopment = upgrade.upgradeType;
    console.log(upgrade);
  }

  sendData() {
    console.log(this.array);
    if (this.array[this.selectedDevelopment].status === 1 || this.array[this.selectedDevelopment].status === 2) {
      this.snackbar.open('Ezt a fejlesztést már megvásároltad!', 'Bezár', {
        duration: 3000
      });
    }
    else {
      this.array.forEach(element => {
        if (element.status === 1) {
          this.canPurchase = false;
          this.snackbar.open('Egyszerre csak 1 fejlesztést fejleszthetsz!', 'Bezár', {
            duration: 3000
          });
        }
      });
      if (this.canPurchase) {
        this.featureService.startUpgrades(this.selectedDevelopment).subscribe();
        this.dialogRef.close();
        this.snackbar.open('Sikeres vásárlás!', 'Bezár', {
          duration: 3000
        });
      }

    }
  }

}

