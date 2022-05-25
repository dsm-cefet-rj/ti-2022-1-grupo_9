import React from "react";
import imgQuarto from '../../assets/img/sample-1.jpg';
import DatabaseService from "../../core/services/database.service";
import Card from "../../shared/components/Card";
export default class ListarReservasAdmin extends React.Component {
    constructor(props) {
        super(props);
    }



    obterHtmlReservas() {
        let reservas = DatabaseService.obterTodasReservas();
        return reservas.map(x => {
            return <Card title={x.data} image={imgQuarto}
                content={[<p>Hospede: Matheus Martins</p>, <p>  Quarto: Numero {x.id}</p>, <p>Hospede: {DatabaseService.obterUsuarioPorId(x.usuarioId)?.name}</p>]}
                action={["Confirmar Pagamento"]}
            ></Card>
        })
    }



    render() {
        return (
            <div className="container">
                {this.obterHtmlReservas()}
            </div>
        );
    }
}