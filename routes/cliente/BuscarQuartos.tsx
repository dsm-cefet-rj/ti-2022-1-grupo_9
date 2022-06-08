import React, { useState } from "react";
import { Link } from "react-router-dom";
import imgQuarto from '../../assets/img/sample-1.jpg';
import SweetAlertService from "../../core/services/sweet-alert.service";
import { Intervalo } from "../../models/intervalo.model";
import { QuartoModel } from "../../models/quarto.model";
import { QuartoService } from "../../services/quarto.service";
import Button from "../../shared/components/Button";
export default () => {

    const [intervalo, setIntervalo] = useState({ dataEntrada: "", dataSaida: "" });
    const [quartosDisponiveis, setQuartosDisponiveis] = useState(new Array<QuartoModel>());


    async function obterQuartosDisponiveis() {
        let interval = intervalo as Intervalo;
        if(interval.dataEntrada == "" || interval.dataSaida == "") return SweetAlertService.ErroPersonalizadoSemTimer("Ops...", "É necessário que a data de entrada e de saida estejam preenchidas")
        let quartos = await QuartoService.ObterQuartosDisponiveis(interval);
        setQuartosDisponiveis(quartos);
    }

    return (
        <div className="container">
            <div className="row mt-3">
                <div className="col-12 col-md-5">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Data de Entrada</label>
                    <input type="datetime-local" className="form-control" id="exampleFormControlInput1"
                        value={intervalo.dataEntrada} onChange={(event) => { setIntervalo({ dataEntrada: event.target.value, dataSaida: intervalo.dataSaida }) }}
                        placeholder="name@example.com" />
                </div>
                <div className="col-12 col-md-5">
                    <label htmlFor="exampleFormControlInput2" className="form-label">Data de Saida</label>
                    <input type="datetime-local" className="form-control" id="exampleFormControlInput2" placeholder="name@example.com"
                        value={intervalo.dataSaida} onChange={(event) => { setIntervalo({ dataEntrada: intervalo.dataEntrada, dataSaida: event.target.value }) }} />
                </div>
                <div className="col-12 col-md-2 align-self-end text-start">
                    <Button title="Buscar" function={obterQuartosDisponiveis}></Button>
                </div>
            </div>
            {obterQuartosDisponiveisHtml()}
        </div>
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
                            <Link to={"/cliente/criar-reserva/" + intervalo.dataEntrada + "/" + intervalo.dataSaida + "/" + x._id}>
                                <a>Reservar</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        })
    }
}