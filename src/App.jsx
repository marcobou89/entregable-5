
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import Pokeinfo from './pages/Pokeinfo'
import ProtectedRoute from './pages/ProtectedRoute'
import { useState } from 'react'
import './pages/Pokeinfo.css'




function App() {

  const [name, setName] = useState()
 

  return (
    <div className='app'>
   
      <Routes>
        <Route path="/" element={<Home setName={setName}/>}/>
        <Route element={<ProtectedRoute name={name}/>}>
        <Route path="/Pokedex" element={<Pokedex name={name} />}/>
        <Route path="/Pokedex/:id" element={<Pokeinfo />}/>
        <Route path="*" element={<h1>Esta pagina no existe</h1>}/>
        </Route>
        
      </Routes>

    </div>
  )
}

export default App
