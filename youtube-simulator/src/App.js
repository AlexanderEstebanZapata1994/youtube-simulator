import React, {Fragment} from 'react';
import './App.css';
import "./components/page-style.css";

import Header from "./components/Header"
import MenuLateral from "./components/menu-lateral"
import MainContent from "./components/main-content"

function App() {
  
  //TODO: Programos el menu para mostrar u ocultar parte de la barra lateral
  // const contenedor = document.getElementById('contenedorPrincipal');
 
  // document.getElementById('boton-menu').addEventListener('click', () => {
  //     contenedor.classList.toggle('active');
  // });

  // window.addEventListener('resize', () => {
  //     if (window.innerWidth <= 768) {
  //       contenedor.classList.remove('active');
  //     }else{
  //       contenedor.classList.add('active');
  //     }
  // });
  return (
    <Fragment>
      <body>
        <div className="contenedor active" id="contenedorPrincipal">
          <Header></Header>
          <MenuLateral></MenuLateral>
          <MainContent></MainContent>
        </div>
      </body>
    </Fragment>
  );
}
export default App;