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
import { UnitDto, ArmyUnitDto, UnitType, BuildingDto } from 'src/app/shared';
import { ExplorerComponent } from '../../../../explorer/explorer.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() buildings: BuildingDto[];
  @Input() developements: number[];
  @Input() units: ArmyUnitDto[];
  @Output() reload = new EventEmitter<void>();


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
    dialogRef.afterClosed().subscribe(() => this.reload.emit());
  }

  openAttack() {
    const dialogRef = this.dialog.open(AttackComponent, {
      width: '50vw',
      data: {
        // tslint:disable-next-line:max-line-length
        units: this.units,
      },
      backdropClass: 'backdropBackground'
    });
    dialogRef.afterClosed().subscribe(() => this.reload.emit());
  }

  openFights() {
    const dialogRef = this.dialog.open(FightComponent, {
      width: '50vw',
      data: {
      }
    });
    dialogRef.afterClosed().subscribe(() => this.reload.emit());
  }

  openRanks() {
    const dialogRef = this.dialog.open(RankComponent, {
      width: '50vw',
      data: {}
    });
    dialogRef.afterClosed().subscribe(() => this.reload.emit());
  }

  openArmy() {
    const dialogRef = this.dialog.open(ArmyComponent, {
      width: '50vw',
      data: {
        // tslint:disable-next-line:max-line-length
        units: this.units,
      }
    });
    dialogRef.afterClosed().subscribe(() => this.reload.emit());
  }

  openDevelopments() {
    const dialogRef = this.dialog.open(DevelopmentsComponent, {
      width: '50vw',
      data: {
        developements: this.developements
      }
    });
  }
  openExplorer() {
    const dialogRef = this.dialog.open(ExplorerComponent, {
      width: '50vw',
      data: {
        spies: this.units[UnitType.Felfedezo].unitCount
      }
    });
    dialogRef.afterClosed().subscribe(() => this.reload.emit());
  }

}
