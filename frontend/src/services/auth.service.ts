import { createAsyncThunk } from "@reduxjs/toolkit";
import { httpPost } from "../core/services/http.service";
import { AlterarSenhaModel } from "../models/alterar-senha.model";
import { LoginModel } from "../models/login.model";
import { RegistrarModel } from "../models/registrar.model";

export const Registrar = createAsyncThunk('registrar', async (form: RegistrarModel) => {
    return await httpPost("http://localhost:3030/auth/register", form);
});

export const Logar = createAsyncThunk('logar', async (form: LoginModel) => {
    return await httpPost("http://localhost:3030/Auth/login", form);
});


export const AuthServiceAlterarSenha =  async(alterarSenhaModel: AlterarSenhaModel) => {
    var response = await fetch("http://localhost:3030/Auth/alterar-senha", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(alterarSenhaModel),
    })
    return response;
}