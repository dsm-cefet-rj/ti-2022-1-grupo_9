import React from "react";
import imgQuarto from '../../assets/img/sample-1.jpg';
import DatabaseService from "../../core/services/database.service";
import Button from "../../shared/components/Button";
import Card from "../../shared/components/Card";


export default class ListarQuartos extends React.Component {
    constructor(props){
        super(props);
        this.state = {quartos:""}
        this.listarQuartos = this.listarQuartos.bind(this);
        this.listarQuartos();
    }

    
    listarQuartos(){
        let quartos = DatabaseService.obterQuartos();
        
        let htmlQuartos = quartos.map(x => <Card title={`${x.tipoDeQuarto} ${x.id}`} action={["Editar", "Deletar"]} image={imgQuarto} content="Quarto com Banheiro Exclusivo"></Card>)
        return htmlQuartos;
    }



    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-12 mt-4">
                        <Button function={() => window.location.href = "/admin/criar-quartos"} title="Adicionar Novo Quarto"></Button>
                    </div>
                </div>
                {this.listarQuartos()}
            </div>
        );
    }
}