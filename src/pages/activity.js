import React, { Component } from 'react'
import Image from '../components/Image';
import imgData from '../data/imageData';
export default class activity extends Component {
    render() {
        return (
            <section className="activity-container">
                <h1>Фото галерия</h1>
                <Image data={imgData} />
            </section>
        )
    }
}
