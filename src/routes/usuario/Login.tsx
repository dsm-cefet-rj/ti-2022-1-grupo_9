import { STATUS_CODES } from "http";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ativar, desativar } from "../../core/reducers/loading.redux";
import * as yup from "yup"
import SweetAlertService from "../../core/services/sweet-alert.service";
import Button from "../../shared/components/Button";
import storeConfig from "../../core/store/store-config";
import { Logar } from "../../services/auth.service";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { LoginModel } from "../../models/login.model";

export default (props) => {

    const schema = yup.object({
        email: yup.string().required(),
        senha: yup.string().required(),
    }).required();

    const { register, handleSubmit, watch, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

    const [token, setToken] = useState(null);

    const store: any = useSelector((state) => state);

    let navigate = useNavigate();

    const dispatch = useDispatch<typeof storeConfig.dispatch>()

    async function logar() {
        dispatch(ativar());
        const result = await dispatch(Logar(watch() as LoginModel))
        setToken(result.payload);
        
        return;
    }

    useEffect(() => {
        if (store.login.status === 'success' && token != null) {
            localStorage.setItem("token", token);
            props.setLogged(true);
            setTimeout(() => navigate("/", { replace: true }), 1800);
            SweetAlertService.SucessoPersonalizadoComTimer("Login Efetuado com sucesso!", "você será redirecionado em breve");
        }
        else if (store.login.status === "failed") SweetAlertService.ErroPersonalizadoSemTimer("Opss...", "Credenciais Invalidas");
        if(store.login.status !== "loading") dispatch(desativar());
        
    },
        [store.login.status, token]);

    return (<div className="container">
        <div className="row">
            <div className="col-12 col-md-6">
                <label className="form-label" htmlFor="email">Email</label>
                <input {...register("email")} id="email" type="text" className="form-control" />

            </div>

        </div>
        <div className="row right-align">
            <div className="col-12 col-md-6">
                <label className="form-label" htmlFor="senha">Senha</label>
                <input {...register("senha")} id="senha" type="password" className="form-control" />

            </div>
        </div>
        <div className="row my-4">
            <div className="col-12 col-md-6">
                <Button function={logar} title="Logar"></Button>
            </div>
        </div>
    </div>);
}