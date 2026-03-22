export const profile = {
  name: "Jeremiah Manalang",
  title: "Full-Stack Developer",
  tagline: "Building clean systems that scale.",
  location: "Manila, Philippines",
  status: "Junior Systems Developer · Wilcon Depot, Inc.",
  phone: "09763201154",
  email: "engr.jeremiah.m@gmail.com",
  company: "Wilcon Depot, Inc.",
  resumeUrl: "/Renzi_Delposo_Resume.pdf",
  linkedin: "https://www.linkedin.com/in/theJeremiahManalang/",
  github: "https://github.com/theJeremiahManalang",
  // instagram: "https://instagram.com/theywantrenz",
  calendly: "https://calendly.com",
  about: [
    "With 4+ years of full-stack experience, I've built enterprise systems serving 1,000+ users, automated workflows across 113 branches, and delivered web products from design to deployment.",
    "Currently at MIMS Pte Ltd. as a Web Developer, contributing to regional digital delivery across Southeast Asia — while actively exploring AI-driven workflows and expanding front-end skills.",
    "Passionate about minimalism, growth, and building meaningful digital experiences at the intersection of design and engineering.",
  ],
  stats: [
    { value: "20+", label: "Projects Delivered", sub: "Web systems, apps & e-commerce" },
    { value: "4+", label: "Years Experience", sub: "Full-stack development & UI" },
    { value: "1K+", label: "Users Served", sub: "Across 113+ branches" },
  ],
};

export const experience = [
  {
    id: "mims",
    period: "Mar 2026 – Present",
    role: "Web Developer, Digital, MC Regional Delivery",
    company: "MIMS Pte Ltd.",
    type: "Full-time · Remote",
    location: "Philippines",
    bullets: [
      "Contributing to digital product delivery across Southeast Asia as part of the MC Regional Delivery team.",
      "Building and maintaining web solutions for MIMS — a leading digital health platform in the region.",
      "Collaborating remotely with regional teams to deliver fast, reliable, and user-focused web experiences.",
    ],
    stack: ["Laravel", "CodeIgniter", "jQuery", "N8N", "PHP", "JavaScript", "Figma", "React", "Next.js", "MySQL", "Asana"],
  },
  {
    id: "wilcon",
    period: "Jul 2024 – Mar 2026",
    role: "Full Stack Developer",
    company: "Wilcon Depot, Inc.",
    type: "Full-time · On-site",
    location: "Quezon City, Philippines",
    bullets: [
      "Developed and maintained internal web applications integrated with Infor M3 for 1,000+ users.",
      "Built full-stack features using Laravel, PHP, Vue.js, and MySQL, integrating Infor M3 based on business requirements.",
      "Managed deployments and Git workflows from testing to UAT and production.",
    ],
    stack: ["Laravel", "PHP", "Vue.js", "MySQL", "Infor M3", "Bulma CSS", "Bash", "Git"],
  },
  {
    id: "erovoutika-pt",
    period: "Sept 2022 – Jan 2023",
    role: "Part-time Web Developer",
    company: "Erovoutika Robotics and Automation",
    type: "Part-time · On-site",
    location: "Makati, Philippines",
    bullets: [
      "Main developer building websites with vanilla PHP, Tailwind CSS, Vite, WordPress e-commerce, and Figma prototypes.",
      "Led web development training and webinars, while mentoring interns and managing their projects.",
      "Managed company social media content and engagement to grow online presence.",
    ],
    stack: ["PHP", "WordPress", "Tailwind CSS", "Vite", "Figma", "JavaScript"],
  },
  {
    id: "erovoutika-intern",
    period: "Sept 2023 · 6 mos",
    role: "Intern Web Developer",
    company: "Erovoutika Robotics and Automation",
    type: "Internship · On-site",
    location: "Makati, Philippines",
    bullets: [
      "Assisted in developing websites using PHP and WordPress, and created design mockups in Figma.",
      "Participated in web development training and contributed to team projects under supervision.",
    ],
    stack: ["HTML", "CSS", "JavaScript", "PHP", "WordPress", "Figma"],
  },
];

export const projects = [
  {
    id: "einvoicing",
    title: "Paper Reduction: E-Invoicing",
    company: "Wilcon Depot",
    period: "Dec 2025 – Feb 2026",
    description: "BIR e-invoicing system to retrieve customer orders from Infor M3 and send/print invoices directly.",
    stack: ["Laravel", "Vue.js", "MySQL", "Infor M3", "Tailwind"],
    isPrivate: false,
    link: "https://github.com/httprenz",
  },
  {
    id: "shell",
    title: "Shell Fleet Card Automation",
    company: "Wilcon Depot",
    period: "Aug – Dec 2025",
    description: "Full-stack automation system for Admin, AP, and Treasury departments based on 100+ page FSR.",
    stack: ["Laravel", "Vue.js", "MySQL", "Infor M3", "Tailwind"],
    isPrivate: true,
  },
  {
    id: "codashboard",
    title: "CO-Dashboard",
    company: "Wilcon Depot",
    period: "May – Jul 2025",
    description: "PR/DO approval dashboard with multi-level workflow and automated supplier email notifications.",
    stack: ["Laravel", "Vue.js", "MySQL", "Infor M3", "Tailwind"],
    isPrivate: true,
  },
  {
    id: "pettycash",
    title: "Petty Cash Replenishment",
    company: "Wilcon Depot",
    period: "Jul 2024 – May 2025",
    description: "Branch petty cash automation for 113 branches across the Philippines with multi-level approvals.",
    stack: ["Laravel", "Vue.js", "MySQL", "Infor M3", "Tailwind"],
    isPrivate: true,
  },
];

export const education = [
  {
    id: "rtu",
    period: "2020 – 2024",
    degree: "B.S. Information Technology",
    school: "Rizal Technological University",
    location: "Mandaluyong, PH",
    honor: "Cum Laude · GPA 1.5",
    bullets: [
      "Graduated Cum Laude with a GPA of 1.5 — top academic distinction.",
      "Specialized in web systems, software development, and database management.",
      "Active volunteer in the RTU College of Engineering Student Council.",
      "Completed capstone projects involving full-stack web applications.",
    ],
  },
  {
    id: "arellano",
    period: "2018 – 2020",
    degree: "Senior High — ICT Track",
    school: "Arellano University",
    location: "Manila, PH",
    honor: "Information & Communications Technology",
    bullets: [
      "Wrote very first lines of code in the ICT strand — where it all began.",
      "Discovered a passion for programming and web development that shaped my career.",
      "Studied programming fundamentals, computer systems, and IT infrastructure.",
    ],
  },
];

export const techStack = {
  Frontend: ["JavaScript", "TypeScript", "Vue.js", "React", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "Bootstrap", "Sass", "Bulma"],
  Backend: ["PHP", "Laravel", "CodeIgniter", "Node.js", "MySQL", "REST API", "MVC"],
  Tools: ["Git", "GitHub", "Figma", "Vite", "VSCode", "Postman", "WordPress", "Infor M3", "N8N", "Asana"],
};

export const interests = [
  { icon: "🤖", text: "Exploring emerging tech & practicing minimalism." },
  { icon: "📚", text: "Reading, watching series and anime." },
  { icon: "🏀", text: "Basketball & running for wellbeing." },
];
