
import img1 from '../assets/images/servicos-01.jpg';
import img2 from '../assets/images/servicos-02.jpg';
import img3 from '../assets/images/servicos-03.jpg';
import img4 from '../assets/images/servicos-04.jpg';
import '../styles/OurServices.css';

export default function OurServices() {
    return (
        <section className="our-services-section">
            <div className="container">
                <div className="our-services">
                    <div className="our-services-title">
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
        </section>
    )
}
