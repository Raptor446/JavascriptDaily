import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Greetings from './Greetings.jsx'

// We are creating a root object by invoking createRoot with an element from our index.html
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Greetings />
  </StrictMode>,
)
