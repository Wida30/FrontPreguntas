import React from 'react';
import "./Navigator.scss";
import { Link } from "react-router-dom";


const Navigator = () => {
  return (
    <nav className='navega'>
        <ul>
            <li>
                <Link to="/"> <img src='./assets/logo3.png' alt='logo'/> </Link>
            </li>
            <li>
                <Link to="/jugar">JUGAR</Link>
            </li>
            <li>
                <Link to="/contact">CONTACTO</Link>
            </li>
            {/* <li>
                <Link to="/admin">ADMIN</Link>
            </li> */}
        </ul>
    </nav>
  )
}

export default Navigator