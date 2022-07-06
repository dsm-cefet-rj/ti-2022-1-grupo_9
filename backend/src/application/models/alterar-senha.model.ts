import { AutoMap } from "@nartc/automapper";
import { IsNotEmpty } from "class-validator";
import { HttpStatus } from "../../core/enums/http-status";
import { HttpException } from "../../core/exceptions/http-exception";

export class AlterarSenhaModel{
    @IsNotEmpty()
    senhaAntiga: string;
    @IsNotEmpty()
    novaSenha: string;
    @IsNotEmpty()
    confirmarNovaSenha:string;


    validarAlteracaoDeSenha(){
        if(this.novaSenha !== this.confirmarNovaSenha) 
        throw new HttpException("Nova senha e Confirmação da Nova Senha Diferentes!", HttpStatus.BAD_REQUEST);
    }
}