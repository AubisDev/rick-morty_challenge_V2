import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import PageRoutes from './router/routes'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <PageRoutes />
  </React.StrictMode>
)
