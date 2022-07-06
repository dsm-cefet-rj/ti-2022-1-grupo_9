import jwtDecode from "jwt-decode"

export class JwtService{

    static obterUsuarioId(token: string){
        let {id} = jwtDecode(token) as any;
        return id;
    }
}