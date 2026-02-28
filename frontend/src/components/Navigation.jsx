import { Github, Linkedin, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <Navbar fixed="top" expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand 
          href="#hero" 
          className="navbar-brand-gradient"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('hero');
          }}
        >
          AAO
        </Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link 
              className="nav-link-custom" 
              onClick={() => scrollToSection('about')}
            >
              About
            </Nav.Link>
            <Nav.Link 
              className="nav-link-custom" 
              onClick={() => scrollToSection('skills')}
            >
              Skills
            </Nav.Link>
            <Nav.Link 
              className="nav-link-custom" 
              onClick={() => scrollToSection('projects')}
            >
              Projects
            </Nav.Link>
            <Nav.Link 
              className="nav-link-custom" 
              onClick={() => scrollToSection('experience')}
            >
              Experience
            </Nav.Link>
            <Nav.Link 
              className="nav-link-custom" 
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </Nav.Link>
            
            <div className="d-flex gap-3 ms-lg-3 mt-3 mt-lg-0">
              <a 
                href="https://github.com/telixgoldens" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: '#9ca3af', transition: 'color 0.3s' }}
                onMouseOver={(e) => e.currentTarget.style.color = '#fff'}
                onMouseOut={(e) => e.currentTarget.style.color = '#9ca3af'}
              >
                <Github size={15} />
              </a>
              <a 
                href="https://linkedin.com/in/telixgoldens" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: '#9ca3af', transition: 'color 0.3s' }}
                onMouseOver={(e) => e.currentTarget.style.color = '#fff'}
                onMouseOut={(e) => e.currentTarget.style.color = '#9ca3af'}
              >
                <Linkedin size={15} />
              </a>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
