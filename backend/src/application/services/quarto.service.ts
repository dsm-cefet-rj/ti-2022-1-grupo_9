import { In, Not, ObjectID } from 'typeorm';
import { HttpStatus } from '../../core/enums/http-status';
import { HttpException } from '../../core/exceptions/http-exception';
import { Quarto } from '../../domain/entities/quarto';
import { database } from '../../infra/databases/typeorm';
import { QuartoDTO } from '../dtos/quarto.dto';
import { AutoMapperHelper } from '../helpers/auto-mapper.helper';
import * as mongodb from 'mongodb';
import { Reserva } from '../../domain/entities/reserva';
import { ETipoQuarto } from '../../domain/enums/tipo-quarto.enum';



export async function Criar(quartoDTO: QuartoDTO) {
    let numeroQuarto = (await database.getRepository(Quarto).find()).length;
    let quarto = AutoMapperHelper.map(quartoDTO, QuartoDTO, Quarto);
    quarto.numero = numeroQuarto + 1;
    await database.getRepository(Quarto).save(quarto);
}

export async function Obter() {
    let quartos = await database.getRepository(Quarto).find({ where: { isActive: true } });
    let results = AutoMapperHelper.mapArray(quartos, QuartoDTO, QuartoDTO);
    return results;
}

export async function ObterPorId(id: string) {
    let quarto = await database.getMongoRepository(Quarto).findOne({ where: { _id: new mongodb.ObjectID(id) } });
    if (quarto == null) throw new HttpException("Quarto não Encontrado!", HttpStatus.NOT_FOUND);

    let result = AutoMapperHelper.map(quarto, QuartoDTO, QuartoDTO);
    return result;
}

export async function Deletar(id: string) {

    let result = await database.getMongoRepository(Quarto).update({ _id: new mongodb.ObjectID(id) }, { isActive: false });
    if (!result.affected) throw new HttpException("Não foi possível deletar", HttpStatus.BAD_REQUEST);
}

export async function ObterQuartosDisponiveis(dataEntrada: string, dataSaida: string) {
    let quartosReservados = await database.getMongoRepository(Reserva).find({
        where: {
            isActive: true,
            $or: [
                {
                    dataEntrada: {
                        $gte: dataEntrada,
                        $lt: dataSaida
                    }
                },
                {
                    dataSaida: {
                        $gte: dataEntrada,
                        $lt: dataSaida
                    }
                },
                { dataEntrada: dataEntrada }, { dataEntrada: dataSaida },
                { dataSaida: dataEntrada }, { dataSaida: dataSaida }
            ]
        }
    })

    let idsQuartosReservados = quartosReservados.map(x => new mongodb.ObjectID(x.quarto._id));

    let quartosDisponiveis = await database.getMongoRepository(Quarto).find({
        where: {
            _id: { $not: { $in: idsQuartosReservados } } as any,
        }
    })
    let result = AutoMapperHelper.mapArray(quartosDisponiveis, QuartoDTO, QuartoDTO);
    return result;
}

export async function Editar(quartoDTO: QuartoDTO) {
    let quarto = await database.getMongoRepository(Quarto).findOne({ where: { _id: new mongodb.ObjectID(quartoDTO._id) } });
    if (quarto == null) throw new HttpException("Quarto não Encontrado!", HttpStatus.NOT_FOUND);

    
    await database.getRepository(Quarto).update(
        {_id:new mongodb.ObjectID(quartoDTO._id)},
        {
            camaCasal: quartoDTO.camaCasal,
            camaSolteiro: quartoDTO.camaSolteiro,
            tipo: ETipoQuarto[quartoDTO.tipo.toUpperCase()],
            valorDiaria: quartoDTO.valorDiaria
        }
    )
}