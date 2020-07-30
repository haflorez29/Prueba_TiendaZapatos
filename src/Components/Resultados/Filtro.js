import React from 'react'
import "../../Styles/Filtro.css"

const Filtro = ({title,o1,o2,o3,o4,o5, style}) =>{
  return(
    <form className={style}>
        <legend className="poppins18">{title}</legend>
        <div className='d-flex flex-column'>
        <label className="tinos14">
            <input type="radio" name={title}  value={o1} className="radiobutton" id="radiobuton"/> {o1}
        </label>
        <label className="tinos14">
            <input type="radio" name={title} value={o2}/> {o2}
        </label>
        <label className="tinos14">
            <input type="radio" name={title} value={o3}/> {o3}
        </label>
        <label className="tinos14">
            <input type="radio" name={title} value={o4}/> {o4}
        </label>
        <label className="tinos14">
            <input type="radio" name={title} value={o5}/> {o5}
        </label>
        </div>
    </form>
  )
}

export default Filtro