import React,{useState,useEffect} from 'react';
import Nav from '../Components/Share/Nav'
import Carusel from '../Components/Home/Carusel'
import axios from 'axios'
import '../Styles/App.css';

function App() {
  const [zapatos, setZapatos] = useState([{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}])

  useEffect(() => {
    const getUrl = "https://api-jsonserver-now.vercel.app/db.json";
    axios.get(getUrl).then((res) => {
      // console.log(res.data.zapatos)
      const data = res.data.zapatos;
      if (data !== null) {
        setZapatos(data        );
      }else{
        console.log("");
      }
    });
  },[]);

  console.log(zapatos[2]) 

  return (
    <div className="App container-fluid">
      <Nav></Nav>
      <Carusel></Carusel>
      <div>
      <h3 className="poppins32">Artículos Recomendados</h3>
        {zapatos.map((item) =>{
          return(
            <React.Fragment>
            <img src={item.imagen}alt="name"></img>
            </React.Fragment>
          )
        })}
      
        <h3 className="poppins32">Otros Usuarios Compraron</h3>
        <img src="..." alt="name"></img>
        </div>       
    </div>
  );
}

export default App;
