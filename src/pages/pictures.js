import React, { Component } from 'react';

// import Image from '../components/Image';

// import pictureData from '../data/picturesData';
import img from '../images/hristo-pictures/Hristo-Tanev-Zakrilnikyt na Obetowanata zemq.jpg';
export default class pictures extends Component {
    render() {
        return (
            <section className="pictures-container">
                <h1>Картини на Христо Танев</h1>
                <img className="img" alt="HristoTanev" src={img} />
            </section>
        )
    }
}
