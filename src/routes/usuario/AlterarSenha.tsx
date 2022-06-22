import React from "react";
import Button from "../../shared/components/Button";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { FormularioHelper } from "../../core/helpers/formulario.helper";
import SweetAlertService from "../../core/services/sweet-alert.service"
import { AuthServiceAlterarSenha } from "../../services/auth.service";
import { AlterarSenhaModel } from "../../models/alterar-senha.model";
import { HttpStatus } from "../../core/enums/http-status.enum";


export default (props) => {

    const schema = yup.object({
        senhaAntiga: yup.string().required(),
        novaSenha: yup.string().required(),
        confirmarNovaSenha: yup.string().required(),
    }).required();

    const { register, handleSubmit, watch, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

    async function  alterarSenha(){
        if(FormularioHelper.ExisteErro(errors)) return SweetAlertService.ErroformularioInvalido(errors);
        
        let response = await AuthServiceAlterarSenha(watch() as AlterarSenhaModel);

        if(response.status == HttpStatus.OK) return SweetAlertService.SucessoPadraoComTimer();
        
    }

    return (
        <form onSubmit={handleSubmit(alterarSenha)}>
            <div className="container">
                <div className="row mt-2">
                    <div className="col-12 col-md-6">
                        <label className="form-label" htmlFor="email">Senha Antiga</label>
                        <input {...register("senhaAntiga")} id="email" type="password" className="form-control" />
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-12 col-md-6">
                        <label className="form-label" htmlFor="senha">Nova Senha</label>
                        <input {...register("novaSenha")} id="senha" type="password" className="form-control" />

                    </div>

                </div>
                <div className="row mt-2">
                    <div className="col-12 col-md-6">
                        <label className="form-label" htmlFor="confirm">Confirmar Nova Senha</label>
                        <input {...register("confirmarNovaSenha")} id="confirm" type="password" className="form-control" />

                    </div>
                </div>
                <Button type="submit" function={alterarSenha} title="Salvar"></Button>
            </div>
        </form>);
}