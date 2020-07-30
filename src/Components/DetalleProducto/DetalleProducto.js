import React, {useState, useEffect} from 'react';
import Detalle from './Detalle'
import Galeria from './Galeria'

const DetalleProducto = () => {

    const [zapatos, setZapatos] = useState(null)

    useEffect(() => {
        getZapatos()
        
    },[])

    const getZapatos = async () => {
        const data = await fetch('https://heroku-api.vercel.app/db.json')
        const dataZapatos = await data.json()
        setZapatos(dataZapatos)
        console.log(dataZapatos);
    }
    console.log(zapatos)

    return(
        <div>
            <Detalle />
            <Galeria />
        </div>
    )
}
export default DetalleProducto;