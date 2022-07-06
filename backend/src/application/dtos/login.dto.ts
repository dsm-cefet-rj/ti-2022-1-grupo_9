import { AutoMap } from "@nartc/automapper";
import { IsNotEmpty } from "class-validator";

export class LoginDTO{
    @IsNotEmpty()
    email: string;
    @IsNotEmpty()
    senha: string;
}