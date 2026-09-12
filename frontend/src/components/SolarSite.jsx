import {
  ArrowRight,
  BatteryCharging,
  CheckCircle2,
  ChevronRight,
  CircuitBoard,
  ClipboardCheck,
  Download,
  HardHat,
  Home,
  MapPin,
  Menu,
  PanelTop,
  Phone,
  X,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  ShieldCheck,
  Sun,
  Wrench,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import AbujafarmInverter from "../assets/Abujafarm Inverter.jpg";
import Abujafarmpanel from "../assets/Abujafarm panel.jpg";
import Abujafarmpanel2 from "../assets/Abujafarm panel2.jpg";
import Abujafarmpanel3 from "../assets/Abujafarm panel3.jpg";
import OffgridilorinInverter from "../assets/off-grid ilorin setup.jpg";
import OffgridilorinPanel from "../assets/off-grid ilorin panel.jpg";
import OffgridilorinPanel2 from "../assets/off-grid ilorin panel2.jpg";
import Offgridilorin from "../assets/off-grid ilorin working.jpg";
import HybridhomeInverter from "../assets/Hybrid home inverter.jpg";
import HybridhomePanel from "../assets/Hybrid home panel1.jpg";
import HybridhomePanel2 from "../assets/Hybrid home panel2.jpg";
import Hybridhome1Inverter from "../assets/hybridhome inverter.jpg";
import Hybridhome1Panel from "../assets/hybridhome panel.jpg";
import Hybridhome2Inverter from "../assets/hybridhome2 inverter.jpg";
import Hybridhome2Panel from "../assets/hybridhome2 panel.jpg";
import Hybridhome3Panel from "../assets/hybridhome3 panel.jpg";
import ClinichybridInverter from "../assets/clinic hybrid inverter.jpg";
import ClinichybridPanel from "../assets/clinic hybrid panel.jpg";
import "./solar.css";


const projects = [
  {
    title: "Farm Hybrid Solar System",
    location: "Abuja, Nigeria",
    type: "Hybrid",
    capacity: "20kW",
    panels: "22 × 650W",
    inverter: "10kW Hybrid Inverter X2",
    battery: "48kWh Lithium",
    image: Abujafarmpanel,
    gallery: [
      Abujafarmpanel,
      AbujafarmInverter,
      Abujafarmpanel2,
      Abujafarmpanel3,
    ],
    description:
      "A hybrid solar power system installed for a livestock farm supporting poultry, goat and pig operations. The system provides reliable power for farm activities, including the machinery used to grind and mix animal feed, while the battery storage provides backup power when solar generation is unavailable.",
  },

  {
    title: "Off-Grid Backup System",
    location: "Kwara State, Nigeria",
    type: "Off-Grid",
    capacity: "22kW",
    panels: "30 × 650W",
    inverter: "11kW Off-Grid Inverter X2",
    battery: "60kWh Lithium",
    image: OffgridilorinPanel2,
    gallery: [
      OffgridilorinPanel2,
      Offgridilorin,
      OffgridilorinInverter,
      OffgridilorinPanel
    ],
    description:
      "A large off-grid solar installation designed to provide dependable power for a property with no reliance on the utility grid. The system combines high-capacity PV generation with lithium battery storage to support daily electrical loads and maintain power availability during periods of low solar production.",
  },

  {
    title: "Hospital Solar Installation",
    location: "Ilorin, Nigeria",
    type: "Commercial",
    capacity: "10kW",
    panels: "18 × 650W",
    inverter: "10kW Hybrid Inverter",
    battery: "17kWh Lithium Battery",
    image: ClinichybridPanel,
    gallery: [
      ClinichybridPanel,
      ClinichybridInverter,
    ],
    description:
      "A hybrid solar installation for a healthcare facility, designed to improve power reliability for essential hospital operations. The system combines solar generation with lithium battery storage to reduce dependence on the grid and provide backup power during outages.",
  },

  {
    title: "Residential Grid-Tied",
    location: "Kwara State, Nigeria",
    type: "Grid Tied",
    capacity: "10kW",
    panels: "16 × 650W",
    inverter: "10kW Grid-Tied Inverter",
    battery: "17kWh Lithium",
    image: HybridhomePanel,
    gallery: [
      HybridhomePanel,
      HybridhomeInverter,
      HybridhomePanel2,
    ],
    description:
      "A residential solar power system designed to reduce dependence on grid electricity while providing reliable power for household loads. The installation combines a 10kW PV array with lithium battery storage to support daily energy consumption and improve power availability.",
  },

  {
    title: "Residential Hybrid System",
    location: "Ilorin, Nigeria",
    type: "Hybrid",
    capacity: "4.2kW",
    panels: "18 × 600W",
    inverter: "4.2kW Hybrid Inverter",
    battery: "10kWh Lithium",
    image: Hybridhome1Panel,
    gallery: [
      Hybridhome1Panel,
      Hybridhome1Inverter,
    ],
    description:
      "A residential hybrid solar installation providing dependable backup power for essential household loads. The system combines PV generation with a 10kWh lithium battery bank to provide daytime solar power and stored energy during grid outages or periods of low generation.",
  },

  {
    title: "Residential Backup Power",
    location: "Kwara State, Nigeria",
    type: "Hybrid",
    capacity: "4.2kW",
    panels: "14 × 600W",
    inverter: "4.2kW Hybrid Inverter",
    battery: "8kWh Lithium",
    image: Hybridhome2Panel,
    gallery: [
      Hybridhome2Panel,
      Hybridhome2Inverter,
    ],
    description:
      "A compact residential hybrid solar system designed to provide reliable electricity for essential household loads. The installation uses solar generation and an 8kWh lithium battery bank to improve energy availability and provide backup power during grid interruptions.",
  },
];

const services = [
  {
    icon: PanelTop,
    title: "Solar PV Installation",
    text: "Panel mounting, array layout, cable routing and installation support for residential and commercial systems.",
  },
  {
    icon: Zap,
    title: "Inverter Installation",
    text: "Installation and configuration of hybrid, off-grid and grid-tied inverter systems.",
  },
  {
    icon: BatteryCharging,
    title: "Battery Systems",
    text: "Battery installation, connections, storage setup and basic system checks.",
  },
  {
    icon: CircuitBoard,
    title: "DC / AC Wiring",
    text: "Cable management, connections, protection devices and neat electrical routing.",
  },
  {
    icon: ClipboardCheck,
    title: "Testing & Commissioning",
    text: "System checks, functional testing, basic fault finding and commissioning support.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Troubleshooting",
    text: "Preventive maintenance and troubleshooting to help solar systems operate reliably.",
  },
];

const workflow = [
  ["01", "Assess", "Understand the site, loads and installation requirements."],
  ["02", "Install", "Mount equipment, route cables and connect the system."],
  ["03", "Test", "Check connections, configuration and system performance."],
  ["04", "Commission", "Complete final checks and hand over an operational system."],
];

export function SolarSite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const goHome = () => {
    window.location.href = "/";
  };

  const openProject = (project) => {
    setActiveProject(project);
    setActiveImageIndex(0);
  };

  const closeProject = () => {
    setActiveProject(null);
    setActiveImageIndex(0);
  };

  useEffect(() => {
    if (!activeProject) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeProject();
      if (event.key === "ArrowRight") showNextImage();
      if (event.key === "ArrowLeft") showPreviousImage();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [activeProject]);

  const showNextImage = () => {
    if (!activeProject) return;
    setActiveImageIndex((index) => (index + 1) % activeProject.gallery.length);
  };

  const showPreviousImage = () => {
    if (!activeProject) return;
    setActiveImageIndex((index) => (index - 1 + activeProject.gallery.length) % activeProject.gallery.length);
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="solar-site">
      <header className="solar-nav">
        <div className="solar-container solar-nav-inner">
          <button className="solar-brand" onClick={() => scrollTo("solar-home")}>
            <span className="solar-brand-mark">
              <Sun size={22} strokeWidth={2.2} />
            </span>
            <span>
              <strong>Aliyu Aliyu</strong>
              <small>Solar PV Installation</small>
            </span>
          </button>

          <button
            className="solar-mobile-toggle"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Toggle navigation"
          >
            <Menu size={24} />
          </button>

          <nav className={`solar-links ${menuOpen ? "is-open" : ""}`}>
            <button onClick={() => scrollTo("solar-home")}>Home</button>
            <button onClick={() => scrollTo("services")}>Services</button>
            <button onClick={() => scrollTo("projects")}>Projects</button>
            <button onClick={() => scrollTo("experience")}>Experience</button>
            <button onClick={() => scrollTo("contact")}>Contact</button>
            <button className="solar-nav-tech" onClick={goHome}>
              Software Portfolio
            </button>
          </nav>
        </div>
      </header>

      <main>
        <section id="solar-home" className="solar-hero">
          <div className="solar-hero-glow solar-glow-one" />
          <div className="solar-hero-glow solar-glow-two" />
          <div className="solar-container solar-hero-grid">
            <div className="solar-hero-copy">
              <div className="solar-eyebrow">
                <Sun size={16} />
                SOLAR PV INSTALLER
              </div>
              <h1>
                Clean energy.
                <span> Installed right.</span>
              </h1>
              <p>
                Practical solar PV installation experience across residential
                and small commercial systems, from panel mounting and wiring
                to inverter, battery setup, solar pumping machine, testing and maintenance.
              </p>

              <div className="solar-hero-actions">
                <button className="solar-primary-btn" onClick={() => scrollTo("projects")}>
                  View My Solar Work <ArrowRight size={18} />
                </button>
                <button className="solar-secondary-btn" onClick={() => scrollTo("contact")}>
                  Discuss an Opportunity
                </button>
              </div>

              <div className="solar-trust-row">
                <span><ShieldCheck size={18} /> Safety-conscious</span>
                <span><Wrench size={18} /> Hands-on</span>
                <span><CheckCircle2 size={18} /> Quality-focused</span>
              </div>
            </div>

            <div className="solar-hero-visual">
              <div className="solar-image-frame">
                <img
                  src={Hybridhome3Panel}
                  alt="Solar panels"
                />
                <div className="solar-image-overlay" />
                <div className="solar-floating-card solar-card-top">
                  <Sun size={22} />
                  <div><strong>PV Installation</strong><small>Residential & Commercial</small></div>
                </div>
                <div className="solar-floating-card solar-card-bottom">
                  <Zap size={20} />
                  <div><strong>System Focus</strong><small>Install · Test · Maintain</small></div>
                </div>
              </div>
            </div>
          </div>

          <div className="solar-container solar-stats">
            <div><strong>1+</strong><span>Year practical experience</span></div>
            <div><strong>PV</strong><span>Installation & maintenance</span></div>
            <div><strong>DC/AC</strong><span>Wiring & system setup</span></div>
            <div><strong>24/7</strong><span>Reliability mindset</span></div>
          </div>
        </section>

        <section id="services" className="solar-section solar-light">
          <div className="solar-container">
            <div className="solar-section-heading">
              <div>
                <span className="solar-section-kicker">WHAT I DO</span>
                <h2>Solar installation skills that matter on site.</h2>
              </div>
              
            </div>

            <div className="solar-service-grid">
              {services.map(({ icon: Icon, title, text }) => (
                <article className="solar-service-card" key={title}>
                  <div className="solar-icon-box"><Icon size={23} /></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <span><ChevronRight size={16} /></span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="solar-section solar-projects-section">
          <div className="solar-container">
            <div className="solar-section-heading">
              <div>
                <span className="solar-section-kicker">SELECTED WORK</span>
                <h2>Solar projects & installation evidence.</h2>
              </div>
            </div>

            <div className="solar-project-grid">
              {projects.map((project) => (
                <article className="solar-project-card" key={project.title}>
                  <div className="solar-project-image">
                    <img src={project.image} alt={project.title} loading="lazy" />
                    <span>{project.capacity} · {project.type}</span>
                  </div>
                  <div className="solar-project-body">
                    <div className="solar-project-location"><MapPin size={15} /> {project.location}</div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="solar-spec-grid">
                      <div><small>Panels</small><strong>{project.panels}</strong></div>
                      <div><small>Inverter</small><strong>{project.inverter}</strong></div>
                      <div><small>Battery</small><strong>{project.battery}</strong></div>
                      <div><small>System</small><strong>{project.type}</strong></div>
                    </div>
                    <button onClick={() => openProject(project)} className="solar-project-link">
                      View more images <ArrowRight size={16} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="solar-section solar-dark-section">
          <div className="solar-container">
            <div className="solar-experience-grid">
              <div>
                <span className="solar-section-kicker">HOW I WORK</span>
                <h2>From site assessment to a tested system.</h2>
                <p>
                  The goal is not simply to put panels on a roof. Good installation
                  means careful mounting, clean cable management, correct equipment
                  connections, safe working practices and proper testing.
                </p>
                <div className="solar-check-list">
                  <span><CheckCircle2 size={18} /> Neat and organised installations</span>
                  <span><CheckCircle2 size={18} /> Equipment and cable identification</span>
                  <span><CheckCircle2 size={18} /> Testing before handover</span>
                  <span><CheckCircle2 size={18} /> Preventive maintenance mindset</span>
                </div>
              </div>

              <div className="solar-workflow">
                {workflow.map(([number, title, text]) => (
                  <div className="solar-workflow-item" key={number}>
                    <span>{number}</span>
                    <div><h3>{title}</h3><p>{text}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="solar-section solar-equipment">
          <div className="solar-container">
            <div className="solar-equipment-card">
              <div>
                <span className="solar-section-kicker">TECHNICAL PROFILE</span>
                <h2>Built around practical field skills.</h2>
              </div>
              <div className="solar-skill-cloud">
                {[
                  "Solar PV Panels",
                  "Hybrid Inverters",
                  "Off-Grid Systems",
                  "Solar Pumping Machines",
                  "Solar Cameras",
                  "Lithium Batteries",
                  "DC Wiring",
                  "AC Wiring",
                  "Cable Management",
                  "System Testing",
                  "Fault Diagnosis",
                  "Preventive Maintenance",
                  "Electrical Safety",
                  "Site Installation",
                ].map((skill) => <span key={skill}>{skill}</span>)}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="solar-cta">
          <div className="solar-container">
            <div className="solar-cta-inner">
              <div>
                <span className="solar-section-kicker">LET'S CONNECT</span>
                <h2>Looking for a reliable solar installer?</h2>
                <p>
                  Available for solar installation, technician and renewable-energy
                  opportunities. Add your real contact details here before publishing.
                </p>
              </div>
              <div className="solar-cta-actions">
                <a href="mailto:telix05@gmail.com" className="solar-primary-btn">
                  <Phone size={17} /> Contact Me
                </a>
                <button className="solar-secondary-btn" onClick={() => scrollTo("projects")}>
                  View Projects
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="solar-footer">
        <div className="solar-container solar-footer-inner">
          <div className="solar-brand">
            <span className="solar-brand-mark"><Sun size={22} /></span>
            <span><strong>Aliyu Aliyu</strong><small>Solar PV Installation</small></span>
          </div>
          
          <button onClick={goHome}>View Software Portfolio <ArrowRight size={15} /></button>
        </div>
      </footer>

      {activeProject && (
        <div
          className="solar-modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeProject.title} image gallery`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeProject();
          }}
        >
          <div className="solar-modal">
            <div className="solar-modal-header">
              <div>
                <span className="solar-modal-kicker">PROJECT GALLERY</span>
                <h3>{activeProject.title}</h3>
                <p><MapPin size={14} /> {activeProject.location} · {activeProject.capacity} · {activeProject.type}</p>
              </div>
              <button className="solar-modal-close" onClick={closeProject} aria-label="Close project gallery">
                <X size={22} />
              </button>
            </div>

            <div className="solar-modal-main-image">
              <img
                src={activeProject.gallery[activeImageIndex]}
                alt={`${activeProject.title} - image ${activeImageIndex + 1}`}
              />
              <button className="solar-gallery-arrow solar-gallery-prev" onClick={showPreviousImage} aria-label="Previous image">
                <ChevronLeft size={25} />
              </button>
              <button className="solar-gallery-arrow solar-gallery-next" onClick={showNextImage} aria-label="Next image">
                <ChevronRightIcon size={25} />
              </button>
              <div className="solar-gallery-counter">
                {activeImageIndex + 1} / {activeProject.gallery.length}
              </div>
            </div>

            <div className="solar-modal-thumbnails" aria-label="Project images">
              {activeProject.gallery.map((image, index) => (
                <button
                  key={`${image}-${index}`}
                  className={`solar-modal-thumb ${index === activeImageIndex ? "is-active" : ""}`}
                  onClick={() => setActiveImageIndex(index)}
                  aria-label={`Show image ${index + 1}`}
                >
                  <img src={image} alt="" />
                </button>
              ))}
            </div>

            <div className="solar-modal-details">
              <div>
                <strong>Project details</strong>
                <p>{activeProject.description}</p>
              </div>
              <button className="solar-primary-btn" onClick={() => { closeProject(); scrollTo("contact"); }}>
                Ask about this project <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
