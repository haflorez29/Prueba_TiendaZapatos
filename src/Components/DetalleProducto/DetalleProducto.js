import React, {useState, useEffect} from 'react';
import Detalle from './Detalle'
import Galeria from './Galeria'
import Descripcion from './Descripcion'
import Nabvar from '../Share/Nav'
import OpinionesClientes from './OpinionesClientes'

const DetalleProducto = (state) => {
    console.log(state)

    const info = state.location.state.state
    if(state){
        console.log(info)
    }
    const imagenes = state.location.state.todo
    // console.log(imagenes[0].nombre)
    
    
    
    return(
        <div>
            <Nabvar />
            <Detalle info={info} />
            <Galeria imagenes = {imagenes}/>
            <Descripcion />
            <OpinionesClientes />
            

        </div>
    )
}
export default DetalleProducto;