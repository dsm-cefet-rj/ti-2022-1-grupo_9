import { configureStore } from '@reduxjs/toolkit'
import loadingRedux from '../reducers/loading.redux'

export default configureStore({
  reducer: {
    counter: loadingRedux
  }
})