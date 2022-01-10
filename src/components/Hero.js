
import heroImg from '../assets/images/techcare_heroimg.jpg';
import '../styles/Hero.css';

export default function Hero() {
    return (
        <section className="hero-section">
            <div className="container">
                <div className="banner-container">
                    <img src={heroImg} alt="TechCare, tecnologia do carinho" />
                </div>
            </div>
        </section>
    )
}
