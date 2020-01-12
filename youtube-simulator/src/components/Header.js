import React from 'react';

const Header = () => {

    // document.querySelector('#boton-menu').addEventListener('click', () => {

    // });
    return ( 
        <header className="header">
            <div className="contenedor-logo">
                <button className="boton-menu" id="boton-menu"><i className="fas fa-bars"></i></button>
                <a href="#" className="logo"><i className="fas fa-play"></i><span>Alexander</span></a> 
            </div>

            <div className="barra-busqueda">
               <input type="text" placeholder="Buscar"></input> 
               <button type="submit"><i className="fas fa-search"></i></button>
            </div>

            <div className="botones-header">
               <button><i className="fas fa-upload"></i></button>
               <button><i className="fas fa-th"></i></button>
               <button><i className="fas fa-bell"></i></button>
               <a href="#" className = "avatar" alt="Profile-picture"><img src="https://avatars0.githubusercontent.com/u/5877417?s=400&u=36fd2191f2f52fa39467fa07f41d54c255e4a5f4&v=4"></img></a>
            </div>
        </header>
    );
}
 
export default Header;