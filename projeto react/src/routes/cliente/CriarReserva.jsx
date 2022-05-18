import React from "react";
import imgQuarto from '../../assets/img/sample-1.jpg';

export default () => {
    return (
        <div className="container mt-4 ">
            <div className="row justify-content-center ">
                <div className="col-12 col-md-6">
                    <div className="card">
                        <div className="card-image">
                            <img height="294px" width="392px" src={imgQuarto} />
                            <span className="card-title">Quarto Suite</span>
                        </div>
                        <div className="card-content">
                            <p>
                                Quarto com banheiro exclusivo
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center mt-2">
                <div className="col-12 col-md-6">
                    <label className="form-label" for="hospedes">Quantidade de Hospedes</label>
                    <input id="hospedes" type="number" min="0" className="form-control" />
                </div>

            </div>
            <div className="row justify-content-center mt-2">
                <div className="col-12 col-md-6">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Pix" defaultChecked />
                        <label className="form-check-label" for="inlineRadio1">Pix</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Boleto" />
                        <label className="form-check-label" for="inlineRadio2">Boleto</label>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center mt-2">
                <div className="col-12 col-md-6 center-align">
                    <a className="waves-effect waves-light btn">Salvar</a>
                </div>
            </div>

        </div>
    );
}