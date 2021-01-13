import React, { Component } from 'react'

import { Link } from 'react-router-dom';
import sign from '../images/sign-hristo-tanev.png';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar-container">
                <div className="nav-center">
                    <Link to="/">
                        <img
                            src={sign}
                            className="logo"
                            alt="logo" />
                    </Link>
                    <Link to="/">Начало</Link>
                    <Link to="/membership">Членство</Link>
                    <Link to="/activity">Дейност</Link>
                    <Link to="/galleryAvia">Алба Авитохол</Link>
                    <Link to="/library">Библиотека</Link>
                    <Link to="/about">За нас</Link>
                </div>
            </nav>
        )
    }
}
