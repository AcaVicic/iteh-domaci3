import Grad from "./Grad";
import "./Gradovi.scss";
import {podaci} from "./podaci"

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
            <section className="lista-gradova">
                {gradovi.map(grad =>{
                    return <Grad key = {grad.id} grad = {grad} removeTour = {this.removeTour}/>
                })}
            </section>
        )
    }
}


