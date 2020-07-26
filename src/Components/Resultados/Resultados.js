import React from 'react'
import Filtro from './Filtro'
import '../../Styles/Resultados.css'

const Resultados = () =>{
  return (
    <div>
    <h2 className='text_resultados'>23 Resultados</h2>
    <div >
      <h5 className='filtrar'>Filtrar por</h5>
      <Filtro
    title='Acesorios'
    o1='option'
    o2='option'
    o3='option'
    o4='option'
    o5='option'
    style='filtro1'
    >
    </Filtro>
    <Filtro
    title='Precio'
    o1='option'
    o2='option'
    o3='option'
    o4='option'
    o5='option'
    style='filtro2'
    ></Filtro>
     <Filtro
    title='Material'
    o1='option'
    o2='option'
    o3='option'
    o4='option'
    o5='option'
    style='filtro3'
    ></Filtro></div>
   
    </div>
  )
}

export default Resultados