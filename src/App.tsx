import './App.css'
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import { incrementar } from './store/slices/Contador/contadorSlice';
import { useEffect } from 'react';
import { buscarPokemosn } from './store/thunk/pokemonThunk';

function App() {

  const value = useAppSelector(state => state.contador.value)
  const pokemons = useAppSelector(state => state.pokemons.pokemons)

  console.log(pokemons)

  const dispatch = useAppDispatch()
  
  useEffect(() => {
    dispatch(buscarPokemosn())
  }, [])
  

  return (
    <div className="App">
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => {dispatch(incrementar())}}>
          count is {value}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
