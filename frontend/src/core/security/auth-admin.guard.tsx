import jwtDecode from "jwt-decode";
import moment from "moment";
import { Navigate, useLocation } from "react-router-dom";

export function AuthAdminGuard({ children }: { children: JSX.Element }) {
    let location = useLocation();
    try{
        
        let token = localStorage.getItem("token");
        if (token == null) {
            return <Navigate to="/usuario/login" state={{ from: location }} replace />;
        }

        let tokenDecode = jwtDecode(token);
        let expiracao = moment(tokenDecode["exp"] * 1000);
        let result = moment(expiracao).diff(moment(), "milliseconds");
        if(0 >= result){
            localStorage.removeItem("token");
            return <Navigate to="/usuario/login" state={{ from: location }} replace />;
        }

        if(tokenDecode["isAdmin"] == false || tokenDecode == null) return <Navigate to="/" />

        return children;
    }
    catch(e){
        console.log(e);
        localStorage.removeItem("token");
        return <Navigate to="/usuario/login" state={{ from: location }} replace />;
    }
    
    
    
    
}
