import Hero from './Hero';
import AppStore from './AppStore';

import img1 from '../assets/images/servicos-01.jpg';
import img2 from '../assets/images/servicos-02.jpg';
import img3 from '../assets/images/servicos-03.jpg';
import img4 from '../assets/images/servicos-04.jpg';
import '../styles/Home.css';

export default function Home({ openModal }) {
    return (
        <>
            <Hero openModal={openModal} />
            <div className="wave-bg">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
            <section className="home--our-services-section">
                <div className="container">
                    <div className="home--our-services">
                        <div className="home--our-services-title">
                            <h2>Nossos Serviços</h2>
                        </div>
                        <div className="card-container card-left">
                            <div className="card-img">
                                <img src={img1} alt="" />
                            </div>
                            <div className="card-info">
                                <h3>Reduz erros na administração de medicamentos</h3>
                                <button>Saiba mais</button>
                            </div>
                        </div>
                        <div className="card-container card-right">
                            <div className="card-img">
                                <img src={img2} alt="" />
                            </div>
                            <div className="card-info">
                                <h3>Diminui os riscos da desidratação</h3>
                                <button>Saiba mais</button>
                            </div>
                        </div>
                        <div className="card-container card-left">
                            <div className="card-img">
                                <img src={img3} alt="" />
                            </div>
                            <div className="card-info">
                                <h3>Organiza e cumprimento da dieta alimentar</h3>
                                <button>Saiba mais</button>
                            </div>
                        </div>
                        <div className="card-container card-right">
                            <div className="card-img">
                                <img src={img4} alt="" />
                            </div>
                            <div className="card-info">
                                <h3>Oferece o melhor horário para o banho</h3>
                                <button>Saiba mais</button>
                            </div>
                        </div>
                    </div>
                </div>
                <AppStore />
            </section>
        </>
    )
}
