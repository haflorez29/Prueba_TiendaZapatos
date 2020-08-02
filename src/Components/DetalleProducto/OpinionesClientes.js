import React from 'react';
import Card from 'react-bootstrap/Card'
import Container from  'react-bootstrap/Container'
import Row from  'react-bootstrap/Row'
import Col from  'react-bootstrap/Col'
import avatar1 from './avatar1.jpg'
import image from './image.jpg'
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faStar,
    
  } from "@fortawesome/free-solid-svg-icons";



const OpinionesClientes = () => {
    return(
        <section>
            <Container>
            <p className='poppins32'>Opiniones de Clientes</p><br/>
            <Row className='opiniones'>
                <Col sm={9}>
                    <Row>
                        <Col sm={2}>
                            <Card.Img src={avatar1} className='img-opinion' />
                        </Col>
                        <Col sm={10}>
                            <Card.Title className='poppins22'>Nombre de Producto</Card.Title>
                            <FontAwesomeIcon style={{color:'#22780D'}} icon={faStar} /><FontAwesomeIcon style={{color:'#22780D'}} icon={faStar} /><FontAwesomeIcon style={{color:'#22780D'}} icon={faStar} /><FontAwesomeIcon style={{color:'#22780D'}} icon={faStar} /><FontAwesomeIcon style={{color:'#22780D'}} icon={faStar} />
                            
                            <Card.Subtitle className='tinos14' style={{padding:'10px 0px 20px 0px'}}>Resumen de Opinión</Card.Subtitle>

                        </Col>
                    </Row><br />
                    <Row>
                        <Card.Subtitle className="tinos14">28 de noviembre de 2018</Card.Subtitle><br />
                        <Card.Text className ="tinos14">Fusce ornare, velit ac lobortis interdum, diam ligula condimentum enim, ac euismod tortor augue eu dolor. Etiam commodo molestie felis. Mauris varius nec velit sed tristique. Sed tempor, sapien eu malesuada efficitur, lacus tellus auctor mauris, nec vehicula lacus mi sit amet tortor.
                                   <br /> Suspendisse potenti. Nulla interdum, libero in tempor eleifend, dolor magna fermentum ante, sed lacinia quam urna id tellus. Vivamus ultrices ante elementum mauris euismod ultricies. Morbi non purus sit amet sapien iaculis efficitur. </Card.Text>
                    </Row><br />
                    <Row className="row-btn" sm={4}>
                        <Button className='buttons poppins18bold'>Marcar como</Button><br />
                        <Card.Link href="#" className='tinos14 link-opiniones'>Comentar</Card.Link>
                        <Card.Link href="#" className='tinos14 link-opiniones'>Reportar</Card.Link>
                    </Row>
                </Col>
                <Col sm={3}>
                    <Card.Img src={image} />
                </Col>
            </Row>

            <Row className='opiniones'>
                <Col sm={9}>
                    <Row>
                        <Col sm={2}>
                            <Card.Img src={avatar1} className='img-opinion' />
                        </Col>
                        <Col sm={10}>
                            <Card.Title className='poppins22'>Nombre de Producto</Card.Title>
                            <FontAwesomeIcon style={{color:'#22780D'}} icon={faStar} /><FontAwesomeIcon style={{color:'#22780D'}} icon={faStar} /><FontAwesomeIcon style={{color:'#22780D'}} icon={faStar} /><FontAwesomeIcon style={{color:'#22780D'}} icon={faStar} /><FontAwesomeIcon style={{color:'#22780D'}} icon={faStar} />
                            
                            <Card.Subtitle className='tinos14' style={{padding:'10px 0px 20px 0px'}}>Resumen de Opinión</Card.Subtitle>
                        </Col>
                    </Row><br />
                    <Row>
                        <Card.Subtitle className="tinos14">28 de noviembre de 2018</Card.Subtitle><br />
                        <Card.Text className ="tinos14">Fusce ornare, velit ac lobortis interdum, diam ligula condimentum enim, ac euismod tortor augue eu dolor. Etiam commodo molestie felis. Mauris varius nec velit sed tristique. Sed tempor, sapien eu malesuada efficitur, lacus tellus auctor mauris, nec vehicula lacus mi sit amet tortor.
                                   <br /> Suspendisse potenti. Nulla interdum, libero in tempor eleifend, dolor magna fermentum ante, sed lacinia quam urna id tellus. Vivamus ultrices ante elementum mauris euismod ultricies. Morbi non purus sit amet sapien iaculis efficitur. </Card.Text>
                    </Row><br />
                    <Row className="row-btn" sm={4}>
                        <Button className='buttons poppins18bold'>Marcar como</Button><br />
                        <Card.Link href="#" className='tinos14 link-opiniones'>Comentar</Card.Link>
                        <Card.Link href="#" className='tinos14 link-opiniones'>Reportar</Card.Link>
                    </Row>
                </Col>
                <Col sm={3}>
                    <Card.Img src={image} />
                </Col>
            </Row>
                </Container>
        </section>
    )
}
export default OpinionesClientes;
