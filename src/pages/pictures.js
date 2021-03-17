import React, { Component } from 'react';
import Image from '../components/Image';

import pictureData from '../data/picturesData';
export default class pictures extends Component {
    render() {
        return (
            <section className="pictures-container">
                <h1>Картини на Христо Танев</h1>
                <Image data={pictureData} />
            </section>
        )
    }
}
