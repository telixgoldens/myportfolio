import React from "react";
import "../App.css";


const defaultProjects = [
  {
    title: "Trackpad",
    desc: "A crypto & stock portfolio management platform with an integrated blockchain swap function.",
    tech: "React, Node.js, Blockchain",
    live: "",
    repo: "https://github.com/telixgoldens/trackpad"
  },
  {
    title: "HR Management App",
    desc: "Fullstack HR solution for onboarding and employee data management.",
    tech: "React, Node.js, MongoDB",
    live: "https://hr-manager.vercel.app/",
    repo: "https://github.com/telixgoldens/hr-manager"
  },
  {
    title: "Sauron Eye",
    desc: "Analytical monitoring tool designed for the Babylon Blockchain.",
    tech: "Python, Blockchain API",
    live: "https://www.saroneye.online/",
    repo: "https://github.com/telixgoldens/sauron-final"
  },
  {
    title: "Innoson Web App",
    desc: "Fully responsive vehicle showcase platform optimized for all screen sizes.",
    tech: "React, CSS, Bootstrap",
    live: "https://innoson-group-puce.vercel.app/",
    repo: "https://github.com/telixgoldens/innoson-group"
  }
];

const ProjectCard = (props) => {
  if (props.title) {
    return (
      <div className="col-md-6">
        <div className="card h-100 shadow-sm project-card">
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.desc}</p>
            <p className="text-muted small"><strong>Tech:</strong> {props.tech}</p>
            <a href={props.link || props.repo} className="btn btn-outline-dark btn-sm">View Code</a>
          </div>
        </div>
      </div>
    );
  }
  return (
    <section id="projects" className="py-5 ">
      <div className="container">
        <h2 className="text-center mb-5 font-weight-bold text-white">Recent Works</h2>
        <div className="row g-4">
          {defaultProjects.map((project, index) => (
            <div key={index} className="col-lg-6">
              <div className="card h-100 shadow-sm project-card border-0">
                <div className="card-body p-4">
                  <h4 className="card-title font-weight-bold">{project.title}</h4>
                  <p className="card-text text-dark">{project.desc}</p>
                  <div className="mb-3">
                    {project.tech.split(',').map(tag => (
                      <span key={tag} className="badge bg-light text-dark border me-1">{tag.trim()}</span>
                    ))}
                  </div>
                  <div className="d-flex gap-2">
                    <a href={project.live} target="_blank" rel="noreferrer" className="btn btn-primary px-4">Live Demo</a>
                    <a href={project.repo} target="_blank" rel="noreferrer" className="btn btn-outline-dark px-4">View Code</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;