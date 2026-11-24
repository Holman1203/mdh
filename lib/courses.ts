/**
 * FREE SELF-PACED COURSES — Mamrex Learn.
 * One course per pillar. Edit any text here and the site updates (no database change needed).
 * To add a lesson: copy a lesson object, give it a new unique `slug`, and add it to the course's `lessons`.
 * Quiz: `answer` is the position (starting at 0) of the correct option.
 * These are general-knowledge courses. They make no claims about Mamrex beyond what is in site-data.ts.
 */

export type Block = { h?: string; p?: string[]; list?: string[] };
export type QuizQ = { q: string; options: string[]; answer: number; why: string };
export type Lesson = {
  slug: string;
  title: string;
  minutes: number;
  summary: string;
  blocks: Block[];
  takeaways: string[];
  quiz: QuizQ[];
};
export type Course = {
  slug: string;
  pillar: string;
  icon: string;
  title: string;
  tagline: string;
  level: string;
  audience: string;
  outcomes: string[];
  lessons: Lesson[];
};

export const courses: Course[] = [
  /* ───────────────────────── AI ───────────────────────── */
  {
    slug: "ai-foundations",
    pillar: "Mamrex AI",
    icon: "BrainCircuit",
    title: "AI Foundations for Everyday Work",
    tagline: "Understand AI, use it well and use it responsibly, with no coding needed.",
    level: "Beginner",
    audience: "Students, job-seekers, business owners and office staff who want practical AI skills.",
    outcomes: [
      "Explain what AI is and what it cannot do",
      "Write clear prompts that get useful answers",
      "Check AI output and protect personal data",
      "Apply AI to study, work and small business tasks",
    ],
    lessons: [
      {
        slug: "what-is-ai",
        title: "What AI is (and is not)",
        minutes: 12,
        summary: "A plain-language picture of how modern AI tools work and where they fit.",
        blocks: [
          {
            h: "AI in one sentence",
            p: [
              "Artificial intelligence (AI) is software that finds patterns in large amounts of data and uses them to produce a result, such as a piece of text, an image, a translation or a prediction.",
              "The AI chat tools many people use today are called generative AI. They have learned patterns in language from huge collections of text, so they can write, summarise, explain and translate.",
            ],
          },
          {
            h: "What that means in practice",
            list: [
              "AI is very good at drafting, summarising, brainstorming, rewording and explaining.",
              "AI predicts likely words. It does not 'know' things the way a person does, so it can sound confident and still be wrong.",
              "AI does not replace your judgement. You stay responsible for what you send, publish or decide.",
            ],
          },
          {
            h: "Everyday examples",
            p: [
              "You already meet AI when your phone suggests the next word, when a map app estimates travel time, or when a bank flags unusual activity. In this course we focus on tools you talk to and direct yourself.",
            ],
          },
        ],
        takeaways: [
          "Generative AI predicts patterns; it does not understand like a person.",
          "It is a fast assistant for drafts and ideas, not a source of guaranteed truth.",
          "You are always responsible for the final result.",
        ],
        quiz: [
          {
            q: "Which best describes a generative AI chat tool?",
            options: [
              "A search engine that only copies web pages",
              "Software that uses learned patterns to produce new text or images",
              "A person typing answers from another country",
            ],
            answer: 1,
            why: "Generative AI produces new output based on patterns learned from data.",
          },
          {
            q: "Why must you check AI answers before relying on them?",
            options: [
              "Because AI can sound confident and still be wrong",
              "Because AI never uses real data",
              "Because AI answers are always illegal to use",
            ],
            answer: 0,
            why: "AI predicts likely words, so errors can look convincing.",
          },
        ],
      },
      {
        slug: "writing-good-prompts",
        title: "Writing prompts that work",
        minutes: 15,
        summary: "A simple formula for asking AI clearly so you get useful results the first time.",
        blocks: [
          {
            h: "A prompt is just a clear request",
            p: [
              "The quality of what you get depends on the quality of what you ask. Vague requests give vague answers. Specific requests give specific answers.",
            ],
          },
          {
            h: "The RCTF formula",
            list: [
              "Role: tell the AI who to be. 'You are a friendly careers adviser.'",
              "Context: give the background. 'I am a final-year student in Maiduguri applying for my first job.'",
              "Task: say exactly what you want. 'Write a 150-word cover letter for a customer support role.'",
              "Format: say how you want it. 'Use three short paragraphs and a polite tone.'",
            ],
          },
          {
            h: "Improve with follow-ups",
            p: [
              "Your first answer is a draft. Reply with changes: 'Make it shorter', 'Use simpler words', 'Add two examples', 'Give me three different versions'. Treating it as a conversation is the fastest way to a good result.",
            ],
          },
        ],
        takeaways: [
          "Be specific: role, context, task and format.",
          "Treat the first answer as a draft and refine it.",
          "Tell the AI the audience and the tone you want.",
        ],
        quiz: [
          {
            q: "What does the 'C' in RCTF stand for?",
            options: ["Copy", "Context", "Calculate"],
            answer: 1,
            why: "Context gives the AI the background it needs to be useful.",
          },
          {
            q: "Your first AI answer is too long. What is the best next step?",
            options: [
              "Give up on AI",
              "Start a brand new chat with no details",
              "Reply asking it to shorten the answer to a set length",
            ],
            answer: 2,
            why: "Follow-up instructions are the quickest way to improve a draft.",
          },
        ],
      },
      {
        slug: "using-ai-responsibly",
        title: "Using AI responsibly and safely",
        minutes: 15,
        summary: "Check facts, protect personal data and understand the basics of data protection in Nigeria.",
        blocks: [
          {
            h: "Check before you trust",
            list: [
              "Verify names, dates, numbers and quotes against a trusted source.",
              "Ask the AI to list its assumptions, then check them.",
              "Be extra careful with health, legal and money advice. Ask a qualified person.",
            ],
          },
          {
            h: "Protect personal data",
            p: [
              "Anything you type into an online AI tool is sent to a company's servers. Do not paste passwords, bank details, national ID numbers or other people's private information.",
              "Nigeria has a Data Protection Act (2023) that sets rules for how organisations collect and use personal data. If you handle customers' or students' information at work, you should know the basic principle: collect only what you need, keep it safe and use it only for the purpose people agreed to.",
            ],
          },
          {
            h: "Bias and honesty",
            p: [
              "AI can repeat unfair assumptions found in its training data. Read output with that in mind. If AI helped you write something important, be honest about it where your school, employer or client expects that.",
            ],
          },
        ],
        takeaways: [
          "Verify facts and be careful with high-stakes advice.",
          "Never paste passwords, ID numbers or other people's private details.",
          "You are accountable for how you use AI output.",
        ],
        quiz: [
          {
            q: "Which of these should you NOT paste into an online AI tool?",
            options: [
              "A general question about how interest works",
              "Your bank card number and PIN",
              "A request to rewrite a public notice",
            ],
            answer: 1,
            why: "Financial credentials and private data must never be shared with online tools.",
          },
          {
            q: "A core idea of data protection is to:",
            options: [
              "Collect as much personal data as possible",
              "Collect only what you need and keep it safe",
              "Share data with anyone who asks",
            ],
            answer: 1,
            why: "Collecting only what you need and protecting it is the basic principle.",
          },
        ],
      },
      {
        slug: "ai-for-study-and-business",
        title: "AI for study, work and small business",
        minutes: 18,
        summary: "Practical ways to save time on real tasks, with a short action plan to start today.",
        blocks: [
          {
            h: "For study",
            list: [
              "Ask for a simple explanation of a hard topic, then ask for an example from daily life.",
              "Paste your own notes and ask for practice questions.",
              "Use it to plan a revision timetable, then adjust it to your real life.",
            ],
          },
          {
            h: "For work and small business",
            list: [
              "Draft emails, product descriptions, social posts and customer replies.",
              "Summarise a long document or meeting notes into five bullet points.",
              "Brainstorm names, offers and answers to customer questions.",
              "Turn rough notes into a clear proposal or invoice message.",
            ],
          },
          {
            h: "Your 7-day starter plan",
            list: [
              "Day 1-2: use AI to explain something you are studying.",
              "Day 3-4: draft one real message or post, then edit it yourself.",
              "Day 5: summarise a document you need to read.",
              "Day 6: build a reusable prompt for a task you repeat.",
              "Day 7: review what saved you time and what needed fixing.",
            ],
          },
        ],
        takeaways: [
          "Start with small, low-risk tasks you can easily check.",
          "Save prompts that work and reuse them.",
          "AI helps most when you bring your own knowledge and judgement.",
        ],
        quiz: [
          {
            q: "Which is a good first use of AI at work?",
            options: [
              "Sending a legal contract without reading it",
              "Drafting a customer email that you then review and edit",
              "Sharing a client's private records",
            ],
            answer: 1,
            why: "Low-risk drafting that you review keeps you in control.",
          },
          {
            q: "What should you do with prompts that give great results?",
            options: ["Delete them", "Save them and reuse them", "Never use them again"],
            answer: 1,
            why: "Reusable prompts save time on repeated tasks.",
          },
        ],
      },
    ],
  },

  /* ───────────────────────── ACADEMY ───────────────────────── */
  {
    slug: "job-ready-digital-skills",
    pillar: "Mamrex Academy",
    icon: "GraduationCap",
    title: "Getting Job-Ready in the Digital Economy",
    tagline: "Choose a skill path, build proof of your work and present yourself with confidence.",
    level: "Beginner",
    audience: "Students, graduates, job-seekers and career-changers.",
    outcomes: [
      "Compare common digital skill paths and pick one",
      "Plan how to learn a skill with small projects",
      "Build a simple portfolio that proves your ability",
      "Prepare a CV and online profile for jobs and freelance work",
    ],
    lessons: [
      {
        slug: "digital-skill-paths",
        title: "Choosing a digital skill path",
        minutes: 12,
        summary: "A quick tour of in-demand skill areas and how to choose one that fits you.",
        blocks: [
          {
            h: "Common paths",
            list: [
              "Web and software development: building websites and apps.",
              "UI/UX and graphic design: making products clear and attractive.",
              "Digital marketing: helping organisations find customers online.",
              "Networking and IT support: keeping systems connected and working.",
              "Data, cybersecurity and AI tools: analysing information, protecting systems and using AI well.",
            ],
          },
          {
            h: "How to choose",
            p: [
              "Ask three questions: What do I enjoy doing for hours? What do local businesses and employers need? What can I practise with the equipment and internet I have? Pick one path for the next three months instead of trying everything at once.",
            ],
          },
        ],
        takeaways: [
          "Pick one path and stay with it long enough to get good.",
          "Match your interest, market demand and available resources.",
          "You can change paths later; skills often overlap.",
        ],
        quiz: [
          {
            q: "What is a good way to choose a skill path?",
            options: [
              "Pick whatever is trending this week",
              "Balance what you enjoy, what is needed and what you can practise",
              "Learn ten skills at the same time",
            ],
            answer: 1,
            why: "Interest, demand and practicality together give a path you can sustain.",
          },
          {
            q: "Which path focuses on keeping systems connected and working?",
            options: ["Graphic design", "Networking and IT support", "Digital marketing"],
            answer: 1,
            why: "Networking and IT support keeps connections and devices running.",
          },
        ],
      },
      {
        slug: "learn-by-building",
        title: "Learn by building small projects",
        minutes: 14,
        summary: "Turn learning into a habit with small, finished projects.",
        blocks: [
          {
            h: "Projects beat passive watching",
            p: [
              "Watching tutorials feels productive but skills grow when you build. Start with a very small project, finish it, then make the next one slightly harder.",
            ],
          },
          {
            h: "A simple weekly rhythm",
            list: [
              "Learn: 3 short sessions on one concept.",
              "Build: apply it in a mini project.",
              "Share: show it to a friend or in an online group and ask for feedback.",
              "Reflect: write down what you would do differently.",
            ],
          },
          {
            h: "When you get stuck",
            p: [
              "Break the problem into smaller steps, search for the exact error message, and ask clear questions that include what you tried. Using AI tools to explain errors is fine, as long as you understand the fix.",
            ],
          },
        ],
        takeaways: [
          "Finish small projects regularly.",
          "Ask for feedback early.",
          "Understand every fix you copy.",
        ],
        quiz: [
          {
            q: "What helps skills grow fastest?",
            options: ["Only watching tutorials", "Building and finishing small projects", "Waiting until you feel ready"],
            answer: 1,
            why: "Applying knowledge in projects turns it into skill.",
          },
          {
            q: "When asking for help online, you should:",
            options: [
              "Say only 'it does not work'",
              "Explain what you tried and share the exact error",
              "Ask the same question many times",
            ],
            answer: 1,
            why: "Clear detail helps others solve your problem quickly.",
          },
        ],
      },
      {
        slug: "build-your-portfolio",
        title: "Build a portfolio that proves your skills",
        minutes: 14,
        summary: "Show real work so employers and clients can trust you.",
        blocks: [
          {
            h: "Why a portfolio matters",
            p: [
              "A certificate says you studied. A portfolio shows what you can do. Employers and clients trust evidence.",
            ],
          },
          {
            h: "What to include",
            list: [
              "3 to 5 of your best projects, not everything you ever made.",
              "For each: the problem, what you did, the tools you used and the result.",
              "Screenshots, links or short demos where possible.",
              "A short 'about me' and clear contact details.",
            ],
          },
          {
            h: "No clients yet?",
            p: [
              "Create practice projects for a made-up business or help a local shop, church or community group for free. Always ask permission before showing someone else's information.",
            ],
          },
        ],
        takeaways: [
          "Quality beats quantity: show your best 3 to 5.",
          "Explain the problem, your action and the result.",
          "Real or realistic projects both count.",
        ],
        quiz: [
          {
            q: "What does a portfolio show that a certificate cannot?",
            options: ["How many courses you started", "Real examples of your work", "Your favourite colour"],
            answer: 1,
            why: "Evidence of real work builds trust.",
          },
          {
            q: "How many projects should a beginner portfolio highlight?",
            options: ["One hundred", "Three to five strong ones", "None until you have a job"],
            answer: 1,
            why: "A few strong projects are more convincing than many weak ones.",
          },
        ],
      },
      {
        slug: "cv-and-online-presence",
        title: "Your CV, online profile and first applications",
        minutes: 15,
        summary: "Present yourself clearly and apply with confidence.",
        blocks: [
          {
            h: "A clear one-page CV",
            list: [
              "Start with a two-line summary of who you are and what you offer.",
              "List skills and projects before long school history if you are early in your career.",
              "Use action words and results: 'Built a 5-page website for a local shop'.",
              "Keep it to one or two pages and check spelling carefully.",
            ],
          },
          {
            h: "Online presence",
            p: [
              "Use a professional email address and a clear profile photo. Keep your public profiles consistent and share what you are learning. Keep personal details such as your home address private.",
            ],
          },
          {
            h: "Applying",
            p: [
              "Read each job or gig description, mirror its key words honestly in your application, and send a short, polite message. Follow up once after a week. Apply regularly and learn from every response.",
            ],
          },
        ],
        takeaways: [
          "Lead with skills and projects.",
          "Show results, not just duties.",
          "Be consistent, polite and persistent.",
        ],
        quiz: [
          {
            q: "Which CV line is strongest?",
            options: [
              "Responsible for many things",
              "Built a 5-page website for a local shop in two weeks",
              "Hard worker and team player",
            ],
            answer: 1,
            why: "Specific results are more convincing than general claims.",
          },
          {
            q: "Which detail should you keep private on public profiles?",
            options: ["Your skills", "Your home address", "Your portfolio link"],
            answer: 1,
            why: "Personal safety details should not be public.",
          },
        ],
      },
    ],
  },

  /* ───────────────────────── VENTURES ───────────────────────── */
  {
    slug: "startup-basics",
    pillar: "Mamrex Ventures",
    icon: "Rocket",
    title: "From Idea to Business: Startup Basics",
    tagline: "Test your idea, understand your customer and get ready to pitch.",
    level: "Beginner",
    audience: "Early-stage founders, side-hustlers and students with a business idea.",
    outcomes: [
      "Describe the problem your idea solves and for whom",
      "Test demand cheaply before spending big",
      "Sketch a simple business model and basic numbers",
      "Prepare a short, clear pitch",
    ],
    lessons: [
      {
        slug: "problem-and-customer",
        title: "Start with a real problem and a real customer",
        minutes: 12,
        summary: "Good businesses begin with a problem people already feel.",
        blocks: [
          {
            h: "Problem first",
            p: [
              "Many ideas fail because they start with a product instead of a problem. Write one sentence: 'Who struggles with what, and why does it matter?'",
            ],
          },
          {
            h: "Talk to people",
            list: [
              "Speak to at least ten people who might need your solution.",
              "Ask about their last experience with the problem, not whether they like your idea.",
              "Listen for what they currently do, spend or put up with.",
            ],
          },
        ],
        takeaways: [
          "Define the problem and the customer clearly.",
          "Learn from real conversations, not guesses.",
          "Ask about past behaviour, not hypothetical opinions.",
        ],
        quiz: [
          {
            q: "What should a founder define first?",
            options: ["A logo", "The problem and who has it", "A fancy office"],
            answer: 1,
            why: "A clear problem and customer guide every later decision.",
          },
          {
            q: "In customer interviews, it is best to ask about:",
            options: [
              "Their last real experience with the problem",
              "Whether they would 'maybe' buy someday",
              "Only your own ideas",
            ],
            answer: 0,
            why: "Past behaviour is more reliable than polite opinions.",
          },
        ],
      },
      {
        slug: "test-before-you-build",
        title: "Test your idea before you spend",
        minutes: 14,
        summary: "Cheap experiments that show whether people really want what you plan to offer.",
        blocks: [
          {
            h: "Validation means evidence",
            p: [
              "Validation is proof that people will pay or commit, not just compliments. The cheapest tests take days, not months.",
            ],
          },
          {
            h: "Simple experiments",
            list: [
              "Pre-sell: ask a few customers to pay a small deposit or sign up before you build.",
              "Do it by hand first: deliver the service manually to a handful of people.",
              "Landing message: describe the offer in two sentences and see who responds.",
            ],
          },
          {
            h: "Decide with a rule",
            p: [
              "Before you start, decide what result counts as success, for example 'five of ten people commit'. Then review honestly. Changing direction early is a win, not a failure.",
            ],
          },
        ],
        takeaways: [
          "Look for commitment, not compliments.",
          "Start manually and small.",
          "Set a success rule before testing.",
        ],
        quiz: [
          {
            q: "Which is the strongest evidence of demand?",
            options: ["Friends saying 'nice idea'", "A customer paying a deposit", "A long business plan"],
            answer: 1,
            why: "Payment or commitment shows real demand.",
          },
          {
            q: "Why set a success rule before an experiment?",
            options: [
              "So you can judge the result honestly",
              "So you never need to change anything",
              "Because it is a legal requirement",
            ],
            answer: 0,
            why: "A rule prevents wishful interpretation of results.",
          },
        ],
      },
      {
        slug: "simple-business-model",
        title: "A simple business model and basic numbers",
        minutes: 16,
        summary: "Understand how your business makes money and what it costs.",
        blocks: [
          {
            h: "The one-page model",
            list: [
              "Customer: who exactly pays?",
              "Offer: what do they get?",
              "Price: how much and how often?",
              "Costs: what must you spend to deliver it?",
              "Channel: how will customers find you?",
            ],
          },
          {
            h: "Basic numbers",
            p: [
              "Profit is what is left after costs. Work out the cost of serving one customer, then your price minus that cost. If you lose money on each sale, selling more will not fix it.",
              "Keep business and personal money separate from day one, and write down every sale and expense.",
            ],
          },
        ],
        takeaways: [
          "Be able to explain who pays, for what and why.",
          "Know your cost per customer.",
          "Keep records and separate personal and business money.",
        ],
        quiz: [
          {
            q: "Profit equals:",
            options: ["Total sales only", "Income minus costs", "Costs minus income"],
            answer: 1,
            why: "Profit is what remains after costs are paid.",
          },
          {
            q: "Why keep business and personal money separate?",
            options: [
              "It makes records clear and decisions better",
              "It is only for large companies",
              "It reduces your sales",
            ],
            answer: 0,
            why: "Clear records show how the business is really doing.",
          },
        ],
      },
      {
        slug: "pitch-and-funding-readiness",
        title: "Pitching and funding readiness",
        minutes: 15,
        summary: "Tell your story clearly and understand what funders look for.",
        blocks: [
          {
            h: "A 2-minute pitch",
            list: [
              "Problem: who struggles and how badly?",
              "Solution: what you offer in plain words.",
              "Evidence: what you have tested or sold so far.",
              "Business model: how you make money.",
              "Team and ask: who you are and what help you need.",
            ],
          },
          {
            h: "What funders look for",
            p: [
              "Funders generally want a real problem, evidence of demand, a capable and honest team, and a clear plan for using money. Funding is not a substitute for customers. Be accurate about your numbers and say what you do not yet know.",
            ],
          },
        ],
        takeaways: [
          "Keep the pitch short, clear and honest.",
          "Evidence beats promises.",
          "Know exactly what you will use funding for.",
        ],
        quiz: [
          {
            q: "Which strengthens a pitch most?",
            options: ["Big claims without proof", "Evidence of customers or tests", "Complicated jargon"],
            answer: 1,
            why: "Evidence builds trust with funders.",
          },
          {
            q: "Funding is best used to:",
            options: [
              "Replace the need for customers",
              "Grow something that already shows demand",
              "Avoid keeping records",
            ],
            answer: 1,
            why: "Funding accelerates what already works.",
          },
        ],
      },
    ],
  },

  /* ───────────────────────── WORKSPACE ───────────────────────── */
  {
    slug: "remote-work-essentials",
    pillar: "Mamrex Workspace",
    icon: "Building2",
    title: "Remote Work Essentials",
    tagline: "Set up to work reliably, collaborate well and stay productive from anywhere.",
    level: "Beginner",
    audience: "Freelancers, remote workers, small teams and anyone starting online work.",
    outcomes: [
      "Plan a dependable work setup, including power and internet back-ups",
      "Use common collaboration tools professionally",
      "Manage your time and communicate clearly in writing",
      "Protect your accounts and your work",
    ],
    lessons: [
      {
        slug: "reliable-setup",
        title: "A reliable work setup",
        minutes: 12,
        summary: "Plan for power cuts and weak connections before they cost you work.",
        blocks: [
          {
            h: "The basics",
            list: [
              "A comfortable place to sit, with good light and low noise.",
              "A laptop or phone you maintain and update.",
              "A power plan: charge fully, keep a power bank or inverter if you can.",
              "An internet plan: know your best network and keep a second option such as a different SIM or hotspot.",
            ],
          },
          {
            h: "Protect your work",
            p: [
              "Save to the cloud or an external drive regularly. If a call matters, test your sound, camera and connection beforehand and join a few minutes early.",
            ],
          },
        ],
        takeaways: [
          "Always have a back-up for power and internet.",
          "Test before important calls.",
          "Back up your files regularly.",
        ],
        quiz: [
          {
            q: "Why keep a second internet option?",
            options: [
              "So work continues if your main network fails",
              "To use more data than needed",
              "It is required by law",
            ],
            answer: 0,
            why: "A backup keeps you reachable and productive.",
          },
          {
            q: "Before an important video call you should:",
            options: ["Hope it works", "Test sound, camera and connection", "Turn everything off"],
            answer: 1,
            why: "A quick test prevents most call problems.",
          },
        ],
      },
      {
        slug: "collaboration-tools",
        title: "Collaboration tools and clear communication",
        minutes: 14,
        summary: "Work well with people you rarely meet in person.",
        blocks: [
          {
            h: "Common tools",
            list: [
              "Email and messaging apps for updates and questions.",
              "Video calls for discussions that need real-time talk.",
              "Shared documents and spreadsheets for working together.",
              "Task boards to see who is doing what by when.",
            ],
          },
          {
            h: "Write clearly",
            p: [
              "Written messages should be easy to act on. Start with the point, give needed context, and end with a clear request and deadline. Be polite, short and specific.",
            ],
          },
        ],
        takeaways: [
          "Choose the lightest tool that does the job.",
          "Put the point and the request near the top.",
          "Always say what is needed and by when.",
        ],
        quiz: [
          {
            q: "A good work message:",
            options: [
              "Hides the request at the end of a long story",
              "States the point and a clear request with a deadline",
              "Uses only emojis",
            ],
            answer: 1,
            why: "Clarity helps people act quickly.",
          },
          {
            q: "Shared task boards help because they:",
            options: ["Show who does what and by when", "Replace all meetings", "Hide deadlines"],
            answer: 0,
            why: "Visibility prevents confusion and missed tasks.",
          },
        ],
      },
      {
        slug: "time-and-focus",
        title: "Managing your time and focus",
        minutes: 12,
        summary: "Simple habits to deliver on time without burning out.",
        blocks: [
          {
            h: "Plan the day",
            list: [
              "Pick the three most important tasks each morning.",
              "Work in focused blocks of 25 to 50 minutes, then take a short break.",
              "Silence notifications while you focus.",
              "End the day by writing tomorrow's top three.",
            ],
          },
          {
            h: "Protect your health",
            p: [
              "Stand up and stretch, drink water and set a clear finishing time. Reliable work comes from sustainable habits.",
            ],
          },
        ],
        takeaways: [
          "Focus on a few priorities each day.",
          "Use timed work blocks and breaks.",
          "Set boundaries to avoid burnout.",
        ],
        quiz: [
          {
            q: "A good daily habit is to:",
            options: [
              "Choose your top three priorities",
              "Keep every notification on",
              "Never take a break",
            ],
            answer: 0,
            why: "Clear priorities direct your effort.",
          },
          {
            q: "Why take short breaks?",
            options: ["They waste time", "They help you sustain focus", "They are forbidden"],
            answer: 1,
            why: "Breaks keep concentration and energy up.",
          },
        ],
      },
      {
        slug: "secure-and-get-paid",
        title: "Staying secure and getting paid professionally",
        minutes: 15,
        summary: "Protect your accounts and handle client work and payments with care.",
        blocks: [
          {
            h: "Account security",
            list: [
              "Use a long, unique password for each important account, ideally with a password manager.",
              "Turn on two-step verification.",
              "Beware of messages that rush you to click a link or share a code. Never share one-time codes.",
            ],
          },
          {
            h: "Working with clients",
            list: [
              "Agree the scope, price, deadline and payment terms in writing before you start.",
              "For new clients, consider asking for a deposit.",
              "Issue clear invoices and keep records of everything you are paid.",
              "Be cautious of offers that look too good to be true or ask you to pay first.",
            ],
          },
        ],
        takeaways: [
          "Strong unique passwords and two-step verification.",
          "Never share one-time codes.",
          "Agree terms in writing and keep records.",
        ],
        quiz: [
          {
            q: "What should you do with a one-time code sent to your phone?",
            options: ["Share it with anyone who asks", "Keep it private", "Post it online"],
            answer: 1,
            why: "One-time codes are for you alone; sharing them lets others into your account.",
          },
          {
            q: "Before starting client work, you should:",
            options: [
              "Agree scope, price and deadline in writing",
              "Start immediately with no details",
              "Avoid talking about money",
            ],
            answer: 0,
            why: "Written agreement prevents misunderstandings.",
          },
        ],
      },
    ],
  },

  /* ───────────────────────── CONNECT ───────────────────────── */
  {
    slug: "networking-basics",
    pillar: "Mamrex Connect",
    icon: "Wifi",
    title: "Networking and IT Support Basics",
    tagline: "Understand how networks work and keep small offices and schools connected.",
    level: "Beginner",
    audience: "Aspiring IT support staff, school and office administrators, and small business owners.",
    outcomes: [
      "Explain how devices connect to the internet",
      "Set up and secure a small Wi-Fi network",
      "Troubleshoot common connection problems step by step",
      "Follow good IT support habits",
    ],
    lessons: [
      {
        slug: "how-the-internet-connects",
        title: "How devices connect to the internet",
        minutes: 14,
        summary: "The key parts of a network, in plain language.",
        blocks: [
          {
            h: "The main parts",
            list: [
              "Internet service provider (ISP): the company that gives you access to the internet.",
              "Modem or ONT: brings the ISP's signal into your building.",
              "Router: shares that connection with all your devices and gives each one an address.",
              "Switch and access point: extend the network by cable and Wi-Fi.",
              "Devices: phones, laptops, printers and more.",
            ],
          },
          {
            h: "Addresses and names",
            p: [
              "Every device on a network gets an IP address so data knows where to go. The Domain Name System (DNS) turns names such as a website address into the numbers computers use.",
            ],
          },
        ],
        takeaways: [
          "The router shares the connection from your ISP.",
          "IP addresses identify devices; DNS turns names into addresses.",
          "Switches and access points extend the network.",
        ],
        quiz: [
          {
            q: "Which device shares your internet connection with many devices?",
            options: ["Router", "Keyboard", "Printer cartridge"],
            answer: 0,
            why: "The router distributes the connection to devices on the network.",
          },
          {
            q: "What does DNS do?",
            options: [
              "Turns website names into addresses computers use",
              "Makes the internet faster by itself",
              "Stores your passwords",
            ],
            answer: 0,
            why: "DNS translates names into IP addresses.",
          },
        ],
      },
      {
        slug: "wifi-setup-and-security",
        title: "Setting up and securing Wi-Fi",
        minutes: 14,
        summary: "Place, configure and protect a small network.",
        blocks: [
          {
            h: "Good placement",
            list: [
              "Put the router in a central, raised spot, away from thick walls and metal.",
              "Use cables for devices that do not move, such as desktop computers and printers.",
              "Add access points in large buildings instead of relying on one signal.",
            ],
          },
          {
            h: "Basic security",
            list: [
              "Change the router's default admin password.",
              "Use WPA2 or WPA3 with a strong Wi-Fi password.",
              "Keep router software up to date.",
              "Create a separate guest network for visitors.",
            ],
          },
        ],
        takeaways: [
          "Place the router centrally and use cables where you can.",
          "Change default passwords and use strong Wi-Fi encryption.",
          "Use a guest network for visitors.",
        ],
        quiz: [
          {
            q: "What should you change first on a new router?",
            options: ["The default admin password", "The brand name", "Nothing"],
            answer: 0,
            why: "Default passwords are widely known and easy to guess.",
          },
          {
            q: "A guest network helps because it:",
            options: [
              "Keeps visitors separate from your main devices",
              "Makes the internet free for everyone",
              "Removes the need for passwords",
            ],
            answer: 0,
            why: "Separating guests protects your main devices and data.",
          },
        ],
      },
      {
        slug: "troubleshooting-steps",
        title: "Troubleshooting connection problems",
        minutes: 15,
        summary: "A calm, step-by-step method for finding faults.",
        blocks: [
          {
            h: "Work from simple to complex",
            list: [
              "Ask: what changed, who is affected, and since when?",
              "Check the basics: cables, power, Wi-Fi switched on, airplane mode off.",
              "Restart the affected device, then the router if many devices are affected.",
              "Test one device by cable to separate Wi-Fi problems from internet problems.",
              "Check whether the ISP has a fault, then contact them with clear details.",
            ],
          },
          {
            h: "Write it down",
            p: [
              "Record what you tried and the result. Notes help you fix repeat problems faster and help colleagues who take over.",
            ],
          },
        ],
        takeaways: [
          "Start with the simplest causes.",
          "Change one thing at a time.",
          "Keep notes of faults and fixes.",
        ],
        quiz: [
          {
            q: "Only one laptop cannot connect while others are fine. Where do you look first?",
            options: [
              "That laptop's Wi-Fi settings and connection",
              "Replacing the whole building's cabling",
              "Calling the ISP immediately",
            ],
            answer: 0,
            why: "If others work, the problem is probably with that device.",
          },
          {
            q: "Why change only one thing at a time?",
            options: [
              "So you know what fixed or broke it",
              "It looks more professional",
              "It makes the fault last longer",
            ],
            answer: 0,
            why: "Single changes show cause and effect.",
          },
        ],
      },
      {
        slug: "good-it-support-habits",
        title: "Good IT support habits",
        minutes: 12,
        summary: "Communicate well, keep systems safe and look after users.",
        blocks: [
          {
            h: "Serve the user",
            list: [
              "Listen first and repeat the problem back to confirm it.",
              "Explain in plain words, without making anyone feel foolish.",
              "Tell people what you will do and roughly how long it will take.",
            ],
          },
          {
            h: "Keep systems healthy",
            list: [
              "Back up important data and test that restores work.",
              "Apply updates regularly.",
              "Give people only the access they need.",
              "Keep a simple list of devices, accounts and who looks after them.",
            ],
          },
        ],
        takeaways: [
          "Listen, explain simply and set expectations.",
          "Back up, update and limit access.",
          "Keep an inventory.",
        ],
        quiz: [
          {
            q: "A good support technician:",
            options: [
              "Listens first and explains in plain words",
              "Uses technical jargon to impress",
              "Blames the user",
            ],
            answer: 0,
            why: "Clear, respectful communication builds trust.",
          },
          {
            q: "Why test that backups can be restored?",
            options: [
              "A backup is only useful if it actually works",
              "It wastes storage",
              "Backups never fail",
            ],
            answer: 0,
            why: "An untested backup may fail when you need it.",
          },
        ],
      },
    ],
  },

  /* ───────────────────────── COMMUNITY ───────────────────────── */
  {
    slug: "tech-community-networking",
    pillar: "Mamrex Community",
    icon: "Users",
    title: "Community, Collaboration and Hackathons",
    tagline: "Grow your network, join build events and work well in a team.",
    level: "Beginner",
    audience: "Developers, designers, founders and students who want to connect and collaborate.",
    outcomes: [
      "Explain why community accelerates learning and opportunity",
      "Introduce yourself and build genuine professional relationships",
      "Prepare for and contribute to a hackathon",
      "Share your work publicly with confidence",
    ],
    lessons: [
      {
        slug: "why-community-matters",
        title: "Why community matters",
        minutes: 10,
        summary: "People you learn and build with open doors that study alone cannot.",
        blocks: [
          {
            h: "What a community gives you",
            list: [
              "Faster learning from people a few steps ahead of you.",
              "Feedback on your work and ideas.",
              "Teammates, mentors and collaborators.",
              "Awareness of jobs, projects and events before they are widely advertised.",
            ],
          },
          {
            h: "Give as well as take",
            p: [
              "The best communities run on generosity. Answer a question, share a resource, welcome a newcomer. Over time, people remember who helped them.",
            ],
          },
        ],
        takeaways: [
          "Community speeds up learning and opens opportunity.",
          "Contribute, do not only consume.",
          "Be consistently helpful and kind.",
        ],
        quiz: [
          {
            q: "A healthy community member:",
            options: [
              "Only asks for favours",
              "Shares help and knowledge as well as asking",
              "Never speaks",
            ],
            answer: 1,
            why: "Communities thrive on give-and-take.",
          },
          {
            q: "One benefit of community is:",
            options: [
              "Feedback and teammates",
              "Guaranteed success",
              "Avoiding all effort",
            ],
            answer: 0,
            why: "Feedback and collaborators are real, practical benefits.",
          },
        ],
      },
      {
        slug: "networking-with-confidence",
        title: "Networking with confidence",
        minutes: 12,
        summary: "Introduce yourself, start conversations and follow up well.",
        blocks: [
          {
            h: "A simple introduction",
            p: [
              "Prepare a 20-second introduction: your name, what you do or are learning, and one thing you are curious about. Then ask the other person about themselves and listen.",
            ],
          },
          {
            h: "Follow up",
            list: [
              "Send a short message within two days: 'Good to meet you at the meetup. I enjoyed hearing about...'",
              "Connect online and share something useful.",
              "Keep in touch by being helpful, not only when you need something.",
            ],
          },
        ],
        takeaways: [
          "Prepare a short, honest introduction.",
          "Be curious about others.",
          "Follow up quickly and politely.",
        ],
        quiz: [
          {
            q: "A good introduction includes:",
            options: [
              "Your name, what you do and something you are curious about",
              "Your life story in ten minutes",
              "A request for a job straight away",
            ],
            answer: 0,
            why: "Short and open invites conversation.",
          },
          {
            q: "When should you follow up after meeting someone?",
            options: ["Within a couple of days", "After one year", "Never"],
            answer: 0,
            why: "Quick follow-up helps the connection stick.",
          },
        ],
      },
      {
        slug: "hackathon-playbook",
        title: "Hackathon playbook",
        minutes: 15,
        summary: "How to join a build event, work in a team and finish something.",
        blocks: [
          {
            h: "What a hackathon is",
            p: [
              "A hackathon is a time-limited event where teams build a working solution to a problem. The goal is a simple, demonstrable result, not a perfect product.",
            ],
          },
          {
            h: "Make a plan",
            list: [
              "Choose a clear problem and one core feature.",
              "Divide roles: builder, designer, tester, presenter.",
              "Build the smallest version that works, then improve if time remains.",
              "Reserve the last stretch for testing and rehearsing your demo.",
            ],
          },
          {
            h: "Team habits",
            p: [
              "Communicate often, respect each person's ideas and decide quickly. Disagree about ideas, not people.",
            ],
          },
        ],
        takeaways: [
          "Scope small: one problem, one core feature.",
          "Share roles and keep time for the demo.",
          "Good teamwork beats lone heroics.",
        ],
        quiz: [
          {
            q: "In a hackathon you should aim to:",
            options: [
              "Build a huge product with every feature",
              "Deliver a small, working and demonstrable solution",
              "Avoid the team",
            ],
            answer: 1,
            why: "A focused, working demo is the target.",
          },
          {
            q: "Why reserve time to rehearse your demo?",
            options: [
              "Judges and users judge what they can see and understand",
              "Because it uses up spare time",
              "It is not important",
            ],
            answer: 0,
            why: "A clear demo shows the value of your work.",
          },
        ],
      },
      {
        slug: "share-your-work",
        title: "Sharing your work and building visibility",
        minutes: 12,
        summary: "Let the right people find you by showing what you are learning and building.",
        blocks: [
          {
            h: "Share the journey",
            list: [
              "Post short updates on what you built, learned or got stuck on.",
              "Explain your thinking; people value honesty over perfection.",
              "Credit others who helped.",
            ],
          },
          {
            h: "Stay safe and professional",
            p: [
              "Do not share private data about clients, colleagues or yourself. Be respectful in comments. A professional reputation is built slowly and lost quickly.",
            ],
          },
        ],
        takeaways: [
          "Share progress regularly and honestly.",
          "Credit others and be respectful.",
          "Protect private information.",
        ],
        quiz: [
          {
            q: "Sharing your learning journey helps because:",
            options: [
              "It lets others find and trust you",
              "It forces you to stop learning",
              "It guarantees instant fame",
            ],
            answer: 0,
            why: "Visible progress builds trust and opportunity.",
          },
          {
            q: "Which should you NOT post?",
            options: [
              "A project you built",
              "A client's private records",
              "A lesson you learned",
            ],
            answer: 1,
            why: "Private data of others must never be shared.",
          },
        ],
      },
    ],
  },
];

export const getCourse = (slug: string) => courses.find((c) => c.slug === slug);
export const totalLessons = (c: Course) => c.lessons.length;
export const totalMinutes = (c: Course) => c.lessons.reduce((n, l) => n + l.minutes, 0);
/** A learner must score at least this share of quiz answers to get the quiz "passed" on a lesson. */
export const PASS_MARK = 0.5;
