import React, { useEffect, useRef } from 'react';
import { ExternalLink, Mail, Phone, Printer, X, MapPin } from 'lucide-react';
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
          aria-label="Close resume preview"
        >
          <X size={20} />
        </button>
      </div>

      <div className="resume-document printable-resume">
        <header className="resume-doc-header">
          <h1 id="resume-dialog-title">DAKSH PRATAP SINGH</h1>
          <div className="resume-contact-strip">
            <a href="mailto:pratapdaksh007@gmail.com"><Mail size={13} /> pratapdaksh007@gmail.com</a>
            <a href="tel:+918077232213"><Phone size={13} /> +91 8077232213</a>
            <span><MapPin size={13} /> Greater Noida, India</span>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </header>

        {/* SUMMARY */}
        <section className="resume-doc-section">
          <h3>Summary</h3>
          <p className="resume-summary-text">
            Skilled Front End Developer with hands-on experience in responsive design and JavaScript. Enhanced UI/UX for a newsletter platform, optimizing performance and user engagement. Delivered scalable web solutions through effective collaboration. Proficient in JavaScript, CSS, and React, with strong problem-solving abilities.
          </p>
        </section>

        {/* TECHNICAL SKILLS */}
        <section className="resume-doc-section">
          <h3>Technical Skills</h3>
          <div className="resume-skills-grid">
            <p><strong>Languages:</strong> JavaScript, TypeScript, Python, C++, C, HTML, CSS</p>
            <p><strong>Frameworks:</strong> React.js, Next.js, Tailwind CSS</p>
            <p><strong>Tools:</strong> Git, GitHub, VS Code</p>
            <p><strong>Concepts:</strong> Responsive Design, API Integration, DOM Manipulation</p>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="resume-doc-section">
          <h3>Experience</h3>

          <div className="resume-item">
            <div className="resume-item-top">
              <strong>NVIDIA AI &amp; Supercomputing Club – Galgotias University</strong>
              <span>July 2026 – Present</span>
            </div>
            <p className="resume-sub">Member Technical | Noida, India</p>
            <ul className="resume-bullets">
              <li>Explore High-Performance Computing (HPC) concepts and NVIDIA technologies through workshops, technical sessions, and practical implementations.</li>
              <li>Contribute to a collaborative technical community focused on innovation, knowledge sharing, and building real-world AI solutions.</li>
            </ul>
          </div>

          <div className="resume-item">
            <div className="resume-item-top">
              <strong>GDG On Campus – Galgotias University</strong>
              <span>Dec 2025 – Present</span>
            </div>
            <p className="resume-sub">Frontend Developer | Noida, India</p>
            <ul className="resume-bullets">
              <li>Designed and developed frontend features for a newsletter platform using Next.js, React, TypeScript, and Tailwind CSS.</li>
              <li>Developed dynamic routing and reusable components, enabling scalable content delivery.</li>
              <li>Enhanced UI/UX by resolving layout issues and optimizing page transitions.</li>
              <li>Followed GitHub-based collaboration, issue tracking, and pull request best practices.</li>
            </ul>
          </div>

          <div className="resume-item">
            <div className="resume-item-top">
              <strong>Academic E-commerce Project</strong>
              <span>June 2024 – July 2024</span>
            </div>
            <p className="resume-sub">Frontend Developer | Chandpur, India</p>
            <ul className="resume-bullets">
              <li>Built a functional e-commerce website frontend using HTML, CSS, and JavaScript.</li>
              <li>Developed reusable page sections like product cards, headers, and footers.</li>
              <li>Applied responsive design principles to support desktop and mobile screens.</li>
              <li>Improved visual consistency by implementing structured layouts and clean styling.</li>
            </ul>
          </div>
        </section>

        {/* KEY PROJECTS */}
        <section className="resume-doc-section">
          <h3>Key Projects</h3>

          <div className="resume-item">
            <div className="resume-item-top">
              <strong>Digitised Admission Forms (ML)</strong>
            </div>
            <ul className="resume-bullets">
              <li>Digitized admission forms for primary schools, reducing turnaround time by 10x using machine learning concepts.</li>
            </ul>
          </div>

          <div className="resume-item">
            <div className="resume-item-top">
              <strong>Handwriting Text Recognition (CV)</strong>
            </div>
            <ul className="resume-bullets">
              <li>Worked on HTR and OCR using Tesseract and OpenCV to extract characters from forms with 84% accuracy.</li>
            </ul>
          </div>
        </section>

        {/* EDUCATION */}
        <section className="resume-doc-section">
          <h3>Education</h3>

          <div className="resume-item">
            <div className="resume-item-top">
              <strong>Galgotias University</strong>
              <span>Exp. July 2029</span>
            </div>
            <p className="resume-sub">Bachelor of Technology, Computer Science and Engineering | <strong>CGPA: 8.28/10</strong></p>
          </div>

          <div className="resume-item">
            <div className="resume-item-top">
              <strong>Fatherson Senior Secondary Public School</strong>
              <span>March 2025</span>
            </div>
            <p className="resume-sub">High School &amp; Intermediate</p>
          </div>
        </section>

        {/* LEADERSHIP */}
        <section className="resume-doc-section">
          <h3>Leadership</h3>

          <div className="resume-item">
            <div className="resume-item-top">
              <strong>Head Boy</strong>
              <span>May 2024 – March 2025</span>
            </div>
            <ul className="resume-bullets">
              <li>Represented 1000+ students; coordinated inter-school events and cultural programs.</li>
              <li>Acted as a bridge between students and school management.</li>
            </ul>
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section className="resume-doc-section">
          <h3>Certifications</h3>
          <ul className="resume-bullets">
            <li>Develop GenAI Apps with Gemini and Streamlit (Google)</li>
            <li>Programming in C++ Certification (Newton School of Technology)</li>
            <li>Certificate of Completion C Programming (HCL GUVI)</li>
          </ul>
        </section>
      </div>
    </dialog>
  );
}
