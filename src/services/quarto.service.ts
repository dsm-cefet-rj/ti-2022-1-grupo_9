import SweetAlertService from "../core/services/sweet-alert.service";
import { Intervalo } from "../models/intervalo.model";
import { QuartoModel } from "../models/quarto.model";

export class QuartoService {
    static async Criar(quarto: QuartoModel) {
        var response = await fetch("http://localhost:3030/Quarto", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(quarto),
        })
        return response;
    }
    static async Obter() {
        let response = await fetch("http://localhost:3030/Quarto", {
            method: 'GET',
        });
        let json = await response.json();
        return json as QuartoModel[];
    }
    static async Deletar(id: string) {
        let response = await fetch(`http://localhost:3030/Quarto/${id}`, {
            method: 'DELETE',
        });
        return response;
    }

    static async ObterQuartosDisponiveis(intervalo: Intervalo){
        let response = await fetch(`http://localhost:3030/Quarto/${intervalo.dataEntrada}/${intervalo.dataSaida}`, {
            method: 'GET',
        });
        let result = await response.json();
        return result;
    }
}