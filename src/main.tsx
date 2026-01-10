import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {PexelsApp }from './PexelsApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PexelsApp />
  </StrictMode>,
)
