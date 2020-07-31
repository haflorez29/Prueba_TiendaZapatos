import React, {useState, useEffect} from 'react';
import Detalle from './Detalle'
import Galeria from './Galeria'

const DetalleProducto = (state) => {
    console.log(state)

    return(
        <div>
            <Detalle />
            <Galeria />
        </div>
    )
}
export default DetalleProducto;