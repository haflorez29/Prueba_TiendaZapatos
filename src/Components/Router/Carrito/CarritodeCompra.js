import React, { Component } from "react";
import "../../../Styles/App.css";
import Footer from '../../Footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Zapatos1 from "../../../images/img1.png";
import { Link } from 'react-router-dom';

class CarritodeCompra extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1 className="">Texto 34</h1>
        <div className="d-flex flex-row">
        <img
          src={Zapatos1}
          alt="Converse"
          className="img_zapatos"
        ></img>
        <div className="col-4">
        <h2 className="">Nombre de producto</h2>
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
            <button>
            <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
            </button>
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
