import { EStatusPagamento } from "../enums/status-pagamento.enum";
import { ETipoPagamento } from "../enums/tipo-pagamento.enum";

export class Pagamento{
    tipo: ETipoPagamento;
    status: EStatusPagamento;
}