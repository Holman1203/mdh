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
  phone: "+234 901 247 5919",
  phoneHref: "+2349012475919",
  whatsappHref: "https://wa.me/2349012475919",
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
  { label: "About", href: "/about/" },
  { label: "Services", href: "/services/" },
  { label: "Partner With Us", href: "/partner/" },
  { label: "Leadership", href: "/leadership/" },
  { label: "Roadmap", href: "/roadmap/" },
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
    secondaryCta: { label: "Join the Academy", href: "/services/#academy" },
    chips: [
      { icon: "Layers", title: "5 integrated pillars", sub: "Workspace to Community" },
      { icon: "Target", title: "SDG 4 · 8 · 9 · 17", sub: "Aligned impact goals" },
    ],
  },
  stats: [
    { value: "3", label: "Barriers we remove" },
    { value: "5", label: "Integrated pillars" },
    { value: "5", label: "Steps in our pipeline" },
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
    eyebrow: "Our five pillars",
    title: "One integrated model, five ways to build",
    intro:
      "Each pillar feeds the others, so a young person can train at the Academy, build at the Workspace, launch through Ventures and connect to markets through the Community.",
  },
  pipeline: {
    eyebrow: "How it works",
    title: "A pipeline, not five separate offerings",
    intro:
      "The five pillars work as a single pipeline that moves a person or business from access, to skill, to venture, to scale.",
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
      "Co-working desks and private spaces",
      "Reliable power and high-quality internet",
      "Meeting and collaboration areas",
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
      "Planned tracks: web and software development, design, digital marketing, and networking and IT support",
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
    title: "Extend & Sustain",
    text: "Mamrex Connect and the digital services arm extend our infrastructure expertise to institutions and generate the recurring revenue that sustains the model.",
  },
];

export const whyChoose = [
  {
    icon: "Layers",
    title: "An integrated, not isolated, model",
    text: "Infrastructure, skills training, startup support, enterprise connectivity and community building are designed to reinforce one another, so impact compounds rather than stays siloed.",
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
    "We address these barriers through five integrated pillars — Workspace, Academy, Ventures, Connect and Community — supported by a commercial digital-services arm that provides software development, IT consultancy, branding and digital marketing, and hardware and networking supply. Each pillar feeds the others, so a young person can train at the Academy, build at the Workspace, launch through Ventures, and connect to markets and partners through the Community.",
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
      "Explore the five Mamrex pillars — Workspace, Academy, Ventures, Connect and Community — and our digital services arm.",
  },
  hero: {
    eyebrow: "Our services",
    title: "Five interconnected pillars, supported by a commercial digital-services arm",
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
      "Alongside the five pillars, MAMREX HUB operates a commercial services arm. It earns income, creates practical work experience for Academy graduates, and gives us direct, ongoing relationships with the institutions we hope to serve.",
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
      "We align our work with SDG 4 (Quality Education), SDG 8 (Decent Work and Economic Growth), SDG 9 (Industry, Innovation and Infrastructure) and SDG 17 (Partnerships for the Goals). As a new organisation we will establish baselines in our first year and report against the following indicators.",
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
  sustainability: {
    eyebrow: "Sustainability",
    title: "Earned income alongside partner funding",
    intro:
      "MAMREX HUB is designed to combine earned income with partner funding, so that grants accelerate impact rather than create dependency.",
    headers: ["Revenue stream", "Role in the model"],
    rows: [
      ["Workspace memberships", "Recurring income from co-working members, covering core operating costs."],
      [
        "Mamrex Connect contracts",
        "Enterprise internet and IT support agreements with businesses, schools, NGOs and government offices.",
      ],
      ["Digital services", "Project-based software, branding, marketing and hardware income."],
      [
        "Training fees and sponsorship",
        "Paying cohorts, with sponsored and subsidised places for disadvantaged learners funded by partners.",
      ],
      [
        "Grants and partner funding",
        "Programme funding for training, incubation, equipment and expansion.",
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
      "Our indicative three-phase plan: Establish, Grow and Scale, from a lean foundation to a regional model.",
  },
  hero: {
    eyebrow: "Strategic direction",
    title: "From a lean, revenue-generating foundation to a scalable regional model",
    intro: "Our indicative plan builds in three phases over 36 months.",
  },
  phases: [
    {
      phase: "Phase 1",
      name: "Establish",
      time: "0–6 months",
      goal: "Build the foundation and start earning",
      items: [
        "Secure and fit out hub premises with reliable power and internet",
        "Launch digital services and Mamrex Connect",
        "Pilot the first Academy cohort",
        "Set up banking, policies and an advisory board",
      ],
    },
    {
      phase: "Phase 2",
      name: "Grow",
      time: "6–18 months",
      goal: "Deliver the full programme model",
      items: [
        "Open Workspace memberships fully",
        "Run multiple Academy tracks",
        "Launch the first Ventures cohort",
        "Hold regular Community events and hackathons",
        "Deliver first partner-funded programmes",
      ],
    },
    {
      phase: "Phase 3",
      name: "Scale",
      time: "18–36 months",
      goal: "Replicate and expand",
      items: [
        "Open satellite hubs with local partners",
        "Expand Connect to more institutions",
        "Build an alumni and investor network",
        "Begin expansion across Africa",
      ],
    },
  ],
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
      "Other",
    ],
  },
};

/* ------------------------- REDESIGN: NEW SECTIONS ------------------------- */

/** Small facts strip under the hero. All facts come from the corporate profile. */
export const trustItems = [
  { icon: "ShieldCheck", title: "CAC registered", sub: "RC 9921354 · Status: Active" },
  { icon: "FileCheck", title: "NDPA 2023 aligned", sub: "Data protection approach" },
  { icon: "Target", title: "SDG 4 · 8 · 9 · 17", sub: "Aligned impact goals" },
  { icon: "MapPin", title: "Maiduguri, Nigeria", sub: "Expanding across Africa" },
];

/**
 * Animated counters. These are real facts from the profile (the company was incorporated in October 2026,
 * so there are no "people trained" or "clients served" results yet).
 * When you have real results, add them here, e.g. { value: 120, suffix: "+", label: "People trained" }.
 */
export const impactNumbers = [
  { value: 5, suffix: "", label: "Integrated pillars" },
  { value: 4, suffix: "", label: "Digital service lines" },
  { value: 4, suffix: "", label: "Planned Academy tracks" },
  { value: 36, suffix: "", label: "Month roadmap to regional scale" },
];

export const impactCopy = {
  eyebrow: "Our foundation in numbers",
  title: "Built to scale from day one",
  intro:
    "MAMREX HUB is newly established, so we report what is real today and will publish results against our indicators as programmes run.",
};

export const valuesIntro = {
  eyebrow: "Why Mamrex",
  title: "Five values behind everything we build",
};

/** Filterable programme cards. Programmes launch in phases (see Roadmap). */
export const programmeFilters = ["All", "Academy", "Ventures", "Community", "Workspace"];

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
    title: "Design",
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
 * HERO BACKGROUND — African / Nigerian young people in learning and tech (free Unsplash photos, links in the README).
 * The hero fades slowly from one photo to the next on its own. Replace files in public/hero/ and edit this list.
 * pos = which part of the photo stays visible when it is cropped (CSS object-position).
 */
export const heroSlides = [
  { src: "/hero/hero.webp", pos: "65% center", alt: "Young Nigerian developers working together at a shared workspace in Lagos" },
  { src: "/hero/hero-man.webp", pos: "58% 30%", alt: "A smiling young Nigerian man holding a laptop" },
  { src: "/hero/hero-children.webp", pos: "70% center", alt: "School pupils learning in a classroom in Lagos, Nigeria" },
  { src: "/hero/hero-woman.webp", pos: "65% center", alt: "A young African woman smiling at her laptop at work" },
  { src: "/hero/hero-couple.webp", pos: "65% center", alt: "Two young African professionals looking at a laptop together" },
  { src: "/hero/hero-headphones.webp", pos: "62% 35%", alt: "A smiling young African woman with headphones at her workplace" },
];
