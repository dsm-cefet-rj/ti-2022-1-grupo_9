import { Router, Request, Response, NextFunction } from 'express';
import { BaseController } from './base.controller';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { HttpException } from '../../core/exceptions/http-exception';
import { HttpStatus } from '../../core/enums/http-status';
import { ReservaDTO } from '../../application/dtos/reserva.dto';
import * as ReservaService from "../../application/services/reserva.service";
import { JwtService } from '../services/jwt.service';
import { authorization } from '../middlewares/authorization';

export class ReservaController extends BaseController {
    public router: Router = Router();
    constructor() {
        super();
        this.router.post("", authorization(), this.Reservar);
        this.router.get("",authorization(true), this.Obter);
        this.router.get("/por-usuario-id",authorization(), this.ObterPorUsuarioId),
        this.router.put("/confirmar-pagamento/:id",authorization(true), this.ConfirmarPagamento);
        this.router.delete("/:reservaId",authorization(), this.CancelarReserva);
        
    }
    private async Reservar(request: Request, response: Response, next: NextFunction) {
        try{
            let body = plainToClass(ReservaDTO, request.body);
            var errors = await validate(body);
            if(errors.length > 0 ) throw new HttpException(super.ObterErroValidation(errors), HttpStatus.BAD_REQUEST);
            let usuarioId = JwtService.obterUsuarioId(request.header("authorization"));
            let result = await ReservaService.Reservar(body, usuarioId);
            response.json(true);
        }
        catch(e){
            super.ErrorResponse(response, e);
        }
    }

    private async Obter(request: Request, response: Response, next: NextFunction) {
        try{
            let result = await ReservaService.Obter();
            response.json(result);
        }
        catch(e){
            super.ErrorResponse(response, e);
        }
    }

    private async ObterPorUsuarioId(request: Request, response: Response, next: NextFunction) {
        try{
            let usuarioId = JwtService.obterUsuarioId(request.header("authorization"));
            
            let result = await ReservaService.ObterPorUsuarioId(usuarioId);
            response.json(result);
        }
        catch(e){
            super.ErrorResponse(response, e);
        }
    }

    private async ConfirmarPagamento(request: Request, response: Response, next: NextFunction) {
        try{
            let result = await ReservaService.ConfirmarPagamento(request.params.id as string);
            response.json(true);
        }
        catch(e){
            super.ErrorResponse(response, e);
        }
    }

    private async CancelarReserva(request: Request, response: Response, next: NextFunction) {
        try{

            let usuarioId = JwtService.obterUsuarioId(request.header("authorization"));

            let result = await ReservaService.CancelarReserva(request.params.reservaId, usuarioId);
            response.json(true);
        }
        catch(e){
            super.ErrorResponse(response, e);
        }
    }

}