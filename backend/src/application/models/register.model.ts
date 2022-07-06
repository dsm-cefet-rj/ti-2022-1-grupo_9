import {
    IsEmail,
    IsNotEmpty,
    Length,
} from 'class-validator';
import { HttpStatus } from '../../core/enums/http-status';
import { HttpException } from '../../core/exceptions/http-exception';
export class RegisterModel {
    @IsNotEmpty()
    nome: string;
    @IsNotEmpty()
    senha: string;
    @IsNotEmpty()
    confirmarSenha: string;
    @IsEmail()
    email: string;
    @Length(11, 11)
    cpf: string;
    @IsNotEmpty()
    telefone: string;

    constructor() {
        this.nome = null;
        this.senha = null;
        this.confirmarSenha = null;
        this.email = null;
        this.cpf = null;
        this.telefone = null;
    }

    ValidarSenhaRegistro() {
        if (this.senha !== this.confirmarSenha) throw new HttpException("Senha e Confirmação de senha são diferentes!", HttpStatus.BAD_REQUEST)
    }
}
