import React, { Component } from "react";
import "../../../Styles/App.css";
import Footer from "../../Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faCheck } from "@fortawesome/free-solid-svg-icons";
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
              <div className="circle_active">
                <FontAwesomeIcon icon={faCreditCard}></FontAwesomeIcon>
              </div>
              <div className="linea"></div>
              <div className="circle_active">
                <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
              </div>
            </div>
          </div>
        </nav>
        <h1 className="mt-5 ml-4">Revisa tu pedido</h1>
        <div className="d-flex flex-row ml-4 mt-3 mb-4">
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
              <input type="text" className="form-control" placeholder="Texto" />
              <button className="btn btn-success">Aplicar</button>
            </div>
          </div>
          <div className="col-3 text-center">
            <Link to="/Confirmacion">
              <button className="btn btn-success" type="button" value="Input">
                Continuar
              </button>
            </Link>
            <p>El pedido en un click no está disponible</p>
          </div>
        </div>
        <div className="card mb-3" style={{ maxwidth: "540px" }}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img
                src="https://www.igraherrajes.com/wp-content/uploads/2019/11/envio-gratis-png.png"
                className="img_envios"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Envío gratis en 1 día</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-muted">
                    <a href="/">Registrate ahora</a>
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Pago3;
