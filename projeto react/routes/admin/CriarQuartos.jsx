import React from "react";
import DatabaseService from "../../core/services/database.service";
import FormService from "../../core/services/form.service";
import SweetAlertService from "../../core/services/sweet-alert.service";


export default class CriarQuartos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            camaCasal: "",
            camaSolteiro: "",
            valorDiaria: "",
            tipoDeQuarto: "",
        }
        this.salvar = this.salvar.bind(this);
        this.mudancaInput = this.mudancaInput.bind(this);
    }

    mudancaInput(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    salvar() {
        if (!FormService.ehValido(this.state)) return SweetAlertService.ErroformularioInvalido();
        DatabaseService.addQuarto(this.state);

        return SweetAlertService.SucessoPersonalizado("Quarto Cadastrado com Sucesso!");
    }
    render() {
        return (
            <div className="container mt-4">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <label for="camaCasal">Quantidade camas de Casal</label>
                        <input onChange={this.mudancaInput} value={this.state.camaCasal} id="camaCasal" type="number" min="0" className="form-control" />
                    </div>
                    <div className="col-12 col-md-6">
                        <label for="camaSolteiro">Quantidade camas de Solteiro</label>
                        <input onChange={this.mudancaInput} value={this.state.camaSolteiro} id="camaSolteiro" type="number" min="0" className="form-control" />
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-6">
                        <label for="valorDiaria">Valor Diaria</label>
                        <input value={this.state.valorDiaria} onChange={this.mudancaInput} id="valorDiaria" type="number" min="0" className="form-control" />
                    </div>
                    <div className="col-12 col-md-6">
                        <label>Tipo de Quarto</label>
                        <select value={this.state.tipoDeQuarto} onChange={this.mudancaInput} id="tipoDeQuarto" class="form-select" aria-label="Default select example">
                            <option selected>Selecione o tipo</option>
                            <option value="Suite">Suite</option>
                            <option value="Normal">Normal</option>
                        </select>

                    </div>
                </div>
                <div className="row center-align mt-4">
                    <div className="col s12">
                        <a onClick={this.salvar} className="waves-effect waves-light btn">Salvar</a>
                    </div>
                </div>
            </div>
        );
    }
}
