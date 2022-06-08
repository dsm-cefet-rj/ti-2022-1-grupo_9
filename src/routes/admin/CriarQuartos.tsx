import { useForm } from "react-hook-form";
import { ConvertService } from "../../core/services/convert.service";
import SweetAlertService from "../../core/services/sweet-alert.service";
import {QuartoModel } from "../../models/quarto.model";
import Button from "../../shared/components/Button";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { QuartoService } from "../../services/quarto.service";


export default () => {
    const schema = yup.object({
        camaCasal: yup.number().positive().integer().required(),
        camaSolteiro: yup.number().positive().integer().required(),
        valorDiaria: yup.number().positive().integer().required(),
        tipo: yup.string().required(),
    }).required();

    const { register, handleSubmit, watch, formState: { errors } } = useForm({ resolver: yupResolver(schema) });


    async function criar() {
        var quarto = watch() as QuartoModel;
        ConvertService.StringToNumber(quarto);
        await QuartoService.Criar(quarto);
    }

    return (
        <div className="container mt-4">
            <form>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <label htmlFor="camaCasal">Quantidade camas de Casal</label>
                        <input id="camaCasal" {...register("camaCasal")}
                            type="number" min="0" className="form-control" />
                    </div>
                    <div className="col-12 col-md-6">
                        <label htmlFor="camaSolteiro">Quantidade camas de Solteiro</label>
                        <input id="camaSolteiro" {...register("camaSolteiro")} type="number" min="0" className="form-control" />

                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-6">
                        <label htmlFor="valorDiaria">Valor Diaria</label>
                        <input id="valorDiaria" {...register("valorDiaria")} type="number" min="0" className="form-control" />

                    </div>
                    <div className="col-12 col-md-6">
                        <label>Tipo de Quarto</label>
                        <select defaultValue="" {...register("tipo")} className="form-select" aria-label="Default select example">
                            <option disabled value="" selected>Selecione o tipo</option>
                            <option value="Suite">Suite</option>
                            <option value="Normal">Normal</option>
                        </select>

                    </div>
                </div>
                <div className="row center-align mt-4">
                    <div className="col s12">
                        <Button function={criar} title="salvar" />
                    </div>
                </div>
            </form>
        </div>
    );
}