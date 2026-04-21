export const profile = {
  name: "Jeremiah Manalang",
  title: "Jr. Systems Developer",
  tagline: "Building clean systems that scale.",
  location: "Manila, Philippines",
  status: "Junior Systems Developer · Wilcon Depot, Inc.",
  phone: "09763201154",
  email: "engr.jeremiah.m@gmail.com",
  company: "Wilcon Depot, Inc.",
  resumeUrl: "/data/pdf/jeremiah_manalang_cv.pdf",
  linkedin: "https://www.linkedin.com/in/jeremiah-manalang/",
  github: "https://github.com/theJeremiahManalang",
  instagram: "https://instagram.com/mayajere_",
  calendly: "https://calendly.com",
  about: [
    "Computer Engineer and Software Developer with 3+ years of hands-on experience building scalable web systems, applications, and system-driven solutions across academic, organizational, and enterprise environments.",
    "Currently working as a Junior Systems Developer at Wilcon Depot, Inc., designing and developing business critical system solutions focused on process automation, operational efficiency, data accuracy, and seamless integration with existing.enterprise workflows.",
    "Passionate about continuous growth across the software spectrum, with strong interest in expanding from full-stack and systems development into embedded systems, automations and Internet of Things (IoT) solutions that bridge software with real-world hardware applicationsy.",
  ],
  stats: [
    { value: "10+", label: "Projects Delivered", sub: "Web systems, apps & embedded systems" },
    { value: "3+", label: "Years Experience", sub: "Full-stack development & embedded systems" },
    { value: "500+", label: "Users Served", sub: "Across 100+ branches" },
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
      "Built and maintained internal Infor M3-integrated web applications serving 1,000+ users, including real-time QR count tag generation that improved productivity by 90% through automated PDF and Excel exports.",
      "Developed the Inventory Count system with offline IndexedDB temporary storage and background cron-based data fetching, enabling reliable offline-first inventory capture, automatic sync processing, and multi-factor validation for approval-ready submissions.",
      "Created automated report generation workflows with Comunion, streamlining report creation through field-driven processing and targeted error handling.",
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
    period: "Jun 2023 – Jul 2023",
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
    company: "Wilcon Depot, Inc.",
    period: "Jan 2026 – Present",
    description: [
      "Developed the count tag (QR) generation system that lets the user generate any amount of count tags for the items in the store in real-time which helps 95% in the productivity of the user.",
      "",
    ],
    stack: ["Laravel", "Vue.js", "MySQL", "Infor M3"],
    isPrivate: true,
    // link: "https://github.com/httprenz",
  },
  {
    id: "segbin",
    title: "Segbin",
    company: "Linkd Solutions",
    period: "Feb 2026",
    description: [
      "Designed and built an automated waste segregation system for wet, dry, and plastic bottle waste using Arduino Uno, IR sensors, and a water sensor module, including the full physical prototype structure and sorting mechanism."
    ],
    stack: ["Arduino Uno", "C++"],
    isPrivate: false,
    link: "https://github.com/theJeremiahManalang/segbin"
  },
  {
    id: "communion",
    title: "ComUnion",
    company: "Wilcon Depot, Inc.",
    period: "Jan 2026",
    description: [
      "Developed the count tag (QR) generation system that lets the user generate any amount of count tags for the items in the store in real-time which helps 95% in the productivity of the user.",
    ],
    stack: ["Laravel", "Vue.js", "MySQL", "ComUnion"],
    isPrivate: true,
  },
  {
    id: "mplphdatascraper",
    title: "MPLPH Data Scraper",
    company: "Personal Project",
    period: "Nov 2025",
    description: [
      "An n8n automation project that systematically scraped MPL PH Season 16 match stats. The workflow iterates through matches, extracts specific data points, and appends them to a spreadsheet for machine learning preparation."
    ],
    stack: ["n8n", "Google Sheets"],
    isPrivate: false,
    link: "https://github.com/theJeremiahManalang/mpl-ph-s16-ai-dataset-builder"
  },
  {
    id: "keynergy",
    title: "Keynergy",
    company: "Adamson University",
    period: "Jan 2025 - May 2025",
    description: [
      "Architected and deployed an IoT data pipeline in Python with Firebase-backed real-time synchronization, while developing a C# GUI that dynamically visualized incoming key press data with low-latency system feedback."
    ],
    stack: ["Python", "C#", "Firebase", "Raspberry Pi Pico/Pico W"],
    isPrivate: false,
    link: "https://github.com/theJeremiahManalang/keynergy-ui"
  },
  {
    id: "aboitiz",
    title: "Customer Payment Request",
    company: "Aboitiz Foods Group",
    period: "Jan 2025 - Mar 2025",
    description: [
      "Built a customer-facing payment request web application using jQuery that streamlined request processing through real-time Google Sheets data persistence, secure Google Drive multi-file uploads, and seamless integration with existing company systems."
    ],
    stack: ["Google App Script", "jQuery", "JavaScript", "Google Sheets", "Google Drive"],
    isPrivate: true,
  },
  {
    id: "uniformdetection",
    title: "Complete Uniform Detection using YOLOv3",
    company: "Adamson University",
    period: "Apr 2024 - May 2024",
    description: [
      "Developed a YOLOv3-based uniform completion detection system trained in Google Colab to identify required attire components—including white polo, slacks, ID, and black shoes—and integrated it with an Arduino Uno-powered miniature gate prototype that automatically opens upon successful uniform verification."
    ],
    stack: ["Arduino Uno", "C++", "Python", "YOLOv3", "Google Colab"],
    isPrivate: false,
    link: "https://github.com/theJeremiahManalang/Complete-Uniform-Detection-using-YOLOv3"
  },
  // {
  //   id: "facultyconsultation",
  //   title: "Faculty Consultation",
  //   company: "Adamson University",
  //   period: "Jan 2025 - Mar 2025",
  //   description: [
  //     "Built a customer-facing payment request web application using jQuery that streamlined request processing through real-time Google Sheets data persistence, secure Google Drive multi-file uploads, and seamless integration with existing company systems."
  //   ],
  //   stack: ["Google App Script", "jQuery", "JavaScript", "Google Sheets", "Google Drive"],
  //   isPrivate: false,
  //   link: "https://github.com/theJeremiahManalang/keynergy-ui"
  // },
  // {
  //   id: "petreservation",
  //   title: "Pet Reservation",
  //   company: "Adamson University",
  //   period: "Jan 2025 - Mar 2025",
  //   description: [
  //     "Built a customer-facing payment request web application using jQuery that streamlined request processing through real-time Google Sheets data persistence, secure Google Drive multi-file uploads, and seamless integration with existing company systems."
  //   ],
  //   stack: ["Google App Script", "jQuery", "JavaScript", "Google Sheets", "Google Drive"],
  //   isPrivate: false,
  //   link: "https://github.com/theJeremiahManalang/keynergy-ui"
  // },
  {
    id: "unitycontainerfiller",
    title: "Automated Container Filler",
    company: "Schneider Electric",
    period: "Jun 2023 - Jul 2023",
    description: [
      "Developed the UI/UX frontend of an Automated Container Filler simulation system in C# using Unity, creating an intuitive and efficient interface for real-time process monitoring and user interaction."
    ],
    stack: ["Unity", "C#"],
    isPrivate: true,
  },

];

export const education = [
  {
    id: "adu",
    period: "2020 – 2025",
    degree: "B.S. Computer Engineering",
    school: "Adamson University",
    location: "Manila, Philippines",
    honor: "GPA 1.64",
    bullets: [
      "Awarded the Rank 9 St. Vincent de Paul Leadership Award for Batch 2024–2025, recognizing sustained excellence in student leadership and organizational impact.",
      "Served as Chairperson for Sports and Recreation of the Adamson University Student Government (AUSG) for A.Y. 2024-2025, leading the successful execution of the annual Sportsfest across 8 colleges and 8 competitive sports, engaging over 400 student-athletes within a 3-month planning and implementation period.",
      "Served as Executive President of the Adamson Computer Engineering Society (ACOES) for A.Y. 2023–2024, directing organizational strategy, member engagement, and academic-year initiatives for the society. In our academic term, the organization was recognized as the Top 6 Student Organization campus-wide out of the 40+ recognized organizations in Adamson University.",
      "Served as Executive Vice President for Internal Affairs and Executive Treasurer of the Adamson University Engineering Student Council (AdU-ESC) for A.Y. 2022-2023, co-leading 'Engineering Prime Day' for 300+ students, which later evolved into a recurring annual flagship event.",
    ],
  },
  {
    id: "ipsa",
    period: "2018 – 2020",
    degree: "Senior High — STEM Track",
    school: "International Philippine School in Al-Khobar",
    location: "Al-Khobar, Saudi Arabia",
    honor: "With Honors",
    bullets: [
      "In this academic track, I found my passion for programming and web development that shaped my career.",
      "Learned to use Wix.com for developing websites as a project for our ICT subject.",
    ],
  },
];

export const techStack = {
  Frontend: ["HTML5", "CSS3", "JavaScript", "jQuery", "React", "Next.js", "Vue.js", "Typescript", "Tailwind CSS", "Bootstrap", "Buefy", "Bulma"],
  Backend: ["PHP", "Python", "Laravel", "C#/.NET", "Infor M3", "Cron jobs", "REST API", "MVC"],
  Database: ["MySQL", "MySQLite", "DBeaver", "Firebase"],
  Tools: ["Git", "GitHub", "Github Desktop", "Visual Studio", "Visual Studio Code", "PyCharm", "Jupyter Notebook", "Google Colab", "Arduino IDE", "Thonny IDE", "Notion", "N8N", "Unity", "TensorFlow", "PyTorch", "Roboflow", "YOLOv5"],
  IoT: ["Arduino UNO", "Arduino Nano", "Arduino Micro", "ESP32", "Raspberry Pi Pico/ Pico W", "PIC18F4550", "C", "C++"],
};

export const interests = [
  { icon: "🤖", text: "Exploring emerging tech & practicing minimalism." },
  { icon: "📚", text: "Reading, watching series and anime." },
  { icon: "🏀", text: "Basketball & running for wellbeing." },
];
