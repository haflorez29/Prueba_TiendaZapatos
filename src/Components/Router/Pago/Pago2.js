import React, { Component } from "react";
import "../../../Styles/App.css";
import Footer from '../../Footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faCheck, faMoneyBillWave, faGift } from "@fortawesome/free-solid-svg-icons";
import { faCreditCard } from "@fortawesome/free-regular-svg-icons";
import { faCcVisa, faCcMastercard, faCcPaypal, faCcAmex } from "@fortawesome/free-brands-svg-icons";
import Logo from "../../../images/platzitransparente.png";
import { Link } from 'react-router-dom';

class Pago2 extends Component {
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
            <div className="circle">
              <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
            </div>
          </div>
          </div>
        </nav>
        <div className="row">
        <div className="col-md-9">
        <div className="mt-5 ml-3">
        <h1>Tus tarjetas de crédito</h1>
        <h4 className="mt-4">Tarjeta de crédito</h4>
        </div>
        <div className="row ml-2 mt-4">
        <div className="col-12 col-md-4 input-group">
          <label>
            <input type="checkbox" className="m_checkbox" />
            <FontAwesomeIcon
              className="icono"
              icon={faCcVisa}
            ></FontAwesomeIcon>
          </label>
          <input
              type="text"
              className="form-control"
              placeholder="Recipient's username"
            />
              <button
                className="btn btn-success"
                style={{ height: "fit-content" }}
              >
                Button
              </button>
        </div>
        <div className="col-12 col-md-4 text-center">
            <h4>Nombre</h4>
            <p>Daniela Garza</p>
        </div>
        <div className="col-12 col-md-4 text-center">
            <h4>Vencimiento</h4>
            <p>Fecha</p>
        </div>
        
        </div>
        <div className="ml-4 mt-4">
            <h4>Más opciones de pago</h4>
            <h5 className="mt-3">Tarjetas de crédito o débito</h5>
            <div className="row">
            <label>
            <input type="checkbox" className="m_checkbox" />
            <FontAwesomeIcon
              className="icono"
              icon={faCcMastercard}
            ></FontAwesomeIcon>
            </label>
            <label>
            <input type="checkbox" className="m_checkbox" />
            <FontAwesomeIcon
              className="icono"
              icon={faCcAmex}
            ></FontAwesomeIcon>
            </label>
            </div>
            <a href="/">Agregar tarjeta</a>
            <div className="linea_metodos_pago"></div>
            <h5 className="mt-3">Otros métodos de pago</h5>
            <div className="row">
            <label>
            <input type="checkbox" className="m_checkbox" />
            <FontAwesomeIcon
              className="icono"
              icon={faCcPaypal}
            ></FontAwesomeIcon>
            </label>
            <label>
            <input type="checkbox" className="m_checkbox" />
            <FontAwesomeIcon
              className="icono"
              icon={faMoneyBillWave}
            ></FontAwesomeIcon>
            </label>
            </div>
        </div>
        <div className="ml-4 mb-3">
        <div className="linea_metodos_pago"></div>
            <h5 className="mt-3">Tarjetas de regalo</h5>
            <label>
            <input type="checkbox" className="m_checkbox" />
            <FontAwesomeIcon
              className="icono"
              icon={faGift}
            ></FontAwesomeIcon>Si vale promociones
            </label>
            <br></br>
            <a href="/">Agregar tarjeta</a>
        </div>
        </div>
        <div className="col-12 col-md-3 text-center m-auto">
        <Link to='/Pago3'><button className="btn btn-success" type="button" value="Input">
            Continuar
          </button></Link>
          <p>El pedido en un click no está disponible</p>
        </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Pago2;
