import React from 'react';
import { Link } from 'react-router-dom';

export default function UnderCondtruction() {


    return (
        <section className="underconstruction-container">
            <h1>Under Construction</h1>
            <h3>Comming Soon</h3>
            <Link to="/" >Return to Home page</Link>
        </section>
    )
}