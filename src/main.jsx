import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { SocketProvider } from './context/SocketProvider.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './routes/route.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SocketProvider>
    <RouterProvider router={router} />
    </SocketProvider>
  </React.StrictMode>,
)
