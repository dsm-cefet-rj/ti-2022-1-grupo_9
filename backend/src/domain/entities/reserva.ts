
import { EntityBase } from "./base";
import moment from 'moment';
import { HttpException } from "../../core/exceptions/http-exception";
import { HttpStatus } from "../../core/enums/http-status";
import { BeforeInsert, Column, Entity } from "typeorm";
import { EStatusPagamento } from "../enums/status-pagamento.enum";
import { Pagamento } from "../object-values/pagamento";
import { Usuario } from "./usuario";
import { Quarto } from "./quarto";
@Entity()
export class Reserva extends EntityBase{
    @Column()
    dataEntrada: string;
    @Column()
    dataSaida: string;
    @Column()
    quantidadeHospedes:number;
    @Column()
    pagamento: Pagamento;
    @Column()
    quarto: Quarto;
    @Column()
    usuario: Usuario;

    @BeforeInsert()
    beforeInsertActions() {
        this.isActive = true;
        this.pagamento.status = EStatusPagamento.NAO_ENCONTRADO;
    }

    constructor(){
        super();
        this.quarto = null;
        this.dataSaida = null;
        this.dataEntrada = null;
        this.quantidadeHospedes = null;
        this.pagamento = null;
    }

    Validar(){
        this.dataEhValida();
    }

    private dataEhValida(){
        var result = moment(this.dataSaida).diff(this.dataEntrada, "h");
        if(0 > result) throw new HttpException("Data de Entrada tem que ser anterior a da saida", HttpStatus.BAD_REQUEST);
    }
}