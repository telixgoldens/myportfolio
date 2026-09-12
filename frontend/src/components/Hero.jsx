import { Github, Linkedin, ArrowRight, Mail, Twitter, Sun } from "lucide-react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Myimg from "/myimg.png"


export function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="hero-section hero-gradient-bg">
        <Row className="justify-content-center">
          <Col
            lg={10}
            className=""
            style={{ position: "relative", zIndex: 10 }}
          >
            <div className=" hero-section-main">
                <div>
              <div>
                <div className="">
                  <h1 className="hero-title">Aliyu Aliyu Olalekan</h1>
                </div>
                <div className="mb-4">
                  <p className="hero-subtitle mb-2">Solar PV Installer &</p>
                  <p className="hero-subtitle-gradient">
                    Frontend Developer
                  </p>
                </div>
                <div>
                <p className="hero-description">
                  Hands-on Solar PV Installer with practical experience in solar system installation,{" "}
                  <span className="highlight">Inverter & Battery Setup</span>,{" "}
                  <span className="highlight">Electrical wiring</span>, and{" "}
                  <span className="highlight">Testing & Maintenance</span>. Also a Frontend Developer specialized in building responsive web applications with React, JavaScript, and modern web technologies. Passionate about renewable energy, technology, and creating practical digital solutions that deliver real-world value.
                </p>
                </div>
              </div>
              <div className="d-flex flex-column flex-sm-row  gap-3 mb-5">
                <Button
                  className="btn-gradient"
                  onClick={() => scrollToSection("projects")}
                >
                  View Dev Projects
                  <ArrowRight size={20} />
                </Button>
                <Button
                  className="btn-outline-custom"
                  onClick={() => scrollToSection("contact")}
                >
                  <Mail size={20} />
                  Contact Me
                </Button>
                <Button
                  className="btn-solar-custom"
                  href="/solar"
                >
                  <Sun size={20} />
                 View Solar Portfolio
                </Button>
              </div>
              <div className="mb-5">
                <a
                  href="https://github.com/telixgoldens"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-box"
                >
                  <Github size={15} />
                </a>
                <a
                  href="https://linkedin.com/in/telixgoldens"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-box"
                >
                  <Linkedin size={15} />
                </a>
                <a
                  href="https://x.com/telixgoldens"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-box"
                >
                  <Twitter size={15} />
                </a>
              </div>
              </div>
              <div className="mb-4">
                <img
                  src= {Myimg}
                  alt="Aliyu Aliyu Olalekan"
                  className="main-img"
                />
              </div>
            </div>
          </Col>
        </Row>
    </section>
  );
}
