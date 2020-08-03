import React from "react";
import {Link} from 'react-router-dom'
import "../../Styles/Card.css";

const Card = ({nombre, precio, imagen, descripcion, item}) => {
  const items = item
  return (
    <div className="card card-individual mb-3  ">
      <div className="row no-gutters">
        <section className="col-md-2 ">
          <img src={imagen} className="card-img imageShoes" alt="imagen"></img>
        </section>
        <section className="col-md-6 card-body pt-0">
          <h3 className="poppins22 card-title">{nombre}</h3>
          <small className="tinos14">{nombre}</small>
          <p className="poppins18 card-text">{precio}</p>
          <p className="tinos14 card-text text-justify col-11  p-0">{descripcion}
          </p>
        </section>
        <section className="col-md-3 d-flex flex-column align-items-end ">
          <Link 
          to={{
            pathname: '/CarritodeCompra',
            state:  {state: items }
          }}>
          <button className="poppins18bold botonAgregar rounded">Agregar al carrito</button>
          </Link>
          <button className="btn btn-link botonWish">Agregar a Wishlist</button>
        </section>
      </div>
    </div>
  );
};

export default Card;
