import React from "react";
import imgQuarto from '../../assets/img/sample-1.jpg';
import Button from "../../shared/components/Button";
import Card from "../../shared/components/Card";

export default () => {
    return (
        <div class="container">
            <div class="row">
                <div class="col-12 mt-4">
                    <Button title="Adicionar Novo Quarto"></Button>
                </div>
            </div>
            <Card title="Quarto Suite" action={["Atualizar","Editar"]} image={imgQuarto} content="Quarto com Banheiro Exclusivo">

            </Card>
            <Card title="Quarto Suite" action={["Atualizar","Editar"]} image={imgQuarto} content="Quarto com Banheiro Exclusivo">

            </Card>
            <Card title="Quarto Suite" action={["Atualizar","Editar"]} image={imgQuarto} content="Quarto com Banheiro Exclusivo">

            </Card>
            <Card title="Quarto Suite" action={["Atualizar","Editar"]} image={imgQuarto} content="Quarto com Banheiro Exclusivo">

            </Card>
            <Card title="Quarto Suite" action={["Atualizar","Editar"]} image={imgQuarto} content="Quarto com Banheiro Exclusivo">

            </Card>
        </div>
    );
}