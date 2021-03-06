import React, { Component } from "react";
import "../../../Styles/App.css";
import Navbar from "../../Share/Nav";
import Footer from "../../Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Zapatos1 from "../../../images/img1.png";
import { Link } from "react-router-dom";

// class CarritodeCompra extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//     console.log(props);
//   }

  /* componentDidMount(){
    const ruta = props.location.state.state
    this.setState({ ...this.state, ruta })
    console.log(ruta)
  }*/
  // render() {

  const CarritodeCompra = (state)=>{
    console.log(state)
    const order = state.location.state.todo;
    const pedido = state.location.state.state;
    const pedidoId = Object.keys(pedido);
    const pedidoValue= Object.values(pedido);
    console.log(pedidoValue)

    return (
      <div>
        <Navbar></Navbar>
        <h1>Carrito de Compra</h1>
        <div className="row">
          <div className="col-md-9">
            <div className="row">
              {order.map((key) => {
                return(
                pedidoId.map((item) => {             
                  if (item == key.id) {
                    return (
                      <React.Fragment>
                        <img
                          src={key.imagen}
                          alt="Converse"
                          className="col-sm-11 col-md-6"
                        ></img>
                        <div className="col-md-4 col-sm-12 text-center text-md-left">
                          <h2>{key.nombre}</h2>
                          <p>{key.nombre}</p>
                          <h5>Disponible</h5>
                          <p>{key.Descripción}
                          </p>
                        </div>
                        <div className="col-md-2 col-sm-12 text-center text-md-left">
                          <a href="/" className="col-12">
                            <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                          </a>
                          <p className="col-12">{key.precio}</p>
                          <label className="col-12">
                            {}
                            <select>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                            </select>
                          </label>
                        </div>
                      </React.Fragment>
                    )
                  }
                })
                )
              })
              }
              <div className="text-center vw-100">
                <h3>Subtotal: $479</h3>
                <p>2 articulos</p>
              </div>
            </div>
          </div>
          <div className="m-1 col-md-2 col-sm-12 text-center">
            <p>Subtotal: $464</p>
            <p>2 Articulos</p>
            <Link to="/Pago1">
              <button className="btn btn-success" type="button" value="Input">
                Proceder al pago
              </button>
            </Link>
            <p>El pedido en un click no está disponible</p>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
}

export default CarritodeCompra;
