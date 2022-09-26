import { configureStore } from "@reduxjs/toolkit";
import { contadorSlice } from './slices/Contador/contadorSlice';


export const store = configureStore({
  reducer: {
    contador: contadorSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>


export type AppDispatch = typeof store.dispatch