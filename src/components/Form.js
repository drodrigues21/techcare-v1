
import '../styles/Form.css';

export default function Form() {
    return (
        <div className="form-container">
            <form className="contact-form">
                <div className="form-title">
                    <h2>Entre em contato!</h2>
                    <p>Entraremos em contato entre um ou dois dias por email. Por favor não esquecer de checar a pasta de spam do seu email.</p>
                </div>
                <div className="form-content">
                    <div className="input-container">
                        <p className="input-label">Nome<span> *</span></p>
                        <input className='input-field' name='name' type="text" placeholder='' required />
                    </div>
                    <div className="input-container">
                        <p className="input-label">E-mail<span> *</span></p>
                        <input className='input-field' name='email' type="email" placeholder='' required />
                    </div>
                    <div className="input-container">
                        <p className="input-label">Telefone</p>
                        <input className='input-field' name='phone' type="tel" placeholder='' />
                    </div>
                    <div className="input-container">
                        <p className="input-label">Mensagem<span> *</span></p>
                        <textarea className="input-field messege-area" name="message" placeholder="" required></textarea>
                    </div>
                </div>
                <button className="form-send-btn">Enviar</button>
            </form>
            <p className="required-fields"><span>*</span>Required fields</p>
        </div>
    )
}
