import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import imgQuarto from '../../assets/img/sample-1.jpg';
import Button from "../../shared/components/Button";
import Card from "../../shared/components/Card";
import { yupResolver } from '@hookform/resolvers/yup';
import moment from 'moment';
import * as yup from "yup"
import { useForm } from "react-hook-form";
import SweetAlertService from "../../core/services/sweet-alert.service";
import { ConvertService } from "../../core/services/convert.service";
import { QuartoModel } from "../../models/quarto.model";
import { ReservaModel } from "../../models/reserva.model";
import { ReservaService } from "../../services/reserva.service";
import { Pagamento } from "../../models/pagamento.model";

export default (props) => {

    let { quartoId, dataEntrada, dataSaida } = useParams();
    const schema = yup.object({
        dataEntrada: yup.string().required(),
        dataSaida: yup.string().required(),
        quantidadeHospedes: yup.string().required(),
        tipoPagamento: yup.string().required(),

    }).required();

    const { register, handleSubmit, watch, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

    const [quarto, setQuarto] = useState(new QuartoModel());

    useEffect(() => {
        fetch(`http://localhost:3030/Quarto/${quartoId}`, {
            method: 'GET',
        }).then(x => x.json()).then(data => setQuarto(data));
    }, []);

    const navigate = useNavigate();



    function calcularValorDiaria() {
        const DiaEmHoras = 24;
        var horasTotais = moment(watch("dataSaida")).diff(watch("dataEntrada"), "h");
        var valorTotalApagar = horasTotais * quarto.valorDiaria / DiaEmHoras;

        return <span>{valorTotalApagar.toFixed(2)}</span>
    }

    async function CriarReserva() {
        if (Object.keys(errors).length) return SweetAlertService.ErroformularioInvalido(errors);

        var reserva = watch() as ReservaModel;

        if(moment(reserva.dataEntrada).isAfter(reserva.dataSaida))
            return SweetAlertService.ErroPersonalizadoSemTimer("Opss...","Data de entrada tem que ser antes da data de saida");

        reserva.quartoId = quartoId;
        reserva.pagamento = { tipo: watch("tipoPagamento") } as Pagamento;
        ConvertService.StringToNumber(reserva);
        let response = await ReservaService.Criar(reserva);

        if (response.status == 200){
            setTimeout(() => navigate("/cliente/listar-reservas", { replace: true }), 1800);
            return SweetAlertService.SucessoPersonalizadoComTimer("Reserva Criada com Sucesso!", "você será redirecionado em breve!");
            
        }
            

        return SweetAlertService.ErroPadraoSemTimer();
    }


    return (
        <div className="container mt-4">
            <Card content="Quarto com banheiro exclusivo"
                image={imgQuarto} title={'Quarto ' + quarto.tipo}
            >
            </Card>
            <form onSubmit={handleSubmit(() => {})}>


                <div className="row mt-2">
                    <div className="col-12 col-md-6">
                        <label className="form-label" htmlFor="hospedes">Data de Entrada</label>
                        <input id="hospedes" defaultValue={dataEntrada} {...register("dataEntrada")} type="datetime-local" className="form-control" />
                    </div>
                    <div className="col-12 col-md-6">
                        <label className="form-label" htmlFor="hospedes">Data de Saida</label>
                        <input id="hospedes" defaultValue={dataSaida} {...register("dataSaida")} type="datetime-local" className="form-control" />
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-12 col-md-6">
                        <label className="form-label" htmlFor="hospedes">Quantidade de Hospedes</label>
                        <input id="hospedes" {...register("quantidadeHospedes")} type="number" min="0" className="form-control" />
                    </div>
                    <div className="col-12 col-md-6">
                        <label className="form-label" htmlFor="hospedes">Tipo de Pagamento</label>
                        <select {...register("tipoPagamento")} className="form-select" aria-label="Default select example">
                            <option disabled selected>Selecione</option>
                            <option value="Pix">Pix</option>
                            <option value="Transferencia">Transferencia</option>
                        </select>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-12 text-start text-primary">
                        Valor total a pagar: R${calcularValorDiaria()}
                    </div>
                </div>




                <div className="row justify-content-center mt-2">
                    <div className="col-12 col-md-6 center-align">
                        <Button type="submit" function={CriarReserva} title="Criar Reserva"></Button>
                    </div>
                </div>
            </form>
        </div>
    );
}