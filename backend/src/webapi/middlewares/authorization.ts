import { HttpStatus } from "../../core/enums/http-status";
import * as jwt from 'jsonwebtoken';
import 'dotenv/config';

export const authorization = (routeForAdmin = false) =>{
    return (req,res,next) =>{
        const token = req.headers['authorization'];
        if (!token) return res.status(HttpStatus.UNAUTHORIZED).json({ auth: false, message: 'Não Autenticado!' });
        jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
            if (err) return res.status(HttpStatus.UNAUTHORIZED).json({message: 'Não Autenticado!' });
            if(routeForAdmin){
                let isAdmin = decoded["isAdmin"];
                if(!isAdmin) return res.status(HttpStatus.FORBIDDEN).json({message:"Não Autorizado!"});
            }
            next();
        });
    }
}