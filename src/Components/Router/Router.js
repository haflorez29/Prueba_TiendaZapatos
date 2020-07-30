import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from '../../Pages/App'
import CarritodeCompra from './Carrito/CarritodeCompra'
import Pago1 from './Pago/Pago1'
import Pago2 from './Pago/Pago2'
import Pago3 from './Pago/Pago3'
import Confirmacion from './Pago/Confirmacion'

const Router = () =>(
  <BrowserRouter>
  <Switch>
    <Route exact path='/' component={App}></Route>
    <Route path='/CarritodeCompra' component={CarritodeCompra} />
    <Route path='/Pago1' component={Pago1} />
    <Route path='/Pago2' component={Pago2} />
    <Route path='/Pago3' component={Pago3} />
    <Route path='/Confirmacion' component={Confirmacion} />
    </Switch>  
  </BrowserRouter>
)

export default Router
