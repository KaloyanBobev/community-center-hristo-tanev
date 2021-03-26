import React, { Component } from 'react';

import Image from '../components/Image';

import data from '../data/picturesHristoTanevData';
export default class pictures extends Component {
    render() {
        return (
            <section className="pictures-container">
                <h1>Картини на Христо Танев</h1>
                {/* <img className="img" alt="HristoTanev" src={img} /> */}

                <Image data={data}
                    isShow={true}
                />
            </section>
        )
    }
}
