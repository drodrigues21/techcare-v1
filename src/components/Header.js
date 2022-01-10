import Navbar from "./Navbar";

// import logoLight from '../assets/logo/techcare_logo.png';
import butterflyLogo from '../assets/logo/techcare_butterfly_logo.png';
import '../styles/Header.css';


export default function Header() {
    return (
        <div className="header-section">
            <div className="container">
                <div className="header-container">
                    <div className="logo-container">
                        <img src={butterflyLogo} alt="Techcare" />
                    </div>
                    <Navbar />
                </div>
            </div>
        </div>
    )
}
