import React, { Component } from 'react';

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { FaAlignRight } from 'react-icons/fa';
import sign1 from '../images/sign-hristo-tanev.png';
import sign2 from '../images/portret-na-Hristo-Tanev.jpg';
import sign3 from '../images/logo4.jpg';
import Navigation from './Navigation';
import navData from '../data/navData';


export default class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            nav: navData,
            isOpen: false
        };
        this.hangleToggle = this.hangleToggle.bind(this);
    }

    componentDidMount() {
        this.setState({
            nav: navData,
        })

    }

    hangleToggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })

    }
    render() {

        return (
            <nav className="navbar-container">
                <div className="logo-small-screen">
                    <img
                        src={sign1}
                        alt="sign hristo tanev" />
                    <h3> Читалище Христо Танев</h3>

                    <button type="button" className="nav-btn">
                        <FaAlignRight
                            className="nav-icon"
                            onClick={this.hangleToggle} />
                    </button>
                </div>
                <div className="nav-top">
                    <div onClick={this.hangleToggle} className={this.state.isOpen ?
                        "nav-links show-nav" :
                        "nav-links"}>
                        <Navigation
                            nav={this.state.nav.top}
                        />
                    </div>
                </div>
                <div className="slide-container">
                    <div className="outside-border">
                        <img
                            src={sign1}
                            className="logo1 img-size"
                            alt="sign hristo tanev" />
                    </div>
                    <div className="outside-border">
                        <Slide className="slide-shadow">
                            <div className="each-slide">
                                <div className="slide1 img-size" >
                                    {/* <span>Slide 1</span> */}
                                </div>
                            </div>
                            <div className="each-slide">
                                <div className="slide2 img-size" >
                                    {/* <span>Slide 2</span> */}
                                </div>
                            </div>
                            <div className="each-slide">
                                <div className="slide3 img-size" >
                                    {/* <span>Slide 3</span> */}
                                </div>
                            </div>
                        </Slide>

                    </div>
                    <div className="outside-border">
                        <img
                            src={sign2}
                            className="logo2 img-size"
                            alt="hristo tanev" />
                    </div>
                    <div className="outside-border">
                        <img
                            src={sign3}
                            className="logo2 img-size"
                            alt="alba avitohol" />
                    </div>
                </div>
                <div className="nav-center">
                    <div onClick={this.hangleToggle} className={this.state.isOpen ?
                        "nav-links show-nav" :
                        "nav-links"}>
                        <Navigation
                            nav={this.state.nav.center}
                            className="nav-links" />
                    </div>
                </div>
            </nav>
        )
    }
}
