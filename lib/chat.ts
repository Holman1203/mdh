import { pillars, site } from "@/lib/site-data";
import { courses } from "@/lib/courses";

/**
 * Knowledge for the website assistant. It answers ONLY from the site's own data (site-data.ts and courses.ts),
 * so nothing is invented. To add a topic, add an entry to `topics`: `match` is a list of words/phrases that trigger it.
 * No message typed in the chat is sent anywhere: matching happens in the visitor's browser.
 */

export type Reply = { text: string; links?: { label: string; href: string; external?: boolean }[] };
type Topic = { id: string; match: RegExp; reply: () => Reply };

const pillar = (id: string) => pillars.find((p) => p.id === id);
const describe = (id: string, extra: Reply["links"] = []): Reply => {
  const p = pillar(id);
  if (!p) return fallback();
  return {
    text: `${p.name}: ${p.tagline}.\n\n${p.purpose}\n\nWhat it offers:\n${p.delivers.map((d) => `• ${d}`).join("\n")}`,
    links: [{ label: `About ${p.short}`, href: `/services/#${p.id}` }, ...(extra ?? [])],
  };
};

export const quickReplies = [
  "What do you do?",
  "Learn free online",
  "Partner with us",
  "How can I donate?",
  "Where are you?",
  "Talk to a person",
];

export const greeting: Reply = {
  text: `Hello! I'm the ${site.shortName} assistant. Ask me about our programmes, free online courses, partnerships, donations or how to reach us.`,
};

export function fallback(): Reply {
  return {
    text: "I'm not sure about that one yet. You can pick a topic below, or chat with a person on WhatsApp.",
    links: [
      { label: "Chat on WhatsApp", href: site.whatsappHref, external: true },
      { label: "Contact page", href: "/contact/" },
    ],
  };
}

const topics: Topic[] = [
  {
    id: "person",
    match: /(talk|speak|chat|reach).*(person|human|someone|agent|team)|whatsapp|real person|call you|phone|\bcall\b/,
    reply: () => ({
      text: `You can reach the team on ${site.phone} (call or WhatsApp) or at ${site.email}.`,
      links: [
        { label: "Chat on WhatsApp", href: site.whatsappHref, external: true },
        { label: "Contact page", href: "/contact/" },
      ],
    }),
  },
  {
    id: "greet",
    match: /^(hi|hello|hey|good (morning|afternoon|evening)|salam|assalamu|sannu)\b/,
    reply: () => greeting,
  },
  {
    id: "thanks",
    match: /\b(thanks|thank you|thx|bye|goodbye)\b/,
    reply: () => ({ text: "You're welcome! If you need anything else, I'm here." }),
  },
  {
    id: "register",
    match: /register|sign ?up|create (an )?account|log ?in|sign ?in|enrol|enroll|certificate/,
    reply: () => ({
      text: "Registering is free. Create an account with your name, email and a password, enrol in any course and learn at your own pace. When you finish every lesson in a course you can print or save a certificate of completion.",
      links: [
        { label: "Register free", href: "/learn/register/" },
        { label: "Sign in", href: "/learn/sign-in/" },
      ],
    }),
  },
  {
    id: "learn",
    match: /learn|course|class|lesson|study|train|academy|skill|teach|self.?pace|free/,
    reply: () => ({
      text: `Mamrex Learn offers free, self-paced online courses:\n\n${courses.map((c) => `• ${c.title}`).join("\n")}\n\nPick one, learn at your own pace and finish with a quick check after each lesson.`,
      links: [
        { label: "Browse courses", href: "/learn/" },
        { label: "Register free", href: "/learn/register/" },
      ],
    }),
  },
  { id: "ai", match: /\bai\b|artificial|chatgpt|automation|prompt/, reply: () => describe("ai", [{ label: "Free AI course", href: "/learn/ai-foundations/" }]) },
  { id: "workspace", match: /workspace|co-?work|desk|office space|solar|power|electric/, reply: () => describe("workspace") },
  { id: "ventures", match: /venture|startup|start-up|incubat|fund|invest|mentor|founder support/, reply: () => describe("ventures") },
  { id: "connect", match: /connect|internet|wifi|wi-fi|network|it support|connectivity/, reply: () => describe("connect") },
  { id: "community", match: /communit|event|hackathon|meetup/, reply: () => describe("community") },
  {
    id: "pillars",
    match: /what (do|does) (you|mamrex)|what is mamrex|about (you|mamrex|us)|pillar|service|programme|program|offer|who are you/,
    reply: () => ({
      text: `${site.description}\n\nOur six pillars:\n${pillars.map((p) => `• ${p.name}: ${p.tagline}`).join("\n")}`,
      links: [
        { label: "Our services", href: "/services/" },
        { label: "About us", href: "/about/" },
      ],
    }),
  },
  {
    id: "partner",
    match: /partner|sponsor|collaborat|ngo|organi[sz]ation|institution|government|donor|grant/,
    reply: () => ({
      text: "We work with funders, NGOs, schools, businesses and government offices. The Partner With Us page explains the ways to work together and the pathways for each type of partner. You can also contact us to start a conversation.",
      links: [
        { label: "Partner with us", href: "/partner/" },
        { label: "Contact us", href: "/contact/" },
      ],
    }),
  },
  {
    id: "donate",
    match: /donat|give|support us|support you|contribute|bank|account number|paystack|gift/,
    reply: () => ({
      text: "Thank you for wanting to support our work. The Donate page has our bank transfer details with copy buttons, and explains where your support goes.",
      links: [{ label: "Donate now", href: "/donate/" }],
    }),
  },
  {
    id: "where",
    match: /where|address|location|visit|find you|directions|map|maiduguri|email|contact/,
    reply: () => ({
      text: `${site.name}\n${site.address.full}\n\nPhone / WhatsApp: ${site.phone}\nEmail: ${site.email}`,
      links: [
        { label: "Contact page", href: "/contact/" },
        { label: "Chat on WhatsApp", href: site.whatsappHref, external: true },
      ],
    }),
  },
  {
    id: "leadership",
    match: /leader|founder|director|who runs|who owns|management|governance|registered|\brc\b|cac/,
    reply: () => ({
      text: `${site.name} is a registered company (${site.rc}, CAC status: ${site.cacStatus}). You can meet the founder and read about our governance on the Leadership page.`,
      links: [{ label: "Leadership", href: "/leadership/" }],
    }),
  },
  {
    id: "roadmap",
    match: /roadmap|plan|future|phase|2030|target|goal/,
    reply: () => ({
      text: "Our roadmap sets out five phases of growth, and our 2030 targets are described on the home page. See the Roadmap page for the full plan.",
      links: [{ label: "Roadmap", href: "/roadmap/" }],
    }),
  },
];

export function answer(input: string): Reply {
  const q = input.toLowerCase().trim();
  if (!q) return fallback();
  const hit = topics.find((t) => t.match.test(q));
  return hit ? hit.reply() : fallback();
}
