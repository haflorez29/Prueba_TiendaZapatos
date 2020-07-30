import React, { Component } from "react";
import "../../../Styles/App.css";
import Footer from '../../Footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faCheck, faMoneyBillWave, faGift } from "@fortawesome/free-solid-svg-icons";
import { faCreditCard } from "@fortawesome/free-regular-svg-icons";
import { faCcVisa, faCcMastercard, faCcPaypal } from "@fortawesome/free-brands-svg-icons";
import Logo from "../../../Images/platzitransparente.png";
import { Link } from 'react-router-dom';

class Pago2 extends Component {
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
        <h1>Tus tarjetas de crédito</h1>
        <h4>Tarjeta de crédito</h4>
        <div className="d-flex flex-row">
            <div className="">
            <label>
            <input type="checkbox" className="m_checkbox" />
            <FontAwesomeIcon
              className="icono"
              icon={faCcVisa}
            ></FontAwesomeIcon>
          </label>
            </div>
            <div className="col-4 input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
              <button
                className="btn btn-success"
                type="button"
                id="button-addon2"
              >
                Button
              </button>
        </div>
        <div className="col-2 text-center">
            <h4>Nombre</h4>
            <p>Daniela Garza</p>
        </div>
        <div className="col-2 text-center">
            <h4>Vencimiento</h4>
            <p>Fecha</p>
        </div>
        <div className="col-3 text-center">
        <Link to='/Pago3'><button className="btn btn-success" type="button" value="Input">
            Continuar
          </button></Link>
          <p>El pedido en un click no está disponible</p>
        </div>
        </div>
        <div className="">
            <h4>Más opciones de pago</h4>
            <h5>Tarjetas de crédito o débito</h5>
            <label>
            <input type="checkbox" className="m_checkbox" />
            <FontAwesomeIcon
              className="icono"
              icon={faCcMastercard}
            ></FontAwesomeIcon>
            </label>
            <br></br>
            <label>
            <input type="checkbox" className="m_checkbox" />
            <FontAwesomeIcon
              className="icono"
              icon={faCcPaypal}
            ></FontAwesomeIcon>
            </label>
            <br></br>
            <label>
            <input type="checkbox" className="m_checkbox" />
            <FontAwesomeIcon
              className="icono"
              icon={faMoneyBillWave}
            ></FontAwesomeIcon>
            </label>
            <br></br>
            <a href="/">Agregar tarjeta</a>
        </div>
        <div className="d-block">
            <h5>Tarjetas de regalo</h5>
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
        <Footer></Footer>
      </div>
    );
  }
}

export default Pago2;
