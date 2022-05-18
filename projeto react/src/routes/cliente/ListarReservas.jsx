import React from "react";
import imgQuarto from '../../assets/img/sample-1.jpg';
import Card from "../../shared/components/Card";

export default () => {
    return (
        <div class="container mb-4">
            <Card content={[<p>Hospede: Matheus Martins</p>,<p>  Quarto: Numero 101</p>,<p>Hospede: Matheus Martins</p>]}
              image={imgQuarto} title="Reserva 23/05/2022 - Quarto Suite" action={["Editar"]}
            >

            </Card>
            <Card content={[<p>Hospede: Matheus Martins</p>,<p>  Quarto: Numero 101</p>,<p>Hospede: Matheus Martins</p>]}
              image={imgQuarto} title="Reserva 23/05/2022 - Quarto Suite" action={["Editar"]}
            >

            </Card>
            <Card content={[<p>Hospede: Matheus Martins</p>,<p>  Quarto: Numero 101</p>,<p>Hospede: Matheus Martins</p>]}
              image={imgQuarto} title="Reserva 23/05/2022 - Quarto Suite" action={["Editar"]}
            >

            </Card>
        </div>
    );
}