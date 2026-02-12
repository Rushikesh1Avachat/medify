import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { BookingProvider } from './context/BookingContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BookingProvider>           {/* ← must be here or in App */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </BookingProvider>
  </React.StrictMode>
)