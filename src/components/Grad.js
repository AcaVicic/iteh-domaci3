import React from 'react';
import "./Grad.scss";

export default function Grad() {
    return (
        <article className="grad">
            <div className="img-container">
                <img className="img-grad" src="https://www.onlycroatia.com/media/cities/124/1518.jpg" alt="" />
                <span className="close-btn">
                    <i className="fas fa-window-close"/>
                </span>
            </div>
            <div className="tour-info">
                <h3>
                    grad
                </h3>
                <h4>
                    razgledanje
                </h4>
                <h5>
                    info
                    <span>
                        <i className="fas fa-caret-square-down"></i>
                    </span>
                </h5>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error tempore illum ipsum exercitationem fugiat libero nam quisquam molestias nobis voluptatum aut repudiandae nesciunt, magni accusamus reiciendis mollitia minima hic ullam.
                </p>
            </div>
        </article>
    )
}
