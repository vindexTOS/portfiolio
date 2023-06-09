import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { PortfolioContextProvider } from './context/PortfolioContext'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <PortfolioContextProvider>
        <App />
      </PortfolioContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
