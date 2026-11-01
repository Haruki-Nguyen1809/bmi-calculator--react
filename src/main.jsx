import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import BMI from './BMI Calculator.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BMI />
  </StrictMode>,
)
