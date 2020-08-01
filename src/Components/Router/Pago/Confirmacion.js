import React, { Component } from "react";
import "../../../Styles/App.css";
import Footer from '../../Footer';
import Logo from '../../../Images/Logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

class Confirmacion extends Component {
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
        </nav>
        <div className="confirmacion">
        <div className="d-flex flex-row justify-content-center align-items-center mt-4">
          <h1>Felicitaciones</h1>
          <div className="circle_active">
            <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
          </div>
          </div>
        <div className="text-center mt-4 mb-3">
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
        </div>
        <div className="d-flex flex-row mt-4">
        <div className="p-3 px-4">
            <h5>Fecha de entrega</h5>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt </p>
            <a href="/">Aprender más</a>
        </div>
        <div className="p-3 px-4">
            <h5>Manejar orden</h5>
            <button
                className="btn btn-success"
                type="button"
                id="button-addon2"
                style={{ width: "-webkit-fill-available"}}
              >
                Ver orden
              </button>
              <a href="/">Ver más detalles</a>
        </div>
        <div className="p-3 px-4">
            <h5>Fecha de embarque</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt</p>
            <h4>Subtotal: $precio</h4>
            <p>2 articulos</p>
        </div>
        </div>
        </div>
       
        <Footer></Footer>
      </div>
    );
  }
}

export default Confirmacion;
