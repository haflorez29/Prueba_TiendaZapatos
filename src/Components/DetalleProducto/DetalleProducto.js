import React, {useState, useEffect} from 'react';
import Detalle from './Detalle'
import Galeria from './Galeria'

const DetalleProducto = (state) => {
    // console.log(state)

    const info = state.location.state.state
    console.log(info)
    
    return(
        <div>
            <Detalle info={info} />
            <Galeria />
        </div>
    )
}
export default DetalleProducto;