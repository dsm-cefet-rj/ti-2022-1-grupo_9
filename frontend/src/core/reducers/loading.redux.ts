import { createSlice } from '@reduxjs/toolkit'

export const controladorLoading = createSlice({
  name: 'loading',
  initialState: {
    value: false
  },
  reducers: {
    ativar: state => {
      state.value = true;
    },
    desativar: state => {
      state.value = false;
    }
  }
})

// Action creators are generated for each case reducer function
export const { ativar, desativar} = controladorLoading.actions

export default controladorLoading.reducer;