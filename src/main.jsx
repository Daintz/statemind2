import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from './App'
import './index.css'
import Singup from './pages/Singup'
import Singin from './pages/Singin'
import RootLayout from './layouts/RootLayout'
import Error from './pages/Error'

const router = createBrowserRouter(
  createRoutesFromElements((
    <Route path='/' element={<RootLayout />} >
      <Route path='/' element={<App />} />
      <Route path='/singup' element={<Singup />} />
      <Route path='/singin' element={<Singin />} />
      <Route path='*' element={<Error />} />
    </Route>
  ))
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
