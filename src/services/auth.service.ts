import { createAsyncThunk } from "@reduxjs/toolkit";
import { httpPost } from "../core/services/http.service";
import { LoginModel } from "../models/login.model";
import { RegistrarModel } from "../models/registrar.model";

export const Registrar = createAsyncThunk('registrar', async (form: RegistrarModel) => {
    return await httpPost("http://localhost:3030/auth/register", form);
});

export const Logar = createAsyncThunk('logar', async (form: LoginModel) => {
    return await httpPost("http://localhost:3030/Auth/login", form);
});