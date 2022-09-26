import './App.css'
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import { incrementar } from './store/slices/Contador/contadorSlice';

function App() {

  const value = useAppSelector(state => state.contador.value)

  const dispatch = useAppDispatch()
  

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
