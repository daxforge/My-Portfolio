import React, { useState } from 'react';
import { ArrowUpRight, Send } from 'lucide-react';

const initialForm = { name: '', email: '', message: '' };

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [state, setState] = useState({ type: '', message: '' });

  async function submit(event) {
    event.preventDefault();
    setState({ type: 'loading', message: 'Sending your note…' });
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/contact`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message);
      setForm(initialForm);
      setState({ type: 'success', message: data.message });
    } catch (error) {
      setState({ type: 'error', message: error.message || 'Could not send your message. Please try again.' });
    }
  }

  return (
    <div className="contact-layout">
      <div className="contact-copy reveal">
        <span className="eyebrow">Start a conversation</span>
        <h2>Have an idea worth building?</h2>
        <p>I’m always open to learning opportunities, interesting projects, and conversations with thoughtful people.</p>
        <a className="contact-link" href="mailto:hello@dakshpratapsingh.dev">hello@dakshpratapsingh.dev <ArrowUpRight size={18} /></a>
      </div>
      <form className="contact-form reveal" onSubmit={submit}>
        <label>Name<input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" /></label>
        <label>Email<input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" /></label>
        <label>Message<textarea required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell me a little about it…" rows="5" /></label>
        <button className="button button-primary" disabled={state.type === 'loading'} type="submit"><Send size={17} /> {state.type === 'loading' ? 'Sending' : 'Send message'}</button>
        {state.message && <p className={`form-status ${state.type}`}>{state.message}</p>}
      </form>
    </div>
  );
}
