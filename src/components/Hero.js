// import { useState } from 'react';

import heroLogo from '../assets/logo/techcare_logo.png';
// import heroImg from '../assets/images/techcare_heroimg.jpg';
// import emailImg from '../assets/images/mail-outline.svg';
import '../styles/Hero.css';

export default function Hero() {

    // const [contactBtn, setConstactBtn] = useState('Contato');


    return (
        <section className="hero-section">
            <div className="hero-container">
                <img src={heroLogo} alt="TechCare, tecnologia do carinho" />
                <h1>Ajuda a cuidar</h1>
                <h3>Tecnologia do carinho</h3>
            </div>
            <div className="contact-us">
                <button>Contacto</button>
            </div>
        </section>
    )
}
