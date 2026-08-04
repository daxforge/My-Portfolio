import { BrainCircuit, Code2, Globe2, LayoutPanelTop, Sparkles, UsersRound } from 'lucide-react';

export const navItems = ['About', 'Journey', 'Focus', 'Projects', 'Skills', 'Contact'];

export const profile = {
  name: 'Daksh Pratap Singh',
  role: 'AI Developer & Full Stack Developer',
  location: 'Noida, Uttar Pradesh, India',
  intro: 'I’m a passionate Software Developer specializing in both front-end and back-end development, with a strong focus on building secure, scalable, and user-centric digital solutions.',
  about: "I'm a passionate Software Developer specializing in both front-end and back-end development. My journey in tech is driven by a curiosity to understand complex systems and transform ideas into intuitive, high-performance applications.\n\nWith a background in AI Applications and a commitment to writing clean, maintainable code, I combine technical expertise with thoughtful UI/UX design to deliver secure, scalable, and user-centric digital solutions.",
  education: 'B.Tech, Computer Science & Engineering · Galgotias University · 2025 — 2029',
  linkedin: 'https://www.linkedin.com/in/daksh-pratap-singh-93a200384',
  github: 'https://github.com/daxforge',
  email: 'pratapdaksh20@gmail.com',
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
  {
    number: '01',
    status: 'Best Project',
    title: 'Campus Companion',
    description: 'A full-stack campus navigation platform helping students locate vacant classrooms in real-time. Features an intuitive admin dashboard and optimized search performance.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    accent: 'violet'
  },
  {
    number: '02',
    status: 'Production',
    title: 'GDG Newsletter',
    description: 'A modern newsletter platform built with Next.js, TypeScript, and Tailwind CSS. Built in an open-source team environment demonstrating strict Git workflows.',
    stack: ['Next.js', 'TypeScript', 'TailwindCSS', 'Git'],
    accent: 'blue'
  },
  {
    number: '03',
    status: 'Event Platform',
    title: 'SIH Launchpad',
    description: 'Designed and developed a web platform to support Smart India Hackathon prep by enabling students to explore problems, register teams, and manage events.',
    stack: ['React', 'Vite', 'TailwindCSS', 'Node.js'],
    accent: 'cyan'
  },
  {
    number: '04',
    status: 'Official Site',
    title: 'NVIDIA Student Club',
    description: 'Official student club website featuring event management, student registrations, and responsive landing pages. Built with reusable, accessible React components.',
    stack: ['React', 'TailwindCSS', 'CSS Modules'],
    accent: 'emerald'
  }
];

export const skills = ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Python', 'HTML / CSS', 'Git & GitHub', 'Figma', 'AI Tools'];

