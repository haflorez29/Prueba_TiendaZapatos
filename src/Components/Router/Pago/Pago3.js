import React, { Component } from "react";
import "../../../Styles/App.css";
import Footer from '../../Footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faCheck
} from "@fortawesome/free-solid-svg-icons";
import { faCreditCard } from "@fortawesome/free-regular-svg-icons";
import Logo from "../../../images/platzitransparente.png";
import { Link } from 'react-router-dom';

class Pago3 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div>
          <img src={Logo} alt="logo"></img>
        </div>
        <div className="d-flex justify-content-center align-items-center mb-3 mt-3">
          <div className="circle">
            <FontAwesomeIcon icon={faCar}></FontAwesomeIcon>
          </div>
          <div className="linea"></div>
          <div className="circle">
            <FontAwesomeIcon icon={faCreditCard}></FontAwesomeIcon>
          </div>
          <div className="linea"></div>
          <div className="circle">
            <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
          </div>
        </div>
        <h1>Revisa tu pedido</h1>
        <div className="d-flex flex-row">
          <div className="col-3">
            <h5>Dirección de envío</h5>
            <p>Texto 14 texto 13, cr 51 #29-09</p>
            <a href="/">Cambiar</a>
          </div>
          <div className="col-3">
            <h5>Método de pago</h5>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam"
            </p>
            <a href="/">Cambiar</a>
          </div>
          <div className="col-3">
            <h5>Tarjeta de promoción</h5>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Texto"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-success"
                type="button"
                id="button-addon2"
              >
                Aplicar
              </button>
            </div>
          </div>
          <div className="col-3 text-center">
          <Link to='/Confirmacion'><button className="btn btn-success" type="button" value="Input">
                Continuar
              </button></Link>
              <p>El pedido en un click no está disponible</p>
            </div>
        </div>
        <div style={{ backgroundColor: "gray"}}>
            <img src="https://amuletos-talismanes.com/wp-content/uploads/2020/03/envio-gratis-png-3.png" className="img_zapatos" alt="envios gratis"></img>
            <h5>Envío gratis en 1 día</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut</p>
            <a href="/">Registrate ahora</a>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Pago3;
