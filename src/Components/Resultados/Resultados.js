import React from "react";
import Filtro from "./Filtro";
import Card from "./Card";
import Pagination from "./Pagination";
import Nabvar from "../Share/Nav";
import "../../Styles/Resultados.css";

const Resultados = (state) => {
  const busca = state.location.state.busca;
  const arreglo = state.location.state.state;
  console.log(state.location.state);

  return (
    <div className="container-fluid ">
      <Nabvar state={arreglo}></Nabvar>
      <h2 className="text_resultados poppins32 ">23 Resultados</h2>
      <div className="d-flex ">
        <div className="col-md-2  col-lg-2">
          <h5 className="filtrar">Filtrar por</h5>
          <Filtro
            title="Acesorios"
            o1="option"
            o2="option"
            o3="option"
            o4="option"
            o5="option"
            style="filtro1"
          ></Filtro>
          <Filtro
            title="Precio"
            o1="option"
            o2="option"
            o3="option"
            o4="option"
            o5="option"
            style="filtro2"
          ></Filtro>
          <Filtro
            title="Material"
            o1="option"
            o2="option"
            o3="option"
            o4="option"
            o5="option"
            style="filtro3"
          ></Filtro>
        </div>
        <div className="card-result">
          {arreglo.map((item) => {
            const nombre = item.nombre.toLowerCase();
            const material = item.material.toLowerCase();
            const genero = item.genero.toLowerCase();
            const categoria = item.categoria.toLowerCase();
            const descuento = item.descuento.toLowerCase();
            const buscar = busca.toLowerCase();
            if (
              nombre === buscar ||
              material === buscar ||
              genero === buscar ||
              categoria === buscar ||
              descuento === busca
            ) {
              return (
                // console.log(item.nombre)
                <React.Fragment>
                  <Card
                    nombre={item.nombre}
                    precio={item.precio}
                    imagen={item.imagen}
                    descripcion={item.Descripción}
                    item={item}
                    imagenes= {arreglo}
                  ></Card>
                </React.Fragment>
              );
            }
          })}
          <div className="d-flex justify-content-center">
            <Pagination></Pagination>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resultados;
