import React, { Component } from 'react'

import doc from '../data/zaivlenieMembership.doc';
import rules from '../data/Scan_Ustav.pdf';
import certificate from '../data/Udostoverenie_HristoTanev-2020.pdf';

export default class membership extends Component {
    render() {
        return (
            <section className="paypal-container">
                <h1>Заявление за членство</h1>
                <a href={doc}> линк към заявление</a>
                <h1>Устав на читалище Христо Танев</h1>
                <a href={rules}>линк към устава на читалището</a>
                <h1>Удостоверение за вписване в регистъра на народните читалища</h1>
                <a href={certificate}>линк към удостоверението</a>
            </section>
        )
    }
}
