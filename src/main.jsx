import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './styles/global.css'
import './styles/navbar.css'
import './styles/sidebar.css'
import './styles/card.css'
import "./styles/LatihanCard.css"
import "./styles/ChartCard.css"
import "./styles/HistoryCard.css"
import "./styles/login/login.css"
import "./styles/login/Register.css"
import "./styles/Premium.css"
import "./styles/latihan/HurufHilang.css"
import "./styles/latihan/HurufHilangQuiz.css"

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)