import React, { Component } from 'react'
import img1 from '../images/pictures/Hristo-Tanev-Zakrilnikyt na Obetowanata zemq.jpg';

export default class pictures extends Component {
    render() {
        return (
            <section className="pictures-container">
                <h1>Картини на Христо Танев</h1>
                <div className="image-center">
                    <img src={img1} alt="art" />
                </div>
            </section>
        )
    }
}