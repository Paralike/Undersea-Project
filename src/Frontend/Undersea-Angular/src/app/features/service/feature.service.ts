import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BuildingDto, BuildingsClient } from 'src/app/shared';

const mock = [
  {
    id: 1,
    name: 'Mock 1'
  },
  {
    id: 2,
    name: 'Mock 2'
  },
  {
    id: 3,
    name: 'Mock 3'
  }
]

@Injectable({
  providedIn: 'root'
})
export class FeatureService {

  constructor(private buildingsClient: BuildingsClient) { }

  getBuildings(): Observable<BuildingDto> {
    return this.buildingsClient.getBuilding();
  }

  getArmy(): Observable<any> {
    return of(mock);
  }
}
