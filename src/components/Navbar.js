import React, { Component } from 'react';
import { ReactNavbar } from "react-responsive-animate-navbar";

//import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
//import sign1 from '../images/sign-hristo-tanev.png';
//import sign2 from '../images/portret-hristo-tanev.jpg';
//import Navigation from './Navigation';
import navData from '../data/navData';


export default class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            nav: navData,
        };
    }

    componentDidMount() {

        this.setState({
            nav: navData
        })

    }

    render() {

        return (

            <ReactNavbar
                color="rgb(25, 25, 25)"
                logo="https://svgshare.com/i/KHh.svg"
                menu={[
                    { name: "HOME", to: "/" },
                    { name: "ARTICLES", to: "/articles" },
                    { name: "ABOUT ME", to: "/about" },
                    { name: "CONTACT", to: "/contact" },
                ]}
                menu={[
                    { name: "HOME1", to: "/" },
                    { name: "ARTICLES1", to: "/articles" },
                    { name: "ABOUT ME1", to: "/about" },
                    { name: "CONTACT1", to: "/contact" },
                ]}
                social={[
                    {
                        name: "Linkedin",
                        url: "https://www.linkedin.com/in/nazeh-taha/",
                        icon: ["fab", "linkedin-in"],
                    },
                    {
                        name: "Facebook",
                        url: "https://www.facebook.com/nazeh200/",
                        icon: ["fab", "facebook-f"],
                    },
                    {
                        name: "Instagram",
                        url: "https://www.instagram.com/nazeh_taha/",
                        icon: ["fab", "instagram"],
                    },
                    {
                        name: "Twitter",
                        url: "http://nazehtaha.herokuapp.com/",
                        icon: ["fab", "twitter"],
                    },
                ]}
            />

            // <nav className="navbar-container">
            //     <div className="nav-top">
            //         <Navigation nav={this.state.nav.top} />
            //     </div>
            //     <div className="slide-container">
            //         <img
            //             src={sign1}
            //             className="logo1 img-size"
            //             alt="sign hristo tanev" />
            //         <Slide className="slide-shadow">
            //             <div className="each-slide">
            //                 <div className="slide1 img-size" >
            //                     <span>Slide 1</span>
            //                 </div>
            //             </div>
            //             <div className="each-slide">
            //                 <div className="slide2 img-size" >
            //                     <span>Slide 2</span>
            //                 </div>
            //             </div>
            //             <div className="each-slide">
            //                 <div className="slide3 img-size" >
            //                     <span>Slide 3</span>
            //                 </div>
            //             </div>
            //         </Slide>
            //         <img
            //             src={sign2}
            //             className="logo2 img-size"
            //             alt="hristo tanev" />
            //     </div>
            //     <div className="nav-center">
            //         <Navigation nav={this.state.nav.center} />
            //     </div>
            // </nav>
        )
    }
}
