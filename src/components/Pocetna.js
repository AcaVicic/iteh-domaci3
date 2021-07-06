import React from 'react';
import "./Pocetna.scss"

export default function Pocetna() {
    return (
        <div className="container">
            <h1>Dobrodošli</h1> 
            <h3>
                Predstavljamo vam sajt koji će vam pomoci u odabiru gradova koje bi posetili. Gradovi u Srbiji su bogati raznim znamenitostima.
                Za vise informacija pritisnite dugme ispod.
            </h3>
            <a href="/gradovi" className="btn btn-primary">Gradovi</a>
        </div>
    )
}

