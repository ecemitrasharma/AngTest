import { IUserModel } from "../../app-common/ServiceModel/model";


export class DisplayUserModel implements IUserModel{
UserId: number;
        Name: string;
        Age: number;
        Gender: string;
        Address: string;
}