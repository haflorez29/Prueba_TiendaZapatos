import React from 'react';
import Container from  'react-bootstrap/Container'
import {Link} from 'react-router-dom'
import Image from 'react-bootstrap/Image'



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
                    <img src={it.imagen} alt="name"></img>
                    </Link>
                )
                })}
                </div>
               
               
               
                {/* <Row>
                    <Col >
                    <Image src="https://i.ibb.co/nwXjQzc/converse.jpg" style={{width:'270px', height:'170px', border:'1px solid  #B9B9B9 '}}/>
                    </Col>
                    <Col >
                    <Image src="https://i.ibb.co/nwXjQzc/converse.jpg" style={{width:'270px', height:'170px', border:'1px solid  #B9B9B9 '}}/>
                    </Col>
                    <Col >
                    <Image src="https://i.ibb.co/nwXjQzc/converse.jpg" style={{width:'270px', height:'170px', border:'1px solid   #B9B9B9' }}/>
                    </Col>
                    <Col >
                    <Image src="https://i.ibb.co/nwXjQzc/converse.jpg" style={{width:'270px', height:'170px', border:'1px solid   #B9B9B9' }}/>
                    </Col>
                    
                </Row> */}
                
                </Container>
        </section>
    )
}
export default Galeria;