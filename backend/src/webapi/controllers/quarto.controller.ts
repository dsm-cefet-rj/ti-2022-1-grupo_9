import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { QuartoDTO } from "../../application/dtos/quarto.dto";
import { HttpStatus } from "../../core/enums/http-status";
import { HttpException } from "../../core/exceptions/http-exception";
import { BaseController } from "./base.controller";
import { Router, Request, Response, NextFunction } from 'express';
import * as QuartoService from '../../application/services/quarto.service';
import { ObjectID } from "typeorm";
import { authorization } from "../middlewares/authorization";

export class QuartoController extends BaseController {
    public router: Router = Router();
    constructor() {
        super();
        this.router.post("",authorization(true), this.Criar);
        this.router.get("",authorization(true), this.Obter);
        this.router.get("/:id", authorization(), this.ObterPorId);
        this.router.get("/:dataEntrada/:dataSaida",authorization(), this.ObterQuartosDisponiveis);
        this.router.put("", authorization(true), this.Editar);
        this.router.delete("/:id",authorization(true), this.Deletar);     
    }

    private async Criar(request: Request, response: Response, next: NextFunction) {
        try {
            let body = plainToClass(QuartoDTO, request.body);
            var errors = await validate(body);
            if (errors.length > 0) throw new HttpException(super.ObterErroValidation(errors), HttpStatus.BAD_REQUEST);

            let result = await QuartoService.Criar(body);
            response.json(true);
        }
        catch (e) {
            super.ErrorResponse(response, e);
        }

    }

    private async Obter(request: Request, response: Response, next: NextFunction){
        try{
            let result = await QuartoService.Obter();
            return response.json(result);
        }
        catch(e){
            super.ErrorResponse(response, e);
        }
    }

    private async ObterPorId(request: Request, response: Response, next: NextFunction){
        try{
            let result = await QuartoService.ObterPorId(request.params.id);
            return response.json(result);
        }
        catch(e){
            super.ErrorResponse(response, e);
        }
    }

    private async Deletar(request: Request, response: Response, next: NextFunction){
        try{
            let result = await QuartoService.Deletar(request.params.id);
            return response.json(true);
        }
        catch(e){
            super.ErrorResponse(response, e);
        }
    }

    private async ObterQuartosDisponiveis(request: Request, response: Response, next: NextFunction){
        try{
            let result = await QuartoService.ObterQuartosDisponiveis(request.params.dataEntrada, request.params.dataSaida);
            return response.json(result);
        }
        catch(e){
            super.ErrorResponse(response, e);
        }
    }

    private async Editar(request: Request, response: Response, next: NextFunction){
        try{
            let body = plainToClass(QuartoDTO, request.body);
            var errors = await validate(body);
            if (errors.length > 0) throw new HttpException(super.ObterErroValidation(errors), HttpStatus.BAD_REQUEST);
            let result = await QuartoService.Editar(body);
            response.json(true);
        }
        catch(e){
            super.ErrorResponse(response, e);
        }
    }
}