import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import sign1 from '../images/sign-hristo-tanev.png';
import sign2 from '../images/portret-hristo-tanev.jpg';




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
                    <img
                        src={sign1}
                        className="logo1 img-size"
                        alt="sign hristo tanev" />
                    <Slide className="slide-shadow">
                        <div className="each-slide">
                            <div className="slide1 img-size" >
                                <span>Slide 1</span>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div className="slide2 img-size" >
                                <span>Slide 2</span>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div className="slide3 img-size" >
                                <span>Slide 3</span>
                            </div>
                        </div>
                    </Slide>
                    <img
                        src={sign2}
                        className="logo2 img-size"
                        alt="hristo tanev" />
                </div>
                <div className="nav-center">

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
