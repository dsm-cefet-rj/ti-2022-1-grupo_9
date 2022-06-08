import { LoginModel } from "../models/login.model";
import { RegistrarModel } from "../models/registrar.model";

export class AuthService{
    
    static async Login(form: LoginModel){
        var response = await fetch("http://localhost:3030/Auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form),
        })
        return response;
    }
    static async Registrar(form: RegistrarModel){
        let response = await fetch("http://localhost:3030/auth/register", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form),
        })
        return response;
    }
}