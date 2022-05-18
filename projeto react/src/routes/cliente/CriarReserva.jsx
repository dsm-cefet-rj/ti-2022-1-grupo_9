import React from "react";
import imgQuarto from '../../assets/img/sample-1.jpg';
import Card from "../../shared/components/Card";

export default () => {
    return (
        <div className="container mt-4 ">
            <Card content="Quarto com banheiro exclusivo"
              image={imgQuarto} title="Quarto Suite"
            >

            </Card>
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
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="Boleto" />
                        <label className="form-check-label" for="inlineRadio3">Cartao de Crédito</label>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center mt-2">
                <div className="col-12 col-md-6 center-align">
                    <Button title="Criar Reserva"></Button>
                </div>
            </div>

        </div>
    );
}