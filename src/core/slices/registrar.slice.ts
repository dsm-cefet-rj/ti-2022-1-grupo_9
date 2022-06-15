import { createAsyncThunk, createEntityAdapter,createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { LoginModel } from "../../models/login.model";
import { RegistrarModel } from "../../models/registrar.model";
import { Logar, Registrar } from "../../services/auth.service";
import { ativar } from "../reducers/loading.redux";
import { httpPost } from "../services/http.service";

const registrar = createEntityAdapter();
const initialState = registrar.getInitialState({
    status: 'not_loaded',
    error: null
});







export const registrarSlice = createSlice({
    name: 'registrar',
    initialState: initialState,
    reducers: {
        setStatus: (state, action) => {state.status = action.payload}
    },
    extraReducers: {
        [Registrar.pending as any]: (state, action) => {state.status = 'loading'},
        [Registrar.fulfilled as any]: (state, action ) =>{state.status = 'success'; },
        [Registrar.rejected as any]: (state, action) => {state.status = 'failed';}
    }
})

export const { setStatus } = registrarSlice.actions

export default registrarSlice.reducer

export const {selectEntities: token} = registrar.getSelectors(state => (<any>state).registrar);