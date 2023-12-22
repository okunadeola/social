import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import DashboardContext from './context/Dashboard.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
        <DashboardContext>
            <App />
        </DashboardContext>
    </React.StrictMode>
  </BrowserRouter>
)
