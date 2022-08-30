import React from "react";
import logo from "./img/logo.png"

const Header = () => {
    return (
        <div className="container">
            <ul className="nav d-flex align-items-center">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#"><img src={logo} width="40px" /></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disablede link_header">WhatsApp</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link link_header" href="#">Inicio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link link_header" href="#">Productos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link link_header">Nosotros</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link  link_header">contacto</a>
                </li>
            </ul>
        </div>
    )
}

export default Header;