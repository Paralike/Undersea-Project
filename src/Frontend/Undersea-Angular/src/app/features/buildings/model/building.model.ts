import { BuildingType, Status } from 'src/app/shared';

export class BuildingAttributeModel {
    buildingType: BuildingType;
    price: number;
    resident: number;
    coral: number;
    hostCapacity: number;
    name: string;
}

export class BuildingModel {
    status!: Status;
    buildingType!: BuildingType;
    quantity!: number;
}


