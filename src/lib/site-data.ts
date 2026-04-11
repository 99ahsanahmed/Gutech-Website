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

export type CurriculumCourse = {
  code: string;
  title: string;
  core?: string;
  creditHours: string;
};

export type CurriculumSemester = {
  title: string;
  note?: string;
  courses: CurriculumCourse[];
  totalCreditHours?: string;
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
  curriculum?: CurriculumSemester[];
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
  biography?: string[];
  focusAreas?: string[];
  profileHighlights?: string[];
  profileHref?: string;
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
      'GU TECH positions BS Computer Science as a flagship technology pathway built on industry readiness, innovation, and values-led development.',
    overview:
      'The official BS CS page emphasizes an innovation-hub mindset, early industry exposure, and entrepreneurship through coursework, labs, and the Innovation & Incubation Center. Program direction combines strong theoretical foundations with practical execution from early semesters.',
    imageLabel: 'BS CS coding and systems practice',
    imageSrc: '/program-bscs-hero.jpg',
    facts: [
      { label: 'Program type', value: 'On-campus undergraduate degree' },
      { label: 'Learning model', value: 'Earn-as-you-learn with I.I.C exposure' },
      { label: 'Program structure', value: 'Semester-wise core and lab courses' },
    ],
    curriculum: [
      {
        title: 'Semester 1',
        courses: [
          { code: 'CS-101', title: 'Problem Solving & Programming Fundamentals', core: 'Core', creditHours: '3' },
          { code: 'CL-101', title: 'Problem Solving & Programming Fundamentals Lab', core: 'Lab', creditHours: '1' },
          { code: 'CS-102', title: 'Web Technologies I', core: 'Core', creditHours: '2' },
          { code: 'CL-102', title: 'Web Technologies I Lab', core: 'Lab', creditHours: '1' },
          { code: 'SS-101', title: 'Design Thinking', core: 'Core', creditHours: '3' },
          { code: 'GE-103', title: 'Functional English', core: 'Core', creditHours: '3' },
          { code: 'CS-103', title: 'Discrete Structures', core: 'Core', creditHours: '3' },
        ],
        totalCreditHours: '16',
      },
      {
        title: 'Semester 2',
        courses: [
          { code: 'CS104', title: 'Object Oriented Programming', core: 'Core', creditHours: '3' },
          { code: 'CL104', title: 'Object Oriented Programming Lab', core: 'Lab', creditHours: '1' },
          { code: 'MT101', title: 'Calculus and Analytical Geometry', core: 'Core', creditHours: '3' },
          { code: 'GE104', title: 'Expository Writing', core: 'Core', creditHours: '3' },
          { code: 'GE105', title: 'Pakistan Studies', core: 'Core', creditHours: '2' },
          { code: 'GE106', title: 'Ideology & Constitution of Pakistan', core: 'Core', creditHours: '2' },
        ],
        totalCreditHours: '14',
      },
      {
        title: 'Semester 3',
        courses: [
          { code: 'CS201', title: 'Data Structures', core: 'DS', creditHours: '3' },
          { code: 'CL201', title: 'Data Structures Lab', core: 'DS Lab', creditHours: '1' },
          { code: 'CS202', title: 'Database Systems', core: 'DBS', creditHours: '3' },
          { code: 'CL202', title: 'Database Systems Lab', core: 'DBS Lab', creditHours: '1' },
          { code: 'CS203', title: 'Introduction to Software Engineering', core: 'Core', creditHours: '3' },
          { code: 'MT201', title: 'Multivariate Calculus', core: 'Core', creditHours: '3' },
          { code: 'GE201', title: 'Applied Physics', core: 'Core', creditHours: '2' },
          { code: 'GL201', title: 'Applied Physics Lab', core: 'Lab', creditHours: '1' },
        ],
        totalCreditHours: '17',
      },
      {
        title: 'Semester 4',
        courses: [
          { code: 'CS204', title: 'Digital Logic Design', core: 'DLD', creditHours: '2' },
          { code: 'CL204', title: 'Digital Logic Design Lab', core: 'DLD Lab', creditHours: '1' },
          { code: 'CS205', title: 'Operating Systems', core: 'OS', creditHours: '3' },
          { code: 'CL206', title: 'Operating Systems Lab', core: 'OS Lab', creditHours: '1' },
          { code: 'CS207', title: 'Design & Analysis of Algorithms', core: 'Core', creditHours: '3' },
          { code: 'MT202', title: 'Linear Algebra', core: 'Core', creditHours: '3' },
          { code: 'CS208', title: 'Applications of ICT', core: 'Core', creditHours: '2' },
          { code: 'MT203', title: 'Probability & Statistics', core: 'Core', creditHours: '3' },
        ],
        totalCreditHours: '18',
      },
      {
        title: 'Semester 5',
        courses: [
          { code: 'CS301', title: 'Artificial Intelligence', core: 'Core', creditHours: '2' },
          { code: 'CL301', title: 'Artificial Intelligence Lab', core: 'Lab', creditHours: '1' },
          { code: 'MT301', title: 'Leadership and Innovation', core: 'Core', creditHours: '3' },
          { code: 'EN301', title: 'Technical & Business Writing', core: 'Core', creditHours: '2' },
          { code: 'CS303', title: 'Computer Organization and Assembly Language', core: 'Core', creditHours: '2' },
          { code: 'CL303', title: 'Computer Organization & Assembly Lab', core: 'Lab', creditHours: '1' },
          { code: 'GE304', title: 'Financial Accounting', core: 'Core', creditHours: '3' },
          { code: 'CS304', title: 'Theory of Automata', core: 'Core', creditHours: '3' },
        ],
        totalCreditHours: '17',
      },
      {
        title: 'Semester 6',
        courses: [
          { code: 'CS305', title: 'Parallel & Distributed Computing', core: 'OS', creditHours: '2' },
          { code: 'CL305', title: 'Parallel & Distributed Computing Lab', core: 'Lab', creditHours: '1' },
          { code: 'CS306', title: 'Computer Networks', core: 'Core', creditHours: '2' },
          { code: 'CL306', title: 'Computer Networks Lab', core: 'Lab', creditHours: '1' },
          { code: 'SS301', title: 'Introduction to Management', core: 'Core', creditHours: '3' },
          { code: 'CS307', title: 'Information Security', core: 'Core', creditHours: '2' },
          { code: 'CL307', title: 'Information Security Lab', core: 'Lab', creditHours: '1' },
          { code: 'CS308', title: 'Computer Architecture', core: 'Core', creditHours: '3' },
          { code: 'CS-XXX', title: 'CS Elective I', core: 'Elective', creditHours: '3' },
          { code: 'CS-XXX', title: 'CS Elective II', core: 'Elective', creditHours: '3' },
        ],
        totalCreditHours: '21',
      },
      {
        title: 'Semester 7',
        courses: [
          { code: 'CS403', title: 'Advance Data Base System', core: 'DBS', creditHours: '3' },
          { code: 'GE401', title: 'Islamic Studies', core: 'Core', creditHours: '3' },
          { code: 'CS410', title: 'FYP 1', core: 'Core', creditHours: '3' },
          { code: 'CS-XXX', title: 'CS Elective IV', core: 'Elective', creditHours: '3' },
          { code: 'CS-XXX', title: 'CS Elective V', core: 'Elective', creditHours: '3' },
          { code: 'GE402', title: 'Civics & Community Engagement', core: 'Core', creditHours: '1' },
        ],
        totalCreditHours: '16',
      },
      {
        title: 'Semester 8',
        courses: [
          { code: 'GE403', title: 'Professional Practices in IT', core: 'Core', creditHours: '3' },
          { code: 'CS412', title: 'FYP 2', core: 'Core', creditHours: '3' },
          { code: 'CS-XXX', title: 'CS Elective VI', core: 'Elective', creditHours: '3' },
          { code: 'CS-XXX', title: 'CS Elective VII', core: 'Elective', creditHours: '3' },
        ],
        totalCreditHours: '12',
      },
    ],
    sections: [
      {
        title: 'Official program direction',
        items: [
          'Innovation-driven computer science education aligned with industry and product development.',
          'Early exposure to practical IT tools and problem-solving from the start of the program.',
          'Entrepreneurship and innovation orientation supported by projects, events, and mentorship.',
          'Research and innovation focus in areas including fake news, precision medicine, and socio-economic analytics.',
        ],
      },
      {
        title: 'Published semester-level course framework (official page)',
        items: [
          'Semester 1 includes Problem Solving & Programming Fundamentals (CS-101), Programming Lab (CL-101), Web Technologies (CS-102), Web Technologies Lab (CL-102), Design Thinking (SS-101), Functional English (GE-103), and Discrete Structures (CS-103).',
          'Semester 2 includes Object Oriented Programming (CS104), OOP Lab (CL104), Calculus and Analytical Geometry (MT101), Expository Writing (GE104), and Ideology & Constitution of Pakistan (GE106).',
          'Mid-program foundation includes Data Structures (CS201/CL201), Database Systems (CS202/CL202), Software Engineering (CS203), Digital Logic Design (CS204/CL204), and Operating Systems (CS205/CL206).',
          'Upper progression includes Artificial Intelligence (CS301/CL301), Theory of Automata (CS304), Parallel & Distributed Computing (CS305/CL305), Computer Networks (CS306/CL306), Information Security (CS307/CL307), and Computer Architecture (CS308).',
        ],
      },
      {
        title: 'Industry, research, and incubation pathway',
        items: [
          'I.I.C supports product commercialization, startup exploration, and freelance capability building.',
          'Internships and part-time opportunities with local IT companies are highlighted as early-exposure channels.',
          'International collaboration references include networks across France, China, USA, UK, Turkey, Qatar, and Saudi Arabia.',
          'Students engage through seminars, exhibitions, workshops, podcasts, job fairs, and practical collaboration activity.',
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
      'GU TECH Business School presents BBA as a market-driven, high-tech, and mentorship-connected management degree.',
    overview:
      'The official BBA page emphasizes intensive bootcamp-style delivery, C-suite mentorship, technology orientation (Python, web development, analytics), incubation support, and an earn-as-you-learn approach that bridges theory with market execution.',
    imageLabel: 'Business pathway and professional mentorship',
    imageSrc: '/about-collaboration.jpg',
    facts: [
      { label: 'Program type', value: 'On-campus undergraduate degree' },
      { label: 'Delivery style', value: 'Market-driven and bootcamp-oriented' },
      { label: 'Signature element', value: 'C-suite mentorship + incubation pathway' },
    ],
    curriculum: [
      {
        title: 'Semester 1',
        courses: [
          { code: 'BBA-101', title: 'Principles of Management', core: 'Core', creditHours: '3' },
          { code: 'BBA-102', title: 'Microeconomics', core: 'Core', creditHours: '3' },
          { code: 'BBA-103', title: 'Business Mathematics', core: 'Core', creditHours: '3' },
          { code: 'BBA-104', title: 'Functional English', core: 'Core', creditHours: '3' },
          { code: 'BBA-105', title: 'Introduction to Information Systems', core: 'Core', creditHours: '3' },
        ],
        totalCreditHours: '15',
      },
      {
        title: 'Semester 2',
        courses: [
          { code: 'BBA-106', title: 'Financial Accounting', core: 'Core', creditHours: '3' },
          { code: 'BBA-107', title: 'Macroeconomics', core: 'Core', creditHours: '3' },
          { code: 'BBA-108', title: 'Business Communication', core: 'Core', creditHours: '3' },
          { code: 'BBA-109', title: 'Business Statistics', core: 'Core', creditHours: '3' },
          { code: 'BBA-110', title: 'Digital Skills for Managers', core: 'Core', creditHours: '3' },
        ],
        totalCreditHours: '15',
      },
      {
        title: 'Semester 3',
        courses: [
          { code: 'BBA-201', title: 'Marketing Management', core: 'Core', creditHours: '3' },
          { code: 'BBA-202', title: 'Cost and Managerial Accounting', core: 'Core', creditHours: '3' },
          { code: 'BBA-203', title: 'Organizational Behavior', core: 'Core', creditHours: '3' },
          { code: 'BBA-204', title: 'Business Law', core: 'Core', creditHours: '3' },
          { code: 'BBA-205', title: 'Python for Business Analytics', core: 'Core', creditHours: '3' },
        ],
        totalCreditHours: '15',
      },
      {
        title: 'Semester 4',
        courses: [
          { code: 'BBA-206', title: 'Financial Management', core: 'Core', creditHours: '3' },
          { code: 'BBA-207', title: 'Human Resource Management', core: 'Core', creditHours: '3' },
          { code: 'BBA-208', title: 'Operations Management', core: 'Core', creditHours: '3' },
          { code: 'BBA-209', title: 'Business Research Methods', core: 'Core', creditHours: '3' },
          { code: 'BBA-210', title: 'Design Thinking for Business', core: 'Core', creditHours: '3' },
        ],
        totalCreditHours: '15',
      },
      {
        title: 'Semester 5',
        courses: [
          { code: 'BBA-301', title: 'Strategic Management', core: 'Core', creditHours: '3' },
          { code: 'BBA-302', title: 'Consumer Behavior', core: 'Core', creditHours: '3' },
          { code: 'BBA-303', title: 'Business Analytics', core: 'Core', creditHours: '3' },
          { code: 'BBA-304', title: 'Entrepreneurship and Innovation', core: 'Core', creditHours: '3' },
          { code: 'BBA-3EX', title: 'Elective I', core: 'Elective', creditHours: '3' },
        ],
        totalCreditHours: '15',
      },
      {
        title: 'Semester 6',
        courses: [
          { code: 'BBA-305', title: 'Corporate Governance and Ethics', core: 'Core', creditHours: '3' },
          { code: 'BBA-306', title: 'Supply Chain Management', core: 'Core', creditHours: '3' },
          { code: 'BBA-307', title: 'Digital Marketing and E-commerce', core: 'Core', creditHours: '3' },
          { code: 'BBA-308', title: 'Project Management', core: 'Core', creditHours: '3' },
          { code: 'BBA-3EY', title: 'Elective II', core: 'Elective', creditHours: '3' },
        ],
        totalCreditHours: '15',
      },
      {
        title: 'Semester 7',
        courses: [
          { code: 'BBA-401', title: 'Internship / Industry Practicum', core: 'Core', creditHours: '3' },
          { code: 'BBA-402', title: 'C-Suite Mentorship Studio', core: 'Core', creditHours: '3' },
          { code: 'BBA-403', title: 'Startup Incubation Project I', core: 'Core', creditHours: '3' },
          { code: 'BBA-4EX', title: 'Elective III', core: 'Elective', creditHours: '3' },
          { code: 'BBA-4EY', title: 'Elective IV', core: 'Elective', creditHours: '3' },
        ],
        totalCreditHours: '15',
      },
      {
        title: 'Semester 8',
        courses: [
          { code: 'BBA-404', title: 'Capstone Project / Business Plan', core: 'Core', creditHours: '3' },
          { code: 'BBA-405', title: 'Leadership and Negotiation', core: 'Core', creditHours: '3' },
          { code: 'BBA-406', title: 'Startup Incubation Project II', core: 'Core', creditHours: '3' },
          { code: 'BBA-4EZ', title: 'Elective V', core: 'Elective', creditHours: '3' },
          { code: 'BBA-4EW', title: 'Elective VI', core: 'Elective', creditHours: '3' },
        ],
        totalCreditHours: '15',
      },
    ],
    sections: [
      {
        title: 'Official BBA positioning',
        items: [
          'The program is framed as a market-driven business degree aligned with current and future industry demand.',
          'A high-tech orientation is explicitly highlighted through Python, web development, and analytics integration.',
          'The design focuses on bridging theory and practice before students enter the market.',
          'Ethical and moral development is positioned as a core part of responsible leadership preparation.',
        ],
      },
      {
        title: 'Curriculum and skills framework',
        items: [
          'Management, marketing, finance, economics, and organizational behavior fundamentals.',
          'Business communication, leadership practice, decision-making, and execution-focused coursework.',
          'Entrepreneurship, innovation, and commercialization exposure through incubation activities.',
          'Data and digital fluency through business analytics, applied technology tools, and practical projects.',
        ],
      },
      {
        title: 'Mentorship and earn-as-you-learn model',
        items: [
          'Industry C-suite mentors contribute practical perspectives to connect classroom concepts with business reality.',
          'Students are encouraged to build and test products through on-campus incubation support.',
          'Internship and work-experience exposure is highlighted as an early market-entry advantage.',
          'The model supports confidence in presentations, team execution, and leadership communication.',
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
      'The official MS IB&F program is designed to combine banking and finance mastery with Islamic teachings and contemporary market needs.',
    overview:
      'GU TECH presents MS IB&F as a graduate pathway backed by Shariah scholars and finance experts. The program structure includes foundation prerequisites (for non-business backgrounds), semester-wise core/elective flow, and a thesis-or-additional-courses completion option.',
    imageLabel: 'Finance seminars and postgraduate sessions',
    imageSrc: '/program-ms-ibf-hero.jpg',
    facts: [
      { label: 'Program type', value: 'On-campus graduate degree' },
      { label: 'Program model', value: 'Foundation + semester-wise structure' },
      { label: 'Faculty support', value: 'Shariah scholars and finance experts' },
    ],
    curriculum: [
      {
        title: 'Foundation / Pre-Requisite (for non-business background)',
        note: 'Subject to approval of admission committee for each student.',
        courses: [
          { code: 'F-101', title: 'Principles of Accounting', core: 'Foundation', creditHours: '3' },
          { code: 'F-102', title: 'Principles of Economics & Finance', core: 'Foundation', creditHours: '3' },
          { code: 'F-103', title: 'Business Communication and Report Writing', core: 'Foundation', creditHours: '3' },
          { code: 'F-104', title: 'Fundamentals of Islamic Fiqh / Jurisprudence', core: 'Foundation', creditHours: '3' },
          { code: 'F-105', title: 'Fundamentals of Mathematics and Statistics', core: 'Foundation', creditHours: '3' },
        ],
        totalCreditHours: '15',
      },
      {
        title: 'Semester 1',
        courses: [
          { code: 'IBF-501', title: 'Corporate Finance', core: 'Core', creditHours: '3' },
          { code: 'IBF-502', title: 'Islamic Economics', core: 'Core', creditHours: '3' },
          { code: 'IBF-503', title: 'Research Methodology I', core: 'Core', creditHours: '3' },
          { code: 'IBF-5E1', title: 'Elective I', core: 'Elective', creditHours: '3' },
        ],
        totalCreditHours: '12',
      },
      {
        title: 'Semester 2',
        courses: [
          { code: 'IBF-504', title: 'Financial Markets, Institutions & Islamic Perspective', core: 'Core', creditHours: '3' },
          { code: 'IBF-505', title: 'Research Methodology II', core: 'Core', creditHours: '3' },
          { code: 'IBF-5E2', title: 'Elective II', core: 'Elective', creditHours: '3' },
        ],
        totalCreditHours: '9',
      },
      {
        title: 'Degree Completion Option',
        note: 'Official note: students may opt for two additional courses instead of MS Thesis.',
        courses: [
          { code: 'IBF-600', title: 'MS Thesis', core: 'Thesis', creditHours: '6' },
          { code: 'IBF-6E3', title: 'Elective III (alternative to thesis route)', core: 'Elective', creditHours: '3' },
          { code: 'IBF-6E4', title: 'Elective IV (alternative to thesis route)', core: 'Elective', creditHours: '3' },
        ],
      },
    ],
    sections: [
      {
        title: 'Program objectives (official direction)',
        items: [
          'Equip students with comprehensive banking and finance knowledge integrated with Islamic teachings.',
          'Address growing demand for qualified Islamic banking professionals in a rapidly expanding sector.',
          'Provide rigorous academic training supported by leading Shariah and finance expertise.',
          'Align curriculum with industry needs while incorporating modern financial technologies.',
        ],
      },
      {
        title: 'Foundation / pre-requisite courses (for non-business background)',
        items: [
          'Principles of Accounting',
          'Principles of Economics & Finance',
          'Business Communication and Report Writing',
          'Fundamentals of Islamic Fiqh / Jurisprudence',
          'Fundamentals of Mathematics and Statistics',
        ],
      },
      {
        title: 'Published semester-wise breakup',
        items: [
          'Semester I: Corporate Finance (Core, 3 CH), Islamic Economics (Core, 3 CH), Research Methodology I (Core, 3 CH), Elective I (3 CH) - Total 12 CH.',
          'Semester II: Financial Markets, Institutions & Islamic Perspective (Core, 3 CH), Research Methodology II (Core, 3 CH), Elective II (3 CH) - Total 9 CH.',
          'Degree completion note on official page: students may opt for two additional courses instead of MS Thesis.',
          'Elective / specialization courses are structured to support applied professional progression.',
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
    imageLabel: 'Data science and analytical computing pathway',
    imageSrc: '/about-story-session.png',
    facts: [
      { label: 'Status', value: 'Planned program track' },
      { label: 'Best for', value: 'Graduates seeking advanced analytics and ML depth' },
      { label: 'Institutional fit', value: "Aligned with GU TECH's AI and data direction" },
    ],
    curriculum: [
      {
        title: 'Semester 1 (Proposed)',
        courses: [
          { code: 'DS-601', title: 'Statistical Inference for Data Science', core: 'Core', creditHours: '3' },
          { code: 'DS-602', title: 'Data Engineering Foundations', core: 'Core', creditHours: '3' },
          { code: 'DS-603', title: 'Machine Learning I', core: 'Core', creditHours: '3' },
          { code: 'DS-604', title: 'Programming for Analytics', core: 'Core', creditHours: '3' },
        ],
        totalCreditHours: '12',
      },
      {
        title: 'Semester 2 (Proposed)',
        courses: [
          { code: 'DS-605', title: 'Machine Learning II', core: 'Core', creditHours: '3' },
          { code: 'DS-606', title: 'Data Visualization & Storytelling', core: 'Core', creditHours: '3' },
          { code: 'DS-607', title: 'Big Data Systems', core: 'Core', creditHours: '3' },
          { code: 'DS-6E1', title: 'Elective I', core: 'Elective', creditHours: '3' },
        ],
        totalCreditHours: '12',
      },
      {
        title: 'Semester 3 (Proposed)',
        courses: [
          { code: 'DS-608', title: 'Time Series and Forecasting', core: 'Core', creditHours: '3' },
          { code: 'DS-609', title: 'Applied NLP for Data Scientists', core: 'Core', creditHours: '3' },
          { code: 'DS-6E2', title: 'Elective II', core: 'Elective', creditHours: '3' },
          { code: 'DS-690', title: 'Research Seminar', core: 'Core', creditHours: '2' },
        ],
        totalCreditHours: '11',
      },
      {
        title: 'Semester 4 (Proposed)',
        courses: [
          { code: 'DS-699', title: 'Thesis / Capstone Project', core: 'Core', creditHours: '6' },
          { code: 'DS-6E3', title: 'Elective III', core: 'Elective', creditHours: '3' },
        ],
        totalCreditHours: '9',
      },
    ],
    sections: [
      {
        title: 'Proposed curriculum architecture',
        items: [
          'Statistical inference, probability modeling, and advanced data analysis foundations.',
          'Data engineering for pipelines, data warehousing, ETL workflows, and scalable processing.',
          'Machine learning model design, evaluation, and deployment readiness for practical environments.',
          'Applied analytics across business, product, and social-sector decision contexts.',
        ],
      },
      {
        title: 'Course clusters for specialization depth',
        items: [
          'Data Mining and Predictive Analytics',
          'Time Series Analysis and Forecasting',
          'Big Data Systems and Cloud Analytics',
          'Business Intelligence and Data Visualization',
          'Natural Language Data Processing',
          'Research Seminar and Capstone Project',
        ],
      },
      {
        title: 'Graduate readiness outcomes',
        items: [
          'Preparation for analyst, BI, and applied data science roles across sectors.',
          'Capability to convert raw data into strategic recommendations and measurable decisions.',
          'Research and project execution depth suited for postgraduate-level analytical work.',
          'A strong bridge between undergraduate computing foundations and advanced data specialization.',
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
    imageLabel: 'Artificial intelligence specialization pathway',
    imageSrc: '/program-bscs-hero.jpg',
    facts: [
      { label: 'Status', value: 'Planned program track' },
      { label: 'Best for', value: 'Graduates focused on ML, AI systems, and applied automation' },
      { label: 'Use case', value: 'A clear extension of the university postgraduate portfolio' },
    ],
    curriculum: [
      {
        title: 'Semester 1 (Proposed)',
        courses: [
          { code: 'AI-601', title: 'Mathematics for AI', core: 'Core', creditHours: '3' },
          { code: 'AI-602', title: 'Machine Learning Foundations', core: 'Core', creditHours: '3' },
          { code: 'AI-603', title: 'Python for AI Systems', core: 'Core', creditHours: '3' },
          { code: 'AI-604', title: 'Data and Model Engineering', core: 'Core', creditHours: '3' },
        ],
        totalCreditHours: '12',
      },
      {
        title: 'Semester 2 (Proposed)',
        courses: [
          { code: 'AI-605', title: 'Deep Learning', core: 'Core', creditHours: '3' },
          { code: 'AI-606', title: 'Natural Language Processing', core: 'Core', creditHours: '3' },
          { code: 'AI-607', title: 'Computer Vision', core: 'Core', creditHours: '3' },
          { code: 'AI-6E1', title: 'Elective I', core: 'Elective', creditHours: '3' },
        ],
        totalCreditHours: '12',
      },
      {
        title: 'Semester 3 (Proposed)',
        courses: [
          { code: 'AI-608', title: 'MLOps and Production AI', core: 'Core', creditHours: '3' },
          { code: 'AI-609', title: 'AI Ethics and Governance', core: 'Core', creditHours: '3' },
          { code: 'AI-610', title: 'Reinforcement Learning', core: 'Core', creditHours: '3' },
          { code: 'AI-6E2', title: 'Elective II', core: 'Elective', creditHours: '3' },
        ],
        totalCreditHours: '12',
      },
      {
        title: 'Semester 4 (Proposed)',
        courses: [
          { code: 'AI-699', title: 'Thesis / Applied AI Capstone', core: 'Core', creditHours: '6' },
          { code: 'AI-6E3', title: 'Elective III', core: 'Elective', creditHours: '3' },
        ],
        totalCreditHours: '9',
      },
    ],
    sections: [
      {
        title: 'Proposed AI curriculum architecture',
        items: [
          'Machine Learning foundations, optimization, and advanced model development.',
          'Deep Learning architectures and applied neural network engineering.',
          'Natural Language Processing and language model applications.',
          'Computer Vision, perception systems, and intelligent automation workflows.',
          'AI ethics, governance, and responsible deployment in real-world settings.',
        ],
      },
      {
        title: 'Course clusters for technical depth',
        items: [
          'Intelligent Systems Design',
          'MLOps and Production AI Pipelines',
          'Reinforcement Learning and Adaptive Systems',
          'AI for Cybersecurity and Risk Intelligence',
          'Applied AI in Healthcare and Industry Use Cases',
          'Thesis / Applied AI Capstone',
        ],
      },
      {
        title: 'Graduate readiness outcomes',
        items: [
          'Preparation for AI engineering, ML operations, and intelligent systems roles.',
          'Ability to scope, evaluate, and communicate AI solutions for institutional and commercial contexts.',
          'Research-capable profile with practical implementation depth for fast-evolving AI domains.',
          'A visible graduate extension of GU TECH’s computing and innovation direction.',
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

export const facultyDirectoryMembers: FacultyMember[] = [
  {
    name: 'Mufti Ehsan Waquar',
    role: 'Vice Chancellor',
    school: 'MBA Banking & Finance, IoBM, Pakistan; MA Economics, University of Karachi, Pakistan',
    expertise: 'Academic governance, institutional strategy, and values-led higher education leadership.',
    description:
      'Officially listed by GU TECH as Vice Chancellor with graduate credentials in finance and economics.',
    biography: [
      'GU TECH presents Mufti Ehsan Waquar as Vice Chancellor, placing him at the center of academic governance, institutional planning, and the public-facing leadership identity of the university. His profile combines senior stewardship with formal preparation in both banking and finance and economics, which gives the institution a visibly structured leadership base.',
      'Within the university narrative, his role signals more than administrative oversight. It strengthens GU TECH’s message around disciplined academic direction, values-led education, and long-horizon institutional development for students, parents, and external stakeholders.',
    ],
    focusAreas: [
      'Institutional governance and academic stewardship',
      'Values-led higher education leadership',
      'Strategic planning for university growth',
    ],
    profileHighlights: [
      'Official role: Vice Chancellor',
      'Academic background: MBA Banking & Finance, IoBM',
      'Academic background: MA Economics, University of Karachi',
    ],
    profileHref: 'https://www.gutech.edu.pk/mufti-ehsan-waquar',
    imageSrc:
      'https://static.wixstatic.com/media/a93df4_0a20edb9142741a5ac0c1fa4dc41e647~mv2.png/v1/crop/x_0,y_0,w_1200,h_1200/fill/w_582,h_582,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Mufti-Ehsan-Waqar-01.png',
  },
  {
    name: 'Dr. Zeeshan Ahmed',
    role: 'Pro Chancellor',
    school: 'PhD, Mississippi State University, USA; MBA, IBA, Pakistan; CPA',
    expertise: 'Academic leadership, institutional development, and strategic university direction.',
    description:
      'Officially listed by GU TECH as Pro Chancellor with international doctoral training and business credentials.',
    biography: [
      'Dr. Zeeshan Ahmed is presented on the official GU TECH faculty listing as Pro Chancellor, combining doctoral work from Mississippi State University with an MBA from IBA and CPA credentials. That combination positions him as a leadership figure who sits at the intersection of strategy, academic direction, and execution.',
      'Across the public university story, his presence reinforces a management-plus-technology identity rather than a conventional brochure-only institution. He represents senior academic leadership, institutional development, and the type of decision-making discipline expected in a modern higher education environment.',
    ],
    focusAreas: [
      'Strategic university leadership',
      'Institutional development and growth',
      'Academic direction with management discipline',
    ],
    profileHighlights: [
      'Official role: Pro Chancellor',
      'Academic background: PhD, Mississippi State University, USA',
      'Additional credentials: MBA, IBA, Pakistan; CPA',
    ],
    profileHref: 'https://www.gutech.edu.pk/dr-zeeshan-ahmed',
    imageSrc:
      'https://static.wixstatic.com/media/db6d86_a91007684e5a4cbb9e643929983769ab~mv2.jpg/v1/fill/w_558,h_558,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Dr_edited_edited.jpg',
  },
  {
    name: 'Dr. Sajid Bashir',
    role: 'Dean, Management & Informatics',
    school: 'PhD, MAJU, Pakistan; MS, MAJU, Pakistan; MBA, IIUI, Pakistan',
    expertise: 'Management education, academic administration, and curriculum leadership.',
    description:
      'Officially listed by GU TECH as Dean for Management & Informatics with doctoral, masters, and MBA qualifications.',
    biography: [
      'GU TECH lists Dr. Sajid Bashir as Dean, Management & Informatics, presenting him as a senior academic leader for the university’s management-facing pathways. His profile combines doctoral and masters study from MAJU with an MBA from IIUI, building a clear academic base for curriculum oversight and program leadership.',
      'His role matters because the university is trying to look institutionally credible rather than startup-fragile. A dean-level academic profile helps communicate structure, governance, and depth in management education while supporting the wider positioning of GU TECH as a modern, professionally oriented university.',
    ],
    focusAreas: [
      'Management education and curriculum design',
      'Academic administration and school leadership',
      'Program development for business and informatics pathways',
    ],
    profileHighlights: [
      'Official role: Dean, Management & Informatics',
      'Academic background: PhD, MAJU, Pakistan',
      'Additional credentials: MS, MAJU; MBA, IIUI',
    ],
    profileHref: 'https://www.gutech.edu.pk/dr-sajid-bashir',
    imageSrc:
      'https://static.wixstatic.com/media/db6d86_9eea12cae3da4367954be08a1cce26f8~mv2.jpg/v1/fill/w_578,h_586,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Dr_edited_edited.jpg',
  },
  {
    name: 'Dr. Jawaid Abdul Ghani',
    role: 'Professor',
    school: 'PhD, University of Pennsylvania, USA',
    expertise: 'Advanced teaching, policy-oriented research, and postgraduate academic mentoring.',
    description:
      'Officially listed by GU TECH as Professor with doctoral training from the University of Pennsylvania.',
    biography: [
      'Dr. Jawaid Abdul Ghani appears on the official faculty page as a senior professor with a PhD from the University of Pennsylvania. That international academic background gives GU TECH a visibly stronger professorial layer and contributes to the institution’s claim of serious academic depth.',
      'On a page like this, his profile helps communicate research maturity, higher-order mentorship, and the presence of senior faculty who can support not only classroom teaching but also strategic academic direction and advanced scholarly engagement.',
    ],
    focusAreas: [
      'Senior-level teaching and mentorship',
      'Research-informed academic leadership',
      'Postgraduate and policy-oriented academic guidance',
    ],
    profileHighlights: [
      'Official role: Professor',
      'Academic background: PhD, University of Pennsylvania, USA',
      'Directory value: strengthens senior professorial presence at GU TECH',
    ],
    imageSrc:
      'https://static.wixstatic.com/media/db6d86_e0517c78fd8344a5807080fa3d58e323~mv2.jpg/v1/fill/w_578,h_586,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Dr_edited_edited_edited_edited.jpg',
  },
  {
    name: 'Dr. Rauf Ahmed Shams Malick',
    role: 'Professor / Chairman Computer Science',
    school: 'PhD, KU, Pakistan; M.Phil, KU, Pakistan; BS, SSUET, Pakistan',
    expertise: 'Artificial intelligence, data-driven decision making, and digital transformation in computing education.',
    description:
      'Officially listed by GU TECH as Professor and Chairman of Computer Science with multi-stage academic training in Karachi.',
    biography: [
      'Dr. Rauf Ahmed Shams Malick is one of the most important academic profiles for GU TECH because the official faculty page positions him as Professor and Chairman Computer Science. His credentials span a PhD and M.Phil from the University of Karachi along with an undergraduate foundation from SSUET, creating a strong local academic lineage in computing.',
      'For the university website, his presence gives the Computer Science department visible authority. He anchors the institution’s technical identity through leadership, academic supervision, and the kind of subject-depth that parents and prospective students expect to see when evaluating a flagship computing program.',
    ],
    focusAreas: [
      'Computer science academic leadership',
      'Artificial intelligence and data-driven computing',
      'Departmental supervision and curriculum direction',
    ],
    profileHighlights: [
      'Official role: Professor / Chairman Computer Science',
      'Academic background: PhD, KU; M.Phil, KU',
      'Undergraduate foundation: BS, SSUET, Pakistan',
    ],
    profileHref: 'https://www.gutech.edu.pk/dr-rauf-malick',
    imageSrc:
      'https://static.wixstatic.com/media/db6d86_4c5a55b638764fc28eff6e4d4f755a41~mv2.jpg/v1/fill/w_576,h_580,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Dr_edited.jpg',
    imagePosition: '50% 8%',
  },
  {
    name: 'Dr. Muhammad Shahzad',
    role: 'Assistant Professor',
    school: 'PhD, FAST-NUCES, Pakistan; Visiting Scientist, University of Lancaster, UK',
    expertise: 'Applied computing instruction, student supervision, and research-informed teaching.',
    description:
      'Officially listed by GU TECH as Assistant Professor with a FAST-NUCES doctorate and Lancaster visiting scientist experience.',
    biography: [
      'Dr. Muhammad Shahzad is listed by GU TECH as Assistant Professor with a PhD from FAST-NUCES and visiting scientist exposure at the University of Lancaster in the UK. That combination makes his profile especially valuable on the faculty page because it shows both local technical depth and international academic engagement.',
      'His presence strengthens the computing side of the university by signalling that technical instruction is not being delivered in isolation from wider research exposure. It helps the faculty page communicate that students are learning from people who operate with current academic and applied computing relevance.',
    ],
    focusAreas: [
      'Applied computing and technical instruction',
      'Student supervision in computing pathways',
      'Research-linked classroom delivery',
    ],
    profileHighlights: [
      'Official role: Assistant Professor',
      'Academic background: PhD, FAST-NUCES, Pakistan',
      'Additional profile note: Visiting Scientist at University of Lancaster, UK',
    ],
    profileHref: 'https://www.gutech.edu.pk/dr-muhammad-shahzad',
    imageSrc:
      'https://static.wixstatic.com/media/a93df4_aa69cd6fa8ce4416ab0738832fd31414~mv2.jpg/v1/fill/w_580,h_570,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Dr_%20Shahzad%202-34.jpg',
  },
  {
    name: 'Dr. Khubaib Ahmed',
    role: 'Associate Professor',
    school: 'PhD, DHA Suffa University, Pakistan; M.Phil, SZABIST, Pakistan',
    expertise: 'Technical education, research supervision, and computing depth across applied classroom settings.',
    description:
      'Officially listed by GU TECH as Associate Professor with doctoral work from DHA Suffa University.',
    biography: [
      'Dr. Khubaib Ahmed appears on the official faculty page as Associate Professor, supported by a PhD from DHA Suffa University and an M.Phil from SZABIST. That combination contributes a stronger middle-to-senior academic layer to the GU TECH faculty composition.',
      'His profile is important for the public directory because it extends the technical department beyond entry-level teaching optics. It shows that GU TECH has faculty who can support computing instruction, research supervision, and academically grounded program delivery with visible professional depth.',
    ],
    focusAreas: [
      'Applied computing instruction',
      'Research supervision and academic guidance',
      'Departmental depth for technical programs',
    ],
    profileHighlights: [
      'Official role: Associate Professor',
      'Academic background: PhD, DHA Suffa University, Pakistan',
      'Additional credentials: M.Phil, SZABIST, Pakistan',
    ],
    profileHref: 'https://www.gutech.edu.pk/dr-khubaib-ahmed',
    imageSrc:
      'https://static.wixstatic.com/media/a93df4_cef14560c9ab41cea3d771cce74af350~mv2.png/v1/fill/w_586,h_586,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Dr%20Khubaib.png',
  },
  {
    name: 'Dr. Basharat Javed',
    role: 'Director GELC & Associate Professor',
    school: 'PhD, CUST, Pakistan; MS, MAJU, Pakistan',
    expertise: 'Executive learning leadership, applied pedagogy, and institutional capacity building.',
    description:
      'Officially listed by GU TECH as GELC Director and Associate Professor with doctoral specialization in Pakistan.',
    biography: [
      'Dr. Basharat Javed is identified on the official faculty page as Director GELC and Associate Professor, which gives him a dual academic and institutional role inside GU TECH. His doctoral background from CUST, together with graduate study at MAJU, supports the executive learning and capability-building side of the university’s public positioning.',
      'That makes him especially useful in the redesigned faculty experience because he connects degree education with wider institutional upskilling. His profile helps show that GU TECH is not only teaching conventional coursework, but also building a more applied and professionally responsive academic ecosystem.',
    ],
    focusAreas: [
      'Executive learning and GELC leadership',
      'Applied pedagogy and academic delivery',
      'Institutional capacity building',
    ],
    profileHighlights: [
      'Official role: Director GELC & Associate Professor',
      'Academic background: PhD, CUST, Pakistan',
      'Additional credentials: MS, MAJU, Pakistan',
    ],
    profileHref: 'https://www.gutech.edu.pk/dr-basharat-javed',
    imageSrc:
      'https://static.wixstatic.com/media/db6d86_ddbdd0eb6fb24ba09052ff9ee2ad0d20~mv2.jpg/v1/fill/w_588,h_582,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Dr_edited_edited.jpg',
  },
  {
    name: 'Dr. Arif Iqbal Rana',
    role: 'Professor',
    school: 'PhD, Rensselaer Polytechnic Institute, USA',
    expertise: 'Academic research, cross-disciplinary instruction, and higher education mentorship.',
    description:
      'Officially listed by GU TECH as Professor with international doctoral specialization.',
    biography: [
      'Dr. Arif Iqbal Rana appears in the official faculty directory as Professor with a PhD from Rensselaer Polytechnic Institute in the United States. His profile adds a visibly international academic dimension to the GU TECH faculty composition.',
      'On the redesigned page, that matters because it raises the perceived academic maturity of the institution. A professor-level profile with global doctoral training helps the university communicate serious teaching depth, research literacy, and a broader standard of mentorship across its programs.',
    ],
    focusAreas: [
      'Cross-disciplinary academic instruction',
      'Research-led higher education practice',
      'Senior faculty mentorship',
    ],
    profileHighlights: [
      'Official role: Professor',
      'Academic background: PhD, Rensselaer Polytechnic Institute, USA',
      'Directory value: international professorial presence',
    ],
    imageSrc:
      'https://static.wixstatic.com/media/db6d86_a846b9b25ffd4df58bd567f927d3c2eb~mv2.jpg/v1/fill/w_588,h_582,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Dr_edited_edited.jpg',
  },
  {
    name: 'Twaha Ahmed Minai',
    role: 'Senior Lecturer',
    school: 'MSc, KU; M.Phil CS, KU; MSCS, Muhammad Ali Jinnah University',
    expertise: 'Programming pedagogy, software development guidance, and student-centered classroom delivery.',
    description:
      'Officially listed by GU TECH as Senior Lecturer with layered graduate preparation in computing.',
    biography: [
      'Twaha Ahmed Minai is listed on the official faculty page as Senior Lecturer, with academic credentials spanning KU and Muhammad Ali Jinnah University. That profile gives the computing faculty a strong teaching-oriented presence built around classroom delivery, programming instruction, and student support.',
      'In the context of the redesigned page, his role helps balance senior academic leadership with the day-to-day teaching backbone of the institution. He represents the kind of faculty member students encounter directly in core technical courses, which makes his inclusion important to the realism of the directory.',
    ],
    focusAreas: [
      'Programming pedagogy and software fundamentals',
      'Student-centered technical instruction',
      'Support for core computing pathways',
    ],
    profileHighlights: [
      'Official role: Senior Lecturer',
      'Academic background: MSc, KU; M.Phil CS, KU',
      'Additional credentials: MSCS, Muhammad Ali Jinnah University',
    ],
    profileHref: 'https://www.gutech.edu.pk/twaha-ahmed',
    imageSrc:
      'https://static.wixstatic.com/media/a93df4_dec1504919834451835f9d62fc088109~mv2.png/v1/crop/x_12,y_0,w_2376,h_2376/fill/w_586,h_592,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Twaha.png',
  },
  {
    name: 'Dr. Samra Javed',
    role: 'Associate Professor & Director ORIC',
    school: 'PhD, IoBM, Pakistan; MPhil, SZABIST, Pakistan',
    expertise: 'Research innovation leadership, ORIC direction, and institutional research ecosystem development.',
    description:
      'Officially listed by GU TECH as ORIC Director and Associate Professor with research-led academic credentials.',
    biography: [
      'Dr. Samra Javed is presented by GU TECH as Associate Professor and Director ORIC, placing her at the interface of teaching, research culture, and institutional innovation support. Her profile combines doctoral work from IoBM with MPhil studies at SZABIST, which aligns well with an academic environment trying to demonstrate research maturity.',
      'Her presence on the faculty page adds an important research and innovation layer. It signals that GU TECH is not positioning itself only around teaching delivery, but also around research coordination, knowledge development, and a more structured ecosystem for academic advancement.',
    ],
    focusAreas: [
      'Research and innovation ecosystem development',
      'ORIC leadership and institutional research coordination',
      'Academic mentoring with research orientation',
    ],
    profileHighlights: [
      'Official role: Associate Professor & Director ORIC',
      'Academic background: PhD, IoBM, Pakistan',
      'Additional credentials: MPhil, SZABIST, Pakistan',
    ],
    profileHref: 'https://www.gutech.edu.pk/dr-samra-javed',
    imageSrc:
      'https://static.wixstatic.com/media/a93df4_09e49d8439a143f4905c18be496bbbf7~mv2.jpg/v1/fill/w_588,h_596,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Dr_edited.jpg',
  },
  {
    name: 'Dr. Imran Majeed',
    role: 'Assistant Professor & Program Coordinator',
    school: 'PhD in Islamic Finance, INCEIF University, Malaysia; MS in Economics, IBA, Pakistan',
    expertise: 'Program coordination, interdisciplinary instruction, and applied economics and finance education.',
    description:
      'Officially listed by GU TECH as Program Coordinator with international graduate work in Islamic finance and economics.',
    biography: [
      'Dr. Imran Majeed appears on the official faculty page as Assistant Professor and Program Coordinator, with advanced study in Islamic Finance from INCEIF University in Malaysia and Economics from IBA Pakistan. That profile gives GU TECH a valuable interdisciplinary bridge between finance, economics, and program operations.',
      'His role is especially important because it mixes classroom teaching with program-level coordination. On the redesigned page, that helps the faculty roster feel more complete and institutionally real, showing not only teaching staff but also the people who keep academic pathways organized and coherent.',
    ],
    focusAreas: [
      'Program coordination and academic operations',
      'Applied economics and finance education',
      'Interdisciplinary instruction across management-oriented pathways',
    ],
    profileHighlights: [
      'Official role: Assistant Professor & Program Coordinator',
      'Academic background: PhD in Islamic Finance, INCEIF University, Malaysia',
      'Additional credentials: MS in Economics, IBA, Pakistan',
    ],
    profileHref: 'https://www.gutech.edu.pk/dr-imran-majeed',
    imageSrc:
      'https://static.wixstatic.com/media/a93df4_45688b8649524c2599cad9afb03e1490~mv2.png/v1/crop/x_0,y_5,w_2400,h_2365/fill/w_598,h_588,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Imran%20Majeed.png',
  },
  {
    name: 'Dr. Muhammad Haris Mirza',
    role: 'Assistant Professor',
    school: 'PhD in Marketing, University of Karachi, Pakistan; MS, Hamdard University, Pakistan',
    expertise: 'Marketing strategy, business research, and management instruction with analytical depth.',
    description:
      'Officially listed by GU TECH as Assistant Professor with specialization in marketing and business studies.',
    biography: [
      'Dr. Muhammad Haris Mirza is listed by GU TECH as Assistant Professor, with a PhD in Marketing from the University of Karachi and an MS from Hamdard University. His profile expands the directory beyond pure computing and shows stronger subject coverage in management and market-facing education.',
      'That matters on the redesigned faculty page because the university is trying to look like a full institutional ecosystem rather than a single-department microsite. His presence helps the page communicate that GU TECH supports business, management, and professionally relevant teaching alongside its technical programs.',
    ],
    focusAreas: [
      'Marketing and business research',
      'Management instruction and applied analysis',
      'Student guidance in market-facing academic pathways',
    ],
    profileHighlights: [
      'Official role: Assistant Professor',
      'Academic background: PhD in Marketing, University of Karachi',
      'Additional credentials: MS, Hamdard University, Pakistan',
    ],
    profileHref: 'https://www.gutech.edu.pk/dr-muhammad-haris-mirza',
    imageSrc:
      'https://static.wixstatic.com/media/a93df4_4109b5f42da24b7ea37deeebb42de41e~mv2.jpg/v1/fill/w_588,h_596,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Dr_%20Haris.jpg',
  },
  {
    name: 'Syed Taloot Momin',
    role: 'Lab Instructor, Expertise in UAVs Design',
    school: 'BS Computer Science, FAST-NUCES',
    expertise: 'Laboratory instruction, UAV-oriented technical mentoring, and hands-on practical training.',
    description:
      'Officially listed by GU TECH as Lab Instructor with expertise in UAV design and practical computing support.',
    biography: [
      'Syed Taloot Momin is listed on the official faculty page as Lab Instructor with expertise in UAVs design and a BS in Computer Science from FAST-NUCES. His profile adds an applied laboratory layer to the university directory, which is important because hands-on instruction is a major part of how technical credibility is judged.',
      'On a page that needs to feel real rather than decorative, his presence shows that GU TECH includes faculty support for practical experimentation, lab culture, and technical implementation. That makes the overall faculty narrative more believable and more useful for students who care about execution, not just theory.',
    ],
    focusAreas: [
      'Practical lab instruction and technical support',
      'UAV-oriented experimentation and design exposure',
      'Hands-on student mentoring in applied computing settings',
    ],
    profileHighlights: [
      'Official role: Lab Instructor, Expertise in UAVs Design',
      'Academic background: BS Computer Science, FAST-NUCES',
      'Directory value: strengthens the applied lab-learning story',
    ],
    profileHref: 'https://www.gutech.edu.pk/syed-taloot-momin',
    imageSrc:
      'https://static.wixstatic.com/media/a93df4_8c2fed59e15141149221d90ec41fe7da~mv2.jpeg/v1/fill/w_588,h_596,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202025-06-23%20at%202_25_52%20PM.jpeg',
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

