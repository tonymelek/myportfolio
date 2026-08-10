/**
 * Flagship case studies — sourced from local repos + me/ profile.
 * Keep to decisions and outcomes; avoid internal NAB detail.
 */

export const caseStudies = {
  "coptic-tools": {
    slug: "coptic-tools",
    title: "Coptic Language Tools",
    tag: "Open source · TypeScript monorepo · live",
    summary:
      "A public Coptic language platform: convert legacy Antonios Latin to Unicode, pronounce in English/Arabic, search a dictionary, and type on an on-screen keyboard — with reusable npm packages so other apps don’t reinvent calendar and scripture logic.",
    live: "https://tonymelek.github.io/coptic-language/",
    code: "https://github.com/tonymelek/coptic-language",
    stack: [
      "TypeScript",
      "Vue 3",
      "Vite",
      "npm packages",
      "GitHub Pages",
    ],
    problem:
      "Coptic text still lives in legacy Antonios-font encodings, while modern apps need Unicode, pronunciation for learners, and liturgical calendar/readings that other products can consume — not a one-off demo page.",
    approach: [
      "Split the work into a monorepo: conversion and pronunciation as libraries, plus a Vue/Vite frontend with a marketing surface and an /app/ tools SPA.",
      "Treat calendar and scripture as SDKs — published coptic-readings (date → feast/tune/katamaros refs) and bible-citation-text (citation → EN/AR verse text) so Synaxis and future apps share one source of truth.",
      "Document the hard parts (glyph mapping, PDF dictionary extraction, enrichment) so the engineering story is public, not trapped in chat history.",
    ],
    owned: [
      "Monorepo layout, package APIs, and publish path for the npm libraries.",
      "Frontend tools UX: converter, pronounce, dictionary search, mobile keyboard fixes, text previewer.",
      "Integration of readings packages into the live app and Coptic Synaxis consumer.",
    ],
    outcome:
      "Live product at tonymelek.github.io/coptic-language with installable packages — other Coptic apps can depend on calendar and citation logic instead of copying parsers.",
  },
  "heavenly-healing": {
    slug: "heavenly-healing",
    title: "Heavenly Healing",
    tag: "Client · CMS publish pipeline · live",
    summary:
      "Osteopathy clinic site where the customer edits content in a Vue admin and publishes to a static public site — Handlebars render, Firebase Auth roles, and Cloudflare deploy — so marketing updates don’t need an engineer every time.",
    live: "https://heavenly-healing.com.au/",
    code: "https://github.com/tonymelek/marian-heavenly-healing",
    stack: [
      "Vue 3",
      "Vite",
      "Handlebars",
      "Firebase Auth / Functions",
      "Cloudflare",
      "Mailjet",
    ],
    problem:
      "A clinic needs a polished public site plus the ability to change copy themselves. A plain static site blocks the customer; a heavy CMS is overkill. They needed a publish pipeline with real roles, not a brochure HTML dump.",
    approach: [
      "Admin (Vue 3 + Vite) edits shared content schema in Firestore; Cloud Function publishPage evaluates editedAt vs publishedAt, renders full HTML via Handlebars templates/partials, and writes the public page.",
      "Firebase custom claims for domain-scoped roles (manager / admin / super-admin / suspended) with gated admin routes and user management APIs (createDomainAdmin, updateUserRole, promoteSuperAdmin, listDomainUsers).",
      "Shared @mhh/commons schema between admin and functions; Mailjet for password-reset mail; SEO/analytics on the live marketing site; Wrangler deploy to Cloudflare alongside Firebase Functions.",
    ],
    owned: [
      "End-to-end publish pipeline design and Handlebars render path.",
      "RBAC model, secured functions, and admin UX for edit/publish.",
      "Production deploy path and content workflow the clinic can run without engineering per change.",
    ],
    outcome:
      "Live at heavenly-healing.com.au — clinic staff publish updates themselves; commits/publishes are attributable; the system is a CMS + RBAC product, not a one-shot brochure.",
  },
};
