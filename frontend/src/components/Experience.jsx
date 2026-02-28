import { Briefcase, Calendar, MapPin, Award } from 'lucide-react';
import { Container, Row, Col } from 'react-bootstrap';

export function Experience() {
  const experiences = [
    {
      role: 'Fullstack Developer Intern',
      company: 'Tech Studio Academy',
      period: '2024 - 2025',
      location: 'Lagos, Nigeria',
      type: 'Internship',
      description: 'Developed full-stack web applications using React, Node.js, and MongoDB. Collaborated with cross-functional teams to deliver scalable solutions. Participated in agile development processes and code reviews.',
      achievements: [
        'Built 5+ production-ready web applications',
        'Improved application performance by 40%',
        'Mentored junior developers on best practices'
      ],
      color: 'blue'
    },
    {
      role: 'Ambassador',
      company: 'ChangeNOW',
      period: '2022',
      location: 'Remote',
      type: 'Community Role',
      description: 'Managed and grew blockchain community across multiple platforms. Coordinated educational initiatives and technical support for crypto exchange users.',
      achievements: [
        'Grew community engagement by 150%',
        'Organized 10+ educational webinars',
        'Provided technical support to 1000+ users'
      ],
      color: 'purple'
    },
    {
      role: 'Community Ambassador',
      company: 'HTMLBunker',
      period: '2021',
      location: 'Remote',
      type: 'Ambassador',
      description: 'Advocated for web development education and best practices. Created technical content and tutorials for aspiring developers. Facilitated learning sessions and coding workshops.',
      achievements: [
        'Published 20+ technical tutorials',
        'Conducted 15+ coding workshops',
        'Mentored 50+ aspiring developers'
      ],
      color: 'cyan'
    }
  ];

  const getBadgeColor = (color) => {
    const colors = {
      blue: 'rgba(59, 130, 246, 0.1)',
      purple: 'rgba(168, 85, 247, 0.1)',
      cyan: 'rgba(6, 182, 212, 0.1)'
    };
    return colors[color] || colors.blue;
  };

  const getBadgeBorder = (color) => {
    const colors = {
      blue: 'rgba(59, 130, 246, 0.3)',
      purple: 'rgba(168, 85, 247, 0.3)',
      cyan: 'rgba(6, 182, 212, 0.3)'
    };
    return colors[color] || colors.blue;
  };

  const getBadgeText = (color) => {
    const colors = {
      blue: '#93c5fd',
      purple: '#d8b4fe',
      cyan: '#67e8f9'
    };
    return colors[color] || colors.blue;
  };

  const getIconColor = (color) => {
    const colors = {
      blue: '#3b82f6',
      purple: '#a855f7',
      cyan: '#06b6d4'
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="experience" className="section-wrapper">
      <Container>
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">
          Professional journey in software development and blockchain communities
        </p>
        <Row>
          <Col lg={10} className="mx-auto">
            {experiences.map((exp, index) => (
              <div key={index} className={`feature-card ${exp.color} mb-4`} style={{ padding: '2rem' }}>
                <Row>
                  <Col lg={12}>
                    <div className="d-flex gap-4">
                      <div 
                        className={`feature-icon ${exp.color}`}
                        style={{ 
                          width: '3.5rem', 
                          height: '3.5rem',
                          flexShrink: 0
                        }}
                      >
                        <Briefcase size={28} />
                      </div>
                      <div className="flex-grow-1">
                        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start mb-3">
                          <div>
                            <h3 style={{ color: 'white', fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                              {exp.role}
                            </h3>
                            <p style={{ color: getIconColor(exp.color), fontSize: '1.125rem', fontWeight: 500, marginBottom: 0 }}>
                              {exp.company}
                            </p>
                          </div>
                          <div 
                            style={{
                              background: getBadgeColor(exp.color),
                              border: `1px solid ${getBadgeBorder(exp.color)}`,
                              color: getBadgeText(exp.color),
                              padding: '0.5rem 1rem',
                              borderRadius: '0.5rem',
                              fontSize: '0.875rem',
                              fontWeight: 500,
                              marginTop: '0.5rem'
                            }}
                          >
                            {exp.type}
                          </div>
                        </div>
                        <div className="d-flex flex-wrap gap-3 mb-3 text-muted-custom" style={{ fontSize: '0.875rem' }}>
                          <div className="d-flex align-items-center gap-2">
                            <Calendar size={16} />
                            {exp.period}
                          </div>
                          <div className="d-flex align-items-center gap-2">
                            <MapPin size={16} />
                            {exp.location}
                          </div>
                        </div>
                        <p className="text-secondary-custom mb-4" style={{ lineHeight: 1.7 }}>
                          {exp.description}
                        </p>
                        <div>
                          <div className="d-flex align-items-center gap-2 mb-3" style={{ color: 'white', fontWeight: 500, fontSize: '0.875rem' }}>
                            <Award size={16} />
                            Key Achievements
                          </div>
                          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {exp.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="d-flex gap-3 mb-2 text-muted-custom" style={{ fontSize: '0.875rem' }}>
                                <span 
                                  style={{
                                    width: '6px',
                                    height: '6px',
                                    borderRadius: '50%',
                                    background: getIconColor(exp.color),
                                    marginTop: '0.5rem',
                                    flexShrink: 0
                                  }}
                                />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
}
