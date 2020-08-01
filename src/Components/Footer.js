import React from "react";
import "../Styles/App.css";
import Logo from "../Images/platzitransparente.png"

const Footer = () => {
  return (
    <footer className="bg-light pt-4 sticky-bottom">
      <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-3 mt-md-0 mt-3">
                <img src={Logo} alt="logo"></img>
            </div>
          <div className="col-md-3 mt-md-0 mt-3">
            <h5 className="text-uppercase">Oportunidades</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/">Trabajar en Platzi Zapatos</a>
              </li>
              <li>
                <a href="/">Información corporativa</a>
              </li>
              <li>
                <a href="/">Departamento de prensa</a>
              </li>
            </ul>
          </div>
          <hr className="clearfix w-100 d-md-none pb-3" />
          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">Haz negocio</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/">Vender en Platzi Zapatos</a>
              </li>
              <li>
                <a href="/">Vender en Platzi Handmade</a>
              </li>
              <li>
                <a href="/">Programa de afiliados</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">Programas</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/">Tarjetas de regalo</a>
              </li>
              <li>
                <a href="/">Meses sin interes</a>
              </li>
              <li>
                <a href="/">Ayuda</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright text-center py-3">
        © 2020 Copyright:
        <a href="/">Equipo 1</a>
      </div>
    </footer>
  );
};

export default Footer;
