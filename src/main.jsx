import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import AdmCenter from './routes/AdmCenter/AdmCenter.jsx'
import CadFunc from './routes/CadFunc/CadFunc.jsx'
import CadastroVeiculo from './routes/CadastroVeiculo/CadastroVeiculo.jsx'
import Car from './routes/Car/Car.jsx'
import Clientes from './routes/Clientes/Clientes.jsx'
import EditCar from './routes/EditCar/EditCar.jsx'
import EditClient from './routes/EditCliente/EditClient.jsx'
import EditFunc from './routes/EditFunc/EditFunc.jsx'
import Erro from './routes/Erro/Erro.jsx'
import Funcionarios from './routes/Funcionarios/Funcionarios.jsx'
import Home from './routes/Home/Home.jsx'
import Reservas from './routes/Reservas/Reservas.jsx'
import VeiculosRoutes from './routes/Veiculos/Veiculos.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Erro/>,

    children: [
      {path: '/', element: <Home/>},
      {path: '/admcenter', element: <AdmCenter/>},
      {path: '/carros', element: <VeiculosRoutes/>},
      {path: '/car/:id', element: <Car/>},
      {path: '/clientes', element: <Clientes/>},
      {path: '/editcarro/:id', element: <EditCar/>},
      {path: '/cadveiculo', element: <CadastroVeiculo/>},
      {path: '/editcliente/:id', element: <EditClient/>},
      {path: '/funcs', element: <Funcionarios/>},
      {path: '/editfunc/:id', element: <EditFunc/>},
      {path: '/reservas', element: <Reservas/>},
      {path: '/cadfunc', element: <CadFunc/>},
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
