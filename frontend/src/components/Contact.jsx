import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section-wrapper">
      <Container>
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Have a project in mind or want to collaborate? I'd love to hear from you.
        </p>
        <Row>
          <Col lg={5} className="mb-5 mb-lg-0">
            <div>
              <h3 style={{ color: 'white', fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.5rem' }}>
                Let's Connect
              </h3>
              <p className="text-muted-custom mb-5" style={{ lineHeight: 1.7 }}>
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through any of the channels below.
              </p>
            </div>
          </Col>
          <Col lg={7}>
            <div className="glass-card" style={{ padding: '2rem' }}>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-4">
                  <Form.Label className="form-label-custom">Your Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-control-custom"
                  />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label className="form-label-custom">Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-control-custom"
                  />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label className="form-label-custom">Subject</Form.Label>
                  <Form.Control
                    type="text"
                    name="subject"
                    placeholder="Project Collaboration"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="form-control-custom"
                  />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label className="form-label-custom">Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="form-control-custom"
                    style={{ resize: 'none' }}
                  />
                </Form.Group>
                <Button
                  type="submit"
                  className="btn-gradient w-100"
                  style={{ padding: '1rem' }}
                >
                  Send Message
                  <Send size={20} style={{ marginLeft: '0.5rem' }} />
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
