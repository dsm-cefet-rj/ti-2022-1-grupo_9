import React, { useState } from "react";
import DatabaseService from "../../core/services/database.service";
import FormService from "../../core/services/form.service";
import SweetAlertService from "../../core/services/sweet-alert.service";
import Button from "../../shared/components/Button";
import { useNavigate } from "react-router-dom";

export default class Login extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            email: "",
            senha: "",
        }
        this.mudancaInput = this.mudancaInput.bind(this);
        this.logar = this.logar.bind(this);

    }


    mudancaInput(event){
        this.setState({ [event.target.id]: event.target.value });
    }

    logar(){
        if(!FormService.ehValido(this.state)) return SweetAlertService.ErroformularioInvalido();
        let usuarios = DatabaseService.obterUsuarios();
        let usuarioValidado = usuarios.find(x => x.email === this.state.email && x.senha === this.state.senha) !== undefined? true: false;
        let usuarioLogado = usuarios.find(x => x.email === this.state.email && x.senha === this.state.senha);
        if(usuarioValidado){
            localStorage.setItem("logado", JSON.stringify(usuarioLogado));
            setTimeout(() => {
                window.location.href = "/";
            }, 2200);
            return SweetAlertService.SucessoPersonalizado("Login Efetuado com Sucesso!", "Você será redirecionado em breve");
        }

        return SweetAlertService.ErroPersonalizado("Opss...", "Credenciais Inválidas");


        // TODO Redirecionar para a pagina principal  
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <label className="form-label" for="email">Email</label>
                        <input value={this.state.email} onChange={this.mudancaInput} id="email" type="text" className="form-control" />
                    </div>

                </div>
                <div className="row right-align">
                    <div className="col-12 col-md-6">
                        <label className="form-label" for="senha">Senha</label>
                        <input value={this.state.senha} onChange={this.mudancaInput} id="senha" type="password" className="form-control" />
                    </div>
                </div>
                <div className="row my-4">
                    <div className="col-12 col-md-6">
                        <Button function={this.logar} title="Logar"></Button>
                    </div>
                </div>
            </div>
        );
    }
}
