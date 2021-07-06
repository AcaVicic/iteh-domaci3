import Grad from "./Grad";
import "./Gradovi.scss";
import "./Navbar.scss";
import {podaci} from "./podaci"
import logo from "./images/Grb Srbije.png"


import React, { Component } from 'react'

export default class Gradovi extends Component {
    state={
        gradovi:podaci
    };
    removeTour = id => {
        const {gradovi} = this.state;
        const sortedTours = gradovi.filter(grad => grad.id !== id);
        this.setState({
            gradovi: sortedTours
        });
    };
    render() {
        const {gradovi} = this.state;

        return (
            <>
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
            <div className="gradovi-container">
                <section className="lista-gradova">
                    {gradovi.map(grad =>{
                        return <Grad key = {grad.id} grad = {grad} removeTour = {this.removeTour}/>
                    })}
                </section>
            </div>
            </>
        )
    }
}


