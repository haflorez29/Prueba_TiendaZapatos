import React from "react";
import img1 from "../../images/carusel1.jpg";
import img2 from "../../images/carusel2.png";
import img3 from "../../images/carusel3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleLeft,
  faChevronCircleRight
} from "@fortawesome/free-solid-svg-icons";
import '../../Styles/Carusel.css'

const Carusel = () => {
  return (
    <div
      id="carouselExampleInterval"
      className="carousel slide pt-4"
      data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active" data-interval="10000">
          <img src={img2} className="d-block w-100 imagencarusel" alt="..." />
        </div>
        <div className="carousel-item" data-interval="2000">
          <img src={img1} className="d-block w-100 imagencarusel" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={img3} className="d-block w-100 imagencarusel" alt="..." />
        </div>
      </div>
      <a
        className="carousel-control-prev "
        href="#carouselExampleInterval"
        role="button"
        data-slide="prev"
      >
        <FontAwesomeIcon icon={faChevronCircleLeft} className="contenedor_volver"></FontAwesomeIcon>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleInterval"
        role="button"
        data-slide="next"
      >
       <FontAwesomeIcon icon={faChevronCircleRight} className="contenedor_volver"></FontAwesomeIcon>
      </a>
    </div>
  );
};

export default Carusel;
