import { UnitType } from 'src/app/shared';

export interface ArmyModel {
    price: number;
    foodNecessity: number;
    damage: number;
    defense: number;
    unitType: UnitType;
    name?: string;
}

export class ArmyUnitModel {
    unitType: UnitType;
    unitCount: number;
}

