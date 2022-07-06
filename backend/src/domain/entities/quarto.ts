import { AutoMap } from "@nartc/automapper";
import { BeforeInsert, Column, CreateDateColumn, Entity, ObjectIdColumn, TableInheritance, UpdateDateColumn } from "typeorm";
import { ETipoQuarto } from "../enums/tipo-quarto.enum";
import { EntityBase } from "./base";

@Entity()
export class Quarto extends EntityBase {
    @Column()
    camaCasal: number;
    @Column()
    camaSolteiro: number;
    @Column()
    valorDiaria: number;
    @Column({ type: "enum", enum: ETipoQuarto })
    tipo: ETipoQuarto;
    @Column()
    numero: number;

    constructor(){
        super();
        this.camaCasal = null;
        this.camaSolteiro = null;
        this.valorDiaria = null;
        this.tipo = null;
        this.numero = null;
    }

    @BeforeInsert()
    beforeInsertActions() {
        this.isActive = true;
    }
}