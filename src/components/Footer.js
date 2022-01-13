import { Link } from 'react-router-dom';

import logo from '../assets/logo/techcare_logo.png';

import '../styles/Footer.css';
// import SocialMedia from './SocialMedia';

export default function Footer() {
    return (
        <div className='footer-container'>
            <div className="container">
                <div className="footer">
                    <div className="footer--contact-info">
                        <a href="#home" rel="noreferrer"><img src={logo} alt="TechCare, dia a dia" /></a>
                        <p className="phone">T. <a data-content="(61) 99931-1555" href="tel:+5561999311555" rel="noreferrer">(61) 99931-1555</a></p>
                        <p className="email">E. <a data-content="contato@techcare.com.br" href="mailto:contato@techcare.com.br" rel="noreferrer">contato@techcare.com.br</a></p>
                    </div>
                    <div className="footer--media">
                        <div className="social-media">
                            <h4>Nos Siga</h4>
                            <p><a className='youtube' data-content="Youtube" href="https://www.youtube.com/channel/UCov5-Zn7DYF6Ln-nwq57_Vg" target="_blank" rel="noreferrer">Youtube</a></p>
                            <p><a className='facebook' data-content="Facebook" href="https://www.facebook.com/tecnologiadocarinho" target="_blank" rel="noreferrer">Facebook</a></p>
                        </div>
                        <div className="terms-and-services">
                            <h4>Termos e Uso </h4>
                            <div className="terms">
                                <p><Link to="/" data-content="Política de Privacidade">Política de Privacidade</Link></p>
                            </div>
                            <div className="terms">
                                <p><Link to="/" data-content="Termo de uso">Termo de uso</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer--copyrights">
                    <p className="copyrights">Copyright © 2019-2022 TECHCARE - A Tecnologia do Carinho. Todos os direitos reservados.</p>
                    <p className="developed">Design and Developed by: <a href="https://github.com/drodrigues21" target="_blank" rel="noreferrer">David Rodrigues</a></p>
                </div>
            </div>
        </div>
    )
}
