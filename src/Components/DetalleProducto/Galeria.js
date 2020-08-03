import React from 'react';
import Container from  'react-bootstrap/Container'
import {Link} from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'



const Galeria = (imagenes) =>{
    console.log(imagenes)

//   console.log(imagenes)
    
  //poner un random
//   const imagen = imagenes.imagenes.filter((item, index) => index <= 3);
    // console.log(imagen)

    return(
        <section>          
            <Container className='descripcion'>
            <h3 className='poppins32'> Clientes de este producto también vieron</h3><br/>
            <div className="contenedor">
            {imagenes.imagenes.map((it)=>{
                // console.log(imagen)
                return(
                    <Link
                    to={{
                    pathname: '/DetalleProducto',
                    state: { state:it,
                    todo: imagenes.imagenes},
                    }}>
                        <Image src={it.imagen} className="imagenes-galeria" /> 
                    </Link>
                )
                })}
                </div>
            </Container>
        </section>
    )
}

export default Galeria;