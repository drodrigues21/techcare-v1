import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Form from './components/Form';
import Header from './components/Header';
import Modal from './components/Modal';
import Home from './components/Home';
import './styles/App.css';
import TechCare from './components/TechCare';
import OurServices from './components/OurServices';

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
      <Header openModal={openModal} />
      <Routes>
        <Route path="/" element={<Home openModal={openModal} ></Home>} />
        <Route path="/techcare" element={<TechCare />} />
        <Route path="/ourservices" element={<OurServices />} />
      </Routes>
      <Footer />
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
