import {
  admissionSupport,
  admissionsSteps,
  departments,
  executiveLearningTracks,
  facultyDirectoryMembers,
  newsItems,
  programs,
  siteConfig,
} from '@/lib/site-data';

type ChatKnowledgeEntry = {
  title: string;
  body: string;
  href?: string;
  keywords: string[];
  category: string;
};

const officialKnowledgeEntries: ChatKnowledgeEntry[] = [
  {
    category: 'Official overview',
    title: 'GU TECH institutional overview',
    body:
      'GU TECH positions itself as a technology-focused university with market-driven programs, visible academic pathways, innovation-led learning, and direct admissions support through email, phone, and WhatsApp.',
    href: 'https://www.gutech.edu.pk/',
    keywords: ['gutech', 'gu tech', 'university', 'overview', 'campus', 'about university'],
  },
  {
    category: 'Admissions',
    title: 'Admissions process',
    body:
      'The official admissions process asks students to explore the relevant program, confirm eligibility, apply through the portal, submit required documents to admissions@gutech.edu.pk, stay active on the provided email and phone, and complete the GSAT or other acceptable test requirement, interview, and final document flow.',
    href: 'https://www.gutech.edu.pk/admission-process',
    keywords: ['admission', 'admissions', 'apply', 'application', 'gsat', 'test', 'documents', 'interview'],
  },
  {
    category: 'Admissions',
    title: 'Eligibility and acceptable tests',
    body:
      'The official admission process lists at least 12 years of education with 50 percent marks for BBA and BS Computer Science. For MS Islamic Banking and Finance, the site asks for 16 years of education with 50 percent marks in the annual system or a minimum 2.00 out of 4.00 CGPA. Acceptable tests include GSAT, SAT, HEC NAT or HAT, and USAT GS, COM, or E.',
    href: 'https://www.gutech.edu.pk/admission-process',
    keywords: ['eligibility', 'requirements', 'minimum marks', 'cgpa', 'sat', 'nat', 'hat', 'usat', 'gsat'],
  },
  {
    category: 'Fees and scholarships',
    title: 'Fee structure and financial assistance',
    body:
      'The official fee structure highlights an application fee of PKR 1,000, an admission fee of PKR 10,000, a refundable security deposit of PKR 10,000, semester exam charges, and program-based tuition such as BS Computer Science at PKR 16,000 per credit hour and BBA or BS Business Analytics at PKR 14,000 per credit hour. Scholarships and customized financial assistance are promoted for selected applicants.',
    href: 'https://www.gutech.edu.pk/fee-structure',
    keywords: ['fee', 'fees', 'tuition', 'credit hour', 'cost', 'scholarship', 'financial assistance', 'discount'],
  },
  {
    category: 'Programs',
    title: 'BS Computer Science official direction',
    body:
      'The official BS Computer Science page frames the degree as an innovation-oriented computing pathway with semester-wise progression, practical exposure, entrepreneurship, and visible links to the Innovation and Incubation Centre.',
    href: 'https://www.gutech.edu.pk/bs-computer-science',
    keywords: ['bs computer science', 'bscs', 'computer science', 'cs degree', 'software'],
  },
  {
    category: 'Programs',
    title: 'BBA official direction',
    body:
      'The official BBA page presents a market-driven business degree with strong analytical foundations, communication depth, technology orientation, and mentorship-linked learning.',
    href: 'https://www.gutech.edu.pk/bachelor-of-business-administration',
    keywords: ['bba', 'business administration', 'business', 'management'],
  },
  {
    category: 'Innovation and incubation',
    title: 'Innovation and Incubation Centre',
    body:
      'The official Innovation and Incubation Centre connects students, founders, and external partners through applied AI work, venture mentoring, consultancy, training, and cohort-based incubation. It is positioned around AI, cybersecurity, fintech, healthcare, and commercialization pathways, and the site specifically mentions cohort programs such as the Leap Innovation Challenge, mentorship, incubation, and exposure to CEOs, cybersecurity experts, and global thought leaders.',
    href: 'https://www.gutech.edu.pk/innovation-and-incubation-centre',
    keywords: ['iic', 'innovation', 'incubation', 'startup', 'venture', 'leap', 'cybersecurity', 'fintech', 'healthcare'],
  },
  {
    category: 'Executive learning',
    title: 'Executive Learning at GU TECH',
    body:
      'The official Executive Learning page promotes participant-centric executive education delivered through on-site, off-site, and online modes in Islamabad, Lahore, and Karachi. It emphasizes industry-oriented training, simulations, case studies, workshops, and leadership-focused capability building.',
    href: 'https://www.gutech.edu.pk/executive-learning',
    keywords: ['executive learning', 'gelc', 'training', 'corporate', 'leaders', 'workshops', 'executive'],
  },
  {
    category: 'Faculty',
    title: 'Official faculty directory',
    body:
      'The official faculty directory presents leadership, professors, associate professors, assistant professors, lecturers, and lab instructors across computing, management, and university leadership roles.',
    href: 'https://www.gutech.edu.pk/our-faculty',
    keywords: ['faculty', 'teachers', 'professor', 'lecturer', 'vice chancellor', 'dean', 'chairman'],
  },
];

function normalize(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9\s]+/g, ' ').replace(/\s+/g, ' ').trim();
}

function unique(values: string[]) {
  return Array.from(new Set(values.filter(Boolean)));
}

function formatSource(href?: string) {
  return href ? ` (Source: ${href})` : '';
}

function toKnowledgeEntry(entry: ChatKnowledgeEntry) {
  return {
    ...entry,
    searchText: normalize([entry.title, entry.body, entry.category, ...entry.keywords].join(' ')),
  };
}

const programEntries = programs.map((program) =>
  toKnowledgeEntry({
    category: 'Program',
    title: program.title,
    body: [
      program.summary,
      program.description,
      program.overview,
      ...program.facts.map((fact) => `${fact.label}: ${fact.value}`),
      ...program.sections.flatMap((section) => [`${section.title}: ${section.items.join(' ')}`]),
    ].join(' '),
    keywords: unique([
      program.title,
      program.shortTitle,
      program.slug.replace(/-/g, ' '),
      program.category,
      program.credential,
      ...program.facts.map((fact) => fact.label),
    ]),
  }),
);

const departmentEntries = departments.map((department) =>
  toKnowledgeEntry({
    category: 'Department',
    title: department.title,
    body: [
      department.summary,
      department.description,
      department.overview,
      ...department.facts.map((fact) => `${fact.label}: ${fact.value}`),
      ...department.sections.flatMap((section) => [`${section.title}: ${section.items.join(' ')}`]),
    ].join(' '),
    keywords: unique([
      department.title,
      department.shortTitle,
      department.slug.replace(/-/g, ' '),
      department.type,
      ...department.facts.map((fact) => fact.label),
    ]),
    href: department.links.find((link) => !link.external)?.href,
  }),
);

const facultyEntries = facultyDirectoryMembers.map((member) =>
  toKnowledgeEntry({
    category: 'Faculty',
    title: member.name,
    body: [
      member.role,
      member.school,
      member.expertise,
      member.description,
      ...(member.biography ?? []),
      ...(member.focusAreas ?? []),
      ...(member.profileHighlights ?? []),
    ].join(' '),
    href: member.profileHref,
    keywords: unique([
      member.name,
      ...member.name.split(' ').filter((part) => part.length > 2),
      member.role,
      member.school,
      ...(member.focusAreas ?? []),
    ]),
  }),
);

const supportEntries = [
  ...admissionSupport.map((item) =>
    toKnowledgeEntry({
      category: 'Admissions support',
      title: item.title,
      body: item.text,
      href: 'https://www.gutech.edu.pk/admission-process',
      keywords: ['admission', 'support', 'guidance', item.title],
    }),
  ),
  ...executiveLearningTracks.map((item) =>
    toKnowledgeEntry({
      category: 'Executive learning',
      title: item.title,
      body: item.text,
      href: 'https://www.gutech.edu.pk/executive-learning',
      keywords: ['executive learning', 'gelc', 'training', item.title],
    }),
  ),
  ...newsItems.map((item) =>
    toKnowledgeEntry({
      category: 'News',
      title: item.title,
      body: [item.subtitle, item.summary, item.details, item.impact, item.channel, item.dateLabel].join(' '),
      href: item.href,
      keywords: [item.title, item.category, item.subtitle, item.channel, item.dateLabel],
    }),
  ),
];

const chatbotKnowledgeBase = [
  ...officialKnowledgeEntries.map(toKnowledgeEntry),
  ...programEntries,
  ...departmentEntries,
  ...facultyEntries,
  ...supportEntries,
];

function createAdmissionsFlowText() {
  return admissionsSteps.map((step, index) => `${index + 1}. ${step}`).join(' ');
}

function scoreEntry(query: string, entry: (ChatKnowledgeEntry & { searchText: string })) {
  const normalizedQuery = normalize(query);
  if (!normalizedQuery) {
    return 0;
  }

  let score = 0;
  const normalizedTitle = normalize(entry.title);

  if (normalizedQuery.includes(normalizedTitle)) {
    score += 12;
  }

  for (const keyword of entry.keywords) {
    const normalizedKeyword = normalize(keyword);
    if (!normalizedKeyword) {
      continue;
    }

    if (normalizedQuery.includes(normalizedKeyword)) {
      score += normalizedKeyword.includes(' ') ? 8 : 4;
    }
  }

  const queryTokens = normalizedQuery.split(' ').filter((token) => token.length > 2);
  for (const token of queryTokens) {
    if (entry.searchText.includes(token)) {
      score += 1;
    }
  }

  return score;
}

function includesAny(normalizedText: string, phrases: string[]) {
  return phrases.some((phrase) => normalizedText.includes(normalize(phrase)));
}

function findProgram(query: string) {
  const normalizedQuery = normalize(query);
  return programs.find((program) =>
    includesAny(normalizedQuery, [program.title, program.shortTitle, program.slug.replace(/-/g, ' ')]),
  );
}

function findDepartment(query: string) {
  const normalizedQuery = normalize(query);
  return departments.find((department) =>
    includesAny(normalizedQuery, [
      department.title,
      department.shortTitle,
      department.slug.replace(/-/g, ' '),
      department.type,
    ]),
  );
}

function findFacultyMember(query: string) {
  const normalizedQuery = normalize(query);
  let bestMatch: { member: (typeof facultyDirectoryMembers)[number]; score: number } | null = null;

  for (const member of facultyDirectoryMembers) {
    const nameTokens = unique(member.name.split(' ').map((part) => normalize(part)).filter((part) => part.length > 2));
    const score = nameTokens.reduce((total, token) => total + (normalizedQuery.includes(token) ? 1 : 0), 0);

    if (score > 0 && (!bestMatch || score > bestMatch.score)) {
      bestMatch = { member, score };
    }
  }

  return bestMatch?.member ?? null;
}

function findNewsItem(query: string) {
  const normalizedQuery = normalize(query);
  return newsItems.find((item) =>
    includesAny(normalizedQuery, [item.title, item.category, item.subtitle, item.dateLabel]),
  );
}

export function getRelevantKnowledge(query: string, max = 6) {
  return chatbotKnowledgeBase
    .map((entry) => ({ entry, score: scoreEntry(query, entry) }))
    .filter((item) => item.score > 0)
    .sort((left, right) => right.score - left.score)
    .slice(0, max)
    .map((item) => item.entry);
}

export function buildChatbotContext(query: string) {
  const relevant = getRelevantKnowledge(query, 8);

  const programList = programs
    .map((program) => `• ${program.title} (${program.shortTitle}) — ${program.category} — ${program.credential}`)
    .join('\n');

  const feeDetails = [
    `• Application fee: ${siteConfig.feeAccount.applicationFee}`,
    `• Admission fee: PKR 10,000`,
    `• Security deposit (refundable): PKR 10,000`,
    `• BS Computer Science: PKR 16,000 per credit hour`,
    `• BBA / BS Business Analytics: PKR 14,000 per credit hour`,
    `• Scholarships: Merit-based tuition waivers 50% to 90% for selected applicants`,
  ].join('\n');

  const contactInfo = [
    `• Email: ${siteConfig.email}`,
    `• Info email: ${siteConfig.infoEmail}`,
    `• Phone / WhatsApp: ${siteConfig.phone}`,
    `• Address: ${siteConfig.address}`,
    `• Apply portal: ${siteConfig.applyHref}`,
  ].join('\n');

  const admissionsFlow = admissionsSteps
    .map((step, index) => `${index + 1}. ${step}`)
    .join('\n');

  const departmentList = departments
    .map((department) => `• ${department.title} — ${department.type}`)
    .join('\n');

  const eligibility = [
    `• BBA & BS Computer Science: Minimum 12 years education with 50% marks`,
    `• MS Islamic Banking & Finance: 16 years education with 50% marks or 2.0/4.0 CGPA`,
    `• Acceptable tests: GSAT, SAT, HEC NAT/HAT, USAT (GS/COM/E)`,
  ].join('\n');

  const relevantKnowledge = relevant.length
    ? `\n--- RELEVANT KNOWLEDGE ---\n${relevant
        .map(
          (entry) =>
            `[${entry.category}] ${entry.title}: ${entry.body}${entry.href ? ` (Ref: ${entry.href})` : ''}`,
        )
        .join('\n')}`
    : '';

  return [
    `=== GU TECH ASSISTANT — SYSTEM INSTRUCTIONS ===`,
    ``,
    `You are the official GU TECH chatbot assistant for Al Ghazali University website.`,
    `Tagline: ${siteConfig.tagline}`,
    ``,
    `=== RESPONSE RULES (MUST FOLLOW) ===`,
    `1. LANGUAGE: ALWAYS reply in the SAME language the user uses. If they write Roman Urdu, reply in Roman Urdu. If English, reply in English. Match their style.`,
    `2. LENGTH: Keep answers SHORT — maximum 3-5 lines. Do NOT write essays or paragraphs. Be concise.`,
    `3. FORMAT: Use bullet points (•) for lists. Use line breaks between sections. Never dump a wall of text.`,
    `4. ACCURACY: Only share information from the context provided below. If unsure, say "Is baare mein admissions se rabta karein" or similar.`,
    `5. LINKS: Never show raw URLs with %20 encoding. Instead say "WhatsApp: ${siteConfig.phone}" or "admissions@gutech.edu.pk pe email karein".`,
    `6. TONE: Be warm, friendly, and professional. Like a helpful university counselor.`,
    `7. GREETING: If user says salam/hello, reply warmly and ask how you can help.`,
    `8. REDIRECT: For questions outside your knowledge, politely redirect to admissions contact.`,
    ``,
    `=== PROGRAMS OFFERED ===`,
    programList,
    ``,
    `=== FEE STRUCTURE ===`,
    feeDetails,
    ``,
    `=== ELIGIBILITY ===`,
    eligibility,
    ``,
    `=== ADMISSIONS PROCESS ===`,
    admissionsFlow,
    ``,
    `=== DEPARTMENTS ===`,
    departmentList,
    ``,
    `=== CONTACT INFO ===`,
    contactInfo,
    ``,
    `=== CAMPUS HIGHLIGHTS ===`,
    `• Innovation & Incubation Centre (I.I.C) — AI, cybersecurity, fintech, startup mentoring`,
    `• Executive Learning (GELC) — Corporate training, workshops, leadership programs`,
    `• Design Thinking Resources — Practical problem-solving methodology`,
    `• Earn As You Learn model — Students can build careers before graduation`,
    `• Faculty from FAST-NU, MIT, IBA, KSBL, and other top institutions`,
    `• International collaborations: France, China, USA, UK, Turkey, Qatar, Saudi Arabia`,
    ``,
    `Faculty directory: ${facultyDirectoryMembers.length} members listed`,
    relevantKnowledge,
  ].join('\n');
}

function buildContactAnswer() {
  return [
    `You can reach GU TECH directly through the official admissions channels:`,
    `Email: ${siteConfig.email}`,
    `Info: ${siteConfig.infoEmail}`,
    `Phone: ${siteConfig.phone}`,
    `WhatsApp: ${siteConfig.phone}`,
    `Address: ${siteConfig.address}`,
    `Apply portal: ${siteConfig.applyHref}`,
  ].join('\n');
}

function buildAdmissionsAnswer() {
  const supportText = admissionSupport.map((item) => `- ${item.title}: ${item.text}`).join('\n');

  return [
    `Here is the current GU TECH admissions flow:`,
    ...admissionsSteps.map((step, index) => `${index + 1}. ${step}`),
    '',
    `Eligibility snapshot from the official admissions page: BBA and BS Computer Science require at least 12 years of education with 50 percent marks. MS Islamic Banking and Finance requires 16 years of education with 50 percent marks or at least 2.00 out of 4.00 CGPA.`,
    `Acceptable test routes listed by GU TECH: GSAT, SAT, HEC NAT or HAT, and USAT GS, COM, or E.`,
    '',
    `Key official fee note: application fee is ${siteConfig.feeAccount.applicationFee}. The official fee structure also highlights BS Computer Science at PKR 16,000 per credit hour and BBA at PKR 14,000 per credit hour, along with scholarships and customized financial assistance for selected applicants.`,
    '',
    `Admissions support channels:`,
    supportText,
    '',
    `Contact admissions: ${siteConfig.email}`,
    `WhatsApp admissions: ${siteConfig.phone}`,
    `Source: https://www.gutech.edu.pk/admission-process`,
    `Source: https://www.gutech.edu.pk/fee-structure`,
  ].join('\n');
}

function buildProgramAnswer(program: (typeof programs)[number]) {
  const curriculumNote = program.curriculum?.length
    ? `Curriculum is organized across ${program.curriculum.length} semester containers on the program page.`
    : 'This program page includes structured detail sections, outcomes, and next-step actions.';

  return [
    `${program.title} is a ${program.credential} pathway in the ${program.category.toLowerCase()} category.`,
    program.summary,
    program.description,
    `Program direction: ${program.overview}`,
    ...program.facts.map((fact) => `${fact.label}: ${fact.value}`),
    curriculumNote,
    `Program page: ${`/programs/${program.slug}`}`,
  ].join('\n');
}

function buildDepartmentAnswer(department: (typeof departments)[number]) {
  return [
    `${department.title} is presented by GU TECH as ${department.type.toLowerCase()}.`,
    department.summary,
    department.description,
    `Department direction: ${department.overview}`,
    ...department.facts.map((fact) => `${fact.label}: ${fact.value}`),
    ...department.links.map((link) => `${link.label}: ${link.href}`),
  ].join('\n');
}

function buildExecutiveLearningAnswer() {
  return [
    `GU TECH Executive Learning focuses on applied capability building for leaders, founders, managers, and institutional teams.`,
    `The official GELC page says delivery can be arranged nationwide, with active training capability in Islamabad, Lahore, and Karachi through on-site, off-site, and online modes.`,
    ...executiveLearningTracks.map((item) => `- ${item.title}: ${item.text}`),
    `Official page: https://www.gutech.edu.pk/executive-learning`,
  ].join('\n');
}

function buildFacultyAnswer(member: (typeof facultyDirectoryMembers)[number]) {
  return [
    `${member.name} is listed by GU TECH as ${member.role}.`,
    `Academic background: ${member.school}`,
    `Expertise: ${member.expertise}`,
    ...(member.biography ?? []),
    ...(member.focusAreas?.length ? ['Focus areas:', ...member.focusAreas.map((item) => `- ${item}`)] : []),
    member.profileHref ? `Official profile: ${member.profileHref}` : '',
  ]
    .filter(Boolean)
    .join('\n');
}

function buildNewsAnswer(item: (typeof newsItems)[number]) {
  return [
    `${item.title} is one of the current GU TECH highlights.`,
    `${item.subtitle} | ${item.category}`,
    item.summary,
    item.details,
    item.impact,
    item.href ? `Official channel: ${item.href}` : '',
  ]
    .filter(Boolean)
    .join('\n');
}

function buildGenericAnswer(query: string) {
  const relevant = getRelevantKnowledge(query, 3);

  if (!relevant.length) {
    return [
      `I can help with GU TECH programs, admissions, fees, scholarships, faculty, executive learning, design thinking, and the Innovation and Incubation Centre.`,
      `For direct follow-up, contact ${siteConfig.email} or WhatsApp: ${siteConfig.phone}`,
    ].join('\n');
  }

  return [
    `Here is the most relevant official GU TECH guidance I found:`,
    ...relevant.map((entry) => `- ${entry.title}: ${entry.body}${formatSource(entry.href)}`),
    '',
    `If you want, ask a narrower question such as admissions, fees, BS Computer Science, BBA, I.I.C, faculty, or executive learning.`,
  ].join('\n');
}

export function buildFallbackAnswer(query: string) {
  const normalizedQuery = normalize(query);

  if (!normalizedQuery) {
    return 'Please enter a question about GU TECH programs, admissions, faculty, fees, scholarships, I.I.C, or campus support.';
  }

  if (
    includesAny(normalizedQuery, [
      'contact',
      'whatsapp',
      'phone',
      'call',
      'email',
      'address',
      'location',
    ])
  ) {
    return buildContactAnswer();
  }

  if (
    includesAny(normalizedQuery, [
      'admission',
      'admissions',
      'apply',
      'application',
      'test',
      'gsat',
      'fee',
      'fees',
      'scholarship',
      'financial assistance',
      'eligibility',
      'document',
      'documents',
    ])
  ) {
    return buildAdmissionsAnswer();
  }

  const program = findProgram(query);
  if (program) {
    return buildProgramAnswer(program);
  }

  const department = findDepartment(query);
  if (department) {
    return buildDepartmentAnswer(department);
  }

  if (includesAny(normalizedQuery, ['executive learning', 'gelc', 'training', 'workshop', 'corporate'])) {
    return buildExecutiveLearningAnswer();
  }

  const facultyMember = findFacultyMember(query);
  if (facultyMember) {
    return buildFacultyAnswer(facultyMember);
  }

  const newsItem = findNewsItem(query);
  if (newsItem) {
    return buildNewsAnswer(newsItem);
  }

  if (includesAny(normalizedQuery, ['iic', 'innovation', 'incubation', 'startup', 'leap', 'venture'])) {
    const innovationDepartment =
      departments.find((department) => department.slug === 'iic') ??
      departments.find((department) => normalize(department.title).includes('innovation'));

    if (innovationDepartment) {
      return buildDepartmentAnswer(innovationDepartment);
    }
  }

  return buildGenericAnswer(query);
}

export function extractLead(message: string) {
  const email = message.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i)?.[0];
  const name = message.match(/(?:my name is|i am|i'm)\s+([A-Za-z][A-Za-z\s]{1,40})/i)?.[1];
  const lower = message.toLowerCase();

  const programInterest =
    programs.find((program) => lower.includes(program.shortTitle.toLowerCase()))?.title ??
    programs.find((program) => lower.includes(program.title.toLowerCase()))?.title;

  return {
    name: name?.trim(),
    email,
    programInterest,
  };
}
