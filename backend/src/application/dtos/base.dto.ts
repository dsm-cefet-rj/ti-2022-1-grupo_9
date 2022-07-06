import { AutoMap } from "@nartc/automapper";
import { ObjectIdColumn } from "typeorm";

export class BaseDTO{
    @ObjectIdColumn()
    _id: string;

    constructor(){
        this._id = null;
    }
}