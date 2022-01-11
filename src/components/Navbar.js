import { Link } from 'react-router-dom';

import '../styles/Navbar.css';
import braFlag from '../assets/images/brazil-flag.png';
import usaFlag from '../assets/images/usa-flag.png';
// import moon from '../assets/images/moon.svg';
// import sun from '../assets/images/usa-flag.png';

export default function Navbar({ openModal }) {

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
                    <li className="link"><Link onClick={closeMobileNav} to="/">Principal</Link></li>
                    <li className="link"><Link onClick={closeMobileNav} to="/techcare">A TechCare</Link></li>
                    <li className="link"><Link onClick={closeMobileNav} to="/ourservices">Nossos Serviços</Link></li>
                    <li className="link"><Link onClick={openModal} to="#">Contato</Link></li>
                </div>
                <div className="languages">
                    <div className="portugues" onClick={closeMobileNav}>
                        <img src={braFlag} alt="Bandeira Brasileira para portugues" />
                    </div>
                    <div className="english" onClick={closeMobileNav}>
                        <img src={usaFlag} alt="USA flag for english" />
                    </div>
                    {/* <div className="darkmode">
                        <img src={moon} alt="" />
                    </div> */}
                </div>
            </ul>
        </nav>
    )
}
