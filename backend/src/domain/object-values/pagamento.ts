import { IsNotEmpty } from "class-validator";
import { EStatusPagamento } from "../enums/status-pagamento.enum";
import { ETipoPagamento } from "../enums/tipo-pagamento.enum";

export class Pagamento{
    @IsNotEmpty()
    tipo: ETipoPagamento;
    status: EStatusPagamento;
}