import { configureStore } from "@reduxjs/toolkit";
import { contadorSlice } from './slices/Contador/contadorSlice';
import { pokemonSlice } from './slices/Pokemon/pokemonSlices';


export const store = configureStore({
  reducer: {
    contador: contadorSlice.reducer,
    pokemons: pokemonSlice.reducer
  }
})

// Para nuestro hook personalizado de useSelector
export type RootState = ReturnType<typeof store.getState>

// Para nuetro hook personalizado Dispatch
export type AppDispatch = typeof store.dispatch