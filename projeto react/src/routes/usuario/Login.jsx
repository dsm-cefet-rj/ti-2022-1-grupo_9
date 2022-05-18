import React from "react";

export default (props) => {
    return (<div className="container">
        <div className="row">
            <div className="col-12 col-md-6">
                <label className="form-label" for="email">Email</label>
                <input id="email" type="text" className="form-control" />

            </div>

        </div>
        <div className="row right-align">
            <div className="col-12 col-md-6">
                <label className="form-label" for="senha">Senha</label>
                <input id="senha" type="text" className="form-control" />

            </div>
        </div>
        <div className="row my-4">
            <div className="col-12 col-md-6">
                <a className=" btn">Logar</a>
            </div>
        </div>
    </div>);
}