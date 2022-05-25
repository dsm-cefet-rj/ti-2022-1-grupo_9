import { render } from "@testing-library/react";
import React from "react";
import imgQuarto from '../../assets/img/sample-1.jpg';
import DatabaseService from "../../core/services/database.service";
import Card from "../../shared/components/Card";

export default class ListarReservas extends React.Component {
  constructor(props) {
    super(props);
  }

  obterHtmlReservas() {
    let usuarioLogado = DatabaseService.obterUsuarioLogado();
    let reservasDoUsuarioLogado = DatabaseService.obterReservasPorUsuarioId(usuarioLogado?.id);
    reservasDoUsuarioLogado.push({id:1})
    return reservasDoUsuarioLogado.map(x => {
      return <Card content={[<p>Hospede: {usuarioLogado.nome}</p>, <p>  Quarto: Numero {x.id}</p>]}
        image={imgQuarto} title="Reserva 23/05/2022 - Quarto Suite" action={["Editar"]}
      >

      </Card>
    })
  }

  render() {
    return (
      <div className="container mb-4">
        {this.obterHtmlReservas()}
      </div>
    );
  }
}