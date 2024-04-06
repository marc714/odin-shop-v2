import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Router from './Router.jsx'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)

// main.jsx use to point to App, but now points to Router