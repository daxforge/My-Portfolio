import { BrainCircuit, Code2, GitPullRequest, Layers, LayoutPanelTop, UsersRound } from 'lucide-react';

export const navItems = ['Projects', 'Now', 'About', 'Journey', 'Focus', 'Skills', 'Contact'];

export const profile = {
  name: 'Daksh Pratap Singh',
  role: 'AI Developer & Full-Stack Developer',
  heroRole: 'Full-Stack Developer building AI-powered web products',
  status: 'Open to Internships',
  availability: 'Available for summer & semester opportunities',
  location: 'Noida, Uttar Pradesh, India',
  intro: "Full-Stack Developer building secure, scalable, and user-centric web applications — where thoughtful engineering meets AI and creative technology.",
  about: "I'm a Full-Stack Developer focused on building secure, scalable, and user-centric web applications across the full development stack. I combine web development, AI, and creative technology to transform ideas into innovative digital experiences.",
  education: 'B.Tech, Computer Science & Engineering · Galgotias University · 2025 — 2029',
  linkedin: 'https://www.linkedin.com/in/daksh-pratap-singh-93a200384',
  github: 'https://github.com/daxforge',
  email: 'pratapdaksh20@gmail.com',
  avatar: '/image.jpeg',
  proofPoints: [
    { label: 'Shipped Projects', value: '4+' },
    { label: 'Open Source Repos', value: '10+' },
    { label: 'GDG ON CAMPUS', value: 'FRONTEND DEVELOPER' },
  ],
};

export const nowSection = {
  status: '🟢 Active & Shipping',
  heading: 'What I’m currently focused on',
  currentRole: 'Frontend Developer · GDG on Campus | GU',
  details: [
    { label: 'Exploring', text: 'Full-stack web architecture and practical LLM agent workflows.' },
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
  {
    year: '2025 — now',
    title: 'Computer Science & Engineering',
    organization: 'Galgotias University',
    text: 'Building a strong foundation in programming, algorithms, and modern software development.',
  },
  {
    year: '2025 — Present',
    title: 'Frontend Developer & Community',
    organization: 'GDG on Campus · Galgotias University',
    text: 'Designing platform features with Next.js & React, engaging with peers, and turning learning into real-world applications.',
  },
  {
    year: 'May 2026 – Aug 2026',
    title: 'Open Source Contributor',
    organization: 'GirlScript Summer of Code (GSSoC)',
    text: 'Contributed to real-world open-source repositories by developing accessible UI features, fixing bugs, and collaborating through Git/GitHub pull requests with maintainers.',
  },
];

export const focusAreas = [
  {
    index: '01',
    icon: Layers,
    title: 'Full-Stack Products',
    text: 'End-to-end web applications with responsive React interfaces, reliable APIs, and thoughtful user flows.',
    evidence: 'DailyForge',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    index: '02',
    icon: BrainCircuit,
    title: 'Applied AI & Developer Tools',
    text: 'Practical LLM workflows and cost-aware tools that make AI useful, measurable, and easier to adopt.',
    evidence: 'AI Spend Audit Tool',
    tags: ['LLMs', 'Analytics', 'Vite'],
  },
  {
    index: '03',
    icon: LayoutPanelTop,
    title: 'Product Engineering & UI',
    text: 'Clear visual systems and friction-reducing interactions that make complex tasks feel simple.',
    evidence: 'Eventra / StudyMatePlus',
    tags: ['UX', 'Responsive UI', 'React'],
  },
  {
    index: '04',
    icon: GitPullRequest,
    title: 'Open Source & Community',
    text: 'Accessible features, thoughtful fixes, and collaborative work through GDG on Campus and GSSoC.',
    evidence: 'GDG on Campus + GSSoC',
    tags: ['GitHub', 'Accessibility', 'Collaboration'],
  },
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
    highlights: [
      'Zero-overlap routine conflict prevention algorithm',
      'Interactive drag-and-drop weekly routine planner',
      'Express REST API with MongoDB routine persistence',
    ],
    problem: 'Daily planners usually suffer from rigid time tables and unexpected overlapping time slots, causing schedule friction.',
    solution: 'Engineered an interactive drag-and-drop schedule planner with client-side collision detection to eliminate overlapping slots before network dispatch, backed by a modular Express REST API and MongoDB schema-level validation.',
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
    highlights: [
      'Multi-model token pricing & API cost calculator',
      'Visual prompt spend breakdown and distribution charts',
      'Instant client-side audit engine with zero server overhead',
    ],
    problem: 'Experimenting across diverse LLM providers causes opaque token usage and unexpected spikes in developer bills.',
    solution: 'Built a lightweight client-side analytics dashboard with real-time token pricing indices, dynamic model comparison bars, and immediate audit breakdowns without server lag.',
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
    highlights: [
      'End-to-end event registration & organizer management',
      'Digital attendee pass generation and verification',
      'Decoupled Spring Boot REST API & interactive React UI',
    ],
    problem: 'Clunky manual attendee registrations and disjointed verification tools create bottlenecks at technical and university events.',
    solution: 'Architected a decoupled event platform connecting an interactive React client with a type-safe Spring Boot REST backend to handle registration surges, attendee verification, and real-time organizer dashboards.',
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
    highlights: [
      'Fast indexed search for syllabus guides & PYQs',
      'Community question paper repository & verification',
      'Responsive UI with peer feedback & mentorship access',
    ],
    problem: 'Semester preparation materials are scattered across unsorted chat groups and broken drive links.',
    solution: 'Built a centralized open-source academic repository with fast client-side indexing, structured branch/semester syllabus filters, and a verified student paper submission flow.',
    role: 'Frontend Developer: Built categorized repository search, paper submission guides, and responsive document viewports.',
    decisions: 'Implemented fast client-side indexing and clean UI cards for zero-friction academic downloads.',
    outcome: 'Widely used by Galgotias University students for exams, offering a central repository with transparent student feedback.'
  }
];

export const skills = ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Java', 'Python', 'Spring Boot', 'HTML / CSS', 'Git & GitHub', 'Figma', 'AI Tools'];
