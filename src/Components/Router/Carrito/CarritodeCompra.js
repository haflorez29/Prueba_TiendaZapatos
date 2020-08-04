import React, { Component, useState, useEffect } from "react";
import "../../../Styles/App.css";
import Navbar from '../../Share/Nav';
import Footer from '../../Footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Zapatos1 from "../../../images/img1.png";
import { Link } from 'react-router-dom';

class CarritodeCompra extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    console.log(props)

  }

  render() {
    const pedidoArray = []
    const order = this.props.location.state.todo    
    const pedido = this.props.location.state.state
    const pedidoId= Object.keys(pedido)
    // console.log(pedidoId)



    return (
      <div>
        <Navbar></Navbar>
        {pedidoId.map((item)=>{
          console.log(item)
          // console.log(order[item].nombre)
          order.map((key)=>{
            if(item==key.id){
              console.log(key)
            }            
          })     
        })

            // pedidoId.forEach((key)=>{
            //   order.map((item)=>{
            //   if(item.id===key){
            //     console.log(order[item.length])
            //   }
            // })
            // })     
        }
        <h1 className="">Texto 34</h1>
        <div className="d-flex flex-row">
        <img
          src={Zapatos1}
          alt="Converse"
          className=""
        ></img>
        <div className="col-4">
    <h2 className="">Nombre</h2>
        <p>marca</p>
        <h5>Disponible</h5>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip
        </p>
        </div>
        <div className="col-1">
            <p>$precio</p>
        </div>
        <div className="col-1 mr-1">
            <label>
                Cantidad
                <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
            </select>
            </label>
        </div>
        <div>
            <a href="/">
            <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
            </a>
        </div>
        <div className="m-3">
            <p>Subtotal: $464</p>
            <p>2 Articulos</p>
            <Link to='/Pago1'><button className="btn btn-success" type="button" value="Input">
						Proceder al pago
					</button></Link>
            <p>El pedido en un click no está disponible</p>
        </div>
        </div>
        <div className="text-center">
            <h3>Subtotal: $479</h3>
            <p>2 articulos</p>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default CarritodeCompra;
