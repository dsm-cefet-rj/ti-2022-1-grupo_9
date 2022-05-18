import React from "react";
import imgQuarto from '../../assets/img/sample-1.jpg';

export default () => {
    return (
        <div class="container mb-4">
            <div class="row">
                <div class="col-12 col-md-6">
                    <div class="card hoverable">
                        <div class="card-image">
                            <img height="294px" width="392px" src={imgQuarto} />
                            <span class="card-title">Reserva 23/05/2022 - Quarto Suite</span>
                        </div>
                        <div class="card-content">
                            <p>
                                Hospede: Matheus Martins
                            </p>
                            <p>
                                Quarto: Numero 101
                            </p>
                            <p>
                                Quantidade de pessoas: 2
                            </p>
                        </div>

                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-md-6">
                    <div class="card hoverable">
                        <div class="card-image">
                            <img height="294px" width="392px" src={imgQuarto} />
                            <span class="card-title">Reserva 23/05/2022 - Quarto Suite</span>
                        </div>
                        <div class="card-content">
                            <p>
                                Hospede: Matheus Martins
                            </p>
                            <p>
                                Quarto: Numero 102
                            </p>
                            <p>
                                Quantidade de pessoas: 3
                            </p>
                        </div>

                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-md-6">
                    <div class="card hoverable">
                        <div class="card-image">
                            <img height="294px" width="392px" src={imgQuarto} />
                            <span class="card-title">Reserva 23/05/2022 - Quarto Suite</span>
                        </div>
                        <div class="card-content">
                            <p>
                                Hospede: Matheus Martins
                            </p>
                            <p>
                                Quarto: Numero 101
                            </p>
                            <p>
                                Quantidade de pessoas: 2
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}