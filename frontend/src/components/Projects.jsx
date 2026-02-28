import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Aurionimg from "../assets/aurionprotocol-vercel-app.png";
import Trackpadimg from "../assets/trackpad-seven-vercel-app.png";
import Hrimg from "../assets/hr-manager-vercel-app.png";
import Casperimg from "../assets/casper-dao-vercel-app.png";
import Innosonimg from "../assets/innoson-group-puce-vercel-app.png";

export function Projects() {
  const projects = [
    {
      title: 'TrackPad',
      description: 'A comprehensive portfolio management application for tracking cryptocurrency and stock investments with real-time analytics, performance metrics, and automated reporting features.',
      image: Trackpadimg,
      tags: ['React', 'Next.js', 'Tailwind CSS', 'Chart.js', 'REST API' , 'Solidity'],
      github: 'https://github.com/telixgoldens/trackpad',
      demo: 'https://trackpad-seven.vercel.app'
    },
    {
      title: 'HR Management Application',
      description: 'Full-stack human resources management system featuring employee onboarding, attendance tracking, payroll management, and performance review workflows.',
      image: Hrimg,
      tags: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT Auth'],
      github: 'https://github.com/telixgoldens/hr-manager',
      demo: 'https://hr-manager.vercel.app/'
    },
    {
      title: 'Aurion Protocol',
      description: 'A non-custodial credit layer that operates above existing DeFi money markets such as Aave and Compound. Unlike traditional lending protocols that combine liquidity provision with risk management, Aurion separates these functions to unlock superior capital efficiency and cross-protocol credit portability.',
      image: Aurionimg,
      tags: ['React', 'TypeScript', 'Web3.js', 'D3.js', 'Solidity', 'Ether.js', 'Tailwind CSS'],
      github: 'https://github.com/telixgoldens/aurion',
      demo: 'https://aurionprotocol.vercel.app'
    },
    {
      title: 'Innoson Vehicle Web Application',
      description: 'Modern e-commerce platform for Innoson Vehicle Manufacturing, featuring vehicle catalog, specifications comparison, dealer locator, and online booking system.',
      image: Innosonimg,
      tags: ['CSS', 'Stripe', 'HTML', 'JavaScript'],
      github: 'https://github.com/teligoldens/innoson-group',
      demo: 'https://innoson-group-puce.vercel.app/'
    },
    {
      title: 'Casper DAO Governance Modules',
      description: 'Decentralized autonomous organization governance infrastructure built on Casper Network, enabling proposal creation, voting mechanisms, and treasury management for on-chain communities.',
      image: Casperimg,
      tags: ['Rust', 'Casper SDK', 'Smart Contracts', 'Web3', 'JavaScript'],
      github: 'https://github.com/telixgoldens/casper-dao',
      demo: 'https://casper-dao.vercel.app'
    }
  ];

  return (
    <section id="projects" className="section-wrapper">
      <Container>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          A showcase of my work in web development and blockchain infrastructure
        </p>
        <Row>
          {projects.map((project, index) => (
            <Col key={index} md={6} lg={4} className="mb-4">
              <div className="project-card">
                <div className="project-image-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                  />
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="text-muted-custom mb-3" style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>
                    {project.description}
                  </p>
                  <div className="mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="tech-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="d-flex gap-2">
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-fill"
                      style={{
                        background: 'transparent',
                        borderColor: '#374151',
                        color: '#9ca3af',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem'
                      }}
                    >
                      <Github size={16} />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-gradient flex-fill"
                      style={{ padding: '0.375rem 0.75rem' }}
                    >
                      <ExternalLink size={16} style={{ marginRight: '0.5rem' }} />
                      Demo
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <div className="text-center mt-4">
          <a
            href="https://github.com/telixgoldens"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gradient"
            style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
          >
            View all projects on GitHub
            <ArrowUpRight size={16} />
          </a>
        </div>
      </Container>
    </section>
  );
}
