import React,{useState,useEffect} from 'react';
import Nav from '../Components/Share/Nav'
import Carusel from '../Components/Home/Carusel'
import axios from 'axios'
import {Link} from 'react-router-dom'
import '../Styles/App.css';
import Footer from '../Components/Footer';

function App() {
  const [zapatos, setZapatos] = useState([{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}])

  useEffect(() => {
    const getUrl = "https://api-jsonserver-now.vercel.app/db.json";
    axios.get(getUrl).then((res) => {
      // console.log(res.data.zapatos)
      const data = res.data.zapatos;
      if (data !== null) {
        setZapatos(data);
      }else{
        console.log("");
      }
    });
  },[]);

  // console.log(zapatos[2]) 
  const b = zapatos.filter((item, index) => index <= 5);
  // console.log(b)

  return (
    <div className="App container-fluid">
      <Nav state={zapatos}></Nav>
      <Carusel></Carusel>
      <div className="pt-4">
      <h3 className="poppins32">Artículos Recomendados</h3>
        {zapatos.map((item)=>{
          if(item.descuento === "promocion"){
          return(            
            <React.Fragment>
                <img src={item.imagen}alt={item.nombre} className="scroll"></img>           
            </React.Fragment>
          )
        }})
      }     
        <h3 className="poppins32">Otros Usuarios Compraron</h3>
        {b.map((item)=>{
          return(
            <Link
            to={{
              pathname: '/DetalleProducto',
              state: { state:item },
            }}>
            <img src={item.imagen} alt="name"></img>
            </Link>
          )
        })}          
        </div>       
    </div>
  );
}

export default App;
