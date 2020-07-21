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
  UpgradesClient,
  UpgradeAttributeDto,
  UpgradeTypeClient,
  UpgradeDto,
  BuildingTypeClient,
  SpyClient,
  SpyingDto
} from 'src/app/shared';
import { BuildingModel } from '../buildings/model/building.model';
import { ArmyModel, ArmyUnitModel } from '../army/model/army.model';
import { PROFILE, ProfileModel } from '../pages/main/model/profile.model';
import { threadId } from 'worker_threads';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {
  army: ArmyDto;
  unitToSend: ArmyUnitDto;
  attack: AttackDto;
  upgradeDto: UpgradeDto;
  units: ArmyUnitDto[];

  constructor(
    private buildingsClient: BuildingsClient,
    private attackClient: AttackClient,
    private armyClient: ArmyClient,
    private cityClient: CityClient,
    private profileClient: ProfileClient,
    private gameClient: GameClient,
    private upgradeType: UpgradeTypeClient,
    private upgradeClient: UpgradesClient,
    private buildingTypeClient: BuildingTypeClient,
    private spyClient: SpyClient
  ) { }

  getBuildings(): Observable<BuildingDto[]> {
    return this.buildingsClient.getBuilding();
    // return of(BUIDLDINGS);
  }

  getBuildingTypes(): Observable<any>{
    return this.buildingTypeClient.getBuildings();
  }
  getDevelopments(): Observable<UpgradeAttributeDto[]> {
    return this.upgradeType.getUpgrades();
    // return of(DEVELOPMENTS);
  }
  getUpgradesinfos(): Observable<any> {
    return this.upgradeClient.getCurrentUpgradeStatuses();
  }
  startUpgrades(upgradeType: number): Observable<any> {
    console.log(upgradeType);
    return this.upgradeClient.purchaseUpgrade(upgradeType);
  }

  getAttack(name): Observable<AttackableUsersDto[]> {
    // return of(mock);

    return this.attackClient.getAttackableUsers(name);
  }

  sendAttack(id: string, units: ArmyUnitModel[]): Observable<any> {
    this.attack = new AttackDto();
    this.attack.defenderCityId = id;
    this.attack.units = units.map((x): ArmyUnitDto => new ArmyUnitDto({...x}));
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

  purchaseUnits(units: ArmyUnitModel[]) {
    // tslint:disable-next-line:no-shadowed-variable
    this.units =  units.map((x): ArmyUnitDto => new ArmyUnitDto({...x}));
    return this.armyClient.purchaseUnits(this.units);
  }

  getCityArmy(): Observable<any> {
    return this.armyClient.getArmy();
  }

  getProfile(): Observable<any> {
    return this.profileClient.getProfile();
    // return of(PROFILE);
  }

  getCity(): Observable<any> {
    return this.cityClient.getCity();
  }

  endTurn(): Observable<any> {
    return this.gameClient.nextTurn();
  }

  getTurn(): Observable<number> {
    return this.gameClient.getGameState();
  }

  purchaseBuildings(buildingType: number){

    return this.buildingsClient.purchaseBuilding(buildingType);
  }

  sendSpies(id: string, spies: number): Observable<any> {
    return this.spyClient.startSpying(new SpyingDto({defenderCityId: id, spyCount: spies}));
  }

}
