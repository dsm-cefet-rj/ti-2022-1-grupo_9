import {createEntityAdapter,createSlice } from "@reduxjs/toolkit";
import { Registrar } from "../../services/auth.service";

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