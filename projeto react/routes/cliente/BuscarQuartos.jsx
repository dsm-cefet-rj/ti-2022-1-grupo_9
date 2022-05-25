import React from "react";
import imgQuarto from '../../assets/img/sample-1.jpg';
import DatabaseService from "../../core/services/database.service";
import Card from '../../shared/components/Card'
export default class BuscarQuartos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quartosDisponiveis: []
        };

        this.obterHtmlQuartosDisponiveis = this.obterHtmlQuartosDisponiveis.bind(this);

    }


    obterHtmlQuartosDisponiveis() {
        return DatabaseService.obterQuartosDisponiveis().map(x => {
            return <Card action={["Reservar"]} title={"Quarto Suite - Numero " + x.id} content="Quarto com Banheiro Exclusivo" image={imgQuarto}></Card>
        })
    }
    render() {
        return (
            <div className="container">
                {this.obterHtmlQuartosDisponiveis()}
            </div>
        )
    }
}
