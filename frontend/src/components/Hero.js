import React from 'react';
import { NodeNetworkBackground } from '../motion/FramerReact';
import Skills from './Skills';


const Hero = () => (
  <>
    <div style={{ position: 'relative', width: '100%', height: '300px', overflow: 'hidden', background: '#0a192f' }}>
      <NodeNetworkBackground />
      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', paddingTop: '60px' }}>
        <h1 className="display-3" style={{ color: '#64ffda' }}>Aliyu Aliyu Olalekan</h1>
        <p className="lead" style={{ color: '#fff' }}>Frontend Developer</p>
      </div>
    </div>
    <section id="about" className="py-5 bg-white container rounded">
      <div className="">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="mb-4 font-weight-bold border-bottom pb-2">Technical Summary</h2>
            <p className="lead text-dark">
              I am a <strong>Frontend Developer</strong> with a specialized focus on 
              <strong> Web development </strong>, transitioning from an analytical 
              background in <strong>Chemistry</strong> to building responsive web applications and scalable software.
            </p>
            <p className="text-dark">
              After completing my B.Tech at <strong>FUT Minna</strong>, I honed my 
              engineering skills at <strong>Tech Studio Academy</strong>, becoming 
              proficient in <strong>JavaScript, React, and Node.js</strong>. 
              My professional experience spans from community management for global 
              platforms like <strong>ChangeNow</strong> to developing custom blockchain 
              analytics and portfolio management tools.
            </p>
            <div className="mt-5">
              <h5 className="font-weight-bold">Primary Stack:</h5>
            <Skills />
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Hero;