import React from "react";
import DatabaseService from "../../core/services/database.service";
import FormService from "../../core/services/form.service";
import SweetAlertService from "../../core/services/sweet-alert.service";
import Button from "../../shared/components/Button";

export default class Registrar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: "",
            email: "",
            telefone: "",
            cpf: "",
            senha: "",
            confirmarSenha: ""
        };

        this.mudancasInput = this.mudancasInput.bind(this);
        this.registrar = this.registrar.bind(this);
    }


    mudancasInput(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    registrar() {
        if (!FormService.ehValido(this.state)) {
            return SweetAlertService.ErroformularioInvalido();
        }
        if (this.state.confirmarSenha !== this.state.senha)
            return SweetAlertService.ErroPersonalizado("Opss...", "Senha e confirmação de senha diferentes!");

        DatabaseService.addUsuario(this.state);

        SweetAlertService.SucessoPersonalizado("Registro Efetuado com Sucesso", "Você será redirecionado para o login");

    }


    render() {
        return (
            <div className="container">
                <div className="row mt-2">
                    <div className="col-12 col-md-6">
                        <label className="form-label" for="nome">Nome Completo</label>
                        <input onChange={this.mudancasInput} value={this.state.nome} id="nome" type="text" className="form-control" />

                    </div>
                    <div className="col-12 col-md-6">
                        <label className="form-label" for="email">Email</label>
                        <input onChange={this.mudancasInput} value={this.state.email} id="email" type="email" className="form-control" />
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-12 col-md-6">
                        <label className="form-label" for="cpf">CPF</label>
                        <input onChange={this.mudancasInput} value={this.state.cpf} id="cpf" type="text" className="form-control" />
                    </div>
                    <div className="col-12 col-md-6">
                        <label className="form-label" for="telefone">Telefone</label>
                        <input onChange={this.mudancasInput} value={this.state.telefone} id="telefone" type="text" className="form-control" />
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-12 col-md-6">
                        <label className="form-label" for="senha">Senha</label>
                        <input onChange={this.mudancasInput} value={this.state.senha} id="senha" type="password" className="form-control" />
                    </div>
                    <div className="col-12 col-md-6">
                        <label className="form-label" for="confirmarSenha">Confirmar Senha</label>
                        <input onChange={this.mudancasInput} value={this.state.confirmarSenha} id="confirmarSenha" type="password" className="form-control" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6 text-center text-nowrap">
                        {
                            this.state.senha !== this.state.confirmarSenha && this.state.senha !== "" && this.state.confirmarSenha !== ""
                            &&
                            <span className="text-danger">Senha e confirmação de senha diferentes!</span>
                        }
                    </div>
                </div>
                <div className="row my-4 center-align">
                    <div className="col-12">
                        <Button function={this.registrar} title="Registrar"></Button>
                    </div>
                </div>
            </div>
        );
    }
}