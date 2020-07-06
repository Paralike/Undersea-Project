import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BuildingsComponent } from '../../../../buildings/components/buildings.component';
import { AttackComponent } from '../../../../attack/components/attack.component';
import { FightComponent } from '../../../../fight/components/fight.component';
import { RankComponent } from '../../../../rank/components/rank.component';
import { ArmyComponent } from '../../../../army/components/army.component';



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
      width: '70vw',
      data: {}
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
      width: '70vw',
      data: {}
    });
  }

  openRanks() {
    const dialogRef = this.dialog.open(RankComponent, {
      width: '70vw',
      data: {}
    });
  }

  openArmy() {
    const dialogRef = this.dialog.open(ArmyComponent, {
      width: '70vw',
      data: {}
    });
  }



}
