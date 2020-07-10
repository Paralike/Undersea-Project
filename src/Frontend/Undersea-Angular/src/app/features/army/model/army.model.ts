import { UnitType } from 'src/app/shared';

export interface ArmyModel {
    price: number;
    foodNecessity: number;
    damage: number;
    defense: number;
    unitType: UnitType;
    name: string;
    img: string;
}

