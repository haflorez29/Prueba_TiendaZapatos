import React from "react";
import Filtro from "./Filtro";
import Card from "./Card";
import Pagination from "./Pagination"
import Nabvar from '../Share/Nav'
import "../../Styles/Resultados.css";

const Resultados = () => {
  return (
    <div className="container-fluid ">
      <Nabvar></Nabvar>
      <h2 className="text_resultados poppins32 ">23 Resultados</h2>
      <div className="d-flex ">
          <div className="col-md-3  col-lg-2">
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
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <div className="d-flex justify-content-center">
          <Pagination></Pagination>   
          </div>       
        </div>
      </div>
    </div>
  );
};

export default Resultados;
