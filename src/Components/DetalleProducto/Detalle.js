import React,{useState} from 'react';
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Container from  'react-bootstrap/Container'
import Row from  'react-bootstrap/Row'
import Col from  'react-bootstrap/Col'
import { Button } from 'react-bootstrap';
import "../../Styles/Detalle.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faStar,
    
  } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';


const Detalle = ({info}) =>{


    return(
        <section>
            <Card>
                <Card.Body>
                    <Container fluid>
                        <Row>
                            <Col className='column-small poppins22' fluid>
                                <Card.Img src={ info.imagen } className='img-small' /><br />
                                <Card.Img src={ info.imagen } className='img-small' /><br />
                                <Card.Img src={ info.imagen } className='img-small' /><br />
                                <Card.Img src={ info.imagen } className='img-small' /><br />
                                <Card.Img src={ info.imagen } className='img-small' /><br />
                                <Card.Img src={ info.imagen } className='img-small' />
                            </Col>
                            <Col className='img-borders' >
                                <Card.Img variant="top" src={ info.imagen }  />
                            </Col>
                            <Col className='column-text' fluid>
                            <Card.Title className='poppins22'>{info.nombre}</Card.Title>
                            <Card.Subtitle className='tinos14' style={{padding:'0px 0px 20px 0px'}}>{info.marca}</Card.Subtitle>
                                <Card.Text className='tinos14' style={{padding:'0px 0px 0px 0px'}}>
                                   {info.Descripción}   
                                </Card.Text>
                                <Card.Text className='tinos14' >
                                   Accesorios: {info.accesorios} 
                                </Card.Text>
                                <Card.Text className='tinos14' style={{padding:'0px 0px 10px 0px'}}>
                                   Categoria: {info.categoria} 
                                </Card.Text>
                                <Card.Link href="#" className='tinos14 link-opiniones' >Ver opiniones del cliente</Card.Link>
                                <Card.Text className='poppins18' style={{padding:'20px 0px 0px 0px'}}>{info.descuento} ${info.precio}</Card.Text>
                                <FontAwesomeIcon style={{color:'#22780D'}} icon={faStar} /><FontAwesomeIcon style={{color:'#22780D'}} icon={faStar} /><FontAwesomeIcon style={{color:'#22780D'}} icon={faStar} /><FontAwesomeIcon style={{color:'#22780D'}} icon={faStar} /><FontAwesomeIcon style={{color:'#22780D'}} icon={faStar} />
                                <Card.Text className='tinos14' style={{padding:'20px 0px 0px 0px'}}>Ver Tallas
                                <Form.Control as="select">
                                    <option>35</option>
                                    <option>36</option>
                                    <option>37</option>
                                    <option>38</option>
                                    <option>39</option>
                                </Form.Control>
                                </Card.Text>
                                
                            </Col>
                            <Col className='column-btn'>

                                <Link to={{pathname:"./CarritodeCompra",
                                            state:{state:info}
                                            }}>
                                    <Button className='buttons poppins18bold'
                                    
                                    >Agregar al carrito
                                    </Button><br />
                                    

                                </Link>

                                <Card.Link href="#" className='tinos14 link-opiniones'>Agregar a WishList </Card.Link>
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        </section>
    )
}
export default Detalle;