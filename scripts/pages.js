/** Page definitions + content for the Handlebars build (marinkart-style). */

import { caseStudies } from "./case-studies.js";

const SITE_URL = "https://tonymelek.github.io/myportfolio";

/**
 * Nested pages use folder/index.html for clean GH Pages URLs.
 * `root` prefixes asset + internal links ("" at site root, "../" one level down).
 */
function pageLinks(root = "") {
  const home = root || "./";
  return {
    root,
    homeHref: home,
    workHref: `${root}work/`,
    contactHref: `${root}contact/`,
    resume: `${root}pdf/TonyMelek_Resume.pdf`,
    nav: [
      { href: home, label: "Home", id: "home" },
      { href: `${root}work/`, label: "Work", id: "work" },
      { href: `${root}contact/`, label: "Contact", id: "contact" },
    ],
  };
}

const baseMeta = {
  author: "Tony Melek",
  robots:
    "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  geoRegion: "AU-VIC",
  geoPlacename: "Melbourne, Victoria",
  siteName: "Tony Melek",
  locale: "en_AU",
  ogImage: `${SITE_URL}/images/icon.png`,
  ogImageWidth: "1200",
  ogImageHeight: "630",
  year: new Date().getFullYear(),
  email: "tonymelek.au@gmail.com",
  phone: "+61 426 081 060",
  linkedin: "https://www.linkedin.com/in/tonymelek/",
  github: "https://github.com/tonymelek",
};

const skills = [
  "React",
  "TypeScript",
  "Node.js",
  "TanStack",
  "GraphQL / BFF",
  "Vue 3",
  "Vite",
  "Firebase",
  "AWS",
  "PostgreSQL",
  "Handlebars",
  "CI/CD",
];

const projects = [
  {
    title: "Coptic Language Tools",
    tag: "Open source · live",
    blurb:
      "TypeScript monorepo for Coptic Unicode conversion, pronunciation (EN/AR), dictionary search, and on-screen keyboard — plus published npm packages for calendar readings and bilingual scripture.",
    stack: ["TypeScript", "Vue 3", "Vite", "npm"],
    live: "https://tonymelek.github.io/coptic-language/",
    code: "https://github.com/tonymelek/coptic-language",
    caseStudy: "coptic-tools",
    highlight: true,
  },
  {
    title: "Heavenly Healing",
    tag: "Client · CMS pipeline",
    blurb:
      "Clinic site with a real publish pipeline: Vue admin edits content → Firebase Auth & Cloud Functions → Handlebars renders static HTML. Multi-role RBAC, SEO, and self-serve updates for the customer.",
    stack: ["Handlebars", "Vue 3", "Firebase", "Cloudflare"],
    live: "https://heavenly-healing.com.au/",
    code: "https://github.com/tonymelek/marian-heavenly-healing",
    caseStudy: "heavenly-healing",
    highlight: true,
  },
  {
    title: "Meltek Bookkeeper",
    tag: "AI product",
    blurb:
      "WhatsApp + LLM workflow: invoice images → Gemini extraction (ABN, GST, merchant, date) → ABN lookup → Firebase transactions with human-in-the-loop approval before reconciliation.",
    stack: ["Node.js", "Gemini", "Firebase", "WhatsApp"],
    highlight: true,
  },
  {
    title: "Coptic Synaxis",
    tag: "Liturgical app",
    blurb:
      "Vue 3 + Vite + Tailwind app for liturgical seasons, daily katamaros refs, and bilingual Bible viewing — built on the published coptic-readings and bible-citation-text packages.",
    stack: ["Vue 3", "Vite", "Tailwind"],
    highlight: false,
  },
  {
    title: "Marinkart",
    tag: "Client commerce site",
    blurb:
      "Static site builder for a nautical charts agent: Express + Handlebars pages, Tailwind, SEO, and a maintainable content/publish workflow.",
    stack: ["Handlebars", "Tailwind", "Express"],
    live: "https://marinkart.com/",
    code: "https://github.com/tonymelek/marinkart",
    highlight: false,
  },
  {
    title: "Local screen share",
    tag: "WebRTC",
    blurb:
      "WebRTC broadcast rooms with Firebase signaling and CI deploy to Firebase Hosting — built for church rooms and presenters.",
    stack: ["React", "WebRTC", "Firebase"],
    code: "https://github.com/tonymelek/local-screen-share",
    highlight: false,
  },
];

const experience = [
  {
    role: "Senior Analyst Engineer",
    org: "National Australia Bank",
    when: "Jul 2022 – Present",
    points: [
      "Selected into an elite Proof of Value cohort (mostly Principal Engineers) for NAB Connect modernisation — pods, monorepo strategy, and TanStack vs React for frontend delivery.",
      "Fitting TanStack apps into nab-shell (React-native host), including SSR-as-React-in-host, with AI-assisted tooling (Cursor, Devin).",
      "Auth integration for the TanStack path: same tokens/strategy, per-module OAuth scopes for least privilege.",
      "Modular React architecture across multiple entry points — parallel delivery across squads with fewer conflicts.",
    ],
  },
  {
    role: "Analyst Engineer",
    org: "National Australia Bank",
    when: "Jul 2021 – Jun 2022",
    points: [
      "Built a GraphQL BFF to tighten data fetching and cut unnecessary network calls.",
      "Led early architecture and delivery for the Pay-to-Agreements miniapp.",
      "Shipped accessible React + TypeScript UI and full-stack features across React, Node, and GraphQL.",
    ],
  },
  {
    role: "Full Stack Developer",
    org: "Envision Labs",
    when: "Mar 2021 – May 2021",
    points: [
      "Delivered a full-stack insights feature from concept to staging in eight days (AWS API Gateway + visualisations).",
      "Real-time analytics dashboard on Node.js and PostgreSQL with Redux-managed UI.",
    ],
  },
];

function caseStudyPage(slug) {
  const study = caseStudies[slug];
  const links = pageLinks("../");
  return {
    template: "pages/case-study",
    out: `${slug}/index.html`,
    sitemap: { changefreq: "monthly", priority: "0.70" },
    data: {
      ...baseMeta,
      ...links,
      page: "work",
      caseStudy: study,
      title: `${study.title} — Case study · Tony Melek`,
      description: study.summary,
      canonical: `${SITE_URL}/${slug}/`,
      ogUrl: `${SITE_URL}/${slug}/`,
      ogTitle: `${study.title} — Case study`,
      ogDescription: study.summary,
      ogImageAlt: study.title,
      twitterTitle: `${study.title} — Case study`,
      twitterDescription: study.summary,
      twitterImageAlt: study.title,
    },
  };
}

export const pages = [
  {
    template: "pages/index",
    out: "index.html",
    sitemap: { changefreq: "monthly", priority: "1.00" },
    data: {
      ...baseMeta,
      ...pageLinks(""),
      page: "home",
      title: "Tony Melek — Senior Full Stack Engineer",
      description:
        "Senior Full Stack Engineer in Melbourne. React, TypeScript, Node, platform migrations at NAB, plus Meltek products and open Coptic tooling.",
      canonical: `${SITE_URL}/`,
      ogUrl: `${SITE_URL}/`,
      ogTitle: "Tony Melek — Senior Full Stack Engineer",
      ogDescription:
        "Platform modernisation, React/Node ecosystems, and products that ship — from NAB Connect to open Coptic tooling.",
      ogImageAlt: "Tony Melek",
      twitterTitle: "Tony Melek — Senior Full Stack Engineer",
      twitterDescription:
        "Platform modernisation, React/Node ecosystems, and products that ship.",
      twitterImageAlt: "Tony Melek",
      skills,
      projects: projects.filter((p) => p.highlight),
      experience: experience.slice(0, 2),
    },
  },
  {
    template: "pages/work",
    out: "work/index.html",
    sitemap: { changefreq: "monthly", priority: "0.80" },
    data: {
      ...baseMeta,
      ...pageLinks("../"),
      page: "work",
      title: "Work — Tony Melek",
      description:
        "Selected projects: Coptic tools, client CMS pipelines, AI bookkeeping, and platform engineering.",
      canonical: `${SITE_URL}/work/`,
      ogUrl: `${SITE_URL}/work/`,
      ogTitle: "Work — Tony Melek",
      ogDescription:
        "Selected projects across open source, client delivery, and AI products.",
      ogImageAlt: "Tony Melek — selected work",
      twitterTitle: "Work — Tony Melek",
      twitterDescription:
        "Selected projects across open source, client delivery, and AI products.",
      twitterImageAlt: "Tony Melek — selected work",
      projects,
      experience,
      skills,
    },
  },
  caseStudyPage("coptic-tools"),
  caseStudyPage("heavenly-healing"),
  {
    template: "pages/contact",
    out: "contact/index.html",
    sitemap: { changefreq: "yearly", priority: "0.60" },
    data: {
      ...baseMeta,
      ...pageLinks("../"),
      page: "contact",
      title: "Contact — Tony Melek",
      description:
        "Get in touch with Tony Melek — email, LinkedIn, GitHub, or download the résumé.",
      canonical: `${SITE_URL}/contact/`,
      ogUrl: `${SITE_URL}/contact/`,
      ogTitle: "Contact — Tony Melek",
      ogDescription: "Email, LinkedIn, GitHub, and résumé.",
      ogImageAlt: "Contact Tony Melek",
      twitterTitle: "Contact — Tony Melek",
      twitterDescription: "Email, LinkedIn, GitHub, and résumé.",
      twitterImageAlt: "Contact Tony Melek",
    },
  },
];
