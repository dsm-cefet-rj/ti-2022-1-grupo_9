import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import imgQuarto from '../../assets/img/sample-1.jpg';
import SweetAlertService from "../../core/services/sweet-alert.service";
import { Intervalo } from "../../models/intervalo.model";
import { QuartoModel } from "../../models/quarto.model";
import { QuartoService } from "../../services/quarto.service";
import Button from "../../shared/components/Button";
import { yupResolver } from '@hookform/resolvers/yup';
import moment from 'moment';
import * as yup from "yup"
import { FormularioHelper } from "../../core/helpers/formulario.helper";

export default () => {

    const schema = yup.object({
        dataEntrada: yup.string().required(),
        dataSaida: yup.string().required(),
    }).required();
    const { register, handleSubmit, watch, formState: { errors } } = useForm({ resolver: yupResolver(schema) });
    const [quartosDisponiveis, setQuartosDisponiveis] = useState(new Array<QuartoModel>());

    async function obterQuartosDisponiveis() {
        if(FormularioHelper.ExisteErro(errors)) return SweetAlertService.ErroformularioInvalido(errors);
        let interval = watch() as Intervalo;

        if(moment(interval.dataEntrada).isAfter(interval.dataSaida)) return SweetAlertService.ErroPersonalizadoSemTimer("Opss...","Data de entrada tem que ser antes da data de saida");

        let quartos = await QuartoService.ObterQuartosDisponiveis(interval);
        if(quartos.length === 0) SweetAlertService.WarningPersonalizadoSemTimer("Ops...", "Não existe nenhum quarto disponível para essa data!");
        setQuartosDisponiveis(quartos);
    }

    return (
        <form onSubmit={handleSubmit(obterQuartosDisponiveis)}>
            <div className="container">
                <div className="row mt-3">
                    <div className="col-12 col-md-5">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Data de Entrada</label>
                        <input {...register("dataEntrada")} type="datetime-local" className="form-control" id="exampleFormControlInput1" />
                    </div>
                    <div className="col-12 col-md-5">
                        <label htmlFor="exampleFormControlInput2" className="form-label">Data de Saida</label>
                        <input type="datetime-local" className="form-control" id="exampleFormControlInput2" placeholder="name@example.com"
                            {...register("dataSaida")} />
                    </div>
                    <div className="col-12 col-md-2 align-self-end text-start">
                        <Button title="Buscar" type="submit"></Button>
                    </div>
                </div>
                {obterQuartosDisponiveisHtml()}
            </div>
        </form>
    );


    function obterQuartosDisponiveisHtml() {
        return quartosDisponiveis.map(x => {
            return <div className="row justify-content-center ">
                <div className="col-12 col-md-6">
                    <div className="card">
                        <div className="card-image">
                            <img height="294px" width="392px" src={imgQuarto} />
                            <span className="card-title">Quarto {x.tipo}</span>
                        </div>
                        <div className="card-content">
                            <p>Quarto: {x.numero}</p>
                            <p>Quantidade de cama Casal: {x.camaCasal}</p>
                            <p>Quantidade de Cama Solteiro: {x.camaSolteiro}</p>
                        </div>
                        <div role="button" className="card-action">
                            <Link to={"/cliente/criar-reserva/" + watch().dataEntrada + "/" + watch().dataSaida + "/" + x._id}>
                                <a>Reservar</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        })
    }
}