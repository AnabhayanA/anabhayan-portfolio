export type UxCaseStudy = {
  slug: string;
  title: string;
  teaser: string;
  coverImage?: string;
  problem: string;
  research: string[];
  process: string[];
  wireframes: string[];
  finalDesign: string[];
  outcomes: string[];
  tools: string[];
  skills: string[];
  artifacts?: Array<{
    label: string;
    href: string;
    kind: "pdf" | "image" | "slides" | "link";
  }>;
};

export type DevProject = {
  title: string;
  description: string;
  category: "Frontend" | "Full Stack" | "Cloud" | "AI";
  tech: string[];
  features: string[];
  github: string;
  projectLink?: string;
  videoLink?: string;
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/ux", label: "UX" },
  { href: "/development", label: "Development" },
  { href: "/certifications", label: "Certifications" },
  { href: "/skills", label: "Skills" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
] as const;

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com" },
  { label: "GitHub", href: "https://github.com" },
  { label: "Email", href: "mailto:anabhayan@example.com" },
] as const;

export const uxCaseStudies: UxCaseStudy[] = [
  {
    slug: "college-sleep-patterns-diary-study",
    title: "College Sleep Patterns — Diary Study",
    teaser:
      "A 4-day longitudinal diary study examining how nighttime routines impact sleep quality, mood, and academic readiness.",
    problem:
      "Limited understanding of how college student behavior patterns correlate with sleep outcomes and academic performance.",
    research: [
      "Recruited 4 college participants for multi-day diary study.",
      "Collected daily digital diary entries via Google Forms (night and morning).",
      "Gathered mixed-methods data: sleep duration, quality ratings, alertness scores, qualitative reflections.",
      "Analyzed patterns across participants to identify routine-sleep correlations.",
    ],
    process: [
      "Designed 4-day longitudinal study protocol with guided prompts.",
      "Structured data collection around evening routines and morning readiness.",
      "Synthesized quantitative sleep metrics with qualitative emotional/behavioral notes.",
      "Created findings presentation with actionable insights.",
    ],
    wireframes: [
      "Google Forms diary entry interface with contextual prompts.",
      "Data collection timeline and participant touchpoints.",
      "Synthesis framework mapping routine behaviors to sleep outcomes.",
    ],
    finalDesign: [
      "Comprehensive findings presentation with sleep data visualizations.",
      "Participant journey insights highlighting key routine patterns.",
      "Design recommendations for university wellness programs.",
    ],
    outcomes: [
      "Identified 3 key routine behaviors correlating with improved sleep quality.",
      "Generated actionable recommendations for NJIT wellness program design.",
      "Demonstrated rigorous mixed-methods research execution under academic timeline.",
    ],
    tools: ["Google Forms", "Google Sheets", "Presentation Software"],
    skills: ["Diary Study Design", "Mixed Methods Research", "Data Analysis", "Synthesis"],
    artifacts: [
      {
        label: "Sleep Study Deck (PDF)",
        href: "/case-studies/college-sleep-patterns-diary-study/sleep-study-deck.pdf",
        kind: "pdf",
      },
    ],
  },
  {
    slug: "facebook-poke-feature-ux-research",
    title: "Facebook Poke Feature — UX Research & Product Recommendation",
    teaser:
      "A UX research scenario study evaluating the relevance of Facebook's Poke feature among users 25–50, with agile adaptation for rapid delivery.",
    problem:
      "Unclear whether Facebook's Poke feature remains relevant for core demographics or should be retained, redesigned, or removed.",
    research: [
      "Designed semi-structured interview protocol targeting Poke feature users.",
      "Developed targeted recruitment strategy for ages 25–50 demographic.",
      "Conducted interviews to assess feature relevance, usage patterns, and emotional response.",
      "Synthesized findings into data-backed product recommendation.",
    ],
    process: [
      "Created comprehensive UX research scenario and study design document.",
      "Built recruitment strategy aligned with demographic characteristics.",
      "Conducted semi-structured interviews with targeted user segments.",
      "Analyzed qualitative data to support retention/redesign/removal recommendation.",
    ],
    wireframes: [
      "Interview protocol and question guide with demographic targeting.",
      "Research scenario framework documenting assumptions and hypotheses.",
      "Data synthesis model organizing user feedback themes.",
    ],
    finalDesign: [
      "Executive research recommendation with supporting evidence.",
      "Agile adaptation: 3-day rapid survey format for sprint delivery.",
      "Clear next-steps framework for product decision-makers.",
    ],
    outcomes: [
      "Delivered data-backed product recommendation on Poke feature viability.",
      "Demonstrated ability to flex research methods for real-world time constraints.",
      "Provided actionable insights for product strategy discussions.",
    ],
    tools: ["Interview Protocol Design", "Qualitative Analysis", "Presentation"],
    skills: ["Product Strategy", "Research Design", "Qualitative Analysis", "Agile Research"],
    artifacts: [
      {
        label: "Facebook Poke Study Deck (PDF)",
        href: "/case-studies/facebook-poke-feature-ux-research/fb%20poking%20(2).pptx.pdf",
        kind: "pdf",
      },
    ],
  },
  {
    slug: "sports-betting-ethnographic-study",
    title: "Sports Betting Culture — Ethnographic Observation Study",
    teaser:
      "An ethnographic study exploring how sports betting has become woven into everyday social behavior, with user personas for app design.",
    problem:
      "Limited insight into naturalistic sports betting behaviors and the social/emotional drivers behind platform use and engagement.",
    research: [
      "Observed 8 participants (ages 21+) using FanDuel and DraftKings in naturalistic settings.",
      "Collected behavioral and social interaction data through structured observation.",
      "Identified distinct bettor archetypes: emotionally driven fans, analytically minded strategists, social bettors.",
      "Documented usage contexts, decision-making patterns, and emotional triggers.",
    ],
    process: [
      "Designed ethnographic observation protocol with behavioral coding framework.",
      "Conducted field observations across naturalistic betting environments.",
      "Synthesized observations into user personas with distinct motivations and pain points.",
      "Extracted UX insights for sports betting app improvement.",
    ],
    wireframes: [
      "Behavioral observation guide and field notes structure.",
      "User persona archetypes with detailed behavior profiles.",
      "UX insight mapping from observed behaviors to design opportunities.",
    ],
    finalDesign: [
      "5 detailed user personas representing bettor archetypes.",
      "Design insights addressing emotional engagement and decision clarity.",
      "Recommendations for improving app experience across persona segments.",
    ],
    outcomes: [
      "Identified 3 distinct bettor personas with actionable UX implications.",
      "Delivered full research presentation with behavioral observations and design guidance.",
      "Provided foundation for persona-driven product roadmap discussions.",
    ],
    tools: ["Field Observation Protocol", "Persona Development", "Presentation"],
    skills: ["Ethnography", "Behavioral Observation", "Persona Development", "Research Synthesis"],
    artifacts: [
      {
        label: "Sports Betting Study Deck (PDF)",
        href: "/case-studies/sports-betting-ethnographic-study/Group%202%20Sports%20Betting%20Ethnographic%20Study.pdf",
        kind: "pdf",
      },
    ],
  },
  {
    slug: "fitness-app-interview-study",
    title: "Fitness App Engagement — Interview Study & Persona Development",
    teaser:
      "A semi-structured interview study with 8 gym-goers uncovering pain points and preferences for fitness app redesign.",
    problem:
      "Users felt fragmented by too many fitness tools and wanted a single, streamlined app replacing their current toolkit.",
    research: [
      "Conducted semi-structured interviews with 8 gym-goers (ages 19–23).",
      "Explored pain points around routine tracking, app engagement, and gym environment.",
      "Used affinity diagramming to organize findings into 5 thematic clusters.",
      "Identified key insight: users want one free, unified app, not multiple tools.",
    ],
    process: [
      "Designed targeted research questions around workout routines and app expectations.",
      "Conducted individual and group-level interview analysis.",
      "Performed affinity diagramming with 5 core theme clusters.",
      "Developed detailed personas to guide potential product redesign.",
    ],
    wireframes: [
      "Interview guide and discussion prompts.",
      "Affinity diagram with 5 thematic clusters.",
      "Persona template with motivations, pain points, and goals.",
    ],
    finalDesign: [
      "5 comprehensive user personas with behavioral profiles.",
      "Design recommendations addressing fragmentation pain point.",
      "Feature prioritization framework based on persona needs.",
    ],
    outcomes: [
      "Revealed critical insight: consolidation beats feature proliferation.",
      "Created actionable personas for product redesign decision-making.",
      "Provided clear direction for streamlined fitness app strategy.",
    ],
    tools: ["Interview Protocol", "Affinity Diagramming", "Persona Templates"],
    skills: ["User Interviews", "Affinity Diagramming", "Qualitative Analysis", "Persona Development"],
    artifacts: [
      {
        label: "Fitness App Study Deck (PDF)",
        href: "/case-studies/fitness-app-interview-study/Fitness%20Apps.pdf",
        kind: "pdf",
      },
    ],
  },
  {
    slug: "njit-campus-buddy",
    title: "NJIT Campus Buddy",
    teaser:
      "A student-focused campus assistance prototype designed in Figma to improve navigation, accessibility, and everyday campus support.",
    coverImage: "/case-studies/njit-campus-buddy/Journey%20Map.png",
    problem:
      "Students needed a clearer, more supportive way to navigate campus resources, spaces, and accessibility needs during daily routines.",
    research: [
      "Collaborated on user research in the Designing the User Experience course at NJIT.",
      "Identified pain points around campus navigation, accessibility, and support workflows.",
      "Contributed to user personas representing different student needs and contexts.",
      "Mapped journeys to understand where students lost time or faced confusion across campus touchpoints.",
    ],
    process: [
      "Worked with a team to shape the product direction for a campus assistance app prototype.",
      "Translated research findings into journey maps, wireframes, and prototype flows.",
      "Contributed to interface design decisions aimed at clarity, accessibility, and ease of use.",
      "Iterated collaboratively in Figma to meet course goals and presentation requirements.",
    ],
    wireframes: [
      "Campus navigation flows for common student tasks and destinations.",
      "Journey maps showing friction points and support opportunities.",
      "Persona-driven prototype paths for different student use cases.",
    ],
    finalDesign: [
      "A polished Figma prototype focused on campus navigation and student accessibility.",
      "Clearer interface patterns for finding support and navigating campus spaces.",
      "Integrated personas and journey mapping into a cohesive end-to-end concept.",
    ],
    outcomes: [
      "Successfully met all course requirements in the Designing the User Experience class.",
      "Received a perfect evaluation score for the final project.",
      "Strengthened collaborative UX research, wireframing, and prototyping skills in a team setting.",
    ],
    tools: ["Figma", "Journey Mapping", "Persona Development"],
    skills: ["Figma (Software)", "User Experience (UX)", "Wireframing", "User Research"],
    artifacts: [
      {
        label: "Final Project Document",
        href: "/case-studies/njit-campus-buddy/NJIT%20Campus%20Buddy%20_%20Final%20Project%20Document%20and%20Prototype.pdf",
        kind: "pdf",
      },
      {
        label: "Journey Map",
        href: "/case-studies/njit-campus-buddy/Journey%20Map.png",
        kind: "image",
      },
      {
        label: "Personas",
        href: "/case-studies/njit-campus-buddy/UX%20Persona.png",
        kind: "image",
      },
    ],
  },
];

export const devProjects: DevProject[] = [
  {
    title: "Laptop Inventory Management System",
    description:
      "A full-stack inventory management system built for NJIT's IT202 course, supporting complete CRUD functionality with secure authentication and real-time analytics.",
    category: "Full Stack",
    tech: ["JavaScript", "PHP", "MySQL", "AJAX", "XML"],
    features: [
      "Complete CRUD functionality for laptop categories and items",
      "Secure login authentication and session management",
      "Real-time inventory analytics with AJAX and XML",
      "Dynamic DOM updates and search filtering",
      "MySQL database exports and GitHub version control",
    ],
    github: "https://github.com/AnabhayanA/aa3452-IT202-Project",
  },
  {
    title: "CampusSpace – AI-Powered Student Platform",
    description:
      "An AI-driven platform helping students locate available rooms and nearest campus outlets in real-time with interactive maps and user-friendly interface.",
    category: "Full Stack",
    tech: ["React", "Next.js", "Node.js", "Google Maps API"],
    features: [
      "Real-time room availability suggestions",
      "Interactive campus maps with outlet locations",
      "Crowdsourced availability reporting",
      "Full-stack responsive design",
      "Accessibility-first implementation",
    ],
    github: "https://github.com/AnabhayanA/CampusSpace",
  },
  {
    title: "IS117 Final Project – Multi-Site Web Portfolio System",
    description:
      "A comprehensive multi-site web platform with four interconnected websites featuring responsive design, accessibility, and SEO optimization deployed on GitHub Pages.",
    category: "Frontend",
    tech: ["HTML5", "CSS3", "Vanilla JavaScript", "Semantic HTML"],
    features: [
      "Four interconnected responsive websites",
      "Advanced CSS3 and interactive JavaScript",
      "Full accessibility and SEO optimization",
      "Cross-browser compatibility",
      "GitHub Pages deployment with Lighthouse 95–98 scores",
    ],
    github: "https://github.com/AnabhayanA/IS117-Final-Project",
    projectLink: "https://anabhayana.github.io/IS117-Final-Project/",
  },
  {
    title: "ALPFA NJIT Chapter Website",
    description:
      "Front-end developer for ALPFA Inc's official NJIT chapter website, building React/Next.js components with Google Calendar integration and responsive design.",
    category: "Frontend",
    tech: ["React", "Next.js", "Tailwind CSS", "Google Calendar API", "GitHub"],
    features: [
      "Interactive front-end components with React",
      "Google Calendar API event tracking integration",
      "Responsive design with accessible UI",
      "Team collaboration via GitHub",
      "Smooth user experience and fast load times",
    ],
    github: "https://github.com/nonnair/alpfa-njit",
    projectLink: "https://nonnair.github.io/alpfa-njit/",
  },
  {
    title: "Interactive Chatbox Web Application",
    description:
      "A real-time chat application demonstrating client-server communication and event-driven programming with clean, intuitive user interface design.",
    category: "Full Stack",
    tech: ["Java", "JavaScript", "Networking", "Socket Programming"],
    features: [
      "Real-time bidirectional communication",
      "Clean and intuitive UI design",
      "Client-server architecture",
      "Event-driven programming patterns",
      "Seamless messaging experience",
    ],
    github: "https://github.com/AnabhayanA/aa3452-IT114-005",
    videoLink: "https://www.youtube.com/watch?v=ga-IJvfMCYM",
  },
];

export const certifications = [
  {
    title: "Microsoft Azure Essentials Professional Certificate",
    issuer: "Microsoft & LinkedIn",
    date: "May 2026",
    skills: ["Microsoft Azure", "Cloud Computing"],
    link: "https://www.credential.net/a576f2ddf95ead1c968ef6986765935f3b50f4ce3721cffe2b21bdd0c872b156",
    download: "/certs/CertificateOfCompletion_Microsoft Azure Essentials Professional Certificate by Microsoft and LinkedIn.pdf",
    downloadSize: "75 KB",
    logoLabel: "MS",
    logoClassName: "bg-muted text-foreground",
  },
  {
    title: "UX Research Foundations",
    issuer: "LinkedIn",
    date: "May 2026",
    skills: ["UX Research", "User Experience (UX)"],
    link: "https://www.linkedin.com/learning/certificates/ed52e3104994106e0d5db664ccc1184ba7cb05feddb18797f6b705b81ce85a3a",
    download: "/certs/CertificateOfCompletion_UX Foundations Research.pdf",
    downloadSize: "62 KB",
    logoLabel: "in",
    logoClassName: "bg-muted text-foreground",
  },
  {
    title: "Figma Essential Training",
    issuer: "LinkedIn",
    date: "May 2026",
    skills: ["Figma (Software)"],
    link: "https://www.linkedin.com/learning/certificates/10ee048f051aa2377deafeb467f43524f04656056e5d1ed5f9978628ca43d2c3",
    download: "/certs/CertificateOfCompletion_Figma Essential Training.pdf",
    downloadSize: "61 KB",
    logoLabel: "in",
    logoClassName: "bg-muted text-foreground",
  },
  {
    title: "RCR Basic Course",
    issuer: "CITI Program",
    date: "Sep 2025 · Expires Sep 2028",
    skills: ["Research Ethics", "Professional Conduct", "Compliance"],
    link: "https://citiprogram.org",
    download: "/certs/citiCompletionCertificate_14851401_72257546.pdf",
    downloadSize: "111 KB",
    logoLabel: "CITI",
    logoClassName: "bg-muted text-foreground",
  },
] as const;

export const skillCategories = [
  {
    title: "UX & Design",
    skills: ["Figma", "UX Research", "Wireframing", "Prototyping", "Design Systems"],
  },
  {
    title: "Frontend Development",
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Next.js"],
  },
  {
    title: "Cloud & Technology",
    skills: ["Azure", "Cloud Fundamentals", "AI Fundamentals", "MySQL"],
  },
  {
    title: "Research & Collaboration",
    skills: ["Interview Analysis", "Diary Studies", "Agile Methods", "Jira"],
  },
  {
    title: "Tools & Platforms",
    skills: ["GitHub", "Notion", "Power BI", "Figma", "VS Code"],
  },
] as const;

export const quickStats = [
  { label: "UX Research Studies", value: "5" },
  { label: "Technical Projects", value: "5" },
  { label: "Certifications", value: "4" },
  { label: "Core Skill Areas", value: "5" },
] as const;
