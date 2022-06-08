import { EStatusPagamento } from '../enums/status-pagamento.enum';
import { BaseModel } from './base.model';
import { Pagamento } from './pagamento.model';
import { QuartoModel } from './quarto.model';
import { UsuarioModel } from './usuario.model';
export class ReservaModel extends BaseModel{
    dataEntrada: string;
    dataSaida: string;
    quantidadeHospedes: number;
    pagamento: Pagamento;
    
    quarto: QuartoModel;
    usuario: UsuarioModel;
    
    usuarioId: string;
    quartoId: string;
}