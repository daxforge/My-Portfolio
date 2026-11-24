import React, { useEffect, useRef } from 'react';
import { ExternalLink, Github, X, CheckCircle2, Cpu, Wrench, Target, Sparkles } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  const dialogRef = useRef(null);
  const previouslyFocusedRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (project && !dialog.open) {
      previouslyFocusedRef.current = document.activeElement;
      dialog.showModal();
    } else if (!project && dialog.open) {
      dialog.close();
    }

    const handleClose = () => {
      onClose();
      if (previouslyFocusedRef.current && typeof previouslyFocusedRef.current.focus === 'function') {
        previouslyFocusedRef.current.focus();
      }
    };

    // Fallback for light-dismiss on backdrop click
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
  }, [project, onClose]);

  if (!project) return null;

  return (
    <dialog
      ref={dialogRef}
      className="project-dialog"
      closedby="any"
      aria-labelledby="project-dialog-title"
      aria-describedby="project-dialog-tagline"
    >
      <div className="dialog-header">
        <div className="dialog-badge-group">
          <span className="project-status">{project.status}</span>
          <span className="project-accent-dot" data-accent={project.accent} />
        </div>
        <button
          className="dialog-close-button"
          onClick={() => dialogRef.current?.close()}
          aria-label="Close project modal"
        >
          <X size={20} />
        </button>
      </div>

      <div className="dialog-content">
        <h2 id="project-dialog-title">{project.title}</h2>
        <p id="project-dialog-tagline" className="dialog-tagline">{project.tagline || project.description}</p>

        <div className="dialog-actions">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="button button-primary"
            >
              <ExternalLink size={16} /> Open Live Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="button button-secondary"
            >
              <Github size={16} /> View Source on GitHub
            </a>
          )}
        </div>

        {/* KEY CAPABILITIES */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="dialog-highlights-section">
            <div className="meta-heading">
              <Sparkles size={16} /> <span>Key Capabilities</span>
            </div>
            <ul className="dialog-capabilities-list">
              {project.highlights.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={15} className="capability-check" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="dialog-meta-grid">
          <div className="meta-card">
            <div className="meta-heading"><Target size={17} /> <span>The Problem</span></div>
            <p>{project.problem}</p>
          </div>

          <div className="meta-card">
            <div className="meta-heading"><CheckCircle2 size={17} /> <span>The Solution</span></div>
            <p>{project.solution || project.decisions}</p>
          </div>

          <div className="meta-card">
            <div className="meta-heading"><Cpu size={17} /> <span>Role & Architecture</span></div>
            <p>{project.role}</p>
          </div>

          <div className="meta-card">
            <div className="meta-heading"><Wrench size={17} /> <span>Technical Decisions</span></div>
            <p>{project.decisions}</p>
          </div>
        </div>

        <div className="dialog-stack">
          <h4>Core Technologies</h4>
          <div className="tags">
            {project.stack.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </dialog>
  );
}
