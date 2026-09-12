import { Code2, Blocks, Database, Sparkles } from "lucide-react";
import { Container, Row, Col } from "react-bootstrap";

export function About() {
  return (
    <section id="about" className="section-wrapper">
      <Container>
        <div>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            A unique blend of scientific thinking and engineering excellence
          </p>
        </div>
        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            <div className="glass-card">
              <p
                className="text-secondary-custom"
                style={{
                  fontSize: "1.125rem",
                  lineHeight: 1.7,
                  marginBottom: "1rem",
                }}
              >
                I'm a{" "}
                <span style={{ color: "#3b82f6", fontWeight: 600 }}>
                  Solar PV Installer
                </span>{" "}
                and{" "}
                <span style={{ color: "#a855f7", fontWeight: 600 }}>
                  Frontend Developer
                </span>{" "}
                with a unique multidisciplinary background that combines
                hands-on renewable energy experience, scientific methodology,
                and modern software development.
              </p>
              <p
                className="text-muted-custom"
                style={{ lineHeight: 1.7, marginBottom: "1rem" }}
              >
                With a degree in{" "}
                <span style={{ color: "#93c5fd" }}>Chemistry</span> from the
                Federal University of Technology, Minna, I bring analytical
                thinking, attention to detail, and systematic problem-solving to
                technical challenges. My practical experience in solar PV
                installation includes solar system installation, inverter and
                battery setup, electrical wiring, testing, maintenance, and
                configuring reliable renewable energy solutions.
              </p>
              <p className="text-muted-custom" style={{ lineHeight: 1.7 }}>
                Alongside my renewable energy experience, I specialize in building{" "}
                <span style={{ color: "#3b82f6" }}>
                  scalable web applications 
                </span>
                using modern technologies such as {" "}
                <span style={{ color: "#a855f7" }}>React and JavaScript.</span>,
                My scientific background and practical technical experience allow me to
                approach problems with both creativity and precision.
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <Row>
              <Col sm={6} className="mb-3">
                <div className="feature-card-about blue">
                  <div className="feature-icon blue">
                    <Code2 size={22} />
                  </div>
                  <h3
                    style={{
                      color: "white",
                      fontWeight: 600,
                      marginBottom: "0.5rem",
                    }}
                  >
                    Frontend Excellence
                  </h3>
                  <p
                    className="text-muted-custom"
                    style={{ fontSize: "0.875rem" }}
                  >
                    Building responsive, performant interfaces with React,
                    Next.js, and modern web technologies
                  </p>
                </div>
              </Col>
              <Col sm={6} className="mb-3">
                <div className="feature-card-about purple">
                  <div className="feature-icon purple">
                    <Blocks size={22} />
                  </div>
                  <h3
                    style={{
                      color: "white",
                      fontWeight: 600,
                      marginBottom: "0.5rem",
                    }}
                  >
                    Blockchain Integration
                  </h3>
                  <p
                    className="text-muted-custom"
                    style={{ fontSize: "0.875rem" }}
                  >
                    Developing tooling and infrastructure for decentralized
                    applications and protocols
                  </p>
                </div>
              </Col>
              <Col sm={6} className="mb-3">
                <div className="feature-card-about cyan">
                  <div className="feature-icon cyan">
                    <Database size={22} />
                  </div>
                  <h3
                    style={{
                      color: "white",
                      fontWeight: 600,
                      marginBottom: "0.5rem",
                    }}
                  >
                    Data Systems
                  </h3>
                  <p
                    className="text-muted-custom"
                    style={{ fontSize: "0.875rem" }}
                  >
                    Engineering robust data pipelines and analytics solutions
                    for complex applications
                  </p>
                </div>
              </Col>
              <Col sm={6} className="mb-3">
                <div className="feature-card-about pink">
                  <div className="feature-icon pink">
                    <Sparkles size={22} />
                  </div>
                  <h3
                    style={{
                      color: "white",
                      fontWeight: 600,
                      marginBottom: "0.5rem",
                    }}
                  >
                    Innovation Mindset
                  </h3>
                  <p
                    className="text-muted-custom"
                    style={{ fontSize: "0.875rem" }}
                  >
                    Combining chemistry background with software to solve
                    problems creatively
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
