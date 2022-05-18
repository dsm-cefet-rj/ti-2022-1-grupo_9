import React from "react";
import imgQuarto from '../../assets/img/sample-1.jpg';
import Card from '../../shared/components/Card'
export default () => {
    return (
        <div className="container">
            <Card action={["Reservar"]}title="Quarto Suite" content="Quarto com Banheiro Exclusivo" image={imgQuarto}>

            </Card>
            <Card action={["Reservar"]}title="Quarto Suite" content="Quarto com Banheiro Exclusivo" image={imgQuarto}>

            </Card>
            <Card action={["Reservar"]}title="Quarto Suite" content="Quarto com Banheiro Exclusivo" image={imgQuarto}>

            </Card>
            <Card action={["Reservar"]}title="Quarto Suite" content="Quarto com Banheiro Exclusivo" image={imgQuarto}>

            </Card>
        </div>
    );
}