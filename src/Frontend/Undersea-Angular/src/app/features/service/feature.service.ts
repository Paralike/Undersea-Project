import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BuildingDto, BuildingsClient } from 'src/app/shared';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {

  constructor(private buildingsClient: BuildingsClient) { }

  getBuildings(): Observable<BuildingDto> {
    return this.buildingsClient.getBuilding();
  }
}
