import React, {useState } from 'react';
import Detalle from './Detalle'
import Galeria from './Galeria'
import Descripcion from './Descripcion'
import Nabvar from '../Share/Nav'
import OpinionesClientes from './OpinionesClientes'

const DetalleProducto = (state) => {
    // console.log(state)

    const info = state.location.state.state    
    // console.log(info)
    const id = info.id
    const imagenes = state.location.state.todo
    // console.log(imagenes[0].nombre)
   

    const [orderState, setOrderState] = useState([])

    const addToOrder = (orden)=>{
        // console.log(orden)        
        let order = {...orderState}
        console.log(order)
         setOrderState(order)                
        if (order[info.id]){
            // console.log(order[info.id])
            order[info.id]=order[info.id]+1;
        } else {
            order[info.id] = 1
        }
    }
    console.log(orderState)  
    
    return(
        <div>
            <Nabvar state={imagenes}/>
            <Detalle  info={info} addToOrder={addToOrder} order={orderState} todo={imagenes}/>
            <Galeria imagenes = {imagenes}/>
            <Descripcion />
            <OpinionesClientes />
        </div>
    )
}

export default DetalleProducto;