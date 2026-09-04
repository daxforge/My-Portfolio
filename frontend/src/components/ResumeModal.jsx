import React, { useEffect, useRef } from 'react';
import { Download, ExternalLink, Mail, Phone, Printer, X, MapPin } from 'lucide-react';
import { profile } from '../data/portfolio';

export default function ResumeModal({ isOpen, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) {
      dialog.showModal();
    } else if (!isOpen && dialog.open) {
      dialog.close();
    }

    const handleClose = () => {
      onClose();
    };

    const handleBackdropClick = (event) => {
      if (event.target !== dialog) return;
      const rect = dialog.getBoundingClientRect();
      const isInside = (
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width
      );
      if (!isInside) {
        dialog.close();
      }
    };

    dialog.addEventListener('close', handleClose);
    dialog.addEventListener('click', handleBackdropClick);

    return () => {
      dialog.removeEventListener('close', handleClose);
      dialog.removeEventListener('click', handleBackdropClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <dialog
      ref={dialogRef}
      className="resume-dialog"
      closedby="any"
      aria-labelledby="resume-dialog-title"
    >
      <div className="dialog-header resume-header-bar">
        <div className="resume-controls">
          <button className="button button-primary button-sm" onClick={handlePrint}>
            <Printer size={15} /> Print / Save as PDF
          </button>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="button button-secondary button-sm"
          >
            <ExternalLink size={15} /> GitHub Profile
          </a>
        </div>
        <button
          className="dialog-close-button"
          onClick={() => dialogRef.current?.close()}
          aria-label="Close résumé preview"
        >
          <X size={20} />
        </button>
      </div>

      <div className="resume-document printable-resume">
        <header className="resume-doc-header">
          <h1 id="resume-dialog-title">{profile.name}</h1>
          <p className="resume-role">{profile.heroRole}</p>
          <div className="resume-contact-strip">
            <span><MapPin size={13} /> {profile.location}</span>
            <a href={`mailto:${profile.email}`}><Mail size={13} /> {profile.email}</a>
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub: @daxforge</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn Profile</a>
          </div>
        </header>

        <section className="resume-doc-section">
          <h3>Education</h3>
          <div className="resume-item">
            <div className="resume-item-top">
              <strong>B.Tech in Computer Science & Engineering</strong>
              <span>2025 — 2029</span>
            </div>
            <p className="resume-sub">Galgotias University · Greater Noida, India</p>
            <p className="resume-desc">Key coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Computer Networks.</p>
          </div>
        </section>

        <section className="resume-doc-section">
          <h3>Technical Skills</h3>
          <div className="resume-skills-list">
            <p><strong>Languages:</strong> JavaScript (ES6+), TypeScript, Java, Python, C/C++, HTML5, CSS3</p>
            <p><strong>Frameworks & Libraries:</strong> React, Node.js, Express.js, Vite, Spring Boot, Tailwind CSS</p>
            <p><strong>Databases & Cloud:</strong> MongoDB, MySQL, Mongoose, RESTful APIs, Vercel, Render</p>
            <p><strong>Tools & Practices:</strong> Git, GitHub, High-Performance Computing (HPC), AI/LLM API integration, Figma</p>
          </div>
        </section>

        <section className="resume-doc-section">
          <h3>Leadership & Club Experience</h3>
          <div className="resume-item">
            <div className="resume-item-top">
              <strong>Member Technical</strong>
              <span>2025 — Present</span>
            </div>
            <p className="resume-sub">NVIDIA AI & Supercomputing Club | Galgotias University</p>
            <p className="resume-desc">Exploring HPC, NVIDIA technologies, GPU computing, and AI/ML architectures through technical workshops and hackathons.</p>
          </div>
          <div className="resume-item">
            <div className="resume-item-top">
              <strong>Community Member</strong>
              <span>2025 — Present</span>
            </div>
            <p className="resume-sub">Google Developer Groups (GDG) on Campus · Galgotias University</p>
            <p className="resume-desc">Engaging with student developers, contributing to open-source initiatives, and collaborating on collegiate software projects.</p>
          </div>
        </section>

        <section className="resume-doc-section">
          <h3>Featured Projects</h3>
          <div className="resume-item">
            <div className="resume-item-top">
              <strong>DailyForge — Full-Stack MERN Routine Planner</strong>
              <a href="https://github.com/daxforge/DailyForge" target="_blank" rel="noreferrer">github.com/daxforge/DailyForge</a>
            </div>
            <p className="resume-desc">Engineered full-stack weekly schedule platform featuring zero-overlap collision algorithm, dynamic drag-and-drop routines, and MongoDB persistence.</p>
          </div>

          <div className="resume-item">
            <div className="resume-item-top">
              <strong>AI Spend Audit Tool — LLM Token & Cost Analytics</strong>
              <a href="https://github.com/daxforge/ai-spend-audit-tool" target="_blank" rel="noreferrer">github.com/daxforge/ai-spend-audit-tool</a>
            </div>
            <p className="resume-desc">Created real-time developer utility for calculating and projecting token costs across disparate LLM providers with actionable optimization metrics.</p>
          </div>

          <div className="resume-item">
            <div className="resume-item-top">
              <strong>Eventra — Event Management System (React + Spring Boot)</strong>
              <a href="https://github.com/daxforge/Eventra" target="_blank" rel="noreferrer">github.com/daxforge/Eventra</a>
            </div>
            <p className="resume-desc">Collaborated on event platform handling attendee passes, ticketing workflows, and organizer dashboards with high concurrency.</p>
          </div>
        </section>
      </div>
    </dialog>
  );
}
