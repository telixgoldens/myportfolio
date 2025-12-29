import React from "react";


const Experience = () => (
  <section id="experience" className="py-5 bg-white rounded">
    <div className="container">
      <h2 className="text-center mb-5 font-weight-bold">Professional Journey</h2>
      <div className="timeline">
        <div className="row mb-5">
          <div className="col-md-4 text-md-end border-end border-primary border-4">
            <h5 className="font-weight-bold">2024 – Present</h5>
            <p className="text-muted">Node Operator & Validator</p>
          </div>
          <div className="col-md-8 ps-md-4">
            <h4 className="font-weight-bold text-primary">Redbelly Blockchain & Decentralized Nodes</h4>
            <p>
              Actively contributing to network security and decentralization by running and maintaining 
              validator nodes for the <strong>Redbelly Blockchain</strong>. 
            </p>
            <ul>
              <li>Monitoring node uptime and performance metrics to ensure network stability.</li>
              <li>Managing server environments and ensuring timely software updates for mainnet/testnet protocols.</li>
            </ul>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-4 text-md-end border-end border-secondary border-4">
            <h5 className="font-weight-bold">2024</h5>
            <p className="text-muted">Fullstack Developer Intern</p>
          </div>
          <div className="col-md-8 ps-md-4">
            <h4 className="font-weight-bold">Tech Studio Academy</h4>
            <p>
              Engaged in an intensive fullstack residency focused on modern web engineering.
            </p>
            <ul>
              <li>Collaborated on building complex HR management solutions using <strong>React and Node.js</strong>.</li>
              <li>Mastered agile development workflows and team-based problem solving.</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 text-md-end border-end border-dark border-4">
            <h5 className="font-weight-bold">2018 – 2020</h5>
            <p className="text-muted">Community & Technical Ops</p>
          </div>
          <div className="col-md-8 ps-md-4">
            <h4 className="font-weight-bold">ChangeNow & HTMLBunker</h4>
            <p>
              Led community engagement and technical support initiatives for global blockchain leaders.
            </p>
            <ul>
              <li>Managed technical Q&A for high-traffic Telegram channels and community groups.</li>
              <li>Promoted blockchain adoption and handled administrative duties for decentralized platforms.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;