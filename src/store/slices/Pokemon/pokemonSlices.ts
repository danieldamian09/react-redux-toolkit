import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Pokemon } from '../../../interface/pokemon';

interface initialState {
  pokemon: Pokemon[];
  isLoading: boolean;
}

const initialState: initialState = {
  pokemon: [],
  isLoading: false,
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: initialState,
  reducers: {
    startFetching: (state) => {
      state.isLoading = true;
    },
    savePokemons: (state, action: PayloadAction<Pokemon[]>) => {
      // console.log(action.payload);
      state.pokemon = action.payload;
      state.isLoading = false;
    }
  }
})

export const { startFetching, savePokemons } = pokemonSlice.actions;

export type PersonajesAcciones = ReturnType<typeof startFetching | typeof savePokemons>;