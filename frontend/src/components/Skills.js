import React from "react";


const Skills = () => (
  <div className="skills-cloud">
    {["JavaScript", "React", "Next.js", "Node.js", "HTML", "CSS"].map(skill => (
      <span key={skill} className="badge bg-dark m-1 p-2">{skill}</span>
    ))}
  </div>
);

export default Skills;