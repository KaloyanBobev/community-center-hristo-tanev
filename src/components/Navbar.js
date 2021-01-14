import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import sign from '../images/sign-hristo-tanev.png';





export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar-container">
                <div className="nav-top">
                    <Link to="/galleryAvia">Алба Авитохол</Link>
                    <Link to="/galleryAvia">Картини на Христо Танев</Link>
                    <Link to="/galleryAvia">Събития</Link>

                </div>
                <div className="slide-container">
                    <Slide>
                        <div className="each-slide">
                            <div className="slide1 image-size" >
                                <span>Slide 1</span>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div className="slide2" >
                                <span>Slide 2</span>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div className="slide3" >
                                <span>Slide 3</span>
                            </div>
                        </div>
                    </Slide>
                </div>
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

                    <Link to="/library">Библиотека</Link>
                    <Link to="/about">За нас</Link>
                </div>
            </nav>
        )
    }
}
