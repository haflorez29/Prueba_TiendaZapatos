import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from '../../Pages/App'
import Resultados from '../Resultados/Resultados'
import DetalleProducto from '../DetalleProducto/DetalleProducto'

const Router = () =>(
  <BrowserRouter>
  <Switch>
    <Route exact path='/' component={App}></Route>
    <Route exact path='/Resultados' component={Resultados}></Route>
    <Route exact path='/DetalleProducto' component={DetalleProducto}></Route>
    </Switch>  
  </BrowserRouter>
)

export default Router
