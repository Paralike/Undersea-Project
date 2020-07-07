import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BuildingDto, BuildingsClient } from 'src/app/shared';

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

  getRanks(): Observable<any> {
    return of(mock);
  }
}
