import React from 'react';
import Nav from '../Components/Share/Nav'
import Carusel from '../Components/Home/Carusel'
import '../Styles/App.css';

function App() {
  return (
    <div className="App container-fluid">
      <Nav></Nav>
      <Carusel></Carusel>
      <div>
        <h3 className="poppins32">Artículos Recomendados</h3>
        <img src="..." alt="name"></img>
        <h3 className="poppins32">Otros Usuarios Compraron</h3>
        <img src="..." alt="name"></img>
        </div>       
    </div>
  );
}

export default App;
