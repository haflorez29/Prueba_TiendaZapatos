import React, {useState, useEffect} from 'react';
import Detalle from './Detalle'
import Galeria from './Galeria'
import Descripcion from './Descripcion'
import Nabvar from '../Share/Nav'
import OpinionesClientes from './OpinionesClientes'

const DetalleProducto = () => {

    const [zapatos, setZapatos] = useState({})

    useEffect(() => {
        
        getZapatos()
    },[])

    const getZapatos = async () => {
        const data = await fetch('https://api-jsonserver-now.vercel.app/db.json')
        const dataZapatos = await data.json()
        setZapatos(zapatos)
        console.log(dataZapatos);
    }
    // console.log(zapatos)

    return(
        <div>
            <Nabvar />
            <Detalle />
            <Galeria zapatos={zapatos}/>
            <Galeria />
            <Descripcion />
            <OpinionesClientes />

        </div>
    )
}
export default DetalleProducto;