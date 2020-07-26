import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from '../../Pages/App'
import Resultados from '../Resultados/Resultados'

const Router = () =>(
  <BrowserRouter>
  <Switch>
    <Route exact path='/' component={App}></Route>
    <Route exact path='/Resultados' component={Resultados}></Route>
    </Switch>  
  </BrowserRouter>
)

export default Router
