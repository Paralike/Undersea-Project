import { UpgradeType, Status } from 'src/app/shared';

export interface UpgradeAttributeModel {
    upgradeType: UpgradeType;
    coralProduction: number;
    defensePoints: number;
    attackPoints: number;
    taxIncrease: number;
    name?: string;
    currentTurn?: number;
    status?: Status;
}

export interface UpgradeModel {
    upgradeType: UpgradeType;
    currentTurn: number;
    status: Status;

}
