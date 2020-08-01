import React, {useState, useEffect} from 'react';
import Detalle from './Detalle'
import Galeria from './Galeria'
import Descripcion from './Descripcion'
import Nabvar from '../Share/Nav'
import OpinionesClientes from './OpinionesClientes'

const DetalleProducto = (state) => {
    // console.log(state)

    const info = state.location.state.state
    console.log(info)
    
    return(
        <div>
            <Detalle info={info} />
            <Galeria />
            <Descripcion />
            <OpinionesClientes />

        </div>
    )
}
export default DetalleProducto;