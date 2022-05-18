import React from "react";

export default (props) => {
    return (
        <div className="container">
            <div className="row mt-2">
                <div className="col-6">
                    <label className="form-label" for="nome">Nome Completo</label>
                    <input id="nome" type="text" className="form-control" />

                </div>
                <div className="col-6">
                    <label className="form-label" for="email">Email</label>
                    <input id="email" type="text" className="form-control" />
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-6">
                    <label className="form-label" for="cpf">CPF</label>
                    <input id="cpf" type="text" className="form-control" />
                </div>
                <div className="col-6">
                    <label className="form-label" for="telefone">Telefone</label>
                    <input id="telefone" type="text" className="form-control" />
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-6">
                    <label className="form-label" for="confirmarSenha">Senha</label>
                    <input id="confirmarSenha" type="text" className="form-control" />
                </div>
                <div className="col-6">
                    <label className="form-label" for="confirmarSenha">Confirmar Senha</label>
                    <input id="confirmarSenha" type="text" className="form-control" />
                </div>
            </div>
            <div className="row my-4 center-align">
                <div className="col-12">
                    <a className="btn waves-effect waves-light">Registrar</a>
                </div>
            </div>
        </div>
    );
}