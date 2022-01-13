// import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../styles/Navbar.css';
// import braFlag from '../assets/images/brazil-flag.png';
// import usaFlag from '../assets/images/usa-flag.png';
import SocialMedia from './SocialMedia';

export default function Navbar({ openModal }) {

    // const activePage = window.location.pathname;
    // const [activeLink, setActiveLink] = useState('');

    // useEffect(() => {

    // const navLinks = document.querySelectorAll('.link a');

    // navLinks.forEach((link) => {
    //     // console.log(link)
    //     //     if (activePage === '/' && link.pathname === '/') {
    //     //         link.classList.add('active-link');
    //     //     }
    //     //     if (activePage === '/techcare' && link.pathname === '/techcare') {
    //     //         link.classList.add('active-link');
    //     //     }
    //     //     if (activePage === '/ourservices' && link.pathname === '/ourservices') {
    //     //         link.classList.add('active-link');
    //     //     }
    //     // });

    // }, []);

    const handleToggle = () => {
        document.body.classList.toggle('nav-open');
    }

    const closeMobileNav = () => {
        document.body.classList.remove('nav-open');
    }

    return (
        <nav className='navbar-container'>
            <div onClick={handleToggle} className="menu-toggle">
                <div className="hamburger">
                    <span></span>
                </div>
            </div>
            <ul className="links-container">
                <div className='links'>
                    <li className="link"><Link data-content="principal" onClick={closeMobileNav} to="/">Principal</Link></li>
                    <li className="link"><Link data-content="a techcare" onClick={closeMobileNav} to="/techcare">A TechCare</Link></li>
                    <li className="link"><Link data-content="nossos serviços" onClick={closeMobileNav} to="/ourservices">Nossos Serviços</Link></li>
                    <li className="link"><span data-content="contato" onClick={openModal}>Contato</span></li>
                </div>
                <SocialMedia />
                <div className="languages-container">
                    <div className="language" onClick={closeMobileNav}>
                        <span data-content="por">por</span>
                    </div>
                    <span>/</span>
                    <div className="language" onClick={closeMobileNav}>
                        <span data-content="eng">eng</span>
                    </div>
                    {/* <div className="darkmode">
                        <img src={moon} alt="" />
                    </div> */}
                </div>
            </ul>
        </nav>
    )
}
