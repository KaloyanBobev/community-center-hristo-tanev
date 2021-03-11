import React from 'react';
import SocialFollow from './SocialFollow';

export default function footer() {
    let year = new Date().getFullYear();
    return (
        <footer className="footer-container">
            <SocialFollow />
            <p>Всички права запазени. CopyRight © 2020 - {year} година</p>
        </footer>
    )
}
