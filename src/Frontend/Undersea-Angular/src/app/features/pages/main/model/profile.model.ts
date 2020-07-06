export interface Building {
    status: number;
    price: number;
    description: string;
    turnCount: number;
    buildingType: number;
}

export interface Upgrade {
    id: number;
    turnCount: number;
    status: number;
}

export interface UnitList {
    additionalProp1: number;
    additionalProp2: number;
    additionalProp3: number;
}

export interface Army {
    unitList: UnitList;
    armyFoodNecessity: number;
}

export interface ProfileModel {
    pearlCount: number;
    pearlProduction: number;
    coralCount: number;
    coralProduction: number;
    buildings: Building[];
    upgrades: Upgrade[];
    army: Army;
}
