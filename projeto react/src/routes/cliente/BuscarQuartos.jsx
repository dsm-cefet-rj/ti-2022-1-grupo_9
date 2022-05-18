import React from "react";
import imgQuarto from '../../assets/img/sample-1.jpg';

export default () => {
    return (
        <div className="container">
            <div className="row align-items-end mt-2">
                <div className="col-12 col-md-5">
                    <label className="form-label" for="checkin">Checkin</label>
                    <input type="date" id="checkin" className="form-control" />
                </div>
                <div className="col-12 col-md-5">
                    <label className="form-label" for="checkout">Checkout</label>
                    <input type="date" id="checkout" className="form-control" />
                </div>
                <div class="col-12 col-md-2 mt-2">
                    <a className="waves-effect waves-light btn">Buscar Quartos</a>
                </div>
            </div>
            <div className="row mt-2">
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
                        <div className="card-action">
                            <a href="cliente-criar-reserva.html">Reservar</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
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
                        <div className="card-action">
                            <a href="cliente-criar-reserva.html">Reservar</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
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
                        <div className="card-action">
                            <a href="cliente-criar-reserva.html">Reservar</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
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
                        <div className="card-action">
                            <a href="cliente-criar-reserva.html">Reservar</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
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
                        <div className="card-action">
                            <a href="cliente-criar-reserva.html">Reservar</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}