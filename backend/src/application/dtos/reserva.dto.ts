import { IsNotEmpty } from "class-validator";
import { Quarto } from "../../domain/entities/quarto";
import { Pagamento } from "../../domain/object-values/pagamento";
import { BaseDTO } from "./base.dto";
import { QuartoDTO } from "./quarto.dto";
import { UsuarioDTO } from "./usuario.dto";

export class ReservaDTO extends BaseDTO{
    @IsNotEmpty()
    dataEntrada: string;
    @IsNotEmpty()
    dataSaida: string;
    @IsNotEmpty()
    quantidadeHospedes:number;
    @IsNotEmpty()
    pagamento: Pagamento;
    usuario: UsuarioDTO;
    quarto: QuartoDTO;
    @IsNotEmpty()
    quartoId: string;

    constructor(){
        super();
        this.dataEntrada = null;
        this.dataSaida = null;
        this.quantidadeHospedes = null;
        this.pagamento = null;
        this.quartoId = null;
        this.quarto = new QuartoDTO();
    }
    
}