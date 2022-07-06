import { Between } from "typeorm";
import { HttpStatus } from "../../core/enums/http-status";
import { HttpException } from "../../core/exceptions/http-exception";
import { Reserva } from "../../domain/entities/reserva";
import { Usuario } from "../../domain/entities/usuario";
import { database } from "../../infra/databases/typeorm";
import { ReservaDTO } from "../dtos/reserva.dto";
import { AutoMapperHelper } from "../helpers/auto-mapper.helper";
import * as mongodb from 'mongodb';
import { Quarto } from "../../domain/entities/quarto";
import { EStatusPagamento } from "../../domain/enums/status-pagamento.enum";

export async function Reservar(reservaDTO: ReservaDTO, usuarioId) {

    let reserva = AutoMapperHelper.map(reservaDTO, ReservaDTO, Reserva);
    reserva.Validar();

    let todasReservasNessaData = await database.getMongoRepository(Reserva).find({
        where: {
            isActive:true,
            $or: [
                {
                    dataEntrada: {
                        $gte: reserva.dataEntrada,
                        $lt: reserva.dataSaida
                    }
                },
                {
                    dataSaida: {
                        $gte: reserva.dataEntrada,
                        $lt: reserva.dataSaida
                    }
                },
                { dataEntrada: reserva.dataEntrada }, { dataEntrada: reserva.dataSaida },
                { dataSaida: reserva.dataEntrada }, { dataSaida: reserva.dataSaida }
            ]
        }
    })
    let existeReservaNessaDataParaEsseQuarto = todasReservasNessaData.find(x => x.quarto._id.toString() === reservaDTO.quartoId.toString());
    if (existeReservaNessaDataParaEsseQuarto) throw new HttpException("Já existe reserva nessa data!", HttpStatus.BAD_REQUEST);

    
    let { nome, _id } = await database.getRepository(Usuario).findOne({ where: { _id: new mongodb.ObjectID(usuarioId) } })
    reserva.usuario = { nome, _id } as Usuario;
    let quarto = await database.getRepository(Quarto).findOne({ where: { _id: new mongodb.ObjectID(reservaDTO.quartoId) } })
    
    if(!quarto.isActive) throw new HttpException("Esse quarto está desativado!", HttpStatus.BAD_REQUEST);
    reserva.quarto = quarto;
    await database.getRepository(Reserva).save(reserva);
    return;

}

export async function Obter() {
    let reservas = await database.getMongoRepository(Reserva).find();
    let result = AutoMapperHelper.mapArray(reservas, Reserva, ReservaDTO);
    return reservas;
}

export async function ObterPorUsuarioId(usuarioId: string) {
    let reservas = await database.getMongoRepository(Reserva).find({
        where: {
            'usuario._id': new mongodb.ObjectID(usuarioId),
            isActive: true

        }
    });
    let result = AutoMapperHelper.mapArray(reservas, ReservaDTO, ReservaDTO);
    return result;
}

export async function ConfirmarPagamento(id: string) {
    let result = await database.getRepository(Reserva).update({ _id: new mongodb.ObjectID(id) }, { pagamento: { status: EStatusPagamento.CONFIRMADO } });
    if (!result.affected) throw new HttpException("Não foi possível confirmar o pagamento dessa reserva", HttpStatus.BAD_REQUEST);
}

export async function CancelarReserva(reservaId: string, usuarioId: string) {
    let reserva = await database.getMongoRepository(Reserva).findOne({ where: { _id: new mongodb.ObjectID(reservaId) } });

    if (reserva == null) throw new HttpException("Reserva não Encontrada", HttpStatus.BAD_REQUEST);

    if (reserva.usuario._id != usuarioId) throw new HttpException("Somente o usuario que reservou pode fazer o cancelamento", HttpStatus.FORBIDDEN);

    let result = await database.getMongoRepository(Reserva).update({ _id: new mongodb.ObjectID(reservaId) }, { isActive: false });

    if (!result.affected) throw new HttpException("Não foi Cancelar essa Reserva", HttpStatus.BAD_REQUEST);

}