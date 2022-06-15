import React, { useEffect } from "react";
import Button from "../../shared/components/Button";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import SweetAlertService from "../../core/services/sweet-alert.service";
import { ConvertService } from "../../core/services/convert.service";
import { useForm } from "react-hook-form";
import { RegistrarModel } from "../../models/registrar.model";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ativar, desativar } from "../../core/reducers/loading.redux";
import { Registrar } from "../../services/auth.service";
import storeConfig from "../../core/store/store-config";

export default (props) => {
    const schema = yup.object({
        email: yup.string().email().required(),
        nome: yup.string().required(),
        cpf: yup.string().required(),
        telefone: yup.string().required(),
        senha: yup.string().required(),
        confirmarSenha: yup.string().required(),
        
    }).required();

    const { register, handleSubmit, watch, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

    const store: any = useSelector((state) => state)
    const dispatch = useDispatch<typeof storeConfig.dispatch>()
    let navigate = useNavigate();
    async function Criar() {
        dispatch(ativar())
        await dispatch(Registrar(watch() as RegistrarModel))
    }

    useEffect(() =>{
        if(store.registrar.status == "success"){
            SweetAlertService.SucessoPersonalizadoComTimer("Registrado com Sucesso", "você será redirecionado em breve!");
            setTimeout(() => navigate("/", { replace: true }), 1800);
        }
        else if(store.registrar.status !== "loading") dispatch(desativar());
        else if(store.registrar.status === "failed") SweetAlertService.ErroPadraoSemTimer();
    }, [store.registrar.status])


    return (
        <div className="container">
            <div className="row mt-2">
                <div className="col-12 col-md-6">
                    <label className="form-label" htmlFor="nome">Nome Completo</label>
                    <input id="nome" {...register("nome")} type="text" className="form-control" />

                </div>
                <div className="col-12 col-md-6">
                    <label className="form-label" htmlFor="email">Email</label>
                    <input id="email" type="text" {...register("email")} className="form-control" />
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-12 col-md-6">
                    <label className="form-label" htmlFor="cpf">CPF</label>
                    <input id="cpf" type="text" {...register("cpf")} className="form-control" />
                </div>
                <div className="col-12 col-md-6">
                    <label className="form-label" htmlFor="telefone">Telefone</label>
                    <input id="telefone" type="text" {...register("telefone")} className="form-control" />
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-12 col-md-6">
                    <label className="form-label" htmlFor="Senha">Senha</label>
                    <input id="Senha" type="password" {...register("senha")} className="form-control" />
                </div>
                <div className="col-12 col-md-6">
                    <label className="form-label" htmlFor="confirmarSenha">Confirmar Senha</label>
                    <input id="confirmarSenha" {...register("confirmarSenha")} type="password" className="form-control" />
                </div>
            </div>
            <div className="row my-4 center-align">
                <div className="col-12">
                   <Button function={Criar} title="Registrar"></Button>
                </div>
            </div>
        </div>
    );
}