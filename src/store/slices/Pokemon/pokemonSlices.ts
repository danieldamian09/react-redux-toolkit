import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Result } from '../../../interface/pokemon';

interface initialState {
  pokemon: Result[];
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
    savePokemons: (state, action: PayloadAction<Result[]>) => {
      console.log(action.payload);
      // state.pokemon = action.payload;
      // state.isLoading = false;
    }
  }
})

export const { startFetching, savePokemons } = pokemonSlice.actions;