import { AutoMap, ignore } from "@nartc/automapper";
import { BeforeInsert, Column, CreateDateColumn, Entity, ObjectIdColumn, UpdateDateColumn } from "typeorm";
import { LoginDTO } from "../../application/dtos/login.dto";
import { EntityBase } from "./base";
import * as Bcrypt from 'bcrypt';
import { HttpException } from "../../core/exceptions/http-exception";
import { HttpStatus } from "../../core/enums/http-status";

@Entity()
export class Usuario extends EntityBase {
  @Column()
  nome: string;
  @Column()
  email: string;
  @Column()
  senha: string;
  @Column()
  cpf: string;
  @Column()
  telefone: string;
  @Column()
  isAdmin: boolean;

  @BeforeInsert()
  beforeInsertActions() {
    this.isActive = true;
  }

  constructor(){
    super();
    this.cpf = null;
    this.email = null;
    this.senha = null;
    this.telefone = null;
    this.nome = null;
    this.isAdmin = false;
  }


  ValidarSenha(loginDTO: LoginDTO) {
    var senhaEhValida = Bcrypt.compareSync(loginDTO.senha, this.senha);
    if (!senhaEhValida) throw new HttpException("Credenciais Inválidas", HttpStatus.NOT_FOUND);
  }
}