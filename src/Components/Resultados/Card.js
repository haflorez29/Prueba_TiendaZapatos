import React from "react";
import "../../Styles/Card.css";

const Card = () => {
  return (
    <div className="card card-individual mb-3  ">
      <div className="row no-gutters">
        <section className="col-md-2 ">
          <img src="" className="card-img imageShoes" alt="imagen"></img>
        </section>
        <section className="col-md-6 card-body pt-0">
          <h3 className="poppins22 card-title">Nombre del producto</h3>
          <small className="tinos14">marca</small>
          <p className="poppins18 card-text">Precio</p>
          <p className="tinos14 card-text text-justify col-11  p-0">
            Lorem ipsum dolor sit amet consectetur adipisicing orem ipsum dolor
            sit amet consectetur adipisicing orem ipsum dolor sit amet
            consectetur adipisicing orem ipsum dolor sit amet consectetur
            adipisicing
          </p>
        </section>
        <section className="col-md-3 d-flex flex-column align-items-end ">
          <button className="poppins18bold botonAgregar rounded">Agregar al carrito</button>
          <button className="btn btn-link botonWish">Agregar a Wishlist</button>
        </section>
      </div>
    </div>
  );
};

export default Card;
