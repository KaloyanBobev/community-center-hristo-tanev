import React, { Component } from 'react';

import Image from '../components/Image';
import data from '../data/picturesData';
export default class galleryAvia extends Component {


    render() {

        return (
            <section className="pictures-container">
                <h1>Картини представени в Алба Авитохол</h1>
                <Image
                    data={data}
                    isShow={true} />
            </section>
        )
    }
}
