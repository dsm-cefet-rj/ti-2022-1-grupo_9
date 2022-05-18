import React from "react";

export default () => {
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-12 col-md-6">
                    <label for="camaCasal">Quantidade camas de Casal</label>
                    <input id="camaCasal" type="number" min="0" className="form-control" />

                </div>
                <div className="col-12 col-md-6">
                    <label for="camaSolteiro">Quantidade camas de Solteiro</label>
                    <input id="camaSolteiro" type="number" min="0" className="form-control" />

                </div>
            </div>

            <div className="row">
                <div className="col-12 col-md-6">
                    <label for="valorDiaria">Valor Diaria</label>
                    <input id="valorDiaria" type="number" min="0" className="form-control" />

                </div>
                <div className="col-12 col-md-6">
                    <label>Tipo de Quarto</label>
                    <select class="form-select" aria-label="Default select example">
                        <option disabled selected>Selecione o tipo</option>
                        <option value="Suite">Suite</option>
                        <option value="Normal">Normal</option>
                    </select>

                </div>
            </div>
            <div className="row center-align mt-4">
                <div className="col s12">
                    <a className="waves-effect waves-light btn">Salvar</a>
                </div>
            </div>
        </div>
    );
}