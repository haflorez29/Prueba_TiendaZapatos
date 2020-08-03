import React,{useState,useEffect} from 'react';
import Nav from '../Components/Share/Nav'
import Carusel from '../Components/Home/Carusel'
import axios from 'axios'
import {Link} from 'react-router-dom'
import CarritodeCompra from '../Components/Router/Carrito/CarritodeCompra'
import '../Styles/App.css';
import Footer from '../Components/Footer';


function App() {
  const [zapatos, setZapatos] = useState([{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}])


  useEffect(() => {
    const getUrl = "https://api-jsonserver-now.vercel.app/db.json";
    axios.get(getUrl).then((res) => {
      const data = res.data.zapatos;
      if (data !== null) {
        setZapatos(data);
      }else{
        console.log("");
      }
    });
  },[]);

  
  const b = zapatos.filter((item, index) => index <= 5);
  

  return (
    <div className="App container-fluid">
      <Nav state={zapatos}></Nav>
      <Carusel></Carusel>  
      <div className="pt-4">
      <h3 className="poppins32">Artículos Recomendados</h3>
     
      <div className="contenedor">
        {zapatos.map((item)=>{
          if(item.descuento === "promocion"){
          return(  
            <Link
            to={{
              pathname: '/DetalleProducto',
              state: { state:item,
                        todo:zapatos,
                    },
            }}>          
            <React.Fragment>
                <img src={item.imagen}alt={item.nombre} className="border"></img>           
            </React.Fragment>
            </Link>
          )
        }})
      } 
      </div>    
        <h3 className="poppins32">Otros Usuarios Compraron</h3>
        <div className="contenedor">
        {b.map((item)=>{
          return(
            <Link
            to={{
              pathname: '/DetalleProducto',
              state: { state:item,
                        todo:zapatos},
            }}>
            <img src={item.imagen} alt="name" className="border"></img>
            </Link>
          )
        })}  
        </div>        
        </div>   
        <Footer></Footer>    
    </div>
  );
}

export default App;
