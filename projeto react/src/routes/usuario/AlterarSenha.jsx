import React from "react";

export default (props) => {
    return (<div className="container">
        <div className="row mt-2">
            <div className="col-12 col-md-6">
                <label className="form-label" for="email">Senha Antiga</label>
                <input id="email" type="text" className="form-control" />

            </div>
        </div>
        <div className="row mt-2">
            <div className="col-12 col-md-6">
                <label className="form-label" for="senha">Nova Senha</label>
                <input id="senha" type="text" className="form-control" />

            </div>

        </div>
        <div className="row mt-2">
            <div className="col-12 col-md-6">
                <label className="form-label" for="confirm">Confirmar Nova Senha</label>
                <input id="confirm" type="text" className="form-control" />

            </div>
        </div>
        <Button title="Salvar"></Button>
    </div>);
}