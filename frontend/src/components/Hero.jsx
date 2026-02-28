import { Github, Linkedin, ArrowRight, Mail, Twitter } from "lucide-react";
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
                  <p className="hero-subtitle mb-2">Frontend Developer &</p>
                  <p className="hero-subtitle-gradient">
                    Blockchain Infrastructure Engineer
                  </p>
                </div>
                <div>
                <p className="hero-description">
                  Specialized in building scalable web applications with{" "}
                  <span className="highlight">React</span>,{" "}
                  <span className="highlight">Next.js</span>, and{" "}
                  <span className="highlight">Node.js</span>. Passionate about
                  blockchain technology and creating seamless user experiences
                  for decentralized applications.
                </p>
                </div>
              </div>
              <div className="d-flex flex-column flex-sm-row  gap-3 mb-5">
                <Button
                  className="btn-gradient"
                  onClick={() => scrollToSection("projects")}
                >
                  View Projects
                  <ArrowRight size={20} />
                </Button>
                <Button
                  className="btn-outline-custom"
                  onClick={() => scrollToSection("contact")}
                >
                  <Mail size={20} />
                  Contact Me
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
                  style={{
                    width: "450px",
                    height: "450px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "4px solid rgba(59, 130, 246, 0.3)",
                    boxShadow: "0 10px 40px rgba(59, 130, 246, 0.2)",
                    marginBottom: "1rem",
                  }}
                />
              </div>
            </div>
          </Col>
        </Row>
    </section>
  );
}
