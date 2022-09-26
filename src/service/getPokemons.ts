import { Pokemon } from '../interface/pokemon';

export const getPokemons = async ():Promise<Pokemon[]> => {
	const url = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=0`;
	try {
		const response = await fetch(url);
		const results = await response.json();
		return results.results;
	} catch (error) {
		throw new Error('No se encontró el pokemon');
	}
};
