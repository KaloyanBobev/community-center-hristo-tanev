import React, { Component } from 'react'
import Image from '../components/Image';
import Container from '../components/Container';
import data from '../data/founderData';
export default class founder extends Component {
    render() {
        return (
            <section className="container">
                <h1>Founder</h1>
                <Image data={data} />
                <h1>За Христо Танев</h1>
                <Container />
            </section>
        )
    }
}

