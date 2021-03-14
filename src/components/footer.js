import React from 'react';
import SocialFollow from './SocialFollow';

export default function footer() {
    let year = new Date().getFullYear();
    let baseYear = "2020";
    return (
        <footer className="footer-container">
            <SocialFollow />
            <p>Всички права запазени. CopyRight © {baseYear} - {year} година</p>
        </footer>
    )
}
