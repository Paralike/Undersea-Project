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
    sharks: number;
    seals: number;
    seahorses: number;
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
    buildings: number[];
    upgrades: number[];
    army: Army;
}

export const PROFILE: ProfileModel = {
    pearlCount: 230,
    pearlProduction: 20,
    coralCount: 230,
    coralProduction: 12,
    buildings: [0, 1, 0],
    upgrades: [0, 0],
    army: {unitList: {sharks: 0, seals: 5, seahorses: 15}, armyFoodNecessity: 20}
};

