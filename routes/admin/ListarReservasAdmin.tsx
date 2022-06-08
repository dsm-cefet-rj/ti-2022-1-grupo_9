import React, { useEffect, useState } from "react";
import imgQuarto from '../../assets/img/sample-1.jpg';
import { HttpStatus } from "../../core/enums/http-status.enum";
import SweetAlertService from "../../core/services/sweet-alert.service";
import { EStatusPagamento } from "../../enums/status-pagamento.enum";
import { ReservaModel } from "../../models/reserva.model";
import { ReservaService } from "../../services/reserva.service";
import Card from "../../shared/components/Card";
export default (props) => {

    const [reservas, setReservas] = useState(Array<ReservaModel>());

    useEffect(() => {
        const obterReserva = async () => {
            let result = await ReservaService.ObterTodas();
            setReservas(result);
        }
        obterReserva();
    }, []);

    async function confirmarPagamento(id) {
        let reservaId = id.target.ariaValueText;
        let result = await ReservaService.ConfirmarPagamento(reservaId);
        if(result.status == HttpStatus.OK){
            let reserva = reservas.find(x => x._id == reservaId);
            reserva.pagamento.status = EStatusPagamento.CONFIRMADO;
            let teste = [...reservas];
            setReservas(teste);
            return SweetAlertService.SucessoPersonalizadoComTimer("Operação Realizada com Sucesso!", "");
        }
    }




    
    return (
        <div className="container">
            {getHtmlReservas2()}
        </div>
    );







    function getHtmlReservas2() {
        return reservas.map(x => {
            return <div className="row justify-content-center ">
                <div className="col-12 col-md-6">
                    <div className="card">
                        <div className="card-image">
                            <img height="294px" width="392px" src={imgQuarto} />
                            <span className="card-title">Reserva {new Date(x.dataEntrada).toLocaleDateString("pt-br")}</span>
                        </div>
                        <div className="card-content">
                            <p>Hospede: {x.usuario.nome}</p>
                            <p>Quarto: {x.quarto.numero}</p>
                            {
                                EStatusPagamento.CONFIRMADO == x.pagamento.status && x.isActive == true
                                && <p className="text-primary">Status: Confirmada</p>
                            }
                            {
                                x.isActive == false
                                && <p className="text-danger">Status: Cancelada</p>
                            }
                        </div>
                        <div role="button" className="card-action">
                            {
                                x.pagamento.status != EStatusPagamento.CONFIRMADO && x.isActive == true
                                &&
                                <a aria-valuetext={x._id} onClick={confirmarPagamento}>Confirmar Pagamento</a>
                            }
                        </div>
                    </div>
                </div>
            </div>
        })
    }
}