import React, { Component } from 'react'
import Image from '../components/Image';
import imgData from '../data/imageData';
export default class activity extends Component {
    render() {
        return (
            <section className="picture-body">
                <h1>Фото галерия</h1>
                <div className="pictures-container">
                    <Image
                        data={imgData}

                    />
                </div>
            </section>
        )
    }
}
