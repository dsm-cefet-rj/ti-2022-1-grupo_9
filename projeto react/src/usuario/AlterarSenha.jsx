import React from "react";
import DatabaseService from "../../core/services/database.service";
import FormService from "../../core/services/form.service";
import SweetAlertService from "../../core/services/sweet-alert.service";
import Button from "../../shared/components/Button";

export default class Topbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            senhaAntiga: "",
            novaSenha: "",
            confirmarNovaSenha: ""
        }
        this.mudancasInput = this.mudancasInput.bind(this);
        this.alterarSenha = this.alterarSenha.bind(this);

    }
    mudancasInput(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    alterarSenha(){
        if(!FormService.ehValido(this.state)) return SweetAlertService.ErroFormularioInvalido();
        if(this.state.novaSenha !== this.state.confirmarNovaSenha) return SweetAlertService.ErroPersonalizado("Ops...", "Senha e Confirmação de senha Diferentes");
        DatabaseService.alterarSenhaUsuario(this.state);
        SweetAlertService.SucessoPersonalizado("Senha Alterada com sucesso!", "Você será redirecionado em breve");
    }

    render() {
        return (
            <div className="container">
                <div className="row mt-2">
                    <div className="col-12 col-md-6">
                        <label className="form-label" for="email">Senha Antiga</label>
                        <input value={this.state.senhaAntiga} onChange={this.mudancasInput} id="senhaAntiga" type="password" className="form-control" />
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-12 col-md-6">
                        <label className="form-label" for="senha">Nova Senha</label>
                        <input value={this.state.novaSenha} onChange={this.mudancasInput} id="novaSenha" type="password" className="form-control" />
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-12 col-md-6">
                        <label className="form-label" for="confirm">Confirmar Nova Senha</label>
                        <input value={this.state.confirmarNovaSenha} onChange={this.mudancasInput} id="confirmarNovaSenha" type="password" className="form-control" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6 text-center text-nowrap">
                        {
                            this.state.novaSenha !== this.state.confirmarNovaSenha && this.state.novaSenha !== "" && this.state.confirmarNovaSenha !== ""
                            &&
                            <span className="text-danger">Confirmação de Senha é diferente da nova senha</span>
                        }
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-6 text-center">
                        <Button function={this.alterarSenha} title="Salvar"></Button>
                    </div>
                </div>

            </div>
        );
    }
}