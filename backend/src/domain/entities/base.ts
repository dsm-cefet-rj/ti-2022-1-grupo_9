import { AutoMap } from "@nartc/automapper";
import { BeforeInsert, Column, CreateDateColumn, ObjectID, ObjectIdColumn, UpdateDateColumn } from "typeorm";

export class EntityBase{
    @ObjectIdColumn()
    _id: string;
    @CreateDateColumn()
    createdAt: string;
    @UpdateDateColumn()
    updatedAt: string;
    @Column()
    isActive: boolean;

    constructor(){
        this._id = null;
        this.isActive = true;
    }

    Deletar(){
        this.isActive = false;
    }
}