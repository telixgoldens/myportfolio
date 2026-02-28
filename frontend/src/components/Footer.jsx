import { Heart, Github, Linkedin, Twitter } from "lucide-react";
import { Container, Row, Col } from "react-bootstrap";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer-custom">
      <Container>
        <Row className="mb-4">
          <Col md={4} className="mb-4 mb-md-0">
            <h3
              className="text-gradient"
              style={{
                fontSize: "1.25rem",
                fontWeight: 700,
                marginBottom: "1rem",
              }}
            >
              Aliyu Aliyu Olalekan
            </h3>
            <p className="text-muted-custom" style={{ fontSize: "0.875rem" }}>
              Frontend Developer & Blockchain Infrastructure Engineer building
              the future of the web.
            </p>
          </Col>
          <Col md={4} className="mb-4 mb-md-0">
            <h4
              style={{
                color: "white",
                fontWeight: 600,
                marginBottom: "1rem",
                fontSize: "1rem",
              }}
            >
              Quick Links
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li style={{ marginBottom: "0.4rem" }}>
                <button
                  onClick={() => scrollToSection("about")}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#9ca3af",
                    fontSize: "0.875rem",
                    cursor: "pointer",
                    padding: 0,
                    transition: "color 0.3s",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = "#fff")}
                  onMouseOut={(e) => (e.currentTarget.style.color = "#9ca3af")}
                >
                  About
                </button>
              </li>
              <li style={{ marginBottom: "0.4rem" }}>
                <button
                  onClick={() => scrollToSection("projects")}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#9ca3af",
                    fontSize: "0.875rem",
                    cursor: "pointer",
                    padding: 0,
                    transition: "color 0.3s",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = "#fff")}
                  onMouseOut={(e) => (e.currentTarget.style.color = "#9ca3af")}
                >
                  Projects
                </button>
              </li>
              <li style={{ marginBottom: "0.4rem" }}>
                <button
                  onClick={() => scrollToSection("experience")}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#9ca3af",
                    fontSize: "0.875rem",
                    cursor: "pointer",
                    padding: 0,
                    transition: "color 0.3s",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = "#fff")}
                  onMouseOut={(e) => (e.currentTarget.style.color = "#9ca3af")}
                >
                  Experience
                </button>
              </li>
              <li style={{ marginBottom: "0.4rem" }}>
                <button
                  onClick={() => scrollToSection("contact")}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#9ca3af",
                    fontSize: "0.875rem",
                    cursor: "pointer",
                    padding: 0,
                    transition: "color 0.3s",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = "#fff")}
                  onMouseOut={(e) => (e.currentTarget.style.color = "#9ca3af")}
                >
                  Contact
                </button>
              </li>
              <li>
              <a
              
                href="https://docs.google.com/document/d/1TyBdI6fMwi39JOLoIK7UOpRC-POJg4fx/edit?usp=drive_link&ouid=112314369873187385590&rtpof=true&sd=true"
                target="_blank"
                rel="noreferrer"
                style={{
                    background: "none",
                    border: "none",
                    color: "#9ca3af",
                    fontSize: "0.875rem",
                    cursor: "pointer",
                    padding: 0,
                    transition: "color 0.3s",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = "#fff")}
                  onMouseOut={(e) => (e.currentTarget.style.color = "#9ca3af")}
              >
                Resume
                </a>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h4
              style={{
                color: "white",
                fontWeight: 600,
                marginBottom: "1rem",
                fontSize: "1rem",
              }}
            >
              Connect
            </h4>
            <div className="d-flex gap-3">
              <a
                href="https://github.com/telixgoldens"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "0.75rem",
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "0.5rem",
                  color: "#9ca3af",
                  textDecoration: "none",
                  display: "inline-flex",
                  transition: "all 0.3s",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = "rgba(59, 130, 246, 0.5)";
                  e.currentTarget.style.background = "rgba(59, 130, 246, 0.1)";
                  e.currentTarget.style.color = "#3b82f6";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor =
                    "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.background =
                    "rgba(255, 255, 255, 0.05)";
                  e.currentTarget.style.color = "#9ca3af";
                }}
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/telixgoldens"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "0.75rem",
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "0.5rem",
                  color: "#9ca3af",
                  textDecoration: "none",
                  display: "inline-flex",
                  transition: "all 0.3s",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = "rgba(59, 130, 246, 0.5)";
                  e.currentTarget.style.background = "rgba(59, 130, 246, 0.1)";
                  e.currentTarget.style.color = "#3b82f6";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor =
                    "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.background =
                    "rgba(255, 255, 255, 0.05)";
                  e.currentTarget.style.color = "#9ca3af";
                }}
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com/telixgoldens"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "0.75rem",
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "0.5rem",
                  color: "#9ca3af",
                  textDecoration: "none",
                  display: "inline-flex",
                  transition: "all 0.3s",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = "rgba(59, 130, 246, 0.5)";
                  e.currentTarget.style.background = "rgba(59, 130, 246, 0.1)";
                  e.currentTarget.style.color = "#3b82f6";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor =
                    "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.background =
                    "rgba(255, 255, 255, 0.05)";
                  e.currentTarget.style.color = "#9ca3af";
                }}
              >
                <Twitter size={20} />
              </a>
            </div>
          </Col>
        </Row>
        <div
          style={{
            paddingTop: "2rem",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <Row>
            <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
              <p
                className="text-muted-custom mb-0"
                style={{ fontSize: "0.875rem" }}
              >
                © {currentYear} Aliyu Aliyu Olalekan. All rights reserved.
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
}
