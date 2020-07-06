
enum units{
    Shark,
    Seal,
    Seahorse
}
export interface ArmyModel {
    price: number;
    foodNecessity: number;
    damage: number;
    defense: number;
    unitType: units;
    name: string;
}

