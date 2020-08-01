import React from 'react';
import Container from  'react-bootstrap/Container'
import Row from  'react-bootstrap/Row'
import Col from  'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'



const Galeria = ({zapatos}) =>{

    if (zapatos){
        console.log(zapatos)
    }

    return(
        <section>
            {/* {
                zapatos &&
                zapatos.map((item, index) =>(
                <p key={index}>{item.categoria}</p>
                ))
            } */}
            <Container>
            <h3 className='poppins32'>Clientes de este producto también vieron</h3><br/>
                <Row>
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
                    
                </Row>
                
                </Container>
        </section>
    )
}
export default Galeria;