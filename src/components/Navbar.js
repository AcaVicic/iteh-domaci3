import React from 'react';
import "./Navbar.scss";
import logo from "./images/Grb Srbije.png"
export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={logo} alt="" />
            <ul className="nav-links">
                <li>
                    <a href="/" className="nav-link">Pocetna stranica</a>
                </li>
                <li>
                    <a href="/gradovi" className="nav-link">Gradovi</a>
                </li>
            </ul>
        </nav>
    )
}
