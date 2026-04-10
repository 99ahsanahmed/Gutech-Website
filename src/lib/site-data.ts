import type { Metadata } from 'next';

export type HeroAction = {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'light';
  external?: boolean;
};

export type Fact = {
  label: string;
  value: string;
};

export type DetailSection = {
  title: string;
  items: string[];
};

export type DetailLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type Program = {
  slug: string;
  title: string;
  shortTitle: string;
  credential: string;
  category: 'Undergraduate' | 'Graduate';
  badge: string;
  summary: string;
  description: string;
  overview: string;
  imageLabel: string;
  imageSrc?: string;
  facts: Fact[];
  sections: DetailSection[];
  links: DetailLink[];
};

export type Department = {
  slug: string;
  title: string;
  shortTitle: string;
  type: string;
  badge: string;
  summary: string;
  description: string;
  overview: string;
  imageLabel: string;
  imageSrc?: string;
  facts: Fact[];
  sections: DetailSection[];
  links: DetailLink[];
};

export type FacultyMember = {
  name: string;
  role: string;
  school: string;
  expertise: string;
  description: string;
  imageSrc?: string;
  imagePosition?: string;
};

export type NewsItem = {
  title: string;
  category: string;
  subtitle: string;
  summary: string;
  details: string;
  impact: string;
  channel: string;
  href?: string;
  dateLabel: string;
  imageLabel: string;
  imageSrc?: string;
  imageAlt?: string;
};

export const siteConfig = {
  name: 'GU TECH',
  legalName: 'GU TECH | Al Ghazali University',
  tagline:
    'Technology-focused education with visible pathways into industry, research, entrepreneurship, and executive learning.',
  campusLine: 'Al Ghazali University, Main Campus',
  address: 'B-2, Block 12, Gulistan-e-Johar, Karachi, Pakistan',
  email: 'admissions@gutech.edu.pk',
  infoEmail: 'info@gutech.edu.pk',
  phone: '0311-4488324',
  whatsappHref:
    'https://wa.me/923114488324?text=Assalamualaikum%20GU%20TECH%2C%20I%20would%20like%20to%20know%20more%20about%20admissions.',
  applyHref: 'https://alghazaliuniversity.arpl.pk/',
  feeAccount: {
    bank: 'Faysal Bank Limited',
    title: 'Al Ghazali University',
    number: '3511436000002425',
    applicationFee: 'PKR 1,000',
  },
  socials: [
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/company/gutechuniversity/',
      external: true,
    },
    { label: 'Instagram', href: 'https://instagram.com/gutech.official/', external: true },
    { label: 'Facebook', href: 'https://www.facebook.com/gutech.official', external: true },
    { label: 'YouTube', href: 'https://www.youtube.com/@GUTechOfficial', external: true },
  ],
};

export const navigation = {
  primary: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Programs', href: '/programs' },
    { label: 'Departments', href: '/departments' },
    { label: 'Admissions', href: '/admissions' },
    { label: 'Faculty', href: '/faculty' },
    { label: 'Executive Learning', href: '/executive-learning' },
    { label: 'News', href: '/news' },
    { label: 'Contact', href: '/contact' },
  ],
  programLinks: [
    { label: 'BS Computer Science', href: '/programs/bs-cs' },
    { label: 'BBA', href: '/programs/bba' },
    { label: 'MS Data Science', href: '/programs/ms-ds' },
    { label: 'MS Artificial Intelligence', href: '/programs/ms-ai' },
    { label: 'MS Islamic Banking & Finance', href: '/programs/ms-ibf' },
  ],
  departmentLinks: [
    { label: 'Computer Science', href: '/departments/cs' },
    { label: 'Management Sciences', href: '/departments/management-sciences' },
    { label: 'Design Thinking Resources', href: '/departments/design-thinking' },
    { label: 'Continuing Education Programs', href: '/departments/continuing-education' },
    { label: 'I.I.C', href: '/departments/iic' },
  ],
};

export const homeHighlights = [
  {
    title: 'Earn As You Learn',
    text: 'The current GU TECH story combines a 2+2 structure, entrepreneurial exposure, and practical execution so students can start building their careers before graduation.',
  },
  {
    title: 'Faculty From Top Schools',
    text: 'Faculty profiles reference experience across FAST-NU, MIT, IBA, KSBL, KIET, and other recognized institutions.',
  },
  {
    title: 'Tech Inspired, Market Driven',
    text: 'Programs are organized around software, data, management, innovation, finance, and executive learning rather than isolated silos.',
  },
];

export const homeMetrics: Fact[] = [
  { label: 'Current programs', value: '5' },
  { label: 'Academic and innovation units', value: '5' },
  { label: 'Inquiry channels', value: 'Chatbot, WhatsApp, and form' },
];

export const aboutPillars = [
  {
    title: 'Purpose-led technology education',
    text: 'GU TECH blends technical skills, communication, ethical grounding, and market relevance into one academic identity.',
  },
  {
    title: 'Clear information architecture',
    text: 'Programs, departments, faculty, admissions, and executive offerings are organized so prospective students can understand the institution quickly.',
  },
  {
    title: 'Built for growth',
    text: 'The structure makes room for new graduate pathways, continuing education, and design thinking resources without breaking navigation.',
  },
];

export const admissionsSteps: string[] = [
  'Submit your application through the official admissions portal.',
  'Pay the application or test fee and share the receipt by WhatsApp or email.',
  'Receive your test pass, schedule details, and next-step instructions.',
  'Complete the assessment, interview, and final document process.',
];

export const admissionSupport = [
  {
    title: 'Application and GSAT guidance',
    text: 'Admissions messaging is consolidated into one page with process steps, fee guidance, required documents, and direct inquiry actions.',
  },
  {
    title: 'Scholarship visibility',
    text: 'Current GU TECH scholarship messaging highlights merit-based tuition waivers from 90% to 50% for selected applicants.',
  },
  {
    title: 'Fast handoff channels',
    text: 'Every admissions section routes students toward WhatsApp, email, and the inquiry form so the path from interest to action is short.',
  },
];

export const executiveLearningTracks = [
  {
    title: 'Leadership in Digital Transformation',
    text: 'Short modules for leaders who need a practical view of AI, automation, process improvement, and technology adoption.',
  },
  {
    title: 'Analytics for Decision Makers',
    text: 'A track for directors, managers, and founders who want to interpret dashboards, customer data, and operational signals with confidence.',
  },
  {
    title: 'Product, Design, and Innovation Labs',
    text: 'Hands-on sessions using design thinking, rapid prototyping, and facilitation to solve real institutional or commercial problems.',
  },
  {
    title: 'Custom Corporate Cohorts',
    text: 'Tailored executive education delivered in short bursts for HR teams, leadership groups, and high-growth organizations.',
  },
];

export const programs: Program[] = [
  {
    slug: 'bs-cs',
    title: 'BS Computer Science',
    shortTitle: 'BS CS',
    credential: 'Bachelor of Science',
    category: 'Undergraduate',
    badge: 'Current flagship program',
    summary: 'A modern computing degree shaped around software, data, AI, product thinking, and career readiness.',
    description:
      'GU TECH positions BS Computer Science as a flagship for students who want rigorous technical foundations with stronger professional outcomes.',
    overview:
      'This page expands the official BS Computer Science positioning into a complete degree story. It highlights computing fundamentals, applied labs, communication, innovation exposure, and the earn-as-you-learn mindset already visible in the current site.',
    imageLabel: 'BS Computer Science classes and labs',
    imageSrc: '/programs-hero.jpg',
    facts: [
      { label: 'Program type', value: 'On-campus undergraduate degree' },
      { label: 'Best for', value: 'Software, AI, data, and product-minded students' },
      { label: 'Signature angle', value: 'Earn-as-you-learn ecosystem with I.I.C exposure' },
    ],
    sections: [
      {
        title: 'Core study areas',
        items: [
          'Programming fundamentals, data structures, and software engineering',
          'Database systems, APIs, cloud tooling, and applied web technologies',
          'Artificial intelligence, data science foundations, and responsible computing',
          'Communication, teamwork, and project-based delivery',
        ],
      },
      {
        title: 'What students graduate with',
        items: [
          'A stronger base in algorithms, systems thinking, and modern development workflows',
          'Hands-on project experience suitable for internships and junior technical roles',
          'Exposure to entrepreneurship, portfolio building, and applied research directions',
        ],
      },
      {
        title: 'Why this page is stronger',
        items: [
          'Clearer outcomes and focus areas instead of a short placeholder block',
          'Better links into admissions, faculty, and related departments',
          'Professional media slots that can be replaced later without changing the layout',
        ],
      },
    ],
    links: [
      { label: 'Admissions process', href: '/admissions' },
      { label: 'Department of Computer Science', href: '/departments/cs' },
      { label: 'Contact admissions', href: '/contact' },
    ],
  },
  {
    slug: 'bba',
    title: 'BBA',
    shortTitle: 'BBA',
    credential: 'Bachelor of Business Administration',
    category: 'Undergraduate',
    badge: 'Current management program',
    summary: 'A business program for students who need management fundamentals with stronger analytical and communication depth.',
    description:
      'The BBA page positions the degree as a management pathway connected to entrepreneurship, finance, analytics, and leadership execution.',
    overview:
      'GU TECH already presents BBA as a core offer. This expanded version strengthens the page with clearer business outcomes, modern subject framing, and stronger links to management sciences, startup activity, and executive communication.',
    imageLabel: 'BBA classroom and student presentations',
    imageSrc: '/programs-hero.jpg',
    facts: [
      { label: 'Program type', value: 'On-campus undergraduate degree' },
      { label: 'Best for', value: 'Future managers, founders, and business analysts' },
      { label: 'Connected unit', value: 'Department of Management Sciences' },
    ],
    sections: [
      {
        title: 'Academic focus',
        items: [
          'Management, marketing, finance, economics, and organizational behavior',
          'Business communication, leadership, and decision-making frameworks',
          'Entrepreneurship, strategy, and problem solving with a practical institutional lens',
        ],
      },
      {
        title: 'Professional outcomes',
        items: [
          'Readiness for roles in operations, sales, HR, business support, and startups',
          'A stronger base for executive education, MBAs, and industry certifications later',
          'More confidence in presentations, teamwork, and market-facing communication',
        ],
      },
      {
        title: 'Why this page matters',
        items: [
          'It gives management sciences the same polish as technical programs',
          'It improves visibility and mobile readability for applicants',
          'It creates a clearer bridge between BBA, design thinking, and executive learning',
        ],
      },
    ],
    links: [
      { label: 'Department of Management Sciences', href: '/departments/management-sciences' },
      { label: 'Executive learning', href: '/executive-learning' },
      { label: 'Talk to admissions', href: '/contact' },
    ],
  },
  {
    slug: 'ms-ibf',
    title: 'MS Islamic Banking & Finance',
    shortTitle: 'MS IBF',
    credential: 'Master of Science',
    category: 'Graduate',
    badge: 'Current postgraduate offering',
    summary: 'A postgraduate pathway connecting ethical finance, banking practice, regulation, and leadership.',
    description:
      'This page develops the official postgraduate offering into a clearer, more polished graduate narrative for prospective students.',
    overview:
      'MS Islamic Banking & Finance is already visible on the GU TECH site. This page gives it a stronger structure, clearer academic framing, and a layout consistent with the rest of the website.',
    imageLabel: 'Finance seminars and postgraduate sessions',
    imageSrc: '/executive-hero.jpg',
    facts: [
      { label: 'Program type', value: 'On-campus graduate degree' },
      { label: 'Best for', value: 'Finance professionals and postgraduate learners' },
      { label: 'Program angle', value: 'Ethical and market-aware financial education' },
    ],
    sections: [
      {
        title: 'Graduate focus areas',
        items: [
          'Islamic finance principles, banking structures, and financial management',
          'Research, policy understanding, governance, and institutional decision making',
          'Applied casework for students who want to operate in modern financial environments',
        ],
      },
      {
        title: 'Student outcomes',
        items: [
          'A stronger grasp of contemporary financial systems grounded in ethical frameworks',
          'Better readiness for banking, compliance, finance operations, and academic progression',
          'Improved analytical communication for boardroom and regulatory contexts',
        ],
      },
      {
        title: 'How this page helps',
        items: [
          'The program now sits inside one consistent graduate presentation system',
          'Prospective students can move directly into contact, admissions, and related programs',
          'The interface is cleaner, faster, and easier for applicants and families to navigate',
        ],
      },
    ],
    links: [
      { label: 'Admissions', href: '/admissions' },
      { label: 'Contact admissions', href: '/contact' },
      { label: 'Explore BBA', href: '/programs/bba' },
    ],
  },
  {
    slug: 'ms-ds',
    title: 'MS Data Science',
    shortTitle: 'MS DS',
    credential: 'Master of Science',
    category: 'Graduate',
    badge: 'Planned graduate intake',
    summary: 'A planned graduate pathway for analytics, machine learning, and data-led decision making.',
    description:
      "This page presents a planned postgraduate track aligned with GU TECH's emphasis on data and AI.",
    overview:
      'The official GU TECH ecosystem already highlights AI, data science, and applied research through faculty expertise and public-facing announcements. This page packages that direction into a polished MS Data Science route with clear planned-intake wording.',
    imageLabel: 'Data science labs and postgraduate workshops',
    imageSrc: '/programs-hero.jpg',
    facts: [
      { label: 'Status', value: 'Planned program track' },
      { label: 'Best for', value: 'Graduates seeking advanced analytics and ML depth' },
      { label: 'Institutional fit', value: "Aligned with GU TECH's AI and data direction" },
    ],
    sections: [
      {
        title: 'Suggested study areas',
        items: [
          'Statistical modeling, data engineering, machine learning, and experimentation',
          'Data storytelling, dashboards, and applied business or healthcare analytics',
          'Research methods, ethical AI practices, and project delivery in real-world contexts',
        ],
      },
      {
        title: 'Graduate outcomes',
        items: [
          'Readiness for analyst, BI, data science, and applied ML roles',
          'Stronger ability to turn raw data into institutional or commercial insight',
          "A more visible postgraduate route for the university's technology audience",
        ],
      },
      {
        title: 'Why this page works',
        items: [
          "It extends the university's graduate structure while staying grounded in GU TECH's direction",
          'It shows how future intakes can be incorporated cleanly into the architecture',
          'It creates a credible graduate expansion story without inaccurate admission claims',
        ],
      },
    ],
    links: [
      { label: 'MS Artificial Intelligence', href: '/programs/ms-ai' },
      { label: 'Computer Science department', href: '/departments/cs' },
      { label: 'Discuss future intakes', href: '/contact' },
    ],
  },
  {
    slug: 'ms-ai',
    title: 'MS Artificial Intelligence',
    shortTitle: 'MS AI',
    credential: 'Master of Science',
    category: 'Graduate',
    badge: 'Planned graduate intake',
    summary: 'A future-facing graduate concept built around machine intelligence, automation, and applied AI systems.',
    description:
      "This page presents a polished AI program concept using GU TECH's institutional direction around AI leadership and technical growth.",
    overview:
      'The MS Artificial Intelligence page is intentionally positioned as a planned graduate pathway. It leverages institutional momentum around AI and digital transformation, then presents a coherent academic story around machine learning, intelligent systems, and applied AI problem solving.',
    imageLabel: 'AI labs and postgraduate seminars',
    imageSrc: '/programs-hero.jpg',
    facts: [
      { label: 'Status', value: 'Planned program track' },
      { label: 'Best for', value: 'Graduates focused on ML, AI systems, and applied automation' },
      { label: 'Use case', value: 'A clear extension of the university postgraduate portfolio' },
    ],
    sections: [
      {
        title: 'Suggested study areas',
        items: [
          'Machine learning, deep learning, intelligent systems, and model deployment',
          'Natural language processing, computer vision, and automation workflows',
          'AI product thinking, ethics, evaluation, and responsible implementation',
        ],
      },
      {
        title: 'Graduate outcomes',
        items: [
          'Preparation for AI engineering, ML ops, research support, and product analytics roles',
          'Ability to frame and communicate AI solutions in institutional or startup environments',
          'A stronger bridge between undergraduate computing and higher-value specialization',
        ],
      },
      {
        title: 'Why it strengthens the site',
        items: [
          'It gives the site an ambitious but believable graduate roadmap',
          'It complements faculty positioning around AI and digital transformation',
          'It provides a clearer institutional direction beyond current pages',
        ],
      },
    ],
    links: [
      { label: 'MS Data Science', href: '/programs/ms-ds' },
      { label: 'Innovation & Incubation Centre', href: '/departments/iic' },
      { label: 'Request more information', href: '/contact' },
    ],
  },
];
export const departments: Department[] = [
  {
    slug: 'cs',
    title: 'Department of Computer Science',
    shortTitle: 'Computer Science',
    type: 'Academic department',
    badge: 'Current academic unit',
    summary: "The central academic unit behind GU TECH's computing, software, AI, and data-led direction.",
    description:
      'This department page anchors BS Computer Science and future-facing graduate pathways in one coherent academic hub.',
    overview:
      "The Department of Computer Science is presented as the engine room of GU TECH's technology identity. It supports program delivery, faculty visibility, innovation work, and the institution's emphasis on modern computing, AI, and applied problem solving.",
    imageLabel: 'Computer Science department and coding cohorts',
    imageSrc: '/programs-hero.jpg',
    facts: [
      { label: 'Primary role', value: 'Academic delivery and technical direction' },
      { label: 'Connected pages', value: 'BS CS, MS DS, MS AI, I.I.C' },
      { label: 'Strength', value: 'Strong overlap with software, AI, and applied computing' },
    ],
    sections: [
      {
        title: 'Department focus',
        items: [
          'Computing foundations, software development, and project-led technical learning',
          'AI, data, and digital systems as visible long-term growth areas',
          'Faculty visibility, interdisciplinary collaboration, and innovation support',
        ],
      },
      {
        title: 'Student experience',
        items: [
          'A clearer route from undergraduate learning into research, internships, and startup exploration',
          'Close proximity to innovation narratives through the I.I.C and proposed graduate extensions',
          'A stronger public-facing presentation for prospective students and families',
        ],
      },
      {
        title: 'What this page adds',
        items: [
          'A stronger departmental identity instead of a thin placeholder page',
          'Direct navigation into linked programs, faculty, admissions, and contact actions',
          'A layout designed to remain useful as the department grows',
        ],
      },
    ],
    links: [
      { label: 'BS Computer Science', href: '/programs/bs-cs' },
      { label: 'Faculty directory', href: '/faculty' },
      { label: 'Admissions', href: '/admissions' },
    ],
  },
  {
    slug: 'management-sciences',
    title: 'Department of Management Sciences',
    shortTitle: 'Management Sciences',
    type: 'Academic department',
    badge: 'Current academic unit',
    summary: 'The management and business-facing department connecting undergraduate learning with leadership and executive practice.',
    description:
      "This page gives management sciences the same level of polish and visibility as computing, which helps balance the institution's broader academic identity.",
    overview:
      "The Department of Management Sciences supports GU TECH's BBA offering and helps position the university as more than a single-discipline technology brand. It acts as a bridge between academic business training, design thinking, entrepreneurship, and executive learning.",
    imageLabel: 'Management sciences lectures and strategy workshops',
    imageSrc: '/executive-hero.jpg',
    facts: [
      { label: 'Primary role', value: 'Business, management, and leadership education' },
      { label: 'Connected pages', value: 'BBA, Executive Learning, Design Thinking' },
      { label: 'Opportunity', value: 'Stronger visibility for non-technical audiences' },
    ],
    sections: [
      {
        title: 'Department focus',
        items: [
          'Management, communication, organization, and market-facing business education',
          'Entrepreneurial and operational thinking connected to real institutional contexts',
          'Executive communication and decision-making for modern workplaces',
        ],
      },
      {
        title: 'How students benefit',
        items: [
          'A clearer route from BBA into entrepreneurship, leadership, and executive education',
          'Greater confidence in presentations, collaboration, and strategic problem framing',
          'Better cross-linking between academic study and practical professional growth',
        ],
      },
      {
        title: 'Why this page matters',
        items: [
          'It reduces the design imbalance that often leaves management pages underdeveloped',
          "It aligns the department with the university's modern institutional style",
          'It makes future page additions easier without rebuilding the structure again',
        ],
      },
    ],
    links: [
      { label: 'BBA', href: '/programs/bba' },
      { label: 'Executive learning', href: '/executive-learning' },
      { label: 'Contact the university', href: '/contact' },
    ],
  },
  {
    slug: 'design-thinking',
    title: 'Design Thinking Resources',
    shortTitle: 'Design Thinking',
    type: 'Resource hub',
    badge: 'Interdisciplinary resource hub',
    summary: 'A practical resource page for innovation methods, facilitation, ideation, and user-centered problem solving.',
    description:
      'This page turns design thinking into a structured, reusable institutional resource hub.',
    overview:
      'Rather than treating design thinking as a vague add-on, this page positions it as a working resource library for students, faculty, founders, and executive cohorts. It clearly demonstrates new content architecture beyond the existing university pages.',
    imageLabel: 'Design thinking workshops and ideation sessions',
    imageSrc: '/executive-hero.jpg',
    facts: [
      { label: 'Page type', value: 'New resource-focused content area' },
      { label: 'Users', value: 'Students, faculty, startups, and executive cohorts' },
      { label: 'Best use', value: 'Research, workshops, projects, and innovation facilitation' },
    ],
    sections: [
      {
        title: 'Resource categories',
        items: [
          'Empathy interviews, stakeholder mapping, and problem-framing templates',
          'Ideation methods, prioritization frameworks, and rapid concept testing guides',
          'Prototype planning, feedback loops, and reflection tools for iterative teams',
        ],
      },
      {
        title: 'How it supports the institution',
        items: [
          'It gives GU TECH a modern innovation language beyond standard program pages',
          'It connects management, computing, incubation, and executive education under one practice',
          'It creates a clear place for downloadable material, workshops, and case studies later',
        ],
      },
      {
        title: 'Why this page matters',
        items: [
          'It gives students and faculty a dedicated method library for project work',
          'It shows thoughtful information architecture instead of simple route expansion',
          'It adds a structurally new academic resource area, not only static information pages',
        ],
      },
    ],
    links: [
      { label: 'Innovation & Incubation Centre', href: '/departments/iic' },
      { label: 'Executive learning', href: '/executive-learning' },
      { label: 'Contact for workshops', href: '/contact' },
    ],
  },
  {
    slug: 'continuing-education',
    title: 'Continuing Education Programs',
    shortTitle: 'Continuing Education',
    type: 'Professional learning unit',
    badge: 'Professional learning unit',
    summary: 'Short-format learning designed for professionals, alumni, founders, and teams who need focused upskilling.',
    description:
      "This page translates continuing education into a credible offering tied to GU TECH's executive learning direction.",
    overview:
      'GU TECH already signals executive learning through GELC. This continuing education page expands that idea into a clearer catalog-style entry point for workshops, certificate tracks, and industry short courses.',
    imageLabel: 'Executive classrooms and weekend workshops',
    imageSrc: '/executive-hero.jpg',
    facts: [
      { label: 'Format', value: 'Weekend, short-course, and certificate-friendly' },
      { label: 'Audience', value: 'Professionals, alumni, startups, and teams' },
      { label: 'Connected unit', value: 'Executive learning and GELC-style offerings' },
    ],
    sections: [
      {
        title: 'Suggested offerings',
        items: [
          'Weekend intensives in AI literacy, analytics, leadership, and digital tools',
          'Short certificates in product thinking, communication, and innovation practice',
          'Team-based upskilling modules for organizations that need practical learning fast',
        ],
      },
      {
        title: 'Why it matters',
        items: [
          'It shows that GU TECH can serve more than full-time degree students',
          'It extends the university brand into lifelong learning and market-responsive education',
          'It supports executive learning, design thinking, and industry outreach in one place',
        ],
      },
      {
        title: 'Institutional value',
        items: [
          'This page broadens GU TECH beyond full-time degree pathways',
          "It improves the breadth of the site without feeling disconnected from the university brand",
          'It creates a credible location for future schedules, catalogs, and registrations',
        ],
      },
    ],
    links: [
      { label: 'Executive learning', href: '/executive-learning' },
      { label: 'Design thinking resources', href: '/departments/design-thinking' },
      { label: 'Request a brochure', href: '/contact' },
    ],
  },
  {
    slug: 'iic',
    title: 'Innovation & Incubation Centre',
    shortTitle: 'I.I.C',
    type: 'Innovation unit',
    badge: 'Current strategic initiative',
    summary: "The university's innovation-facing space for startup thinking, student ventures, mentorship, and applied experimentation.",
    description:
      'The I.I.C page is upgraded from a basic placeholder into a convincing innovation destination that supports the earn-as-you-learn story.',
    overview:
      "GU TECH already references its Innovation & Incubation Centre as part of its student value proposition. This page expands that into a proper innovation narrative, showing how ideas move from classroom exposure into startup experimentation, mentorship, and public-facing student work.",
    imageLabel: 'Startup pitch sessions and incubation workspace',
    imageSrc: '/executive-hero.jpg',
    facts: [
      { label: 'Primary role', value: 'Innovation, startup exposure, and venture support' },
      { label: 'Connected pages', value: 'BS CS, BBA, Design Thinking, Executive Learning' },
      { label: 'Story value', value: 'Supports the earn-as-you-learn differentiator' },
    ],
    sections: [
      {
        title: 'What the I.I.C enables',
        items: [
          'Project ideation, mentorship, and cross-disciplinary team formation',
          'Early venture thinking for students who want to test products or services',
          'A visible innovation layer that differentiates the institution from brochure-only competitors',
        ],
      },
      {
        title: 'How it supports students',
        items: [
          'A practical extension of classroom learning into startup and problem-solving contexts',
          'A shared arena for business and technology students to collaborate',
          'A stronger way for the site to communicate ambition, not only listings',
        ],
      },
      {
        title: 'Why it strengthens the university website',
        items: [
          'It makes the home page promise feel real rather than decorative',
          'It improves navigation between academics, resources, and innovation stories',
          "It gives prospective students a clearer view of GU TECH's entrepreneurial identity",
        ],
      },
    ],
    links: [
      { label: 'BS Computer Science', href: '/programs/bs-cs' },
      { label: 'BBA', href: '/programs/bba' },
      { label: 'Design thinking resources', href: '/departments/design-thinking' },
    ],
  },
];

export const facultyMembers: FacultyMember[] = [
  {
    name: 'Dr. Rauf Ahmed Shams Malick',
    role: 'Professor / Chairman, Computer Science',
    school: 'PhD, University of Karachi',
    expertise: 'Artificial intelligence, data-driven decision making, digital transformation',
    description: "A senior academic and industry-facing leader whose profile strongly supports GU TECH's AI and computing identity.",
    imageSrc: '/DR_RM.avif',
    imagePosition: '50% 4%',
  },
  {
    name: 'Twaha Ahmed Minai',
    role: 'Assistant Professor, Computer Science',
    school: 'MS, KIET',
    expertise: 'Programming, software development, and student-centered teaching',
    description: 'Represents the younger technical teaching profile visible on the current university site.',
    imageSrc: '/Dr_Twaha.avif',
  },
  {
    name: 'Dr. Muhammad Shahzad',
    role: 'Faculty, Computer Science',
    school: 'Doctoral faculty profile',
    expertise: 'Applied computing and technical instruction',
    description: "Supports the university's emphasis on qualified technical faculty and academic mentoring.",
    imageSrc: '/Dr_shahzad.avif',
  },
  {
    name: 'Dr. Khubaib Ahmed',
    role: 'Faculty, Computer Science',
    school: 'Doctoral faculty profile',
    expertise: 'Technical education, research supervision, and computing depth',
    description: 'Adds depth to the department and strengthens the public faculty directory.',
    imageSrc: '/Dr Khubaib.avif',
  },
  {
    name: 'Dr. Javaid Abdul Ghani',
    role: 'Faculty Member',
    school: 'Doctoral faculty profile',
    expertise: 'Academic leadership and higher education practice',
    description: 'Included to give the faculty page stronger institutional breadth.',
    imageSrc: '/DrJG.avif',
  },
  {
    name: 'Syed Taloot Munim',
    role: 'Faculty Member',
    school: 'Professional faculty profile',
    expertise: 'Applied instruction, student development, and departmental support',
    description: 'Helps diversify the faculty listing beyond a purely professor-level display.',
    imageSrc: '/Syed Taloot Munim.avif',
    imagePosition: '50% 3%',
  },
  {
    name: 'Dr. Zeeshan Ahmed',
    role: 'Faculty / Institutional contributor',
    school: 'Official faculty listing',
    expertise: 'Leadership-oriented student engagement and holistic learning',
    description: 'Referenced in official GU TECH news and faculty content, especially around student development sessions.',
  },
  {
    name: 'Dr. Basharat Javed',
    role: 'Faculty Member',
    school: 'Official faculty listing',
    expertise: 'Management, leadership, and higher education contribution',
    description: 'Broadens the faculty directory beyond computing-only representation.',
  },
];

export const newsItems: NewsItem[] = [
  {
    title: "Dr. Zeeshan's Tarbiyah Session",
    category: 'Campus Life',
    subtitle: 'Student Development Session',
    summary:
      'Dr. Zeeshan conducted an insightful Tarbiyah session at GU TECH, guiding students on personal growth, values, and leadership.',
    details:
      'Positioned as a values-led student engagement moment, this session reflects the university’s academic plus character-building direction. The discussion format highlights mentorship, reflection, and practical leadership habits for students.',
    impact:
      'Student impact: stronger personal leadership orientation and a visible mentorship culture within campus learning.',
    channel: 'Official GU TECH News & Updates',
    href: 'https://www.gutech.edu.pk/news-and-updates',
    dateLabel: 'Current Site Highlight',
    imageLabel: 'Tarbiyah session with students',
    imageSrc:
      'https://static.wixstatic.com/media/a93df4_fda6c418c6da44aeb2257a5f3a38d46e~mv2.png/v1/crop/x_0%2Cy_92%2Cw_1080%2Ch_895/fill/w_1200%2Ch_900%2Cal_c%2Cq_85%2Cusm_0.66_1.00_0.01%2Cenc_auto/2.png',
    imageAlt: 'Dr. Zeeshan conducting Tarbiyah session with GU TECH students',
  },
  {
    title: 'MOU Signing with GYB Commerce',
    category: 'Partnerships',
    subtitle: 'Industry Collaboration',
    summary:
      'This collaboration creates opportunities for students to engage in innovative projects including ERP systems, app development, cloud infrastructure, and AI.',
    details:
      'The announcement frames GU TECH’s industry-aligned model through practical collaboration. It connects academic learning with enterprise-oriented project exposure, strengthening applied pathways for students.',
    impact:
      'Student impact: real project exposure in enterprise systems and digital infrastructure domains.',
    channel: 'Official GU TECH News & Updates',
    href: 'https://www.gutech.edu.pk/news-and-updates',
    dateLabel: 'Recent Institutional Update',
    imageLabel: 'MOU signing ceremony',
    imageSrc:
      'https://static.wixstatic.com/media/a93df4_c707274953e645fea4034088257271a2~mv2.jpg/v1/crop/x_0%2Cy_0%2Cw_3000%2Ch_2487/fill/w_1200%2Ch_900%2Cal_c%2Cq_80%2Cusm_0.66_1.00_0.01%2Cenc_auto/MOU%20Signing%20-%20GYB%20Commerce-01.jpg',
    imageAlt: 'MOU signing session between GU TECH and GYB Commerce',
  },
  {
    title: 'AI Talent Accelerator Program',
    category: 'Community and Outreach',
    subtitle: 'Future Skills Program',
    summary:
      'GU TECH’s one-week AI Talent Accelerator introduces intermediate students to AI, technology, innovation, and leadership.',
    details:
      'The program combines Design Thinking, Cybersecurity Fundamentals, AI in Healthcare, Python Programming, and Web Development. It is structured as an early pipeline initiative for technical confidence and career awareness.',
    impact:
      'Student impact: practical skill foundation and early career-direction exposure through guided hands-on learning.',
    channel: 'Official GU TECH News & Updates',
    href: 'https://www.gutech.edu.pk/news-and-updates',
    dateLabel: 'December 2025',
    imageLabel: 'AI Talent Accelerator brochure',
    imageSrc:
      'https://static.wixstatic.com/media/a93df4_add7cb8160744aae88b2d5ed176cadf4~mv2.jpg/v1/fill/w_1200%2Ch_1550%2Cal_c%2Cq_80%2Cusm_0.66_1.00_0.01%2Cenc_auto/a93df4_add7cb8160744aae88b2d5ed176cadf4~mv2.jpg',
    imageAlt: 'GU TECH AI Talent Accelerator program poster',
  },
];

export const contactCards = [
  {
    title: 'Admissions Office',
    text: 'For applications, fee receipts, test questions, and program guidance.',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    title: 'General Information',
    text: 'For institutional queries, page updates, and collaboration outreach.',
    value: siteConfig.infoEmail,
    href: `mailto:${siteConfig.infoEmail}`,
  },
  {
    title: 'WhatsApp Support',
    text: 'Fastest route for fee receipt sharing and quick admissions follow-up.',
    value: siteConfig.phone,
    href: siteConfig.whatsappHref,
  },
];

export function getProgram(slug: string) {
  return programs.find((program) => program.slug === slug);
}

export function getDepartment(slug: string) {
  return departments.find((department) => department.slug === slug);
}

export function createMetadata(title: string, description: string): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      siteName: siteConfig.legalName,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

