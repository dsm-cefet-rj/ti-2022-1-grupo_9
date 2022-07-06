import { HttpStatus } from "../enums/http-status";
export class HttpException extends Error{
    constructor(mensagem: any, status: HttpStatus){
        super(mensagem);
        this.status = status;
    }
    status: HttpStatus;
}