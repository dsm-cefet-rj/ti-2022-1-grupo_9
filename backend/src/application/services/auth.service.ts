import 'dotenv/config'
import * as jwt from 'jsonwebtoken';
import Bcrypt from 'bcrypt';
import { Usuario } from '../../domain/entities/usuario';
import { database } from '../../infra/databases/typeorm';
import { HttpException } from '../../core/exceptions/http-exception';
import { HttpStatus } from '../../core/enums/http-status';
import { LoginDTO } from '../dtos/login.dto';
import { AutoMapperHelper } from '../helpers/auto-mapper.helper';
import { RegisterModel } from '../models/register.model';
import { AlterarSenhaModel } from '../models/alterar-senha.model';
import * as mongodb from 'mongodb';


export async function Login(loginDTO: LoginDTO) {
    let usuario = await database.getRepository(Usuario).findOne({ where: { email: loginDTO.email } });
    if (usuario == null) throw new HttpException("Credenciais Inválidas", HttpStatus.NOT_FOUND);
    usuario.ValidarSenha(loginDTO);
    var token = jwt.sign(
        {
            id: usuario._id,
            isAdmin: usuario.isAdmin,
        },
        process.env.SECRET_KEY, { expiresIn: 3600 });
    return token;
}

export async function Registrar(registerModel: RegisterModel) {
    registerModel.ValidarSenhaRegistro();

    let usuario = AutoMapperHelper.map(registerModel, RegisterModel, Usuario);
    let emailExistente = await database.getRepository(Usuario).findOne({ where: { email: usuario.email } });
    if (emailExistente != null) throw new HttpException("Email existente", HttpStatus.CONFLICT);

    let totalUsuarios = await database.getRepository(Usuario).count();
    let primeiroUsuario = totalUsuarios === 0;
    if (primeiroUsuario) usuario.isAdmin = true;

    usuario.senha = Bcrypt.hashSync(usuario.senha, 10);
    delete (<any>usuario).confirmarSenha;

    await database.getRepository(Usuario).save(usuario);
}

export async function AlterarSenha(alterarSenhaModel: AlterarSenhaModel, usuarioId: string) {
    alterarSenhaModel.validarAlteracaoDeSenha();
    let senhaAntigaHasheada = (await database.getRepository(Usuario).findOne({ where: { _id: new mongodb.ObjectID(usuarioId) } })).senha;
    let confirmacaoSenhaAntigaOk = Bcrypt.compareSync(alterarSenhaModel.senhaAntiga, senhaAntigaHasheada);

    if (!confirmacaoSenhaAntigaOk) throw new HttpException("Confirmação de senha antiga não está correta!", HttpStatus.BAD_REQUEST);

    let novaSenhaHasheada = Bcrypt.hashSync(alterarSenhaModel.novaSenha, 10);

    await database.getRepository(Usuario).update({ _id: new mongodb.ObjectID(usuarioId) }, { senha: novaSenhaHasheada });
}