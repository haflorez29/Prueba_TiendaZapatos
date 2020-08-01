import React from 'react';
import Card from 'react-bootstrap/Card'
import Container from  'react-bootstrap/Container'
import Row from  'react-bootstrap/Row'
import Col from  'react-bootstrap/Col'
import avatar1 from './avatar1.jpg'
import image from './image.jpg'
import { Button } from 'react-bootstrap';



const OpinionesClientes = () => {
    return(
        <section>
            <Container>
            <p className='poppins32'>Opiniones de Clientes</p><br/>
            <Row>
                <Col sm={10}>
                    <Row>
                        <Col sm={2}>
                            <Card.Img src={avatar1} className='img-opinion' />
                        </Col>
                        <Col sm={10}>
                            <Card.Title className='poppins22'>Nombre de Producto</Card.Title>
                            <Card.Subtitle className='tinos14' style={{padding:'0px 0px 20px 0px'}}>Resumen de Opinión</Card.Subtitle>
                        </Col>
                    </Row>
                    <Row>
                        <Card.Subtitle className="tinos14">28 de noviembre de 2018</Card.Subtitle><br />
                        <Card.Text className ="tinos14">Fusce ornare, velit ac lobortis interdum, diam ligula condimentum enim, ac euismod tortor augue eu dolor. Etiam commodo molestie felis. Mauris varius nec velit sed tristique. Sed tempor, sapien eu malesuada efficitur, lacus tellus auctor mauris, nec vehicula lacus mi sit amet tortor.
                                   <br /> Suspendisse potenti. Nulla interdum, libero in tempor eleifend, dolor magna fermentum ante, sed lacinia quam urna id tellus. Vivamus ultrices ante elementum mauris euismod ultricies. Morbi non purus sit amet sapien iaculis efficitur. </Card.Text>
                    </Row>
                    <Row>
                        <Button className='buttons poppins18bold'>Marcar como</Button><br />
                        <Card.Text className='tinos14' style={{color:'#78A825'}} >Comentar</Card.Text>
                        <Card.Text className='tinos14' style={{color:'#78A825'}} >Reportar</Card.Text>
                    </Row>
                </Col>
                <Col sm={2}>
                    <Card.Img src={image} />
                
                </Col>

            </Row>
                </Container>
        </section>
    )
}
export default OpinionesClientes;
