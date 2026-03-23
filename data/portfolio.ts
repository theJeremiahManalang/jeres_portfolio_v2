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
  instagram: "https://instagram.com/mayajere_",
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
    id: "wilcon",
    period: "Dec 2025 – Present",
    role: "Junior Systems Developer",
    company: "Wilcon Depot, Inc.",
    type: "Full-time · On-site",
    location: "Quezon City, Philippines",
    bullets: [
      // "Developed and maintained internal web applications integrated with Infor M3 for 1,000+ users.",
      // "Built full-stack features using Laravel, PHP, Vue.js, and MySQL, integrating Infor M3 based on business requirements.",
      // "Managed deployments and Git workflows from testing to UAT and production.",
    ],
    stack: ["Laravel", "PHP", "Vue.js", "MySQL", "Infor M3", "Cron", "Buefy", "Bulma CSS", "Bash", "Git"],
  },
  {
    id: "aboitiz-foods",
    period: "Jan 2025 – Mar 2025",
    role: "Software Developer Intern",
    company: "Aboitiz Foods Group",
    type: "Internship · Hybrid",
    location: "Taguig, Philippines",
    bullets: [
      "Developed a customer-facing web application utilizing the jQuery framework to streamline payment request processing and improve overall user efficiency.",
      "Established a data pipeline with Google Sheets for real-time data persistence and connected the app with automated Google Drive integration for secure multi-file uploads.",
      "Collaborated with the IT department to integrate the application with the company's existing systems, ensuring seamless data flow and operational compatibility.",
    ],
    stack: ["HTML5", "CSS3", "jQuery", "JavaScript", "Google Sheets", "Google Drive"],
  },
  {
    id: "schneider-electric",
    period: "Jun 2023 - Jul 2023",
    role: "Digital Transformation Intern",
    company: "Schneider Electric Philippines",
    type: "Internship · On-site",
    location: "Cavite, Philippines",
    bullets: [
      "Developed the User Interface (UI) for a 3D truck container filler using Unity and C#, enabling operators to visualize and optimize container box positioning.",
      "Contributed to the development and integration of core system functionalities, directly enhancing the overall logistics efficiency and operational flow.",
    ],
    stack: ["Unity", "C#", "HTML5", "CSS3", "Vue.js", "MySQL", "Tailwind CSS"],
  },
];

export const projects = [
  {
    id: "salesmobility",
    title: "Sales Mobility",
    company: "Aboitiz Foods Group",
    period: "Jan 2025 – Mar 2025",
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
