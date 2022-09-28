import { configureStore} from "@reduxjs/toolkit";
import { todosApi } from './apis/todosApi';
import { contadorSlice } from './slices/Contador/contadorSlice';
import { pokemonSlice } from './slices/Pokemon/pokemonSlices';


export const store = configureStore({
  reducer: {
    contador: contadorSlice.reducer,
    pokemons: pokemonSlice.reducer,

    [todosApi.reducerPath]: todosApi.reducer
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todosApi.middleware)
})

// Para nuestro hook personalizado de useSelector
export type RootState = ReturnType<typeof store.getState>

// Para nuetro hook personalizado Dispatch
export type AppDispatch = typeof store.dispatch