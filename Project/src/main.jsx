import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './Context/UserContext.jsx'
import './styles/style.css'
import './styles/header.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <UserProvider>
    <App />
    </UserProvider>
  </BrowserRouter>
)
