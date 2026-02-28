import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';
import { Container, Row, Col } from 'react-bootstrap';

export function Education() {
  const education = [
    {
      degree: 'Bachelor of Technology in Chemistry',
      institution: 'Federal University of Technology, Minna',
      period: '2011 - 2016',
      location: 'Minna, Niger State, Nigeria',
      description: 'Developed strong analytical and problem-solving skills through rigorous scientific training. Gained expertise in research methodology, data analysis, and systematic experimentation.',
      highlights: [
        'Strong foundation in analytical thinking',
        'Research methodology and data analysis',
        'Scientific problem-solving approach'
      ],
      color: 'blue'
    },
    {
      degree: 'Fullstack JavaScript Development Certification',
      institution: 'Tech Studio Academy',
      period: '2024',
      location: 'Lagos, Nigeria',
      description: 'Intensive bootcamp focusing on modern web development technologies including React, Node.js, MongoDB, and full-stack application development. Completed multiple real-world projects.',
      highlights: [
        'Frontend: React, Next.js, Tailwind CSS',
        'Backend: Node.js, Express, MongoDB',
        'Deployed 5+ production applications'
      ],
      color: 'purple'
    }
  ];

  const getIconColor = (color) => {
    const colors = {
      blue: '#3b82f6',
      purple: '#a855f7'
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="education" className="section-wrapper">
      <Container>
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">
          Academic background combining science and software engineering
        </p>
        <Row>
          {education.map((edu, index) => (
            <Col key={index} lg={6} className="mb-4">
              <div className={`feature-card ${edu.color}`} style={{ padding: '2rem', height: '100%' }}>
                <div 
                  className={`feature-icon ${edu.color}`}
                  style={{ 
                    width: '4rem', 
                    height: '4rem',
                    marginBottom: '1.5rem'
                  }}
                >
                  <GraduationCap size={32} />
                </div>
                <h3 style={{ color: 'white', fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                  {edu.degree}
                </h3>
                <p style={{ color: getIconColor(edu.color), fontSize: '1.125rem', fontWeight: 500, marginBottom: '1rem' }}>
                  {edu.institution}
                </p>
                <div className="d-flex flex-wrap gap-3 mb-3 text-muted-custom" style={{ fontSize: '0.875rem' }}>
                  <div className="d-flex align-items-center gap-2">
                    <Calendar size={16} />
                    {edu.period}
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <BookOpen size={16} />
                    {edu.location}
                  </div>
                </div>
                <p className="text-secondary-custom mb-4" style={{ lineHeight: 1.7 }}>
                  {edu.description}
                </p>
                <div>
                  <div className="d-flex align-items-center gap-2 mb-3" style={{ color: 'white', fontWeight: 500, fontSize: '0.875rem' }}>
                    <Award size={16} />
                    Key Learnings
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {edu.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="d-flex gap-3 mb-2 text-muted-custom" style={{ fontSize: '0.875rem' }}>
                        <span 
                          style={{
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            background: getIconColor(edu.color),
                            marginTop: '0.5rem',
                            flexShrink: 0
                          }}
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <div className="text-center mt-4">
          <div 
            className="glass-card d-inline-block"
            style={{ padding: '1.5rem' }}
          >
            <p className="mb-2" style={{ fontSize: '0.875rem' }}>
              <span style={{ color: 'white', fontWeight: 600 }}>Continuous Learning</span>
            </p>
            <p className="text-muted-custom mb-0" style={{ fontSize: '0.875rem' }}>
              Actively pursuing knowledge in Web3, blockchain protocols, and modern web development technologies
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
