import React, { Component } from 'react';

import Image from '../components/Image';
import data from '../data/picturesData';

export default class galleryAvia extends Component {
    render() {
       return (
            <section className="picture-body">
                <h1>Картини представени в Алба Авитохол</h1>
                <div className="pictures-container">
                    <Image
                        data={data}
                        isShow={true} />
                </div>
            </section>
        )
    }
}
