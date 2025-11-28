import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ListItems from './ListItems'

// We are creating a root object by invoking createRoot with an element from our index.html
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ListItems />
  </StrictMode>,
)
