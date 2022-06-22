import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import imgQuarto from '../../assets/img/sample-1.jpg';
import SweetAlertService from "../../core/services/sweet-alert.service";
import { QuartoModel } from "../../models/quarto.model";
import { QuartoService } from "../../services/quarto.service";
import Button from "../../shared/components/Button";
import Card from "../../shared/components/Card";

export default () => {

    let navigate = useNavigate();
    const [quartos, setQuartos] = useState(new Array<QuartoModel>());

    useEffect(() => {
        ObterQuartos();
    }, [])

    async function ObterQuartos() {
        var result = await QuartoService.Obter();
        setQuartos(result);
    }

    async function deletarQuarto(event) {
        let id = event.target.ariaValueText
        let response = await QuartoService.Deletar(id);
        let quarto = quartos.findIndex(x => x._id == id);
        if (response.status == 200) {
            quartos.splice(quarto, 1);
            let teste = [...quartos];
            setQuartos(teste);
            SweetAlertService.SucessoPersonalizadoComTimer("Deletado com Sucesso!", "")
        }


    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 mt-4">
                    <Button function={() => navigate("/admin/criar-quarto", { replace: true })} title="Adicionar Novo Quarto"></Button>
                </div>
            </div>
            {obterQuartosHtml()}
        </div>
    );








    function obterQuartosHtml() {
        return quartos.map(x => {
            return <div className="row justify-content-center ">
                <div className="col-12 col-md-6">
                    <div className="card">
                        <div className="card-image">
                            <img height="294px" width="392px" src={imgQuarto} />
                            <span className="card-title">Quarto {x.numero}</span>
                        </div>
                        <div className="card-content">
                            Quarto com banheiro exclusivo
                        </div>
                        <div role="button" className="card-action">
                            <Link to={"/admin/editar-quarto/" + x._id}>
                                <a aria-valuetext={x._id}>Editar</a>
                            </Link>
                            <a aria-valuetext={x._id} onClick={deletarQuarto}>Deletar</a>
                        </div>
                    </div>
                </div>
            </div>
        })
    }
}


