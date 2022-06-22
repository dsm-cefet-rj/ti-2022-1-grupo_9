import { useForm } from "react-hook-form";
import { ConvertService } from "../../core/services/convert.service";
import SweetAlertService from "../../core/services/sweet-alert.service";
import { QuartoModel } from "../../models/quarto.model";
import Button from "../../shared/components/Button";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { QuartoService } from "../../services/quarto.service";
import { HttpStatus } from "../../core/enums/http-status.enum";
import { useNavigate, useParams } from "react-router-dom";
import { FormularioHelper } from "../../core/helpers/formulario.helper";
import { useEffect, useState } from "react";


export default () => {
    const schema = yup.object({
        camaCasal: yup.number().required(),
        camaSolteiro: yup.number().required(),
        valorDiaria: yup.number().required(),
        tipo: yup.string().required(),
    }).required();


    const { register,setValue, handleSubmit, watch, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

    let navigate = useNavigate();

    let params = useParams();

    useEffect(() => {
        if(params.id != null){
            obterPorId();
        }
    }, [params]);

    async function obterPorId(){
        let quarto = await QuartoService.ObterPorId(params.id);
        setValue("tipo", quarto.tipo);
        setValue("camaCasal", quarto.camaCasal);
        setValue("camaSolteiro", quarto.camaSolteiro);
        setValue("valorDiaria", quarto.valorDiaria);
    }

    async function criar(quarto: QuartoModel) {
        var result = await QuartoService.Criar(quarto);
        if (result.status == HttpStatus.OK) {
            setTimeout(() => navigate("/admin/listar-quartos", { replace: true }), 1800);
            SweetAlertService.SucessoPersonalizadoComTimer("Quarto Registrado com Sucesso!", "você será redirecionado em breve");
        }
    }

    async function editar(quarto: QuartoModel){
        var result = await QuartoService.Editar(quarto);
        if (result.status == HttpStatus.OK) {
            setTimeout(() => navigate("/admin/listar-quartos", { replace: true }), 1800);
            SweetAlertService.SucessoPersonalizadoComTimer("Quarto Editado com Sucesso!", "você será redirecionado em breve");
        }
    }

    async function criarOuEditar(){
        if (FormularioHelper.ExisteErro(errors)) return SweetAlertService.ErroformularioInvalido(errors);
        let quarto = watch() as QuartoModel;
        quarto._id = params.id;
        ConvertService.StringToNumber(quarto);
        if(params.id == null)
            criar(quarto);
        else
            editar(quarto);
        
    }

    return (
        <div className="container mt-4">
            <form onSubmit={handleSubmit(() => { })}>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <label htmlFor="camaCasal">Quantidade camas de Casal</label>
                        <input  id="camaCasal" {...register("camaCasal")}
                            type="number" min="0" className="form-control" />
                    </div>
                    <div className="col-12 col-md-6">
                        <label htmlFor="camaSolteiro">Quantidade camas de Solteiro</label>
                        <input id="camaSolteiro" {...register("camaSolteiro")} type="number" min="0" className="form-control" />

                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-6">
                        <label htmlFor="valorDiaria">Valor Diaria</label>
                        <input id="valorDiaria" {...register("valorDiaria")} type="number" min="0" className="form-control" />

                    </div>
                    <div className="col-12 col-md-6">
                        <label>Tipo de Quarto</label>
                        <select {...register("tipo")} className="form-select" aria-label="Default select example">
                            <option disabled value="" selected>Selecione o tipo</option>
                            <option value="Suite">Suite</option>
                            <option value="Normal">Normal</option>
                        </select>
                    </div>
                </div>
                <div className="row center-align mt-4">
                    <div className="col s12">
                        <Button type="submit" function={criarOuEditar} title="salvar" />
                    </div>
                </div>
            </form>
        </div>
    );
}