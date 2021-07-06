import "./Grad.scss";

import React, { Component } from 'react'

export default class Grad extends Component {
    state = {
        showInfo:false
    };
    handleInfo = () => {
        this.setState({
            showInfo: !this.state.showInfo
        });
    };
    render() {
        const{id, grad, img, naziv, opis} = this.props.grad; 
        const{removeTour} = this.props;

        return (
            <article className="grad">
            <div className="img-container">
                <img className="img-grad" src={img} alt="" />
                <span className="close-btn" onClick={()=>{removeTour(id)}}>
                    <i className="fas fa-window-close"/>
                </span>
            </div>
            <div className="tour-info">
                <h3>
                    {grad}
                </h3>
                <h4>
                    {naziv}
                </h4>
                <h5>
                    opis
                    <span onClick={this.handleInfo}>
                        <i className="fas fa-caret-square-down"></i>
                    </span>
                </h5>
                {this.state.showInfo && <p>{opis}</p>}
            </div>
        </article>
        )
    }
}

