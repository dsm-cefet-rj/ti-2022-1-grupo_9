import jwt_decode from "jwt-decode";
import { Token } from "../models/token";
export default class JwtService {

    private static obterTokenDescriptografado() {
        let token = localStorage.getItem("token")
        if (token == null) return null;
        return jwt_decode(token);
    }

    public static usuarioLogado() {
        let token = this.obterTokenDescriptografado();
        if (token == null) return false;
        return true;
    }

    public static obterUsuarioId() {
        let token = this.obterTokenDescriptografado() as Token;
        return token?.id;
    }
    public static usuarioEhAdmin() {
        let token = this.obterTokenDescriptografado() as Token;
        return token?.isAdmin;
    }
}