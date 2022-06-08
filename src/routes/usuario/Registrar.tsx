import React from "react";
import Button from "../../shared/components/Button";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import SweetAlertService from "../../core/services/sweet-alert.service";
import { ConvertService } from "../../core/services/convert.service";
import { useForm } from "react-hook-form";
import { RegistrarModel } from "../../models/registrar.model";
import { AuthService } from "../../services/auth.service";

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


    async function Criar() {
        if(Object.keys(errors).length) SweetAlertService.ErroformularioInvalido();

        let form = watch() as RegistrarModel
        let response = await AuthService.Registrar(form);

        if (response.status == 200) SweetAlertService.SucessoPersonalizadoComTimer("Usuario Registrado com Sucesso", "");
    }


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