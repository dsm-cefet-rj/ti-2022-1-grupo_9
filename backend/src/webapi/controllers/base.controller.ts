import { plainToClass, Type } from "class-transformer";
import { validate, ValidationError } from "class-validator";
import { HttpStatus } from "../../core/enums/http-status";
import { HttpException } from "../../core/exceptions/http-exception";

export class BaseController {

    public ErrorResponse(response: any, error: Error) {
        console.log(error);
        if (error instanceof HttpException) {
            
            response.status(error.status).send(error.message);
            return;
        }
        response.status(HttpStatus.INTERNAL_SERVER_ERROR).send("Opss...");
    }

    public ObterErroValidation(error: ValidationError[]) {
        let result = error.map(x => {
            let erro = "";
            for (let y in x.constraints) {
                erro += x.constraints[y];
            }
            return erro;

        })
        return result;
    }
}