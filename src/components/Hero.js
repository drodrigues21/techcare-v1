import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import heroLogo from '../assets/logo/techcare_logo.png';
import '../styles/Hero.css';

export default function Hero({ openModal }) {

    function TrackScroll() {

        const [offset, setOffset] = useState(0);

        useEffect(() => {
            const onScroll = () => setOffset(window.pageYOffset);

            // clean up code
            window.removeEventListener('scroll', onScroll);
            window.addEventListener('scroll', onScroll, { passive: true });
            return () => window.removeEventListener('scroll', onScroll);
        }, []);

        useEffect(() => {
            if (offset >= 450) {
                const heroBtn = document.querySelector('.hero-btn');
                heroBtn.classList.add('round-btn');
            } else if (offset < 450) {
                const heroBtn = document.querySelector('.hero-btn');
                heroBtn.classList.remove('round-btn');
            }
        }, [offset]);
    };

    TrackScroll()

    return (
        <section className="hero-section backgound-container">
            <div className="hero-container">
                <img src={heroLogo} alt="TechCare, tecnologia do carinho" />
                <h1>Ajuda a cuidar</h1>
                <h3>Tecnologia do carinho</h3>
            </div>
            <div className="hero-contact-btn">
                <div className="hero-contact-btn-container">
                    <button onClick={openModal} className="hero-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><title>Mail</title><rect x="48" y="96" width="416" height="320" rx="40" ry="40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" /><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M112 160l144 112 144-112" /></svg>
                        <Link to='#'>Contato</Link>
                    </button>
                </div>
            </div>
        </section>
    )
}
