import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  BuildingsClient,
  AttackClient,
  AttackableUsersDto,
  ArmyClient,
  ArmyDto,
  ArmyUnitDto,
  CityClient,
  UnitDto,
  ProfileClient,
  RankDto,
  GameClient,
  AttackResponseDto,
  AttackDto,
  BuildingDto,
  UpgradeTypeClient,
  UpgradeAttributeDto
} from 'src/app/shared';
import { BUIDLDINGS } from '../buildings/model/mockBuildings';
import { BuildingModel } from '../buildings/model/building.model';
import { FIGTHS } from '../fight/model/mock-fight';
import { PeriodicElement } from '../fight/model/fight.model';
import { ArmyModel } from '../army/model/army.model';
import { DevelopmentModel } from '../developments/model/development.model';
import { DEVELOPMENTS } from '../developments/model/mockDevelopment';
import { PROFILE, ProfileModel } from '../pages/main/model/profile.model';


const mock = [
  {
    id: 0,
    name: 'Mock 1',
    points: 230
  },
  {
    id: 1,
    name: 'Mock 2',
    points: 230
  },
  {
    id: 2,
    name: 'Mock 3',
    points: 330
  },
  {
    id: 3,
    name: 'Mock 4',
    points: 440
  },
  {
    id: 4,
    name: 'Mock 5',
    points: 1100
  },
  {
    id: 5,
    name: 'Mock 6',
    points: 330
  },
  {
    id: 6,
    name: 'Mock 7',
    points: 1530
  },
  {
    id: 7,
    name: 'Mock 8',
    points: 997
  },
  {
    id: 8,
    name: 'Mock 9',
    points: 1200
  },
  {
    id: 9,
    name: 'Mock 10',
    points: 1200
  },
  {
    id: 10,
    name: 'Mock 11',
    points: 1200
  }
];

@Injectable({
  providedIn: 'root'
})
export class FeatureService {
  army: ArmyDto;
  unitToSend: ArmyUnitDto;
  attack: AttackDto;

  constructor(
    private buildingsClient: BuildingsClient,
    private attackClient: AttackClient,
    private armyClient: ArmyClient,
    private cityClient: CityClient,
    private profileClient: ProfileClient,
    private gameClient: GameClient,
    private upgradeType: UpgradeTypeClient
  ) { }

  getBuildings(): Observable<any> {
   // return this.buildingsClient.getBuilding();
    return of(BUIDLDINGS);
  }
  getDevelopments(): Observable<UpgradeAttributeDto[]> {
    return this.upgradeType.getUpgrades();
    // return of(DEVELOPMENTS);
  }

  getAttack(): Observable<AttackableUsersDto[]> {
    // return of(mock);

    return this.attackClient.getAttackableUsers();
  }

  sendAttack(id: string, units: ArmyUnitDto[]): Observable<any> {
    this.attack = new AttackDto();
    this.attack.defenderCityId = id;
    this.attack.units = units;
    return this.attackClient.startAttack(this.attack);
  }

  getRanks(): Observable<RankDto[]> {
    return this.profileClient.getRanks();
  }

  getFights(): Observable<AttackResponseDto[]> {
    return this.attackClient.getAllAttacks();
  }

  getArmy(): Observable<UnitDto[]> {
    return this.armyClient.getArmy();

  }

  purchaseUnits(units: ArmyUnitDto[]) {
    console.log(units);
    return this.armyClient.purchaseUnits(units);
  }

  getCityArmy(): Observable<any> {
    return this.armyClient.getArmy();
  }

  getProfile(): Observable<any> {
    return this.cityClient.getCity();
    // return of(PROFILE);
  }

  endTurn(): Observable<any> {
    return this.gameClient.nextTurn();
  }

  getTurn(): Observable<number> {
    return this.gameClient.getGameState();
  }

}
