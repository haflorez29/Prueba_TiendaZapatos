import React from 'react';
import Container from  'react-bootstrap/Container'
import {Link} from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'



const Galeria = (imagenes) =>{
//   console.log(imagenes)
  //poner un random
//  Math.random(index)
    // const max = 22
    // const min = 19
    const imagen = imagenes.imagenes//.filter((item, index) => (min<=index)&(index <= max) );
    // console.log(imagen)
    return(
        <section>
            <Container className='descripcion'>
            <h3 className='poppins32'> Clientes de este producto también vieron</h3><br/>
            {imagen.map((it)=>{
                // console.log(imagen)
                return(
                    <Link
                    to={{
                    pathname: '/DetalleProducto',
                    state: { state:it},
                    }}>
                        <Image src={it.imagen} className="imagenes-galeria" /> 
                    </Link>
                )
                })}
            </Container>
        </section>
    )
}
export default Galeria;