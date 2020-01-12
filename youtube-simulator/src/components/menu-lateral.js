import React from 'react';

const MenuLateral = () => {

    return ( 
        <nav className="menu-lateral">
            <a href="#" className="active"><i className="fas fa-home"></i>Página Principal</a>
            <a href="#"><i className="fas fa-fire"></i>Tendencias</a>
            <a href="#"><i className="fas fa-star"></i>Suscripciones</a>
            
            <hr></hr>
            <a href="#"><i className="fas fa-folder"></i>HTML y CSS</a>
            <a href="#"><i className="fas fa-folder"></i>Javascript</a>
            <a href="#"><i className="fas fa-folder"></i>React Js</a>

            <hr></hr>
            <a href="#"><i className="fas fa-folder"></i>Paola Jara</a>
            <a href="#"><i className="fas fa-folder"></i>RCN</a>
            <a href="#"><i className="fas fa-folder"></i>Rastacuando</a>

        </nav>
    );
}
 
export default MenuLateral;