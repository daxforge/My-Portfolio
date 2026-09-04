import React, { useState } from 'react';
import { ArrowUpRight, Check, Copy, Mail, Send, AlertCircle } from 'lucide-react';
import { profile } from '../data/portfolio';

const initialForm = { name: '', email: '', message: '' };

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [state, setState] = useState({ type: '', message: '' });
  const [copied, setCopied] = useState(false);
  const [showFallback, setShowFallback] = useState(false);

  const mailtoHref = `mailto:${profile.email}?subject=${encodeURIComponent(
    `Portfolio Inquiry from ${form.name || 'Visitor'}`
  )}&body=${encodeURIComponent(
    `Hi Daksh,\n\n${form.message || ''}\n\nFrom: ${form.name || 'Anonymous'} (${form.email || 'No email provided'})`
  )}`;

  async function submit(event) {
    event.preventDefault();
    setState({ type: 'loading', message: 'Sending your note…' });
    setShowFallback(false);

    // Support configured API endpoint (fallback to 5001 where backend runs)
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5001';

    // 5-second timeout to prevent hanging on offline server
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    try {
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
        signal: controller.signal,
      });
      clearTimeout(timeoutId);

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Error processing your message');

      setForm(initialForm);
      setState({ type: 'success', message: data.message || 'Message received! I’ll get back to you soon.' });
    } catch (error) {
      clearTimeout(timeoutId);
      const isAbort = error.name === 'AbortError';
      const errorMsg = isAbort
        ? 'API server timed out. Please send directly via email below.'
        : 'Backend server is currently offline or unreachable.';

      setState({
        type: 'error',
        message: `${errorMsg} Your note is safe! You can send it directly to Daksh via your email client.`,
      });
      setShowFallback(true);
    }
  }

  const handleCopy = () => {
    const textToCopy = `Name: ${form.name}\nEmail: ${form.email}\nMessage:\n${form.message}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="contact-layout">
      <div className="contact-copy reveal">
        <span className="eyebrow">Start a conversation</span>
        <h2>Have an idea or opportunity?</h2>
        <p>
          I’m actively seeking software engineering & AI internships, open-source collaborations, and tech discussions. Let’s talk!
        </p>

        <div className="contact-direct-box">
          <div className="direct-item">
            <span className="direct-label">Direct Email</span>
            <a className="contact-link" href={`mailto:${profile.email}`}>
              <Mail size={16} /> {profile.email} <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="direct-item">
            <span className="direct-label">Location & Status</span>
            <p className="direct-value">
              <span className="status-beacon" /> {profile.status} · {profile.location}
            </p>
          </div>
        </div>
      </div>

      <form className="contact-form reveal" onSubmit={submit}>
        <label htmlFor="contact-name">
          Name
          <input
            id="contact-name"
            name="name"
            autoComplete="name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Your name"
          />
        </label>

        <label htmlFor="contact-email">
          Email
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="you@example.com"
          />
        </label>

        <label htmlFor="contact-message">
          Message
          <textarea
            id="contact-message"
            name="message"
            required
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Tell me a little about your project, internship, or question…"
            rows="4"
          />
        </label>

        <div className="form-action-group">
          <button
            className="button button-primary"
            disabled={state.type === 'loading'}
            type="submit"
          >
            <Send size={16} /> {state.type === 'loading' ? 'Sending note…' : 'Send message'}
          </button>

          <a href={mailtoHref} className="button button-secondary" title="Open directly in email client">
            <Mail size={16} /> Open in Email App
          </a>
        </div>

        {state.message && (
          <div className={`form-status ${state.type}`}>
            {state.type === 'error' && <AlertCircle size={16} />}
            <p>{state.message}</p>
          </div>
        )}

        {showFallback && (
          <div className="contact-fallback-actions">
            <a href={mailtoHref} className="button button-primary button-sm">
              <Mail size={15} /> Send via Mail App (Pre-filled)
            </a>
            <button
              type="button"
              className="button button-secondary button-sm"
              onClick={handleCopy}
            >
              {copied ? <Check size={15} /> : <Copy size={15} />}
              {copied ? 'Copied to Clipboard!' : 'Copy Note to Clipboard'}
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
