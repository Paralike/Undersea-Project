import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BuildingsComponent } from '../../../../buildings/components/buildings.component';
import { AttackComponent } from '../../../../attack/components/attack.component';
import { FightComponent } from '../../../../fight/components/fight.component';
import { RankComponent } from '../../../../rank/components/rank.component';
import { ArmyComponent } from '../../../../army/components/army.component';
import { DevelopmentsComponent } from 'src/app/features/developments/components/developments.component';
import { HeaderComponent } from '../header/header.component';
import { UnitList } from '../../model/profile.model';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() buildings: number[];
  @Input() developements: number[];
  @Input() units: UnitList;


  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openBuildings() {
    const dialogRef = this.dialog.open(BuildingsComponent, {
      width: '50vw',
      data: {
        building: this.buildings
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
        units: [this.units.sharks, this.units.seals, this.units.seahorses]
      }
    });
  }

    openDevelopments() {
      const dialogRef = this.dialog.open(DevelopmentsComponent, {
        width: '50vw',
        height: '38vw',
        data: {
          developements: this.developements
        }
      });
    }


  }
