import React from "react";


const Service = () => (
  <section id="services" className="py-5 bg-light">
    <div className="container">
      <h2 className="text-center mb-5 font-weight-bold">What I Do</h2>
      <div className="row g-4">
        <div className="col-md-4 ">
          <div className="card h-100 border-0 shadow-sm p-4 text-center bg-primary">
            <div className="mb-3">
              <i className="bi bi-code-slash fs-1 text-primary"></i>
            </div>
            <h4 className="font-weight-bold text-white">Frontend Web Development</h4>
            <p className="text-white">
              Building responsive, scalable web applications using <strong>React, Next.js, and Node.js</strong>. I focus on creating seamless user experiences with high graphic standards.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm p-4 text-center bg-primary">
            <div className="mb-3">
              <i className="bi bi-currency-bitcoin fs-1 text-primary"></i>
            </div>
            <h4 className="font-weight-bold text-white">Blockchain & DeFi Solutions</h4>
            <p className="text-secondary text-white">
              Developing decentralized tools like portfolio managers with <strong>swap functions</strong> and blockchain analytic tools using <strong>Python</strong>.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm p-4 text-center bg-primary">
            <div className="mb-3">
              <i className="bi bi-cpu fs-1 text-primary"></i>
            </div>
            <h4 className="font-weight-bold text-white">Node Infrastructure</h4>
            <p className="text-secondary small text-white">
              Expertise in deploying and maintaining <strong>Validator Nodes</strong> for networks like <strong>Redbelly</strong>, ensuring network health and security.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm p-4 text-center bg-primary">
            <div className="mb-3">
              <i className="bi bi-cpu fs-1 text-primary"></i>
            </div>
             <h4 className="font-weight-bold text-white">Technical Community Management</h4>
          <p className="text-secondary text-white">
            Experienced in managing and promoting blockchain projects for global platforms like ** ChangeNow and HTMLBunker**. I handle technical Q&A and community engagement.
          </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Service;
         