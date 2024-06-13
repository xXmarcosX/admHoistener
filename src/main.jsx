import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import Erro from './routes/Erro/Erro.jsx'
import Home from './routes/Home/Home.jsx'
import AdmCenter from './routes/AdmCenter/AdmCenter.jsx'
import VeiculosRoutes from './routes/Veiculos/Veiculos.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Erro/>,

    children: [
      {path: '/', element: <Home/>},
      {path: '/admcenter', element: <AdmCenter/>},
      {path: '/carros', element: <VeiculosRoutes/>}

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
