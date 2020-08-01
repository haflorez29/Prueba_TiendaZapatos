import React from 'react';
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Container from  'react-bootstrap/Container'
import Row from  'react-bootstrap/Row'
import Col from  'react-bootstrap/Col'
import { Button } from 'react-bootstrap';
import detalle_zapato from './detalle_zapato.jpg'
import detalle_zapato2 from './detalle_zapato2.jpg'
import "../../Styles/Detalle.css";

const Detalle = ({info}) =>{
    console.log(info)
    return(
        <section>
            <Card>
                <Card.Body>
                    <Container fluid>
                        <Row>
                            <Col className='column-small poppins22' fluid>
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
                                <Card.Title className='poppins22'>Nombre de Producto</Card.Title>
                                <Card.Subtitle className='tinos14' style={{padding:'0px 0px 20px 0px'}}>Marca</Card.Subtitle>
                                <Card.Text className='tinos14' style={{padding:'0px 0px 20px 0px'}}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus, ante nec egestas malesuada, lacus nulla imperdiet massa, non sodales dolor augue vitae enim. 
                                </Card.Text>
                                <Card.Link href="#" className='tinos14 link-opiniones' >Ver opiniones del cliente</Card.Link>
                                <Card.Text className='poppins18' style={{padding:'0px 0px 20px 0px'}}>$224.000</Card.Text>
                                <Card.Text className='tinos14'>Ver Tallas</Card.Text>
                                <Form.Control as="select">
                                    <option>35</option>
                                    <option>36</option>
                                    <option>37</option>
                                    <option>38</option>
                                    <option>39</option>
                                </Form.Control>
                            </Col>
                            <Col className='column-btn'>
                                <Button className='buttons poppins18bold'>Agregar al carrito</Button><br />
                                <Card.Text className='tinos14' style={{color:'#78A825'}} >Agregar a WishList</Card.Text>
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        </section>
    )
}
export default Detalle;