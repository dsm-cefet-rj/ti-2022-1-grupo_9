import { createAsyncThunk, createEntityAdapter,createSlice } from "@reduxjs/toolkit";
import { Logar } from "../../services/auth.service";

const login = createEntityAdapter();
const initialState = login.getInitialState({
    status: 'not_loaded',
    error: null
});



export const loginSlice = createSlice({
    name: 'login',
    initialState: initialState,
    reducers: {
        setStatus: (state, action) => {state.status = action.payload},
    },
    extraReducers: {
        [Logar.pending as any]: (state, action) => {state.status = 'loading'; },
        [Logar.fulfilled as any]: (state, action ) =>{state.status = 'success'; },
        [Logar.rejected as any]: (state, action) => {state.status = 'failed';}
    }
})

export const { setStatus } = loginSlice.actions

export default loginSlice.reducer