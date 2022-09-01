// Importação das ferramentas necessárias no react, da página home e do estilo
import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/home'
import './styles/global.css'

// Elementos que serão renderizados no root do HTML
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
)
