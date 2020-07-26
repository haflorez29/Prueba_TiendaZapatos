import React from 'react'

const Filtro = ({title,o1,o2,o3,o4,o5, style}) =>{
  return(
    <form className={style}>
        <legend>{title}</legend>
        <div className='d-flex flex-column'>
        <label>
            <input type="radio" name={title}  value={o1}/> {o1}
        </label>
        <label>
            <input type="radio" name={title} value={o2}/> {o2}
        </label>
        <label>
            <input type="radio" name={title} value={o3}/> {o3}
        </label>
        <label>
            <input type="radio" name={title} value={o4}/> {o4}
        </label>
        <label>
            <input type="radio" name={title} value={o5}/> {o5}
        </label>
        </div>
    </form>
  )
}

export default Filtro