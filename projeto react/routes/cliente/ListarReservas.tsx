import React, { useEffect, useState } from "react";
import imgQuarto from '../../assets/img/sample-1.jpg';
import SweetAlertService from "../../core/services/sweet-alert.service";
import { ReservaModel } from "../../models/reserva.model";
import { ReservaService } from "../../services/reserva.service";
import Card from "../../shared/components/Card";

export default (props) => {

  const [reservas, setReservas] = useState(Array<ReservaModel>());


  useEffect(() => {
    const obterPorUsuarioId = async () => {
      let result = await ReservaService.ObterPorUsuarioId();
      setReservas(result);
    }

    obterPorUsuarioId();
  }, [])


  async function cancelarReserva(event) {
    let id = event.target.ariaValueText;
    let response = await ReservaService.CancelarReserva(id);
    if(response.status == 200){
      let index = reservas.findIndex(x => x._id == id);
      reservas.splice(index, 1);
      let teste = [...reservas];
      setReservas(teste);
      return SweetAlertService.SucessoPersonalizadoComTimer("Reserva cancelada com Sucesso!", "");
    }
  }



  return (
    <div className="container mb-4">
      {obterReservasHTML()}
    </div>
  );

  function obterReservasHTML() {
    return reservas.map(x => {
      return <div className="row justify-content-center ">
        <div className="col-12 col-md-6">
          <div className="card">
            <div className="card-image">
              <img height="294px" width="392px" src={imgQuarto} />
              <span className="card-title">Reserva do dia {new Date(x.dataEntrada).toLocaleDateString("pt-br")} até {new Date(x.dataSaida).toLocaleDateString("pt-br")}</span>
            </div>
            <div className="card-content">
              <p>Quarto: {x.quarto.numero}</p>
              <p>Tipo: {x.quarto.tipo}</p>
            </div>
            <div role="button" className="card-action">
              <a onClick={cancelarReserva} aria-valuetext={x._id}>Cancelar Reserva</a>
            </div>
          </div>
        </div>
      </div>
    })
  }
}