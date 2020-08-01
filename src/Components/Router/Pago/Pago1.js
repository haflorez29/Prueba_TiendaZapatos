import React, { Component } from "react";
import "../../../Styles/App.css";
import Footer from "../../Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faCheck } from "@fortawesome/free-solid-svg-icons";
import { faCreditCard } from "@fortawesome/free-regular-svg-icons";
<<<<<<< HEAD
import Logo from "../../../Images/platzitransparente.png";
import { Link } from "react-router-dom";
=======
import Logo from "../../../images/platzitransparente.png";
import { Link } from 'react-router-dom';
>>>>>>> master

class Pago1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <nav class="navbar navbar-light bg-light">
          <a className="navbar-brand" href="/">
            <img src={Logo} alt="logo"></img>
          </a>
          <div className="iconos_nav">
          <div className="d-flex align-items-center">
            <div className="circle_active">
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
          </div>
        </nav>
        <div className="d-flex flex-row">
          <div className="col-6 mt-5">
            <div className="mb-3 ml-4">
              <h1>Elige opciones de envío</h1>
              <h4>Envío 1 de 1</h4>
              <p>Envío desde mi casa</p>
              <p>Enviar a: Paola, cr 51 #29-09</p>
              <a href="/">Cambiar dirección</a>
            </div>
            <div className="ml-4">
              <h4>Nombre de producto</h4>
              <p>Marca</p>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
              <a href="/">Eliminar</a>
            </div>
          </div>
          <div className="d-block mt-5 col-3">
            <h4>Elegir velocidad de envío</h4>
            <h5>¡Entrega garantizada!</h5>
            <label>
              <input type="radio" name="envio" /> Envío gratis
            </label>
            <br></br>
            <label>
              <input type="radio" name="envio" /> 2 días
            </label>
            <br></br>
            <label>
              <input type="radio" name="envio" /> 4 días
            </label>
            <br></br>
            <label>
              <input type="radio" name="envio" /> 1 semana
            </label>
          </div>
          <div className="col-3 mt-5">
            <Link to="/Pago2">
              <button className="btn btn-success" type="button" value="Input">
                Continuar
              </button>
            </Link>
            <p>El pedido en un click no está disponible</p>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Pago1;
