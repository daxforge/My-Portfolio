import React, { useEffect, useState } from 'react';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Menu, Terminal, X } from 'lucide-react';
import ContactForm from './components/ContactForm';
import SectionHeading from './components/SectionHeading';
import { focusAreas, journey, navItems, principles, profile, projects, skills } from './data/portfolio';

function Mesh() {
  return <div className="mesh" aria-hidden="true"><i /><i /><i /><svg viewBox="0 0 1200 760" preserveAspectRatio="none"><path d="M0 190 L160 80 L330 260 L510 95 L720 220 L915 45 L1200 180 M0 585 L190 460 L355 675 L540 480 L720 645 L925 420 L1200 575" /><path d="M160 80 L190 460 M330 260 L355 675 M510 95 L540 480 M720 220 L720 645 M915 45 L925 420" /></svg></div>;
}

function ScrambleName({ text }) {
  const [displayText, setDisplayText] = useState(text);
  const [isHovered, setIsHovered] = useState(false);

  const glitchChars = '010101<>[]{}-_\\/+=*^?#@!&%';

  const triggerScramble = () => {
    if (isHovered) return;
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
      iteration += 1 / 2.5;
    }, 25);
  };

  useEffect(() => {
    triggerScramble();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <span onMouseEnter={triggerScramble} style={{ cursor: 'pointer' }}>
      {displayText}
    </span>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('in-view')), { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
    return () => { observer.disconnect(); window.removeEventListener('scroll', onScroll); };
  }, []);

  const goTo = (section) => { document.getElementById(section.toLowerCase())?.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false); };

  return (
    <main>
      <Mesh />
      <nav className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
        <button className="brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>D<span>•</span>P</button>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>{navItems.map((item) => <button key={item} onClick={() => goTo(item)}>{item}</button>)}</div>
        <div className="nav-actions"><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a><a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={18} /></a><button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button></div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-orb" />
        <p className="hero-kicker"><span /> Available for new ideas</p>
        <h1>Hi, I’m<br /><ScrambleName text="Daksh Pratap Singh." /></h1>
        <p className="hero-intro">{profile.intro} <strong>I build digital experiences</strong> with an appetite for web, AI, and creative technology.</p>
        <div className="hero-buttons"><button className="button button-primary" onClick={() => goTo('Projects')}>Explore work <ArrowUpRight size={18} /></button><button className="button button-secondary" onClick={() => goTo('Contact')}>Let’s connect</button></div>
        <button className="scroll-cue" onClick={() => goTo('About')} aria-label="Scroll to about"><span>Scroll to discover</span><ArrowDown size={18} /></button>
      </section>

      <section id="about" className="section about-section">
        <SectionHeading eyebrow="01 / About" title="A builder with a learner’s mindset." />
        <div className="about-grid">
          <div className="about-visual reveal"><div className="code-window"><div className="window-dots"><i /><i /><i /></div><p><span>const</span> daksh = &#123;</p><p>&nbsp;&nbsp;curious: <b>true</b>,</p><p>&nbsp;&nbsp;building: [<em>'web'</em>, <em>'ai'</em>],</p><p>&nbsp;&nbsp;next: <em>'something useful'</em></p><p>&#125;</p></div><div className="orbit orbit-one" /><div className="orbit orbit-two" /></div>
          <div className="about-content reveal"><p className="lead">{profile.about}</p><p className="education">{profile.education}</p><div className="principles">{principles.map(({ icon: Icon, title, text }) => <article key={title}><Icon size={23} /><h3>{title}</h3><p>{text}</p></article>)}</div></div>
        </div>
      </section>

      <section id="journey" className="section journey-section"><SectionHeading eyebrow="02 / Journey" title="Learning in public, building in practice." copy="A few places and communities shaping the work ahead." /><div className="timeline">{journey.map((item, index) => <article className="timeline-item reveal" key={item.title}><span className="timeline-number">0{index + 1}</span><p className="timeline-year">{item.year}</p><div><h3>{item.title}</h3><h4>{item.organization}</h4><p>{item.text}</p></div></article>)}</div></section>

      <section id="focus" className="section focus-section"><SectionHeading eyebrow="03 / Focus" title="Where I like to make things happen." /><div className="focus-grid">{focusAreas.map(({ icon: Icon, title, text }) => <article className="focus-card reveal" key={title}><Icon /><h3>{title}</h3><p>{text}</p><span>↗</span></article>)}</div></section>

      <section id="projects" className="section projects-section"><SectionHeading eyebrow="04 / Selected work" title="Experiments, products, and ideas in motion." copy="A living collection — project details can evolve as each build grows." /><div className="projects-grid">{projects.map((project) => <article className={`project-card ${project.accent} reveal`} key={project.number}><div className="project-top"><span>{project.number}</span><span className="project-status">{project.status}</span></div><div className="project-art"><i /><i /><i /></div><div className="project-body"><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div></div></article>)}</div></section>

      <section id="skills" className="section skills-section"><SectionHeading eyebrow="05 / Toolkit" title="Tools I’m working with." /><div className="skill-marquee"><div>{[...skills, ...skills].map((skill, index) => <span key={`${skill}-${index}`}>{skill}<b>✦</b></span>)}</div></div></section>

      <section id="contact" className="section contact-section"><ContactForm /></section>
      <footer><span>© {new Date().getFullYear()} Daksh Pratap Singh</span><div><a href={profile.github} target="_blank" rel="noreferrer">GitHub</a><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={`mailto:${profile.email}`}>Email</a><a href="#home">Back to top ↑</a></div></footer>
    </main>
  );
}
