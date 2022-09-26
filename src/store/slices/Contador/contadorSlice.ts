import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface contadorState {
  value: number
}

const initialState: contadorState = {
  value: 0
}

export const contadorSlice = createSlice({
  name: "contador",
  initialState,
  reducers: {
    incrementar: (state) => {
      state.value += 1
    },
    decrementar: (state) => {
      state.value -= 1
    },
    incrementarPorValorEspecifico: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    }
  }
})

export const { incrementar, decrementar, incrementarPorValorEspecifico } = contadorSlice.actions

export default contadorSlice