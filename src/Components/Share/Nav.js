import React, { useState, useEffect } from "react";
import logo from "../../images/Logo.png";
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingBag,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "../../Styles/Nav.css";

const Navbar = (state) => {
  // console.log(state)


  const arreglo = state.state
  // console.log(arreglo)

  const [buscar, setBuscar] = useState("")

    // console.log(buscar)

  return (
    <nav className="navbar navbar-expand-lg navbar-light colornav">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <div className="d-flex flex-column col-12">
        
          <div className="d-flex justify-content-between col-12 p-0">
            <div className="d-flex p-0 col-6">
              <a className="navbar-brand" href="/">
                <img src={logo} Alt="logo"></img>
              </a>
              <form className="form-inline my-2 my-lg-0 ">
                <input
                  className="form-control mr-sm-2  "
                  id="inputbusqueda"
                  type="search"
                  placeholder="Buscar cualquier tipo de zapatos"
                  aria-label="Search"
                  onChange={(event) => {
                    // console.log(event.target.value)
                    setBuscar(event.target.value)
                  }}
                />
                <Link
                 to={{
                  pathname: '/Resultados',
                  state:  {state:arreglo,
                  busca:buscar }
                }}>
                <button className="btn  my-2 my-sm-0 btnbuscar " type="submit"
                 >
                  <div className="contenedorbtn">
                    <FontAwesomeIcon
                      icon={faSearch}
                      className="iconobuscar"
                    ></FontAwesomeIcon>
                  </div>
                </button>
                </Link>
              </form>
            </div>
            <div className="d-flex align-items-center ">
              <button className="btn btncontenenedor m-1">
                <FontAwesomeIcon icon={faShoppingBag} className="btncompras"></FontAwesomeIcon>
              </button>
              <Link to='/CarritodeCompra'>
              <button className="btn btncontenenedor m-1">
                <FontAwesomeIcon icon={faShoppingCart} className="btncompras"></FontAwesomeIcon>
              </button>
              </Link>
              <button className="btn btncontenenedor m-1">
                <FontAwesomeIcon icon={faUser} className="btncompras"></FontAwesomeIcon>
              </button>
            </div>
          </div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link poppins22bold " href="/" id="colorletra">
                Catalogo <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link poppins22 disabled " href="/" id="colorletra">
                Niños <span className="sr-only ">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link poppins22   disabled" id="colorletra" href="/">
                Caballero <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link poppins22  disabled" id="colorletra" href="/">
                Deportivo<span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link poppins22   disabled" id="colorletra" href="/">
                Regalos <span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
