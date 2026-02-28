import { Code, Server, Wrench, Palette } from 'lucide-react';
import { Container, Row, Col } from 'react-bootstrap';

export function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      color: 'blue',
      skills: [
        'JavaScript ES6+',
        'React',
        'Next.js',
        'Tailwind CSS',
        'TypeScript',
        'HTML5/CSS3',
        'UI/UX Implementation'
      ]
    },
    {
      title: 'Backend Development',
      icon: Server,
      color: 'purple',
      skills: [
        'Node.js',
        'REST APIs',
        'Python (Beginner)',
        'API Integration',
        'Server-side Rendering',
        'Database Design'
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: Wrench,
      color: 'cyan',
      skills: [
        'Git',
        'GitHub',
        'Blockchain Protocols',
        'Casper Network',
        'Web3 Integration',
        'CI/CD',
        'VS Code',
        'Linux/Unix'
      ]
    },
    {
      title: 'Design & Soft Skills',
      icon: Palette,
      color: 'pink',
      skills: [
        'Figma',
        'Responsive Design',
        'Team Collaboration',
        'Problem Solving',
        'Agile Methodology'
      ]
    }
  ];

  return (
    <section id="skills" className="section-wrapper">
      <Container>
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">
          A comprehensive toolkit for building modern web applications
        </p>
        <Row>
          {skillCategories.map((category) => {
            const Icon = category.icon;
            
            return (
              <Col key={category.title} md={6} className="mb-4">
                <div className={`feature-card ${category.color}`} style={{ padding: '2rem' }}>
                  <div className="d-flex align-items-center gap-3 mb-4">
                    <div className={`feature-icon ${category.color}`} style={{ width: '3.5rem', height: '3.5rem' }}>
                      <Icon size={28} />
                    </div>
                    <h3 style={{ color: 'white', fontWeight: 600, fontSize: '1.25rem', margin: 0 }}>
                      {category.title}
                    </h3>
                  </div>
                  <div>
                    {category.skills.map((skill) => (
                      <span key={skill} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
        <div className="text-center mt-4">
          <p className="text-muted-custom" style={{ fontSize: '0.875rem' }}>
            Continuously learning and exploring new technologies to stay at the forefront of web development
          </p>
        </div>
      </Container>
    </section>
  );
}
