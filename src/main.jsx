import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import './styles/variables.css'
import './styles/layout.css'
import './styles/atoms.css'
import './styles/molecules.css'
import './styles/organisms.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
