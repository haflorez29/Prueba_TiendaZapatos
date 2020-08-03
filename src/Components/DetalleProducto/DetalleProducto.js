import React, {useState } from 'react';
import Detalle from './Detalle'
import Galeria from './Galeria'
import Descripcion from './Descripcion'
import Nabvar from '../Share/Nav'
import OpinionesClientes from './OpinionesClientes'

const DetalleProducto = (state) => {
    // console.log(state)

    const info = state.location.state.state
    
    const imagenes = state.location.state.todo
    // console.log(imagenes[0].nombre)

    const [orderState, setOrderState] = useState({})

    const addToOrder = (info)=>{
        
        const order = {...orderState}
       
        if (order[info]){
            console.log(order[info])
            order[info]=order[info]+1;
        } else {
            order[info] = 1
        }

        // order[info] = order[info] + 1 || 1;

        setOrderState({order})
        console.log(order)
    }
    // console.log(addToOrder)
    
    return(
        <div>
            <Nabvar />
            <Detalle  info={info} addToOrder={addToOrder}/>
            <Galeria imagenes = {imagenes}/>
            <Descripcion />
            <OpinionesClientes />
        </div>
    )
}
export default DetalleProducto;