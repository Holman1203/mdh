/**
 * ALL PAGE COPY LIVES HERE.
 * Edit the text in this file to change the website wording — no layout code needs touching.
 * Source: content/mamrex-profile.md (British English throughout).
 *
 * Icon fields use lucide-react icon names (see components/Icon.tsx for the allowed list).
 */

export const site = {
  name: "Mamrex Digital Hub Ltd",
  shortName: "MAMREX HUB",
  tagline: "Build on Strength",
  description:
    "Mamrex Digital Hub Ltd (MAMREX HUB) is a technology and innovation company in Maiduguri, Borno State, building the workspace, skills, ventures and connectivity that young African talent needs.",
  rc: "RC 9921354",
  cacStatus: "Active",
  incorporated: "8 October 2026",
  email: "mamrexhub@gmail.com",
  phone: "+234 813 072 8581",
  phoneHref: "+2348130728581",
  whatsappHref: "https://wa.me/2348130728581",
  address: {
    street: "24 Police Road, Old Airport",
    city: "Maiduguri",
    region: "Borno State",
    country: "Nigeria",
    full: "24 Police Road, Old Airport, Maiduguri, Borno State, Nigeria",
  },
  mapEmbed:
    "https://www.google.com/maps?q=24+Police+Road,+Old+Airport,+Maiduguri,+Borno+State,+Nigeria&output=embed",
  profilePdf: "/mamrex-corporate-profile.pdf",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.example.com",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about/" },
  { label: "Services", href: "/services/" },
  { label: "Learn", href: "/learn/" },
  { label: "Partner With Us", href: "/partner/" },
  { label: "Leadership", href: "/leadership/" },
  { label: "Roadmap", href: "/roadmap/" },
  { label: "Contact", href: "/contact/" },
];

/** Header menu: "About Us" is a dropdown that groups About, Services, Leadership and Roadmap. (The footer uses the flat `nav` above.) */
export type NavEntry = { label: string; href: string; children?: { label: string; href: string }[] };
export const navMenu: NavEntry[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about/",
    children: [
      { label: "Who we are", href: "/about/" },
      { label: "Services", href: "/services/" },
      { label: "Leadership", href: "/leadership/" },
      { label: "Roadmap", href: "/roadmap/" },
    ],
  },
  { label: "Learn", href: "/learn/" },
  { label: "Partner With Us", href: "/partner/" },
  { label: "Contact", href: "/contact/" },
];

export const home = {
  hero: {
    eyebrow: "Maiduguri, Borno State · Expanding across Africa",
    welcome: "Welcome to Mamrex Digital Hub",
    headline: "Build on Strength",
    title: "Technology, skills and enterprise for Nigeria's next generation of innovators",
    intro:
      "MAMREX HUB builds the dependable infrastructure, training and startup support that North-East Nigeria needs to take part fully in the digital economy.",
    primaryCta: { label: "Partner With Us", href: "/partner/" },
    secondaryCta: { label: "Learn Free Online", href: "/learn/" },
    chips: [
      { icon: "Layers", title: "6 integrated pillars", sub: "Workspace to AI" },
      { icon: "Target", title: "SDG 4 · 5 · 8 · 9 · 17", sub: "Aligned impact goals" },
    ],
  },
  stats: [
    { value: "3", label: "Barriers we remove" },
    { value: "6", label: "Integrated pillars" },
    { value: "6", label: "Steps in our pipeline" },
    { value: "4", label: "SDGs we align with" },
  ],
  barriers: {
    eyebrow: "Why we exist",
    title: "Three barriers hold back young talent. We remove all three.",
    intro:
      "Nigeria has one of the youngest and most entrepreneurial populations in the world, yet many talented young people and small organisations cannot turn that potential into income.",
    items: [
      {
        icon: "Zap",
        title: "Infrastructure",
        text: "Unreliable power and internet make it hard for freelancers, remote workers and small teams to work reliably.",
      },
      {
        icon: "GraduationCap",
        title: "Skills",
        text: "A gap between formal education and the skills the digital economy demands.",
      },
      {
        icon: "Wallet",
        title: "Capital & guidance",
        text: "Early-stage founders stall for lack of mentorship, business support and access to funders.",
      },
    ],
  },
  pillars: {
    eyebrow: "Our six pillars",
    title: "One integrated model, six ways to build",
    intro:
      "Each pillar feeds the others, so a young person can train at the Academy, build at the Workspace, launch through Ventures and connect to markets through the Community, with Mamrex AI built into every step.",
  },
  pipeline: {
    eyebrow: "How it works",
    title: "A pipeline, not six separate offerings",
    intro:
      "The six pillars work as a single pipeline that moves a person or business from access, to skill, to venture, to scale, with AI built in along the way.",
  },
  why: {
    eyebrow: "Why choose us",
    title: "Why choose Mamrex Digital Hub?",
  },
  sdg: {
    eyebrow: "Global alignment",
    title: "Aligned with the Sustainable Development Goals",
    intro:
      "As a new organisation we will establish baselines in our first year and report against clear indicators for each goal.",
  },
  cta: {
    title: "Let's build on strength, together",
    text: "We welcome donors, development partners, NGOs, government agencies and corporates who share our conviction that dependable infrastructure, practical skills and accessible capital are the foundation of inclusive growth.",
  },
};

export const pillars = [
  {
    id: "workspace",
    name: "Mamrex Workspace",
    short: "Workspace",
    tagline: "Premium co-working infrastructure",
    icon: "Building2",
    purpose:
      "Remove infrastructure as a barrier to productivity by giving members a professional, dependable base from which to run and grow their work.",
    serves:
      "Entrepreneurs, freelancers, remote teams and small organisations that would otherwise struggle with inconsistent power and internet.",
    delivers: [
      "Co-working desks, private offices, meeting and training rooms",
      "Solar-hybrid power with battery back-up and two independent internet links",
      "Flexible membership options",
    ],
    outcomes:
      "Members who can work without interruption, access remote and international income, and grow their ventures from a stable base.",
  },
  {
    id: "academy",
    name: "Mamrex Academy",
    short: "Academy",
    tagline: "Job-ready technical training",
    icon: "GraduationCap",
    purpose:
      "Close the gap between formal education and the skills the digital economy actually demands.",
    serves:
      "Students, graduates, young job-seekers and career-changers; training for NGO and institutional staff on request.",
    delivers: [
      "Structured, practical programmes built around hands-on projects",
      "Industry-aligned curricula",
      "Planned tracks: software and web development, UI/UX and graphic design, digital marketing, networking and IT support, data, cybersecurity and AI tools",
      "12–16 week tracks with assessments, capstone projects and portfolio reviews",
    ],
    outcomes:
      "Graduates prepared for real employment, freelance work or venture-building, with portfolios that demonstrate their skills.",
  },
  {
    id: "ventures",
    name: "Mamrex Ventures",
    short: "Ventures",
    tagline: "Startup incubation and funding access",
    icon: "Rocket",
    purpose:
      "Help early-stage African innovators turn validated ideas into investable businesses and avoid the pitfalls that cause early startups to stall.",
    serves:
      "Early-stage founders and small enterprises, including graduates of the Academy and members of the Workspace.",
    delivers: [
      "Structured mentorship",
      "Business development support",
      "Curated access to funding partners",
    ],
    outcomes:
      "Stronger startups, investor-ready founders, and new businesses and jobs in the local economy.",
  },
  {
    id: "connect",
    name: "Mamrex Connect",
    short: "Connect",
    tagline: "Enterprise internet and IT infrastructure",
    icon: "Wifi",
    purpose:
      "Extend our infrastructure expertise to organisations that need dependable, enterprise-grade connectivity and IT support beyond the walls of the hub.",
    serves: "Businesses, schools, NGOs and government offices.",
    delivers: [
      "Enterprise internet connectivity",
      "Network design and setup",
      "Ongoing IT support",
    ],
    outcomes:
      "Institutions that stay connected and operational, and a recurring revenue stream that helps sustain the hub.",
  },
  {
    id: "community",
    name: "Mamrex Community",
    short: "Community",
    tagline: "Events, hackathons and founder network",
    icon: "Users",
    purpose: "Build the connective tissue of the local innovation ecosystem.",
    serves: "Developers, designers, founders and students.",
    delivers: [
      "Regular meetups and events",
      "Hackathons",
      "A founder network that sparks collaboration, visibility and opportunity",
    ],
    outcomes:
      "A visible, connected innovation community that attracts talent, partners and investment to the region.",
  },
  {
    id: "ai",
    name: "Mamrex AI",
    short: "AI",
    tagline: "Applied AI and intelligent automation",
    icon: "BrainCircuit",
    purpose:
      "Put practical artificial intelligence within reach of Nigerian learners, businesses and institutions, and build it into everything else we do.",
    serves:
      "Students and professionals learning AI skills; SMEs, NGOs, schools and government offices that want to work faster and smarter with AI tools.",
    delivers: [
      "AI literacy and practical AI skills inside Academy programmes",
      "AI-assisted tools and automation across our software, consulting and marketing services",
      "Guidance on adopting AI responsibly, including data protection under the Nigeria Data Protection Act 2023",
      "Support for founders building AI-enabled products through Ventures",
    ],
    outcomes:
      "A workforce and a local business community that can use AI confidently and responsibly, and services that deliver more value for the same effort.",
  },
];

export const pipelineSteps = [
  {
    title: "Connect & Attract",
    text: "Mamrex Community generates awareness, visibility and talent flow through events, hackathons and a founder network.",
  },
  {
    title: "Build Skills",
    text: "Mamrex Academy delivers structured, project-based training that closes the gap between education and market need.",
  },
  {
    title: "Provide a Base",
    text: "Mamrex Workspace gives trainees, freelancers and small teams a dependable, professional working environment.",
  },
  {
    title: "Launch Ventures",
    text: "Mamrex Ventures supports validated ideas into investable, fundable businesses through mentorship and funding access.",
  },
  {
    title: "Amplify with AI",
    text: "Mamrex AI builds practical AI skills and tools into training, venture support and institutional services, so every step reaches further.",
  },
  {
    title: "Extend & Sustain",
    text: "Mamrex Connect and the digital services arm extend our infrastructure expertise to institutions and generate the recurring revenue that sustains the model.",
  },
];

export const whyChoose = [
  {
    icon: "Layers",
    title: "An integrated, not isolated, model",
    text: "Infrastructure, skills training, startup support, enterprise connectivity, community building and applied AI are designed to reinforce one another, so impact compounds rather than stays siloed.",
  },
  {
    icon: "ShieldCheck",
    title: "Institution-tested technical leadership",
    text: "Our founder leads ICT for a national humanitarian NGO and has supported several local humanitarian organisations directly, bringing practical, institution-facing experience into our own infrastructure and services.",
  },
  {
    icon: "MapPin",
    title: "Deep local understanding",
    text: "Based in Maiduguri, we built this model around the specific infrastructure, skills and capital barriers North-East Nigeria actually faces, not a generic hub template.",
  },
  {
    icon: "RefreshCw",
    title: "A sustainable, revenue-diversified model",
    text: "Workspace memberships, Mamrex Connect contracts and the digital services arm generate earned income alongside partner funding, so grants accelerate impact rather than create dependency.",
  },
  {
    icon: "FileCheck",
    title: "A clean legal and compliance foundation",
    text: "MAMREX HUB is a registered CAC entity with documented financial controls, safeguarding commitments and a data-protection approach aligned to the Nigeria Data Protection Act 2023.",
  },
  {
    icon: "Copy",
    title: "Built for replication",
    text: "The model is designed from day one to be repeatable in other Nigerian and African cities, giving partners a platform for regional, not single-site, impact.",
  },
];

export const sdgs = [
  { number: 4, name: "Quality Education" },
  { number: 5, name: "Gender Equality" },
  { number: 8, name: "Decent Work and Economic Growth" },
  { number: 9, name: "Industry, Innovation and Infrastructure" },
  { number: 17, name: "Partnerships for the Goals" },
];

/* ---------------------------------- ABOUT ---------------------------------- */

export const about = {
  meta: {
    title: "About Us",
    description:
      "Learn about Mamrex Digital Hub Ltd: our vision, mission, values and the philosophy behind Build on Strength.",
  },
  hero: {
    eyebrow: "About us",
    title: "Building the infrastructure, talent and enterprises North-East Nigeria needs",
    intro: "A registered Nigerian technology and innovation company headquartered in Maiduguri.",
  },
  summaryTitle: "Executive summary",
  summary: [
    "Mamrex Digital Hub Ltd (MAMREX HUB) is a Nigerian technology and innovation company headquartered in Maiduguri, Borno State, and incorporated under the Companies and Allied Matters Act 2020. It exists to remove three barriers that most often hold back young African talent and early-stage businesses: unreliable infrastructure, a gap between formal education and the skills the digital economy demands, and limited access to mentorship and funding.",
    "We address these barriers through six integrated pillars — Workspace, Academy, Ventures, Connect, Community and AI — supported by a commercial digital-services arm that provides software development, IT consultancy, branding and digital marketing, and hardware and networking supply. Each pillar feeds the others, so a young person can train at the Academy, build at the Workspace, launch through Ventures, and connect to markets and partners through the Community.",
    "MAMREX HUB is a newly established company. Its credibility rests on a clear, legally registered structure, a focused model built around real local needs, and a founder with hands-on experience delivering ICT systems for humanitarian and development organisations in Nigeria. We are seeking partners who share our conviction that dependable infrastructure, practical skills and accessible capital are the foundation of inclusive economic recovery and growth in North-East Nigeria and beyond.",
  ],
  whyTitle: "Why we exist",
  whyIntro:
    "Nigeria has one of the youngest and most entrepreneurial populations in the world, yet many talented young people and small organisations cannot turn that potential into income. In North-East Nigeria, where recovery and rebuilding are ongoing, these gaps are sharper and the opportunity to close them is greater.",
  barrierHeaders: ["Barrier", "What it looks like", "How MAMREX HUB responds"],
  barrierRows: [
    [
      "Infrastructure",
      "Inconsistent power and internet make it hard for freelancers, remote workers and small teams to work reliably.",
      "Mamrex Workspace and Mamrex Connect provide dependable, professional-grade power and connectivity.",
    ],
    [
      "Skills",
      "A gap between what formal education teaches and what the digital economy demands.",
      "Mamrex Academy delivers practical, project-based, industry-aligned training.",
    ],
    [
      "Capital & guidance",
      "Early-stage founders stall for lack of mentorship, business support and access to funders.",
      "Mamrex Ventures combines mentorship, business development and curated funding access.",
    ],
    [
      "Connection",
      "Developers, designers, founders and students work in isolation, with little visibility.",
      "Mamrex Community builds the network through events, hackathons and a founder network.",
    ],
    [
      "Institutional IT",
      "Schools, NGOs and government offices lack dependable enterprise IT and connectivity.",
      "Mamrex Connect and the digital services arm provide enterprise-grade IT support.",
    ],
  ],
  backgroundTitle: "Our background",
  background: [
    "MAMREX HUB was founded to respond directly to a recurring barrier faced by innovators in North-East Nigeria: the absence of dependable infrastructure — power, internet, workspace and structured skills development — needed to turn ideas into viable products and businesses. The company was incorporated in October 2026 as a private company limited by shares, giving it a clear legal foundation from which to build.",
    "The organisation's direction is shaped by the practical, institution-facing experience of its founder, who has worked at the intersection of technology and humanitarian response in Nigeria. That experience — administering systems, building and hosting websites, and supporting the digital operations of national and local organisations — informs how MAMREX HUB designs its own infrastructure and enterprise services.",
  ],
  glanceTitle: "At a glance",
  glance: [
    ["Legal name", "Mamrex Digital Hub Ltd"],
    ["Registration", "RC 9921354, Corporate Affairs Commission (CAC), Nigeria"],
    ["Company type", "Private company limited by shares"],
    ["Date of incorporation", "8 October 2026 (CAC status: Active)"],
    ["Headquarters", "24 Police Road, Old Airport, Maiduguri, Borno State, Nigeria"],
    ["Sector", "Information and communication; technology, skills and innovation"],
    ["Geography", "Based in Maiduguri; serving Nigeria and expanding across Africa"],
  ],
  vision: {
    label: "Vision",
    text: "An Africa where talent is limited only by ambition, not by access to power, connectivity, skills or capital.",
  },
  mission: {
    label: "Mission",
    text: "To build dependable digital infrastructure and the people and businesses that run on it, by providing a reliable workspace, job-ready training, startup support and enterprise IT services that turn local potential into lasting economic opportunity.",
  },
  valuesTitle: "Our core values",
  valuesIntro: "Five commitments guide how MAMREX HUB builds, partners and delivers.",
  values: [
    {
      icon: "Mountain",
      title: "Strength",
      text: "We build resilient systems and organisations that last, in a context where resilience matters.",
    },
    {
      icon: "Landmark",
      title: "Foundation",
      text: "We invest first in the basics people need to succeed: power, connectivity, skills and trust.",
    },
    {
      icon: "Lightbulb",
      title: "Innovation",
      text: "We apply technology creatively to real local problems, not for its own sake.",
    },
    {
      icon: "TrendingUp",
      title: "Impact",
      text: "We measure success by the livelihoods, businesses and jobs we help create.",
    },
    {
      icon: "Award",
      title: "Excellence",
      text: "We deliver professional-grade services and hold ourselves to international standards.",
    },
  ],
  philosophyTitle: "Our philosophy",
  philosophyIntro:
    "Our name expresses our operating philosophy. Together, its two halves signal an organisation that builds durable ground first, then helps innovation multiply on top of it.",
  philosophyParts: [
    { symbol: "MAMRE", text: "Strength and foundation." },
    {
      symbol: "X",
      text: "The future, innovation and the unknown multiplier effect that technology brings to a community once it has the right foundation.",
    },
  ],
  philosophyBody:
    "This philosophy shapes the order in which we work. We do not start with training or funding; we start with the infrastructure that makes training and enterprise possible. Only once that foundation is dependable do we layer on skills, venture support and community — so that what gets built on top is built to last, not to stall the moment the initial excitement fades.",
};

/* --------------------------------- SERVICES -------------------------------- */

export const services = {
  meta: {
    title: "Services",
    description:
      "Explore the six Mamrex pillars — Workspace, Academy, Ventures, Connect, Community and AI — and our digital services arm.",
  },
  hero: {
    eyebrow: "Our services",
    title: "Six interconnected pillars, supported by a commercial digital-services arm",
    intro:
      "Designed to move a person or business from access, to skill, to venture, to scale.",
  },
  labels: {
    purpose: "Purpose",
    serves: "Who it serves",
    delivers: "What we deliver",
    outcomes: "Intended outcomes",
  },
  arm: {
    eyebrow: "Digital services arm",
    title: "Commercial services that sustain the mission",
    intro:
      "Alongside the six pillars, MAMREX HUB operates a commercial services arm. It earns income, creates practical work experience for Academy graduates, and gives us direct, ongoing relationships with the institutions we hope to serve.",
    items: [
      {
        icon: "Code2",
        title: "Software and digital products",
        text: "Web design, web and mobile application development, intranet development and digital platforms for businesses, organisations and government institutions.",
      },
      {
        icon: "Network",
        title: "Technology consulting",
        text: "IT consultancy, systems analysis, database development and cloud-based solutions.",
      },
      {
        icon: "Palette",
        title: "Creative and marketing services",
        text: "Graphic design, branding, content creation and digital marketing.",
      },
      {
        icon: "HardDrive",
        title: "Hardware and networking",
        text: "Supply, distribution and maintenance of computer hardware, software and networking equipment.",
      },
    ],
  },
  expertise: {
    eyebrow: "Expertise",
    title: "Technical capability grounded in hands-on delivery",
    intro:
      "Our capability is built on direct delivery experience rather than theory — the same disciplines our founder applies daily to support humanitarian and development organisations.",
    groups: [
      {
        title: "Software & web development",
        items: [
          "Website design and development, from informational sites to full web applications",
          "Mobile and desktop application development",
          "Intranet and internal digital platform development for organisations and institutions",
        ],
      },
      {
        title: "IT consultancy & infrastructure",
        items: [
          "ICT consultancy and digital transformation planning for businesses and institutions",
          "Systems administration, hosting and email infrastructure",
          "Database development and cloud-based solutions",
          "Network design, setup and enterprise connectivity (delivered through Mamrex Connect)",
        ],
      },
      {
        title: "Creative, branding & digital marketing",
        items: ["Graphic design and corporate branding", "Content creation and digital marketing support"],
      },
      {
        title: "Hardware & networking supply",
        items: [
          "Supply, distribution and maintenance of computer hardware, software and networking equipment",
        ],
      },
    ],
  },
};

/* ---------------------------------- PARTNER -------------------------------- */

export const partner = {
  meta: {
    title: "Partner With Us",
    description:
      "Partner with Mamrex Digital Hub: partnership pathways for donors, NGOs, government agencies, corporates, investors and universities.",
  },
  hero: {
    eyebrow: "Partner with us",
    title: "Co-design programmes that create jobs, skills and enterprises",
    intro:
      "We welcome partnerships with organisations that share our goals, and are open to co-designing programmes aligned to a partner's priorities and reporting requirements.",
  },
  clients: {
    eyebrow: "Who we serve",
    title: "Target clients and sectors",
    intro:
      "Our integrated model serves a wide cross-section of the innovation ecosystem, with each group engaging the hub at different points in their journey.",
    items: [
      {
        icon: "Store",
        title: "Small and medium-sized enterprises",
        text: "Businesses needing dependable workspace, enterprise connectivity, or software and branding support to operate and grow.",
      },
      {
        icon: "Rocket",
        title: "Entrepreneurs and startups",
        text: "Founders and small teams turning ideas into fundable, scalable ventures through Mamrex Ventures.",
      },
      {
        icon: "HeartHandshake",
        title: "NGOs and development partners",
        text: "Organisations needing reliable IT infrastructure, digital skills programming, or a local implementation partner.",
      },
      {
        icon: "Landmark",
        title: "Government institutions",
        text: "Agencies pursuing youth employment, digital inclusion and innovation initiatives.",
      },
      {
        icon: "School",
        title: "Educational institutions",
        text: "Schools and training bodies seeking curriculum partnership, practical training space and placements for their students.",
      },
      {
        icon: "User",
        title: "Individuals and professionals",
        text: "Freelancers, remote workers, students and job-seekers needing workspace, training or digital skills.",
      },
    ],
  },
  pathways: {
    eyebrow: "Partnership pathways",
    title: "Find the pathway that fits your organisation",
    headers: ["Partner type", "What you could support", "What MAMREX HUB offers"],
    rows: [
      [
        "Donors & foundations",
        "Training cohorts, scholarships for women and youth, incubation programmes.",
        "Local delivery, measurable outcomes and transparent reporting.",
      ],
      [
        "Development agencies & NGOs",
        "Digital skills and livelihoods components of recovery programmes.",
        "Training delivery, IT services and local implementation capacity.",
      ],
      [
        "Government agencies",
        "Youth employment, digital inclusion and innovation initiatives.",
        "A local hub, training capacity and digital solutions.",
      ],
      [
        "Corporates & telecoms",
        "Connectivity, equipment, sponsorship, talent pipelines.",
        "Access to trained local talent and a visible community platform.",
      ],
      [
        "Investors & accelerators",
        "Co-investment and mentorship for early-stage founders.",
        "A pipeline of vetted, supported startups.",
      ],
      [
        "Universities & training bodies",
        "Curriculum, certification and internships.",
        "Practical training space, industry projects and placements.",
      ],
    ],
  },
  ways: {
    eyebrow: "Ways to work together",
    title: "Six ways to get involved",
    items: [
      {
        icon: "Banknote",
        title: "Programme grants",
        text: "Fund a defined training cohort, incubation programme or community event series.",
      },
      {
        icon: "Package",
        title: "In-kind support",
        text: "Provide equipment, devices, bandwidth, software licences or workspace fit-out.",
      },
      {
        icon: "GraduationCap",
        title: "Scholarships",
        text: "Sponsor places for women, youth and displaced or vulnerable learners.",
      },
      {
        icon: "Handshake",
        title: "Service partnerships",
        text: "Contract MAMREX HUB for software, IT and connectivity services for your own organisation.",
      },
      {
        icon: "Users",
        title: "Joint programmes",
        text: "Co-design and co-deliver programmes with your team.",
      },
      {
        icon: "Globe",
        title: "Expansion partnerships",
        text: "Support future hubs in other cities and countries.",
      },
    ],
  },
  impact: {
    eyebrow: "Impact & measurement",
    title: "What we will track and report",
    intro:
      "We align our work with SDG 4 (Quality Education), SDG 5 (Gender Equality), SDG 8 (Decent Work and Economic Growth), SDG 9 (Industry, Innovation and Infrastructure) and SDG 17 (Partnerships for the Goals). As a new organisation we will establish baselines in our first year and report against the following indicators.",
    headers: ["Area", "Indicators we will track and report"],
    rows: [
      [
        "Skills",
        "Number of trainees enrolled and completing; share of women and youth; assessment results and portfolio projects completed.",
      ],
      ["Livelihoods", "Graduates employed, freelancing or self-employed within six months of completion."],
      [
        "Enterprise",
        "Startups supported; businesses launched; jobs created; funding mobilised for supported founders.",
      ],
      [
        "Infrastructure",
        "Workspace members served; institutions connected and supported; network uptime.",
      ],
      [
        "Ecosystem",
        "Events and hackathons held; participants reached; partnerships formed.",
      ],
    ],
  },
};

/* -------------------------------- LEADERSHIP ------------------------------- */

export const leadership = {
  meta: {
    title: "Leadership & Governance",
    description:
      "Meet the founder of Mamrex Digital Hub and read about our governance, compliance and safeguarding commitments.",
  },
  hero: {
    eyebrow: "Leadership & governance",
    title: "Practical, institution-tested leadership and a clean legal foundation",
    intro:
      "MAMREX HUB operates as a formally registered company and is putting in place the governance structures that funders and institutional partners expect.",
  },
  founder: {
    name: "Samuel Emmanuel Holman",
    role: "Founder & Director",
    bio: "Samuel Emmanuel Holman is the founder and director of MAMREX HUB. He is an ICT professional with hands-on experience in humanitarian and development settings in Nigeria, where he leads ICT for a national humanitarian NGO and has provided IT consultancy to several local humanitarian organisations. His work spans systems administration, web development, hosting and email infrastructure, and digital branding. He brings this practical, institution-facing experience directly into MAMREX HUB's infrastructure and enterprise services.",
  },
  advisory: {
    title: "Advisory board",
    text: "To be announced as the organisation builds out its leadership structure, including senior management.",
  },
  governance: {
    eyebrow: "Governance, compliance & safeguards",
    title: "What partners can expect from us",
    intro: "As a new company, we are committing to the following as part of our launch.",
    items: [
      {
        icon: "Landmark",
        title: "Financial management",
        text: "A dedicated corporate bank account, documented financial controls and annual accounts filed in line with CAC requirements.",
      },
      {
        icon: "Eye",
        title: "Oversight",
        text: "An advisory board of experienced professionals from technology, education, business and the development sector.",
      },
      {
        icon: "ScrollText",
        title: "Policies",
        text: "Written anti-fraud and anti-corruption, safeguarding and protection from sexual exploitation, abuse and harassment, and data protection policies, aligned with the Nigeria Data Protection Act 2023.",
      },
      {
        icon: "BarChart3",
        title: "Accountability",
        text: "A monitoring and evaluation framework tied to our published indicators, with transparent reporting to partners.",
      },
    ],
  },
  cac: {
    title: "Registration status",
    rows: [
      ["Company registration number", "RC 9921354"],
      ["Certificate of Incorporation", "Issued by the CAC at Abuja, 8 October 2026"],
      ["Governing law", "Companies and Allied Matters Act 2020"],
      ["Memorandum and Articles of Association", "Filed and certified by the CAC"],
      ["Persons with significant control", "Registered with the CAC"],
      ["CAC status", "Active"],
    ],
  },
};

/* ---------------------------------- ROADMAP -------------------------------- */

export const roadmap = {
  meta: {
    title: "Roadmap",
    description:
      "Our indicative 2026–2030 roadmap: Establish, Build, Grow, Scale and Lead, from a foundation in Maiduguri to a regional platform.",
  },
  hero: {
    eyebrow: "Strategic plan 2026–2030",
    title: "From foundation to regional platform in five phases",
    intro:
      "Our indicative roadmap runs from incorporation in October 2026 to three hubs by 2030, built around five pillars and one simple idea: build on strength.",
  },
  phases: [
    {
      phase: "Phase 1",
      name: "Establish",
      time: "Q4 2026",
      goal: "",
      items: [
        "Corporate bank account and financial controls",
        "Core policies adopted",
        "Premises secured and fit-out begun",
        "Digital services trading",
        "Website relaunched and 3MTT outreach",
      ],
    },
    {
      phase: "Phase 2",
      name: "Build",
      time: "2027",
      goal: "",
      items: [
        "Hub opens with solar-hybrid power and dual internet",
        "Workspace memberships launched",
        "Academy cohorts: 300 learners",
        "First Connect clients",
        "Advisory board and M&E baseline",
      ],
    },
    {
      phase: "Phase 3",
      name: "Grow",
      time: "2028",
      goal: "",
      items: [
        "Multiple Academy tracks and certifications",
        "First Ventures cohort",
        "Annual innovation summit",
        "Core hub operations break even",
        "External audit and mid-term review",
      ],
    },
    {
      phase: "Phase 4",
      name: "Scale",
      time: "2029",
      goal: "",
      items: [
        "Satellite hub in the North-East",
        "Blended and online Academy",
        "Two Ventures cohorts a year",
        "Alumni and investor network",
        "Three-month operating reserve",
      ],
    },
    {
      phase: "Phase 5",
      name: "Lead",
      time: "2030",
      goal: "",
      items: [
        "Three hubs operating",
        "First partnership beyond Nigeria",
        "About 60% of income earned",
        "End-of-plan evaluation",
        "Strategic Plan 2031–2035",
      ],
    },
  ],
  gate: {
    title: "Phase gate",
    text: "Each phase's milestones must be substantially met before the next phase's main investments are released. Reliability first, then revenue, then replication: every expansion is earned by the results of the phase before it.",
    note: "The roadmap is indicative and will be reviewed at mid-term (end of 2028).",
  },
};

/* ---------------------------------- CONTACT -------------------------------- */

export const contact = {
  meta: {
    title: "Contact Us",
    description:
      "Contact Mamrex Digital Hub Ltd in Maiduguri, Borno State, for partnership, funding, services or Academy enquiries.",
  },
  hero: {
    eyebrow: "Contact us",
    title: "Let's build on strength, together",
    intro:
      "For partnership, funding or collaboration enquiries, please reach out through the official MAMREX HUB channels below.",
  },
  contactPerson: "Samuel Emmanuel Holman, Founder and Director",
  form: {
    title: "Send us a message",
    subjects: [
      "Partnership or funding",
      "Digital services",
      "Mamrex Academy",
      "Mamrex Workspace",
      "Mamrex Ventures",
      "Donation or support",
      "Other",
    ],
  },
};

/* ------------------------- REDESIGN: NEW SECTIONS ------------------------- */

/** Small facts strip under the hero. All facts come from the corporate profile. */
export const trustItems = [
  { icon: "ShieldCheck", title: "CAC registered", sub: "RC 9921354 · Status: Active" },
  { icon: "FileCheck", title: "NDPA 2023 aligned", sub: "Data protection approach" },
  { icon: "Target", title: "SDG 4 · 5 · 8 · 9 · 17", sub: "Aligned impact goals" },
  { icon: "MapPin", title: "Maiduguri, Nigeria", sub: "Expanding across Africa" },
];

/**
 * COUNTERS — the 2030 targets from the Strategic Plan 2026–2030. These are targets, not results to date
 * (the company was incorporated in October 2026). When real results exist, add or replace tiles here.
 */
export const impactNumbers = [
  { value: 3000, suffix: "", label: "Learners trained by 2030" },
  { value: 400, suffix: "", label: "Active workspace members by 2030" },
  { value: 60, suffix: "", label: "Startups incubated by 2030" },
  { value: 100, suffix: "", label: "Institutions connected or supported by 2030" },
  { value: 40, suffix: "%", label: "Women among our learners (at least)" },
  { value: 3, suffix: "", label: "Hubs operating by 2030" },
  { value: 60, suffix: "%", label: "Graduates in work within six months (at least)" },
  { value: 60, suffix: "%", label: "Share of income earned by 2030 (about)" },
];

export const impactCopy = {
  eyebrow: "Our 2030 targets",
  title: "Where we are building to",
  intro:
    "MAMREX HUB is newly established. These are the targets in our 2026–2030 Strategic Plan, not results to date. We will report against them as our programmes run.",
};

export const valuesIntro = {
  eyebrow: "Why Mamrex",
  title: "Five values behind everything we build",
};

/** Filterable programme cards. Programmes launch in phases (see Roadmap). */
export const programmeFilters = ["All", "Academy", "Ventures", "Community", "Workspace", "AI"];

export const programmes = [
  {
    category: "Academy",
    icon: "Code2",
    title: "Web and software development",
    text: "Practical, project-based training in building websites and software, with a portfolio to show for it.",
  },
  {
    category: "Academy",
    icon: "Palette",
    title: "UI/UX and graphic design",
    text: "Hands-on design training aligned to what the digital economy actually asks for.",
  },
  {
    category: "Academy",
    icon: "TrendingUp",
    title: "Digital marketing",
    text: "Industry-aligned digital marketing skills through real projects.",
  },
  {
    category: "Academy",
    icon: "Network",
    title: "Networking and IT support",
    text: "Job-ready networking and IT support skills, also available as training for NGO and institutional staff on request.",
  },
  {
    category: "Academy",
    icon: "BrainCircuit",
    title: "Data, cybersecurity and AI tools",
    text: "Planned tracks in data, cybersecurity and practical AI tools, reviewed every year with employers.",
  },
  {
    category: "Ventures",
    icon: "Rocket",
    title: "Startup incubation",
    text: "Structured mentorship and business development support to turn validated ideas into investable businesses.",
  },
  {
    category: "Ventures",
    icon: "Banknote",
    title: "Funding access",
    text: "Curated access to funding partners for early-stage founders.",
  },
  {
    category: "Community",
    icon: "Users",
    title: "Meetups and events",
    text: "Regular events that connect developers, designers, founders and students.",
  },
  {
    category: "Community",
    icon: "Lightbulb",
    title: "Hackathons",
    text: "Build-together events that spark collaboration, visibility and opportunity.",
  },
  {
    category: "Community",
    icon: "Handshake",
    title: "Founder network",
    text: "A connected network of founders sharing knowledge, partners and opportunities.",
  },
  {
    category: "AI",
    icon: "BrainCircuit",
    title: "AI literacy and practical AI skills",
    text: "Hands-on training in using AI tools well and responsibly, built into Academy programmes.",
  },
  {
    category: "AI",
    icon: "Zap",
    title: "AI and automation for organisations",
    text: "Practical guidance and tools for SMEs, NGOs, schools and offices that want to work smarter with AI.",
  },
  {
    category: "Workspace",
    icon: "Building2",
    title: "Co-working desks and private spaces",
    text: "A professional base with reliable power and high-quality internet.",
  },
  {
    category: "Workspace",
    icon: "Wifi",
    title: "Flexible memberships",
    text: "Membership options for freelancers, remote teams and small organisations.",
  },
];

/**
 * TESTIMONIALS — add real ones here and the carousel appears automatically.
 * Format: { quote: "…", name: "…", role: "…" }. Left empty on purpose: no invented testimonials.
 */
export const testimonials: { quote: string; name: string; role: string }[] = [];

/**
 * PARTNERS — add real partner logos here and the greyscale strip appears automatically.
 * Format: { name: "Partner name", logo: "/partners/logo.png" } (files go in public/partners/).
 */
export const partners: { name: string; logo: string }[] = [];

/**
 * SOCIAL LINKS — add your real profile URLs and the icons appear in the footer.
 * Supported icons: "Facebook", "Instagram", "Linkedin", "Twitter", "Youtube".
 */
export const socials: { label: string; href: string; icon: string }[] = [];

export const newsletter = {
  title: "Stay in the loop",
  text: "Programme news, events and hackathon invitations from MAMREX HUB.",
};

/**
 * HERO — each slide pairs an African / Nigerian photo (free Unsplash, links in the README) with its own
 * headline, subtitle and two buttons. The hero changes slide on its own; everything changes together.
 * Replace photos in public/hero/ and edit the wording here. pos = which part of the photo stays visible
 * when it is cropped (CSS object-position). The wording follows the corporate profile.
 */
export const heroWelcome = "Welcome to Mamrex Digital Hub";

type HeroCta = { label: string; href: string };
export const heroSlides: {
  src: string;
  pos: string;
  alt: string;
  headline: string;
  subtitle: string;
  primary: HeroCta;
  secondary: HeroCta;
}[] = [
  {
    src: "/hero/hero.webp",
    pos: "65% center",
    alt: "Young Nigerian developers working together at a shared workspace in Lagos",
    headline: "Build on Strength",
    subtitle: "Technology, skills and enterprise for Nigeria's next generation of innovators.",
    primary: { label: "Partner With Us", href: "/partner/" },
    secondary: { label: "Learn Free Online", href: "/learn/" },
  },
  {
    src: "/hero/hero-man.webp",
    pos: "58% 30%",
    alt: "A smiling young Nigerian man holding a laptop",
    headline: "Build Skills",
    subtitle: "Practical, project-based training that prepares young people for real work in the digital economy.",
    primary: { label: "Learn Free Online", href: "/learn/" },
    secondary: { label: "See our programmes", href: "/#programmes" },
  },
  {
    src: "/hero/hero-children.webp",
    pos: "70% center",
    alt: "School pupils learning in a classroom in Lagos, Nigeria",
    headline: "Close the Gap",
    subtitle: "Bridging the distance between formal education and the skills the digital economy demands.",
    primary: { label: "Learn Free Online", href: "/learn/" },
    secondary: { label: "Partner With Us", href: "/partner/" },
  },
  {
    src: "/hero/hero-woman.webp",
    pos: "65% center",
    alt: "A young African woman smiling at her laptop at work",
    headline: "Power Your Work",
    subtitle: "Reliable power and high-quality internet, so you can work without interruption from a professional base.",
    primary: { label: "Explore the Workspace", href: "/services/#workspace" },
    secondary: { label: "Contact Us", href: "/contact/" },
  },
  {
    src: "/hero/hero-couple.webp",
    pos: "65% center",
    alt: "Two young African professionals looking at a laptop together",
    headline: "Launch Ventures",
    subtitle: "Mentorship, business support and access to funding partners that turn validated ideas into investable businesses.",
    primary: { label: "Explore Ventures", href: "/services/#ventures" },
    secondary: { label: "Partner With Us", href: "/partner/" },
  },
  {
    src: "/hero/hero-headphones.webp",
    pos: "62% 35%",
    alt: "A smiling young African woman with headphones at her workplace",
    headline: "Amplify with AI",
    subtitle: "Practical AI skills and tools built into our training, ventures and services, so every step reaches further.",
    primary: { label: "Explore Mamrex AI", href: "/services/#ai" },
    secondary: { label: "Contact Us", href: "/contact/" },
  },
];

/* ---------------------------------- DONATE --------------------------------- */

/**
 * DONATE PAGE — bank details and the Paystack link live here.
 * paystackUrl: paste your Paystack payment page link (e.g. "https://paystack.com/pay/your-page").
 * While it is empty, the Paystack button is hidden and a "coming soon" note is shown instead.
 */
export const donate = {
  accountName: "MAMREX DIGITAL HUB LTD",
  accountNumber: "0128434091",
  bankName: "Wema Bank",
  paystackUrl: "", // TODO: paste your Paystack payment link here

  meta: {
    title: "Donate Now",
    description:
      "Support Mamrex Digital Hub: donate by Paystack or bank transfer to fund training, tools and opportunities for young people and early-stage founders in North-East Nigeria.",
  },
  hero: {
    eyebrow: "Donate now",
    title: "Help a young innovator build on strength",
    intro:
      "Your support funds training, tools and opportunities for young people and early-stage founders in Maiduguri and across North-East Nigeria.",
  },
  online: {
    text: "Give quickly and securely by card or bank transfer through Paystack. You choose the amount.",
  },
  bank: {
    text: "Prefer a direct transfer? Use the account below. Please keep your transfer receipt.",
  },
  after: {
    title: "After you give",
    text: "Please email or WhatsApp us your name and proof of payment so that we can acknowledge your gift and thank you.",
  },
  use: {
    eyebrow: "Where your support goes",
    title: "Training, tools and opportunity",
    intro: "Gifts help us deliver programmes and equip the young people and founders we serve.",
    items: [
      {
        icon: "GraduationCap",
        title: "Scholarships",
        text: "Places for women, youth and displaced or vulnerable learners.",
      },
      {
        icon: "Users",
        title: "Training cohorts",
        text: "Practical, project-based digital skills training at the Academy.",
      },
      {
        icon: "Rocket",
        title: "Incubation",
        text: "Mentorship and business support for early-stage founders.",
      },
      {
        icon: "Package",
        title: "Equipment and connectivity",
        text: "Devices, bandwidth, software licences and workspace fit-out.",
      },
    ],
  },
  other: {
    eyebrow: "Other ways to support",
    title: "Partner with us",
    text: "Donors, foundations, businesses and institutions can also fund a programme, give in-kind support, sponsor scholarships or co-design a programme with us.",
  },
};
