import React, { Component } from 'react'
import GoogleMap from '../components/googleMap';

export default class about extends Component {
    render() {
        return (
            <section className="about-container">
                <h1>Контакти: </h1>
                <h3>Aдрес: </h3>
                <h3>Tелефон за контакт: </h3>
                <h3>GSM за контакт: </h3>
                <GoogleMap />
            </section>
        )
    }
}
