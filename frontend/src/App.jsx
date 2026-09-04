import React, { useEffect, useState } from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  ExternalLink,
  FileText,
  Github,
  Linkedin,
  Mail,
  Menu,
  Sparkles,
  X,
} from 'lucide-react';
import ContactForm from './components/ContactForm';
import ProjectModal from './components/ProjectModal';
import ResumeModal from './components/ResumeModal';
import SectionHeading from './components/SectionHeading';
import {
  focusAreas,
  journey,
  navItems,
  nowSection,
  principles,
  profile,
  projects,
  skills,
} from './data/portfolio';

function Mesh() {
  return (
    <div className="mesh" aria-hidden="true">
      <i /><i /><i />
      <svg viewBox="0 0 1200 760" preserveAspectRatio="none">
        <path d="M0 190 L160 80 L330 260 L510 95 L720 220 L915 45 L1200 180 M0 585 L190 460 L355 675 L540 480 L720 645 L925 420 L1200 575" />
        <path d="M160 80 L190 460 M330 260 L355 675 M510 95 L540 480 M720 220 L720 645 M915 45 L925 420" />
      </svg>
    </div>
  );
}

function ScrambleName({ text }) {
  const [displayText, setDisplayText] = useState(text);
  const [isHovered, setIsHovered] = useState(false);

  const glitchChars = '010101<>[]{}-_\\/+=*^?#@!&%';

  const triggerScramble = () => {
    if (isHovered) return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    setIsHovered(true);
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (index < iteration) {
              return text[index];
            }
            if (char === ' ') return ' ';
            return glitchChars[Math.floor(Math.random() * glitchChars.length)];
          })
          .join('')
      );

      if (iteration >= text.length) {
        clearInterval(interval);
        setIsHovered(false);
      }
      iteration += 1 / 2.2;
    }, 30);
  };

  return (
    <span
      onMouseEnter={triggerScramble}
      onClick={triggerScramble}
      tabIndex={0}
      role="text"
      aria-label={text}
      className="scramble-name"
    >
      {displayText}
    </span>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        }),
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const goTo = (section) => {
    document.getElementById(section.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>

      <header role="banner">
        <nav
          className={`nav ${scrolled ? 'nav-scrolled' : ''}`}
          aria-label="Main navigation"
        >
          <button
            className="brand"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Scroll to top"
          >
            D<span>•</span>P
          </button>

          <div
            id="nav-links-menu"
            className={`nav-links ${menuOpen ? 'open' : ''}`}
          >
            {navItems.map((item) => (
              <button key={item} onClick={() => goTo(item)}>
                {item}
              </button>
            ))}
          </div>

          <div className="nav-actions">
            <button
              className="nav-resume-btn"
              onClick={() => setResumeOpen(true)}
              aria-label="View resume"
            >
              <FileText size={15} /> Resume
            </button>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
            >
              <Github size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Send Email">
              <Mail size={18} />
            </a>
            <button
              className="menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-controls="nav-links-menu"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      <main id="main">
        <Mesh />

        {/* HERO SECTION */}
        <section className="hero" id="home">
          <div className="hero-orb" />

          <div className="hero-status-pill">
            <span className="status-beacon" />
            <span>{profile.status}</span>
            <span className="divider">•</span>
            <span>{profile.location}</span>
          </div>

          <div className="hero-avatar-wrapper reveal">
            <img
              src={profile.avatar}
              alt="Daksh Pratap Singh"
              className="hero-avatar"
              onError={(e) => {
                e.target.src = 'https://avatars.githubusercontent.com/u/236894230?v=4';
              }}
            />
            <span className="avatar-ring" />
          </div>

          <h1>
            Hi, I’m<br />
            <ScrambleName text="Daksh Pratap Singh." />
          </h1>

          <p className="hero-role-lead">
            {profile.heroRole}
          </p>

          <p className="hero-intro">
            {profile.intro}
          </p>

          <div className="hero-proof-bar reveal">
            {profile.proofPoints.map((pt) => (
              <div key={pt.label} className="proof-item">
                <strong>{pt.value}</strong>
                <span>{pt.label}</span>
              </div>
            ))}
          </div>

          <div className="hero-buttons">
            <button className="button button-primary" onClick={() => goTo('Projects')}>
              View Shipped Projects <ArrowUpRight size={18} />
            </button>
            <button
              className="button button-secondary"
              onClick={() => setResumeOpen(true)}
            >
              <Download size={17} /> Download Resume
            </button>
          </div>

          <button
            className="scroll-cue"
            onClick={() => goTo('Projects')}
            aria-label="Scroll to featured projects"
          >
            <span>Explore Projects</span>
            <ArrowDown size={18} />
          </button>
        </section>

        {/* FEATURED PROJECTS SECTION - PLACED DIRECTLY AFTER HERO FOR MAXIMUM CREDIBILITY */}
        <section id="projects" className="section projects-section">
          <SectionHeading
            eyebrow="01 / Featured Projects"
            title="Real products, shipped code, and live demos."
            copy="Open-source applications and full-stack solutions built with modern web technologies, AI integrations, and resilient architecture."
          />

          <div className="projects-grid">
            {projects.map((project) => (
              <article
                className={`project-card ${project.accent} reveal`}
                key={project.number}
              >
                <div className="project-top">
                  <span className="project-number">{project.number}</span>
                  <span className="project-status">{project.status}</span>
                </div>

                {/* PRODUCT MOCKUP FRAME (Replaces gradient orbs) */}
                <div className="project-preview-frame">
                  <div className="browser-chrome">
                    <div className="browser-dots">
                      <i /><i /><i />
                    </div>
                    <div className="browser-url-bar">
                      <span className="url-protocol">https://</span>
                      {project.demo
                        ? project.demo.replace(/^https?:\/\//, '')
                        : `github.com/daxforge/${project.title.toLowerCase()}`}
                    </div>
                  </div>

                  <div className="project-preview-stage">
                    <span className="stage-pill">{project.stack[0]}</span>
                    <h4>{project.title}</h4>
                    <p className="stage-tagline">{project.tagline}</p>
                    <div className="stage-metric-badge">{project.metrics}</div>
                  </div>
                </div>

                <div className="project-body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="tags">
                    {project.stack.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div className="project-card-actions">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="project-action-link primary-action"
                      >
                        <ExternalLink size={14} /> Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="project-action-link"
                      >
                        <Github size={14} /> Source
                      </a>
                    )}
                    <button
                      className="project-action-link case-study-action"
                      onClick={() => setSelectedProject(project)}
                    >
                      <FileText size={14} /> Case Study
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* NOW SECTION - WHAT DAKSH IS CURRENTLY BUILDING & LEARNING */}
        <section id="now" className="section now-section">
          <SectionHeading
            eyebrow="02 / What I'm Doing Now"
            title="Currently building, learning, and exploring."
            copy="A snapshot of active learning trajectories, club responsibilities, and upcoming initiatives."
          />

          <div className="now-card reveal">
            <div className="now-header">
              <span className="now-status-pill">{nowSection.status}</span>
              <span className="now-role">{nowSection.currentRole}</span>
            </div>

            <div className="now-grid">
              {nowSection.details.map((item) => (
                <div key={item.label} className="now-item">
                  <span className="now-label">{item.label}</span>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="section about-section">
          <SectionHeading
            eyebrow="03 / About"
            title="A builder with a learner’s mindset."
          />

          <div className="about-grid">
            <div className="about-visual reveal">
              <div className="code-window">
                <div className="window-dots">
                  <i /><i /><i />
                </div>
                <p><span>const</span> daksh = &#123;</p>
                <p>&nbsp;&nbsp;name: <em>'Daksh Pratap Singh'</em>,</p>
                <p>&nbsp;&nbsp;role: <em>'Full-Stack Developer'</em>,</p>
                <p>&nbsp;&nbsp;curious: <b>true</b>,</p>
                <p>&nbsp;&nbsp;stack: [<em>'MERN'</em>, <em>'Spring Boot'</em>, <em>'AI'</em>],</p>
                <p>&nbsp;&nbsp;target: <em>'Summer/Semester Internship'</em></p>
                <p>&#125;</p>
              </div>
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
            </div>

            <div className="about-content reveal">
              <p className="lead">{profile.about}</p>
              <p className="education">{profile.education}</p>

              <div className="principles">
                {principles.map(({ icon: Icon, title, text }) => (
                  <article key={title}>
                    <Icon size={22} />
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* JOURNEY & EXPERIENCE TIMELINE */}
        <section id="journey" className="section journey-section">
          <SectionHeading
            eyebrow="04 / Journey"
            title="Learning in public, building in practice."
            copy="Organizations, communities, and programs shaping my development."
          />

          <div className="timeline">
            {journey.map((item, index) => (
              <article className="timeline-item reveal" key={item.title}>
                <span className="timeline-number">0{index + 1}</span>
                <p className="timeline-year">{item.year}</p>
                <div>
                  <h3>{item.title}</h3>
                  <h4>{item.organization}</h4>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* FOCUS AREAS */}
        <section id="focus" className="section focus-section">
          <SectionHeading
            eyebrow="05 / Focus"
            title="Where I like to make things happen."
            copy="Key technical domains I actively invest engineering hours into."
          />

          <div className="focus-grid">
            {focusAreas.map(({ icon: Icon, title, text }) => (
              <article className="focus-card reveal" key={title}>
                <Icon size={24} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* TOOLKIT & SKILLS */}
        <section id="skills" className="section skills-section">
          <SectionHeading
            eyebrow="06 / Toolkit"
            title="Technologies & systems."
            copy="Tools, frameworks, and environments used to engineer scalable applications."
          />

          <div className="skill-marquee" aria-label="Skills ticker">
            <div>
              {[...skills, ...skills].map((skill, index) => (
                <span key={`${skill}-${index}`}>
                  {skill}
                  <b>✦</b>
                </span>
              ))}
            </div>
          </div>

          <div className="github-activity-banner reveal">
            <div className="gh-info">
              <Github size={22} />
              <div>
                <strong>Explore Daksh’s Code on GitHub</strong>
                <p>Public repositories, algorithmic problem submissions, and active open-source builds.</p>
              </div>
            </div>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="button button-secondary"
            >
              Visit @daxforge <ArrowUpRight size={16} />
            </a>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="section contact-section">
          <ContactForm />
        </section>

        <footer role="contentinfo">
          <span>© {new Date().getFullYear()} {profile.name} · Noida, India</span>
          <div>
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={`mailto:${profile.email}`}>Email</a>
            <button
              className="footer-resume-link"
              onClick={() => setResumeOpen(true)}
            >
              Resume
            </button>
            <a href="#home">Back to top ↑</a>
          </div>
        </footer>
      </main>

      {/* CASE STUDY MODAL */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* RESUME PREVIEW & DOWNLOAD MODAL */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </>
  );
}
