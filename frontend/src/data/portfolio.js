import { BrainCircuit, Code2, Globe2, LayoutPanelTop, Sparkles, UsersRound } from 'lucide-react';

export const navItems = ['About', 'Journey', 'Focus', 'Projects', 'Skills', 'Contact'];

export const profile = {
  name: 'Daksh Pratap Singh',
  role: 'Computer Science Student & Web Builder',
  location: 'Noida, Uttar Pradesh, India',
  intro: 'Curiosity-driven, code-powered, and always building toward the next useful idea.',
  about: "I'm a Computer Science and Engineering student who enjoys turning an idea into a thoughtful digital experience. I like the intersection of clean interfaces, practical engineering, and communities that make learning more collaborative.",
  education: 'B.Tech, Computer Science & Engineering · Galgotias University · 2025 — 2029',
  linkedin: 'https://www.linkedin.com/in/daksh-pratap-singh-93a200384',
};

export const principles = [
  { icon: Code2, title: 'Build', text: 'Ship clear, useful products with sound technical foundations.' },
  { icon: BrainCircuit, title: 'Explore', text: 'Learn rapidly, test ideas, and stay curious about AI.' },
  { icon: UsersRound, title: 'Connect', text: 'Grow through open communities, collaboration, and shared learning.' },
];

export const journey = [
  { year: '2025 — now', title: 'Computer Science & Engineering', organization: 'Galgotias University', text: 'Building a strong foundation in programming, algorithms, and modern software development.' },
  { year: 'Current', title: 'Community & developer programs', organization: 'GDG on Campus · Galgotias University', text: 'Engaging with peers, developer events, and technology communities that turn learning into action.' },
];

export const focusAreas = [
  { icon: Globe2, title: 'Web Experiences', text: 'Responsive sites and interfaces that feel polished on every screen.' },
  { icon: BrainCircuit, title: 'Applied AI', text: 'Exploring practical AI tools and workflows that make products smarter.' },
  { icon: LayoutPanelTop, title: 'Product UI', text: 'Thoughtful visual systems that make complex things feel simple.' },
  { icon: Sparkles, title: 'Creative Technology', text: 'Small experiments that combine design, code, and a sense of play.' },
];

export const projects = [
  { number: '01', status: 'Concept', title: 'Campus Connect', description: 'A concept for helping students discover events, teams, and opportunities in one focused place.', stack: ['React', 'Node.js', 'MongoDB'], accent: 'violet' },
  { number: '02', status: 'Exploring', title: 'AI Study Companion', description: 'An experimental study workspace that helps turn scattered notes into a practical learning plan.', stack: ['AI', 'JavaScript', 'UX'], accent: 'blue' },
  { number: '03', status: 'Building', title: 'Portfolio System', description: 'A flexible personal brand experience built to evolve alongside new projects and milestones.', stack: ['React', 'Express', 'Motion'], accent: 'cyan' },
];

export const skills = ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Python', 'HTML / CSS', 'Git & GitHub', 'Figma', 'AI Tools'];
