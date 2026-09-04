import { BrainCircuit, Code2, Globe2, LayoutPanelTop, Sparkles, UsersRound } from 'lucide-react';

export const navItems = ['Projects', 'Now', 'About', 'Journey', 'Focus', 'Skills', 'Contact'];

export const profile = {
  name: 'Daksh Pratap Singh',
  role: 'AI Developer & Full Stack Developer',
  heroRole: 'Full-stack developer building AI-powered web products',
  status: 'Open to Internships',
  availability: 'Available for summer & semester opportunities',
  location: 'Noida, Uttar Pradesh, India',
  intro: "Full-Stack Developer building secure, scalable, and user-centric web applications — where thoughtful engineering meets AI and creative technology.",
  about: "I'm a Full-Stack Developer focused on building secure, scalable, and user-centric web applications across the full development stack. I combine web development, AI, and creative technology to transform ideas into innovative digital experiences.",
  education: 'B.Tech, Computer Science & Engineering · Galgotias University · 2025 — 2029',
  linkedin: 'https://www.linkedin.com/in/daksh-pratap-singh-93a200384',
  github: 'https://github.com/daxforge',
  email: 'pratapdaksh20@gmail.com',
  avatar: '/avatar.jpg',
  proofPoints: [
    { label: 'Shipped Projects', value: '4+' },
    { label: 'Open Source Repos', value: '10+' },
    { label: 'Technical Club', value: 'NVIDIA GU' },
  ],
};

export const nowSection = {
  status: '🟢 Active & Shipping',
  heading: 'What I’m currently focused on',
  currentRole: 'Member Technical · NVIDIA AI & Supercomputing Club | GU',
  details: [
    { label: 'Exploring', text: 'HPC, GPU computing, and practical LLM agent workflows.' },
    { label: 'Building', text: 'DailyForge (MERN routine engine) & AI spend governance tooling.' },
    { label: 'Academics', text: 'B.Tech CSE @ Galgotias University (Data Structures & Systems).' },
    { label: 'Target', text: 'Open to Software Engineering & Full-Stack / AI Internships.' },
  ]
};

export const principles = [
  { icon: Code2, title: 'Build', text: 'Ship clear, useful products with sound technical foundations.' },
  { icon: BrainCircuit, title: 'Explore', text: 'Learn rapidly, test ideas, and stay curious about AI.' },
  { icon: UsersRound, title: 'Connect', text: 'Grow through open communities, collaboration, and shared learning.' },
];

export const journey = [
  { year: '2025 — now', title: 'Computer Science & Engineering', organization: 'Galgotias University', text: 'Building a strong foundation in programming, algorithms, and modern software development.' },
  { year: 'Current', title: 'Community & developer programs', organization: 'GDG on Campus · Galgotias University', text: 'Engaging with peers, developer events, and technology communities that turn learning into action.' },
  { year: 'Current', title: 'Member Technical', organization: 'NVIDIA AI & Supercomputing Club | GU', text: 'Explore HPC, NVIDIA technologies, AI/ML, and GPU computing through hands-on workshops, technical sessions, and real-world projects. Collaborate on hackathons, coding competitions, and innovative AI solutions, while strengthening development, research, and technical skills.' },
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
    status: 'Featured Full-Stack',
    title: 'DailyForge',
    tagline: 'MERN productivity engine with zero-overlap routine scheduling',
    description: 'Open-source MERN web app to design, manage, and visualize weekly routines with drag-and-drop scheduling, a smart task library, and automated overlap protection.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'REST API'],
    accent: 'violet',
    github: 'https://github.com/daxforge/DailyForge',
    demo: 'https://dailyforge-frontend-lhjq.onrender.com',
    metrics: 'Active Web App · Full CRUD · Conflict Prevention',
    problem: 'Daily planners usually suffer from rigid time tables and unexpected overlapping time slots, causing schedule friction.',
    role: 'Full-Stack Developer: Designed MongoDB schemas, built the collision detection algorithm, and engineered the responsive drag-and-drop interface.',
    decisions: 'Adopted a modular Express REST architecture with schema-level validation, paired with a stateful React UI that prevents invalid schedule drops before network dispatch.',
    outcome: 'Eliminated manual schedule conflicts with sub-100ms client updates, full weekly routine persistence, and seamless mobile responsiveness.'
  },
  {
    number: '02',
    status: 'Applied AI & Analytics',
    title: 'AI Spend Audit Tool',
    tagline: 'Real-time token cost auditing and analytics dashboard for LLMs',
    description: 'A developer utility to analyze LLM API token consumption, audit provider expenses across models, and surface actionable optimization insights.',
    stack: ['JavaScript', 'React', 'Vercel', 'AI Analytics', 'Vite'],
    accent: 'blue',
    github: 'https://github.com/daxforge/ai-spend-audit-tool',
    demo: 'https://ai-spend-audit-tool-zeta.vercel.app',
    metrics: 'Live Tool · Instant Cost Breakdown · Multi-Model Support',
    problem: 'Experimenting across diverse LLM providers causes opaque token usage and unexpected spikes in developer bills.',
    role: 'Creator & Frontend Engineer: Designed usage breakdown charts, input/output cost calculators, and intuitive audit reports.',
    decisions: 'Integrated client-side pricing indices and visual distribution bars for instant calculations without server overhead.',
    outcome: 'Delivers clear visual cost transparency, enabling developers to immediately pinpoint high-spend prompts and optimize model selection.'
  },
  {
    number: '03',
    status: 'Event Platform',
    title: 'Eventra',
    tagline: 'Full-featured event management system with React & Spring Boot',
    description: 'Comprehensive event management system empowering organizers to create, manage, and track community events from attendee registration to post-event analytics.',
    stack: ['React', 'Spring Boot', 'Java', 'REST API', 'MySQL'],
    accent: 'cyan',
    github: 'https://github.com/daxforge/Eventra',
    demo: 'https://eventra.sandeepvashishtha.in',
    metrics: 'Production · Enterprise Backend · Live Verification',
    problem: 'Clunky manual attendee registrations and disjointed verification tools create bottlenecks at technical and university events.',
    role: 'Full-Stack Collaborator: Implemented the interactive React client, attendee self-service flows, and integrated Spring Boot REST endpoints.',
    decisions: 'Separated concern between a fast React client and a type-safe Spring Boot backend to ensure high reliability during registration surges.',
    outcome: 'Supported multi-tiered event publishing, attendee pass generation, and real-time organizer dashboards.'
  },
  {
    number: '04',
    status: 'Open-Source Academic Hub',
    title: 'StudyMatePlus',
    tagline: 'Collaborative resource platform for university syllabus & mentorship',
    description: 'Open-source platform helping students access verified syllabus guides, previous year question papers (PYQs), student feedback, and peer mentorship.',
    stack: ['React', 'JavaScript', 'TailwindCSS', 'Vercel'],
    accent: 'emerald',
    github: 'https://github.com/daxforge/StudyMatePlus',
    demo: 'https://study-mate-plus.vercel.app',
    metrics: 'Open Source · Student Community · Instant Search',
    problem: 'Semester preparation materials are scattered across unsorted chat groups and broken drive links.',
    role: 'Frontend Developer: Built categorized repository search, paper submission guides, and responsive document viewports.',
    decisions: 'Implemented fast client-side indexing and clean UI cards for zero-friction academic downloads.',
    outcome: 'Widely used by Galgotias University students for exams, offering a central repository with transparent student feedback.'
  }
];

export const skills = ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Java', 'Python', 'Spring Boot', 'HTML / CSS', 'Git & GitHub', 'Figma', 'AI Tools'];
