import { ThunkAction } from '@reduxjs/toolkit';
import { getPokemons } from '../../service/getPokemons';
import { PersonajesAcciones, savePokemons, startFetching } from '../slices/Pokemon/pokemonSlices';
import { RootState } from '../store';

interface BuscarPokemons extends ThunkAction<void, RootState, unknown, PersonajesAcciones> { }

// Thunk 
export const buscarPokemosn = (): BuscarPokemons => {
  return async (dispatch) => {
    dispatch(startFetching());
    try {
      const pokemons = await getPokemons();
      dispatch(savePokemons(pokemons));
    } catch (error) {
      console.log(error);
    }
  }
}