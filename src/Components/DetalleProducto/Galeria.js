import React from 'react';
import Container from  'react-bootstrap/Container'
import Row from  'react-bootstrap/Row'
import Col from  'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

// import i2 from './galeria/i2.jpg'


const Galeria = () =>{
    return(
        <section>
            <Container>
            <h3>Clientes de este producto también vieron</h3><br/>
                <Row>
                    {/* <Col className='img-galeria'>
                    <Image src={i2} />
                    </Col>
                    <Col className='img-galeria'>
                    <Image src={i2} />
                    </Col>
                    <Col className='img-galeria'>
                    <Image src={i2}/>
                    </Col> */}
                    
                </Row>
                <Row>
                    <Col>
                        <h4>Descripción</h4>
                        <p>Praesent quis felis id nulla pharetra tincidunt. Suspendisse dictum ligula semper velit dictum feugiat. Nulla suscipit ligula eget mollis sollicitudin. Ut a tellus eget mi interdum rhoncus. V</p>
                    </Col>
                    <Col>
                        <h4>Detalles de producto</h4>
                        <p>Praesent quis felis id nulla pharetra tincidunt. Suspendisse dictum ligula semper velit dictum feugiat. Nulla suscipit ligula eget mollis sollicitudin. Ut a tellus eget mi interdum rhoncus. V</p>
                    </Col>
                </Row>
                </Container>
        </section>
    )
}
export default Galeria;