import { Router, Request, Response, NextFunction } from 'express';
import { BaseController } from './base.controller';
import * as AuthService from '../../application/services/auth.service';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { HttpException } from '../../core/exceptions/http-exception';
import { HttpStatus } from '../../core/enums/http-status';
import { LoginDTO } from '../../application/dtos/login.dto';
import { RegisterModel } from '../../application/models/register.model';
import { AlterarSenhaModel } from '../../application/models/alterar-senha.model';
import { JwtService } from '../services/jwt.service';

export class AuthController extends BaseController {
    public router: Router = Router();
    constructor() {
        super();
        this.router.post("/login", this.Login);
        this.router.post("/register", this.Registrar);
        this.router.post("/alterar-senha", this.AlterarSenha);
    }
    private async Login(request: Request, response: Response, next: NextFunction) {
        try{
            let body = plainToClass(LoginDTO, request.body);
            var errors = await validate(body);
            if(errors.length > 0 ) throw new HttpException(super.ObterErroValidation(errors), HttpStatus.BAD_REQUEST);

            let result = await AuthService.Login(body);
            response.json(result);
        }
        catch(e){
            super.ErrorResponse(response, e);
        }
    }

    private async Registrar(request: Request, response: Response, next: NextFunction) {
        try{
            let body = plainToClass(RegisterModel, request.body);
            
            var errors = await validate(body);
            if(errors.length > 0 ) throw new HttpException(super.ObterErroValidation(errors), HttpStatus.BAD_REQUEST);
            
            
            let result = await AuthService.Registrar(body);
            response.json(true);
        }
        catch(e){
            super.ErrorResponse(response, e);
        }
    }

    private async AlterarSenha(request: Request, response: Response, next: NextFunction) {
        try{
            let body = plainToClass(AlterarSenhaModel, request.body);
            
            var errors = await validate(body);
            if(errors.length > 0 ) throw new HttpException(super.ObterErroValidation(errors), HttpStatus.BAD_REQUEST);
            
            let usuarioId = JwtService.obterUsuarioId(request.header("authorization"));
            
            let result = await AuthService.AlterarSenha(body, usuarioId);
            response.json(true);
        }
        catch(e){
            super.ErrorResponse(response, e);
        }
    }
}