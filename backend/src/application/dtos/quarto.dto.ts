import { AutoMap } from "@nartc/automapper";
import { IsIn, IsInt, IsNotEmpty, IsNumber } from "class-validator";
import { BaseDTO } from "./base.dto";

export class QuartoDTO extends BaseDTO{
    @IsNotEmpty()
    @IsInt()
    camaCasal: number;
    @IsNotEmpty()
    @IsInt()
    camaSolteiro: number;
    @IsNotEmpty()
    @IsInt()
    valorDiaria: number;
    numero: number;
    @IsNotEmpty()
    @IsIn(["Suite", "Normal"])
    tipo: string;


    constructor(){
        super();
        this.valorDiaria = null;
        this.tipo = null;
        this.numero = null;
        this.camaSolteiro = null;
        this.camaCasal = null;
    }

}