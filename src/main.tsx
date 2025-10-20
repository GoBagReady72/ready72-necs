import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
import WireframeShell from './components/WireframeShell'
import PersonaSelect from './components/PersonaSelect'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/wireframe" replace />} />
        <Route path="/wireframe" element={<WireframeShell />} />
        <Route path="/select" element={<PersonaSelect />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
