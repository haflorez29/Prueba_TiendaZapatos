import React from 'react';
import Container from  'react-bootstrap/Container'
import Row from  'react-bootstrap/Row'
import Col from  'react-bootstrap/Col'


const Descripcion = () => {
    return(
        <section>
            <Container>
            <Row>
                <Col>
                    <h4 className='poppins32'>Descripción</h4>
                    <p>Praesent quis felis id nulla pharetra tincidunt. Suspendisse dictum ligula semper velit dictum feugiat. Nulla suscipit ligula eget mollis sollicitudin. Ut a tellus eget mi interdum rhoncus. V</p>
                </Col>
                <Col>
                    <h4 className='poppins32'>Detalles de producto</h4>
                    <p>Praesent quis felis id nulla pharetra tincidunt. Suspendisse dictum ligula semper velit dictum feugiat. Nulla suscipit ligula eget mollis sollicitudin. Ut a tellus eget mi interdum rhoncus. V</p>
                </Col>
            </Row>
            </Container>
        </section>
    )
}
export default Descripcion;