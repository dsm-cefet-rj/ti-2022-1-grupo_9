import { configureStore } from '@reduxjs/toolkit'
import loadingRedux from '../reducers/loading.redux'
import loginSlice from '../slices/login.slice'
import registrarSlice from '../slices/registrar.slice'

export default configureStore({
  reducer: {
    counter: loadingRedux,
    login: loginSlice,
    registrar: registrarSlice,
  }
})