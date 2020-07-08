import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BuildingsComponent } from '../../../../buildings/components/buildings.component';
import { AttackComponent } from '../../../../attack/components/attack.component';
import { FightComponent } from '../../../../fight/components/fight.component';
import { RankComponent } from '../../../../rank/components/rank.component';
import { ArmyComponent } from '../../../../army/components/army.component';
import { DevelopmentsComponent } from 'src/app/features/developments/components/developments.component';

export interface BuildingData {
  building: number[];
  price: number[];

}
export interface DevelopmentData {
  development: number[];
}
export interface ArmyData {
  units: number[];
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openBuildings() {
    const dialogRef = this.dialog.open(BuildingsComponent, {
      width: '50vw',
      data: {
        building: [0, 0],
        price: [45, 35] // TO DO
      }
    });
  }

  openAttack() {
    const dialogRef = this.dialog.open(AttackComponent, {
      width: '50vw',
      data: {},
      backdropClass: 'backdropBackground'
    });

  }

  openFights() {
    const dialogRef = this.dialog.open(FightComponent, {
      width: '50vw',
      data: {}
    });
  }

  openRanks() {
    const dialogRef = this.dialog.open(RankComponent, {
      width: '50vw',
      data: {}
    });
  }

  openArmy() {
    const dialogRef = this.dialog.open(ArmyComponent, {
      width: '50vw',
      data: {
        units: [0, 5, 0]
      }
    });
  }
 openDevelopments(){
  const dialogRef = this.dialog.open(DevelopmentsComponent, {
    width: '50vw',
    height: '35vw',
    data: {}
  });
 }


}
