import React, { useEffect, useState } from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  CheckCircle2,
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

function ProjectVisualPreview({ project }) {
  if (project.title === 'DailyForge') {
    return (
      <div className="preview-canvas preview-dailyforge" aria-hidden="true">
        <div className="mock-schedule-header">
          <span className="mock-day active">Mon</span>
          <span className="mock-day">Tue</span>
          <span className="mock-day">Wed</span>
          <span className="mock-day">Thu</span>
          <span className="mock-day">Fri</span>
          <div className="mock-conflict-badge">
            <span className="mock-dot" /> 0 Conflicts
          </div>
        </div>
        <div className="mock-schedule-grid">
          <div className="mock-time-col">
            <span>09:00</span>
            <span>11:30</span>
            <span>14:00</span>
          </div>
          <div className="mock-blocks-col">
            <div className="mock-block accent-violet">
              <strong>DSA & Systems Routine</strong>
              <span>90 min · Sub-100ms Updates</span>
            </div>
            <div className="mock-block accent-cyan">
              <strong>MERN Routine Engine</strong>
              <span>120 min · Conflict Guard Active</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (project.title === 'AI Spend Audit Tool') {
    return (
      <div className="preview-canvas preview-spend-tool" aria-hidden="true">
        <div className="mock-analytics-kpis">
          <div className="mock-kpi">
            <span>Audited Tokens</span>
            <strong>142.5K</strong>
          </div>
          <div className="mock-kpi">
            <span>Model Spend</span>
            <strong>$14.20</strong>
          </div>
          <div className="mock-kpi highlight">
            <span>Opt. Insights</span>
            <strong>32% Saved</strong>
          </div>
        </div>
        <div className="mock-bars-container">
          <div className="mock-bar-row">
            <span>Claude 3.5</span>
            <div className="mock-bar-track">
              <div className="mock-bar-fill fill-blue" style={{ width: '68%' }} />
            </div>
            <span className="mock-bar-val">$8.12</span>
          </div>
          <div className="mock-bar-row">
            <span>GPT-4o</span>
            <div className="mock-bar-track">
              <div className="mock-bar-fill fill-violet" style={{ width: '48%' }} />
            </div>
            <span className="mock-bar-val">$4.80</span>
          </div>
          <div className="mock-bar-row">
            <span>Gemini 1.5</span>
            <div className="mock-bar-track">
              <div className="mock-bar-fill fill-cyan" style={{ width: '22%' }} />
            </div>
            <span className="mock-bar-val">$1.28</span>
          </div>
        </div>
      </div>
    );
  }

  if (project.title === 'Eventra') {
    return (
      <div className="preview-canvas preview-eventra" aria-hidden="true">
        <div className="mock-event-head">
          <div className="mock-event-info">
            <strong>Campus Tech Summit</strong>
            <span>Spring Boot REST Backend Sync</span>
          </div>
          <span className="mock-status-chip">Live Verified</span>
        </div>
        <div className="mock-event-stats">
          <div className="mock-event-progress">
            <div className="mock-progress-labels">
              <span>Attendee Registration</span>
              <span>185 / 200 Passes</span>
            </div>
            <div className="mock-progress-track">
              <div className="mock-progress-fill" style={{ width: '92%' }} />
            </div>
          </div>
          <div className="mock-pass-badge">
            <span className="mock-pass-dot" /> Digital QR Pass Generated
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="preview-canvas preview-studymate" aria-hidden="true">
      <div className="mock-search-bar">
        <span className="mock-search-icon">🔍</span>
        <span className="mock-search-text">Search syllabus, PYQs, subject codes...</span>
        <span className="mock-search-badge">Instant</span>
      </div>
      <div className="mock-study-filters">
        <span className="mock-filter-chip active">All Subjects</span>
        <span className="mock-filter-chip">Algorithms</span>
        <span className="mock-filter-chip">Operating Systems</span>
      </div>
      <div className="mock-doc-row">
        <div className="mock-doc-badge">PDF</div>
        <div className="mock-doc-details">
          <strong>B.Tech CSE Semester 3 · Verified Question Papers</strong>
          <span>Galgotias University Syllabus Repo</span>
        </div>
      </div>
    </div>
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

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

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
              <button key={item} onClick={() => goTo(item)} className="nav-item-btn">
                {item}
              </button>
            ))}
            <div className="mobile-menu-footer">
              <button
                className="nav-resume-btn mobile-resume-btn"
                onClick={() => {
                  setMenuOpen(false);
                  setResumeOpen(true);
                }}
              >
                <FileText size={15} /> Resume
              </button>
              <div className="mobile-socials">
                <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub Profile">
                  <Github size={18} />
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn Profile">
                  <Linkedin size={18} />
                </a>
                <a href={`mailto:${profile.email}`} aria-label="Send Email">
                  <Mail size={18} />
                </a>
              </div>
            </div>
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
            copy="Open-source applications and Full-Stack solutions built with modern web technologies, AI integrations, and resilient architecture."
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

                {/* PRODUCT MOCKUP FRAME */}
                <div className="project-preview-frame">
                  <div className="browser-chrome">
                    <div className="browser-dots" aria-hidden="true">
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
                    <ProjectVisualPreview project={project} />
                  </div>
                </div>

                <div className="project-body">
                  <div className="project-body-header">
                    <h3>{project.title}</h3>
                    <p className="project-tagline">{project.tagline}</p>
                  </div>
                  <p className="project-desc">{project.description}</p>

                  {/* Highlights Row */}
                  {project.highlights && project.highlights.length > 0 && (
                    <div className="project-highlights" aria-label={`Key highlights of ${project.title}`}>
                      {project.highlights.map((highlight) => (
                        <div key={highlight} className="project-highlight-item">
                          <CheckCircle2 size={13} className="highlight-icon" aria-hidden="true" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="tags" aria-label="Tech stack">
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
                      aria-haspopup="dialog"
                      aria-label={`Open case study details for ${project.title}`}
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
            eyebrow="05 / FOCUS"
            title="What I’m building depth in."
            copy="The product, AI, and community spaces where I’m turning curiosity into shipped work."
          />

          <div className="focus-grid">
            {focusAreas.map(({ index, icon: Icon, title, text, evidence, tags }) => (
              <article
                className="focus-card reveal"
                key={title}
                tabIndex={0}
                aria-label={`${title}: ${text}. Evidence: ${evidence}.`}
              >
                <span className="focus-card-numeral" aria-hidden="true">{index}</span>

                <div className="focus-card-top">
                  <div className="focus-icon-box">
                    <Icon size={20} aria-hidden="true" />
                  </div>
                  <span className="focus-index-label" aria-hidden="true">/{index}</span>
                </div>

                <div className="focus-card-main">
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>

                <div className="focus-card-bottom">
                  <div className="focus-evidence-tag" title={`Shipped evidence: ${evidence}`}>
                    <span className="focus-evidence-indicator" aria-hidden="true" />
                    <span className="focus-evidence-label">Evidence</span>
                    <span className="focus-evidence-name">{evidence}</span>
                  </div>

                  <div className="focus-tech-tags" aria-label={`Technologies for ${title}`}>
                    {tags.map((tag) => (
                      <span key={tag} className="focus-tech-pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
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
