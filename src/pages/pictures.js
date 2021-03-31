import React, { Component } from 'react';

import Image from '../components/Image';

import data from '../data/picturesHristoTanevData';
export default class pictures extends Component {
    render() {
        return (
            <section className="picture-body">
                <h1>Картини на Христо Танев</h1>
                <div className="pictures-container">
                    <Image data={data}
                        isShow={true}
                    />
                </div>
            </section>
        )
    }
}
