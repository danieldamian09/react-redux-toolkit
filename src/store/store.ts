import { configureStore } from "@reduxjs/toolkit";
import { contadorSlice } from './slices/Contador/contadorSlice';
import { pokemonSlice } from './slices/Pokemon/pokemonSlices';


export const store = configureStore({
  reducer: {
    contador: contadorSlice.reducer,
    pokemons: pokemonSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>


export type AppDispatch = typeof store.dispatch