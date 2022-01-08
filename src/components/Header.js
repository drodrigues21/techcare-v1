import { Link } from "react-router-dom";


import Navbar from "./Navbar";

import logoLight from '../assets/logo/techcare_logo.png';
import logoDark from '../assets/logo/techcare_logo_dark.png';
import '../styles/Header.css';


export default function Header() {
    return (
        <>
            <div className="container">
                <div className="header-container">
                    <div className="logo-container">
                        <img src={logoDark} alt="Techcare" />
                    </div>
                    <Navbar />
                </div>
            </div>
        </>
    )
}
