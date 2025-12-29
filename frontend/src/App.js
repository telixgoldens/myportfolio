import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './App.css';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import Service from './components/Service';
import menuFont from './assets/menu_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg';

function App() {
   const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="portfolio-container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container">
          <a className="navbar-brand font-weight-bold" href="#">ALIYU.DEV</a>
           <div className='d-lg-none' onClick={handleShow}>
        <img className='menu-img' src={menuFont} alt="menu-font" />
      </div>
            <Offcanvas show={show} onHide={handleClose} responsive="lg w-25">
        <Offcanvas.Header closeButton className='bg-primary'>
          {/* <Offcanvas.Title>Responsive offcanvas</Offcanvas.Title> */}
        </Offcanvas.Header>
        <Offcanvas.Body className='bg-primary text-white'>
        <ul className='my-4 list-unstyled menu-list d-md-block d-lg-none'>
             <a className="nav-link" href="#about">About</a>
            <a className="nav-link" href="#projects">Projects</a>
            <a className="nav-link" href="#contact">Contact</a>
        </ul>
        </Offcanvas.Body>
      </Offcanvas>
          <div className="navbar-nav ms-auto d-none d-lg-flex">
            <a className="nav-link" href="#about">About</a>
            <a className="nav-link" href="#projects">Projects</a>
            <a className="nav-link" href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <Hero />
      <a href="#projects" className="btn btn-primary btn-lg mt-3 d-block text-center container">View My Works</a>

      <section id="about" className="py-5 bg-light container rounded">
            <div className=" col-lg-8 mx-auto">
              <h2>Bridging Chemistry with Code</h2>
              <p>I am a Frontend Developer with a background in <strong>B.Tech Chemistry</strong> from FUT Minna. I specialize in building scalable web solutions using <strong>React, Node.js</strong>, and <strong>Blockchain</strong> technologies.</p>
            </div>
      </section>

      <section id="projects" className="py-5 ">
          <div className="row g-4 ">
              <ProjectCard />
          </div>
      </section>

      <section id="experience" className="py-5">
        <div className="">
          <Experience />
        </div>
      </section>

      <section id="services" className="py-5 bg-light container rounded">
        <div className="">
          <Service />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;