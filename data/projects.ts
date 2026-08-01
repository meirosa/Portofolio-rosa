export type ProjectCategory =
  | "web"
  | "mobile"
  | "documentation"
  | "qa"
  | "uiux";

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  type: string;

  description: string;
  image: string;

  tech: string[];

  featured?: boolean;

  github?: string;
  demo?: string;
   docs?: string; 

  // Detail Project
  objective?: string;
  features?: string[];

  year?: string;
  duration?: string;
  role?: string;

  status?: "Completed" | "In Progress";

  gallery?: string[];

  uiux?: string;
};

export const projects: Project[] = [
  {
    id: "1",
    title: "Portfolio Website",
    category: "web",
    type: "Personal Website",

    description:
      "A modern and responsive personal portfolio website built with Next.js and Tailwind CSS to showcase projects, technical skills, research, certifications, and professional experience through a clean and interactive interface.",

    objective:
      "Develop a professional online portfolio to present my background, projects, achievements, and technical capabilities with a modern, responsive, and user-friendly design.",

    features: [
      "Responsive design for desktop and mobile devices",
      "Project showcase with category filtering",
      "Interactive project detail modal",
      "Research and certificate showcase",
      "Experience timeline section",
      "Technology stack presentation",
      "Integrated contact section",
      "Smooth navigation between sections",
    ],

    tech: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Vercel"],

    image: "/image/1hal1.png",

    gallery: [
      "/image/1hal1.png",
      "/image/1hal2.png",
    ],

    featured: true,

    year: "2026",
    duration: "3 Month",
    role: "Front-End Developer",
    status: "Completed",

    github: "https://github.com/meirosa/Portofolio-rosa.git",
    demo: "https://portofolio-rosa.vercel.app/",
  },

  {
    id: "2",
    title: "PENSSTORE",
    category: "mobile",
    type: "Campus Marketplace Application",

    description:
      "A practical Android application created with Kotlin and Jetpack Compose for managing daily tasks and reminders.",

    objective:
      "Build an Android application that helps users manage daily activities efficiently.",

    features: [
      "Task management",
      "Reminder notification",
      "Firebase integration",
    ],

    tech: ["Kotlin", "Jetpack Compose", "Firebase"],

    image: "/image/ilustrasi.png",

    year: "2025",
    role: "Android Developer",
    status: "Completed",

    github: "https://github.com/bayuhadi863/penstore-ecommerce-mobile-app.git",
    uiux: "figma.com/design/NagymhLiMFzjRdopLGYhrq/Untitled?node-id=0-1",
  },

  {
  id: "3",
  title: "User Manual HIS V1 Trustmedis",
  category: "documentation",
  type: "User Manual",

  description:
    "Developed a comprehensive user manual for the HIS V1 Trustemedis Hospital Information System. The documentation provides step-by-step guidance, workflow diagrams, screenshots, and feature explanations to support hospital staff in operating the system efficiently across Emergency, Outpatient, and Inpatient modules.",

  objective:
    "Create clear, accurate, and user-friendly technical documentation that helps healthcare professionals and administrative staff understand and operate the Hospital Information System effectively while reducing training time and operational errors.",

  tech: [
    "Microsoft Word",
    "Google Docs",
    "Draw.io",
    "Markdown",
  ],

  image: "/image/3hal1.png",

  year: "2024",
  role: "Technical Writer",
  status: "Completed",

  docs:
    "https://docs.google.com/document/d/1wM2Kucc2Lsrp3AJU_X0Yz7jGHwpndHFvgl3NCTZvEiE/edit?usp=sharing",
},

{
  id: "4",
  title: "Virtu DigiLab Configuration Module",
  category: "documentation",
  type: "User Manual",

  description:
    "Developed a comprehensive user manual for the Configuration Module of the Virtu DigiLab platform. The documentation provides step-by-step configuration procedures, annotated screenshots, workflow diagrams, and feature explanations to help users configure and manage the system effectively.",

  objective:
    "Create clear and structured user documentation that enables users to understand and configure the system independently while improving usability and reducing configuration errors.",

  tech: [
    "Microsoft Word",
    "Google Docs",
    "Draw.io",
    "Markdown",
  ],

  image: "/image/png2.png",

  year: "2024",
  role: "Technical Writer",
  status: "Completed",

  docs:
    "https://docs.google.com/document/d/18pEI3EiIaYQ9Z-e9ctWk0BDEW_yYG4n9Gq_dJxkUeeU/edit?usp=sharing",
},

{
  id: "5",
  title: "Virtu DigiLab User Management Module",
  category: "documentation",
  type: "User Manual",

  description:
    "Developed a comprehensive user manual for the User Management Module of the Virtu DigiLab platform. The documentation provides step-by-step user instructions, annotated screenshots, workflow diagrams, and feature explanations to assist administrators in managing user accounts, roles, and permissions efficiently.",

  objective:
    "Create clear and structured user documentation that enables administrators to manage user accounts, roles, and permissions accurately while improving usability and reducing configuration errors.",

  tech: [
    "Microsoft Word",
    "Google Docs",
    "Draw.io",
    "Markdown",
  ],

  image: "/image/png3.png",

  year: "2024",
  role: "Technical Writer",
  status: "Completed",

  docs:
    "https://docs.google.com/document/d/13yDhBSJvoMAvR4sfRrqbEVV3jsIiQBmDg9D6d_RJC7U/edit?usp=sharing",
},

  {
    id: "6",
    title: "QA Automation Framework",
    category: "qa",
    type: "Testing Solution",

    description:
      "A quality assurance automation framework designed to streamline regression testing and improve software reliability.",

    objective:
      "Improve software quality through automated testing and regression testing.",

    features: [
      "Automation Testing",
      "Regression Testing",
      "Test Reporting",
    ],

    tech: ["Selenium", "Java", "JUnit"],

    image: "/image/ilustrasi.png",

    year: "2025",
    role: "QA Engineer",
    status: "Completed",

    github: "https://github.com/",
  },
];