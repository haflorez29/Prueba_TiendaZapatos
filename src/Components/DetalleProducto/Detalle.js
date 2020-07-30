import React from 'react';
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Container from  'react-bootstrap/Container'
import Row from  'react-bootstrap/Row'
import Col from  'react-bootstrap/Col'
import { Button } from 'react-bootstrap';
import detalle_zapato from './detalle_zapato.jpg'
import detalle_zapato2 from './detalle_zapato2.jpg'


const Detalle = () =>{
    return(
        <section>
            <Card>
                <Card.Body>
                    <Container fluid>
                        <Row>
                            <Col className='column-small' fluid>
                                <Card.Img src={ detalle_zapato } className='img-small' /><br />
                                <Card.Img src={ detalle_zapato } className='img-small' /><br />
                                <Card.Img src={ detalle_zapato } className='img-small' /><br />
                                <Card.Img src={ detalle_zapato } className='img-small' /><br />
                                <Card.Img src={ detalle_zapato } className='img-small' /><br />
                                <Card.Img src={ detalle_zapato } className='img-small' />
                            </Col>
                            <Col className='img-borders' >
                                <Card.Img variant="top" src={ detalle_zapato2 }  />
                            </Col>
                            <Col className='column-text' fluid>
                                <Card.Title>Nombre de Producto</Card.Title>
                                <Card.Subtitle>Marca</Card.Subtitle>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus, ante nec egestas malesuada, lacus nulla imperdiet massa, non sodales dolor augue vitae enim. 
                                </Card.Text>
                                <Card.Link href="#" style={{color:'#78A825'}}>Ver opiniones del cliente</Card.Link>
                                <Card.Text>$224.000</Card.Text>
                                <Card.Text>Ver Tallas</Card.Text>
                                <Form.Control as="select">
                                    <option>35</option>
                                    <option>36</option>
                                    <option>37</option>
                                    <option>38</option>
                                    <option>39</option>
                                </Form.Control>
                            </Col>
                            <Col className='column-btn'>
                                <Button className='buttons'>Agregar al carrito</Button>
                                <Card.Text>Agregar a WishList</Card.Text>
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        </section>
    )
}
export default Detalle;