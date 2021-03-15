import React, { Component } from 'react'
import { VscCloudDownload } from 'react-icons/vsc'
import doc from '../data/zaivlenieMembership.doc';
import rules from '../data/Scan_Ustav.pdf';
import certificate from '../data/Udostoverenie_HristoTanev-2020.pdf';
import Image from '../components/Image';
import membershipData from '../data/membershipData';
export default class membership extends Component {
    render() {
        return (
            <section className="memmbership-container container">
                <div>
                    <h1>Заявление за членство</h1>
                    <Image data={membershipData.slice(0, 1)} />
                    <a href={doc}><VscCloudDownload /> линк към заявление </a>
                </div>
                <div>
                    <h1>Устав на читалище Христо Танев</h1>

                    <Image data={membershipData.slice(1, 2)} />
                    <a href={rules}><VscCloudDownload /> линк към устава на читалището</a>
                </div>
                <div>
                    <h1>Удостоверение за вписване в регистъра на народните читалища</h1>

                    <Image data={membershipData.slice(2, 3)} />
                    <a href={certificate}><VscCloudDownload /> линк към удостоверението</a>
                </div>
            </section>
        )
    }
}
