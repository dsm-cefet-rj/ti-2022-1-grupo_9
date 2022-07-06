import { ReservaModel } from "../models/reserva.model";

export class ReservaService{
    static async Criar(reserva: ReservaModel){
        var response = await fetch("http://localhost:3030/reserva", {
            method: 'POST',
            body: JSON.stringify(reserva),
        })
        return response;
    }

    static async ObterTodas(){
        var response = await fetch("http://localhost:3030/reserva", {
            method: 'GET',
        })
        let result = await response.json() as ReservaModel[];
        return result;
    }

    static async ObterPorUsuarioId(){
        var response = await fetch("http://localhost:3030/reserva/por-usuario-id", {
            method: 'GET',
        })
        let result = await response.json() as ReservaModel[];
        return result;
    }

    static async ConfirmarPagamento(id){
        var response = await fetch(`http://localhost:3030/reserva/confirmar-pagamento/${id}`, {method:"PUT"});
        return response;
    }

    static async CancelarReserva(id){
        var response = await fetch(`http://localhost:3030/reserva/${id}`, {method:"DELETE"});
        return response;
    }
}