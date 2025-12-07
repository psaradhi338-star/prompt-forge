import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// 1. IMPORT ANALYTICS
import { Analytics } from "@vercel/analytics/react"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* 2. ACTIVATE ANALYTICS */}
    <Analytics />
  </React.StrictMode>,
)