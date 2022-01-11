import { useState, useEffect } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import Hero from './components/Hero';
import Modal from './components/Modal';
import OurServices from './components/OurServices';
import './styles/App.css';

function App() {

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    document.body.classList.add('modal-open');
    setShowModal(true);

    setTimeout(() => {
      const modal = document.querySelector('.modal');
      modal.classList.add('modal-in');
    }, 100);
  }

  const handleClose = () => {
    document.body.classList.remove('modal-open');
    const modal = document.querySelector('.modal');
    modal.classList.add('modal-out');

    setTimeout(() => {
      setShowModal(false);
    }, 350);

  }

  return (
    <div className="App">
      <div className="backgound-container">
        <Header openModal={openModal} />
        <Hero openModal={openModal} />
        <div className="wave-bg">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>
      </div>
      <OurServices />
      {showModal && <Modal>
        <span className='close-modal' onClick={handleClose}>
          <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><title>Close Circle</title><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32" /><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M320 320L192 192M192 320l128-128" /></svg>
        </span>
        <Form />
      </Modal>}
    </div>
  );
}

export default App;
