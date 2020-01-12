import React, {Fragment} from 'react';
import './App.css';
import "./components/page-style.css";

import Header from "./components/Header"
import MenuLateral from "./components/menu-lateral"

function App() {
  
  //Programos el menu para mostrar u ocultar parte de la barra lateral
  // const contenedor = document.querySelector('#contenedorPrincipal');
 
  return (
    <Fragment>
      <body>
        <div className="contenedor active" id="contenedorPrincipal">
          
          <Header></Header>
          <MenuLateral></MenuLateral>
          <main className="main">
            Main content
          </main>
        </div>
      </body>
    </Fragment>
  );
}
export default App;