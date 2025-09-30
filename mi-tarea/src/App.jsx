import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Sumadora from './pages/Sumadora'
import NumeroALetras from './pages/NumeroALetras'
import TablaMultiplicar from './pages/TablaMultiplicar'
import Experiencia from './pages/Experiencia'
  

export default function App(){
  return (
    <div classname="app">
      <Nav />
      <main style={{flex:1, padding:20}}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/sumadora" element={<Sumadora/>} />
          <Route path="/numero-a-letras" element={<NumeroALetras/>} />
          <Route path="/tabla-multiplicar" element={<TablaMultiplicar/>} />
          <Route path="/experiencia" element={<Experiencia/>} />
        </Routes>
      </main>
    </div>
  )
}
