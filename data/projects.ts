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
  figma?: string;
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

    image: "/image/tampilanporto.png",

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
  title: "Visualisasi Kerentanan Banjir Surabaya",
  category: "web",
  type: "Web GIS Project",

  description:
    "A flood vulnerability visualization system for Surabaya City using the Fuzzy Mamdani method and open map data.",

  objective:
    "Develop a web-based visualization system to map flood vulnerability and supporting flood-related facilities in Surabaya City.",

  features: [
    "Flood vulnerability map",
    "Flood vulnerability visualization by district",
    "Fuzzy Mamdani-based flood vulnerability analysis",
    "Damkar map",
    "Visualization of flood-related facilities and locations",
    "Interactive data visualization using Metabase",
  ],

  tech: [
    "Next.js",
    "TypeScript",
    "Python",
    "FastAPI",
    "Supabase",
    "PostgreSQL",
    "QGIS",
    "Scikit-Fuzzy",
    "Metabase",
  ],

  image: "/image/image.png",

  gallery: [
    "/image/visualbanjir.png",
    "/image/visualbanjirr1.png",
    "/image/visualbanjir2.png",
  ],

  featured: false,

  year: "2025",

  duration: "Final Project",

  role: "Full-Stack Developer",

  status: "Completed",

  github: "https://github.com/meirosa/TAD3.git",

  uiux: "https://www.figma.com/design/UK5rQC9I0txwBALn6cYDFm/MOCKUP-D3?node-id=0-1&p=f&t=61lfdkrF2kse2b1B-0",
},
  {
  id: "3",
  title: "FuzzyFlood",
  category: "web",
  type: "Web GIS & Research Project",

  description:
    "A Web GIS application developed to evaluate and map flood vulnerability in Surabaya City by comparing Mamdani, Sugeno, and Tsukamoto Fuzzy Inference System models.",

  objective:
    "Develop a Web GIS-based system to evaluate and visualize flood vulnerability in Surabaya City while comparing the performance of different Fuzzy Inference System models.",

  features: [
    "Interactive flood vulnerability mapping",
    "Visualization of spatial data using an interactive map",
    "Comparison of Mamdani, Sugeno, and Tsukamoto models",
    "Flood vulnerability classification",
    "Flood vulnerability data visualization by district",
    "Integration of spatial data with analytical results",
    "Backend API for fuzzy model processing",
    "Database integration for storing analysis results",
  ],

  tech: [
    "Next.js",
    "TypeScript",
    "Python",
    "FastAPI",
    "Supabase",
    "PostgreSQL",
    "Leaflet",
    "QGIS",
    "Scikit-Fuzzy",
  ],

  image: "/image/icon.png",

  gallery: [
    "/image/fuzzyflood.png",
    "/image/fuzzyflood2.png",
    "/image/fuzzyflood3.png",
  ],

  featured: false,

  year: "2026",
  duration: "Final Project",
  role: "Full-Stack Developer & Researcher",
  status: "Completed",

  github: "https://github.com/meirosa/Revisi-Code-TA.git",
  uiux: "https://www.figma.com/design/CQRuPI0ATw7XgcHiTA6rtX/MOCKUP-D4?t=SFpubRp5fODOM0KY-0"
  
},

{
  id: "4",
  title: "Wallink Website",
  category: "web",
  type: "Collaborative Web Project",

  description:
    "A digital link management website designed to help users store, organize, search, and share their important links efficiently.",

  objective:
    "Develop a user-friendly web platform that helps users manage, access, and share digital links efficiently with minimal interaction.",

  features: [
    "Link storage and management",
    "Link categorization",
    "Search and quick access to saved links",
    "Favourite links",
    "Share link collections easily",
    "Edit, delete, and archive links",
    "Responsive web interface",
  ],

  tech: [
    "TypeScript",
    "CSS",
    "JavaScript",
  ],

  image: "/image/logo-wallink.png",

  gallery: [
    "/image/wallink.png",
    "/image/wallink-1.png",
    "/image/wallink-2.png",
  ],

  featured: false,
  year: "2024",
  duration: "Feb 2024 – Jul 2024",

  role: "Front-End Developer & QA",

  status: "Completed",

  github: "https://github.com/mirza27/wallink_web.git",

  demo: "https://wallink-web.vercel.app/",
},

{
  id: "5",
  title: "Kusuma Cookies",
  category: "web",
  type: "Business Website",

  description:
    "A responsive business website for Kusuma Cookies designed to showcase its Lebaran cookie collection, product details, ordering information, and store location.",

  objective:
    "Develop a simple and informative website to help customers discover Kusuma Cookies products, view prices, place orders through WhatsApp, and find the store location.",

  features: [
    "Product showcase",
    "Product details and pricing",
    "WhatsApp ordering integration",
    "Lebaran cookie collection",
    "Store location with Google Maps",
    "Responsive web interface",
  ],

  tech: [
    "Next.js",
    "TypeScript",
    "CSS",
  ],

  image: "/image/kusumaco.png",

  gallery: [
    "/image/kusumacookies1.png",
    "/image/kusumacookies2.png",
    "/image/kusumacookies3.png",
  ],

  featured: false,

  year: "2026",
  duration: "Personal Project",

  role: "Full-Stack Developer",

  status: "Completed",

  github: "https://github.com/meirosa/Kusuma-Cookies.git",

  demo:
    "https://kusuma-cookies-752f-7gtlf5knp-rosas-projects-97df9ea1.vercel.app/",
},
  {
  id: "19",
  title: "PENSSTORE",
  category: "mobile",
  type: "Campus Marketplace Application",

  description:
    "A mobile marketplace application developed to provide students with a convenient platform for browsing and purchasing campus stationery and supplies.",

  objective:
    "Develop a mobile marketplace application that makes it easier for students to browse and purchase stationery and campus supplies.",

  features: [
    "Product browsing",
    "Product category navigation",
    "Product details",
    "Shopping cart",
    "Campus marketplace experience",
  ],

  tech: [
    "Flutter",
    "Dart",
  ],

  image: "/image/Logo_Splash.png",

  year: "2025",

  role: "Mobile Developer",

  status: "Completed",

  github:
    "https://github.com/bayuhadi863/penstore-ecommerce-mobile-app.git",

  uiux:
    "https://www.figma.com/file/chsMguRDAOyflOAszveBY2/Untitled?type=design&node-id=0%3A1&mode=design&t=f2HSuGjlksjfcgIU-1",
},
  {
  id: "6",
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
  id: "7",
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
  id: "19",
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
    id: "9",
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