import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Pages/App/App.jsx'
import './index.scss'
import { GlobalProvider } from './Context/GlobalState.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>,
)
