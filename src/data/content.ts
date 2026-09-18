// All site copy lives here. Edit this file; the components just render it.
// Anything marked TODO is a placeholder, so replace it before you publish.

export type Project = {
  name: string;
  summary: string;
  stack: string[];
  links: { label: string; href: string }[];
  status?: string;
};

export type Job = {
  role: string;
  company: string;
  period: string;
  bullets: string[];
};

export type CaseStudyBlock = string | { list: { label: string; text: string }[] };

export type CaseStudy = {
  slug: string;
  eyebrow: string;
  title: string;
  summary: string;
  period: string;
  stat: { value: string; label: string };
  sections: { heading: string; body: CaseStudyBlock[] }[];
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const profile = {
  name: "Tyler Nguyen",
  title: "Senior Frontend Engineer",
  tagline:
    "React, Vue, performance, accessibility, and design systems — I ship interfaces that are fast, accessible, and measurably better for the business.",
  location: "Atlanta, GA (Open to Remote)",
  siteTitle: "Tyler Nguyen | Senior Frontend Engineer",
  siteDescription:
    "Portfolio and resume of Tyler Nguyen, a senior frontend engineer specializing in React, Vue, performance, accessibility, and design systems.",
  resumeUrl: `${basePath}/_TylerNguyen_Resume_2026_no_summary_PRODUCT_and_OWNERSHIP.pdf`,
  resumeFilename: "Tyler-Nguyen-Resume.pdf",
  links: [
    { label: "GitHub", href: "https://github.com/tnguyen341" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/tyler-nguyen-a97b43179/" }, // TODO: add real LinkedIn URL
    { label: "Email", href: "mailto:nguyentyler341@gmail.com" },
  ],
};

export const about = [
  "I'm a senior frontend engineer who works at the intersection of UX, performance, and architecture. Most recently I led the re-platforming of a high-traffic customer-facing app at Macy's, pairing frontend modernization with behavioral analytics and A/B experimentation to drive measurable revenue growth.",
  "I treat performance as a product lever, not an afterthought — cutting LCP by 65% through dynamic loading and bundle optimization, and driving accessibility work that took a design system's WCAG audit findings from 20 to 0.",
  "I also enjoy the technical leadership side of the job: setting architectural direction, raising code quality standards, and helping teams adopt AI-assisted tooling to move faster without cutting corners.",
];

export const projects: Project[] = [
  {
    name: "Ludara",
    summary:
      "A card-game-style swipe and rating interaction, built with production-grade motion. Originally the core of a social trending-topics-discovery app; the product-market fit wasn't there, so it now lives as a deployable animation prototype — a reusable interaction library ready to drop into the next product it fits.",
    stack: ["Next.js", "TypeScript", "Prisma", "Supabase", "Framer Motion"],
    links: [
      { label: "Live demo", href: "https://ludara-hazel.vercel.app/" },
      { label: "Source", href: "https://github.com/tnguyen341/ludara" },
    ],
    status: "Prototype",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "macys-lcp",
    eyebrow: "Performance Optimization Case Study",
    title: "Macy's Registry — Frontend Re-platforming",
    summary:
      "Reduced LCP by 65% (to under 2.2s) on a $35M+ e-commerce vertical through a lazy loading and bundle strategy, backed by a service worker caching layer — contributing to 32% YoY revenue growth.",
    period: "Macy's Technology",
    stat: { value: "65%", label: "faster Largest Contentful Paint" },
    sections: [
      {
        heading: "The problem",
        body: [
          "The Registry web application had accumulated significant performance debt. Largest Contentful Paint was well above acceptable thresholds, Core Web Vitals were failing, and the bundle size was large enough that first-load experience was visibly slow — directly impacting conversion on a $35M+ e-commerce vertical.",
          "The goal was to treat frontend performance as a product lever, not a maintenance task.",
        ],
      },
      {
        heading: "What I owned: lazy loading & bundle strategy",
        body: [
          "The primary lever I drove was a systematic lazy loading strategy across the Vue.js application. The core insight was that the initial bundle was loading far more than the user needed to see the first meaningful paint.",
          "The approach had three layers:",
          {
            list: [
              {
                label: "Route-based code splitting",
                text: "each route became its own chunk, loaded on demand rather than upfront. Users landing on the registry page weren't paying the cost of code for pages they hadn't visited yet.",
              },
              {
                label: "Deferred non-critical components",
                text: "components below the fold, modal content, and secondary UI were wrapped to load asynchronously. The critical render path was stripped down to only what was needed for the first visible screen.",
              },
              {
                label: "Bundle composition audit",
                text: "identified and addressed heavy dependencies contributing disproportionate weight to the initial bundle. Some were replaced, others moved to async imports.",
              },
            ],
          },
          "The combined effect was a 65% reduction in LCP, bringing it from well above threshold down to under 2.2 seconds — directly improving SEO visibility and page speed scores.",
        ],
      },
      {
        heading: "Supporting context: service worker caching layer",
        body: [
          "The application also had a Workbox-based service worker caching implementation. This predated my time on the codebase — I made targeted changes within it but wouldn't claim authorship of the architecture.",
          "What's worth understanding about it: the implementation used an eager caching strategy, pre-fetching and storing assets at SW install time rather than lazily warming the cache on first user requests. For a high-traffic surface with high return visit rates, this means the cache is fully populated the moment the SW takes control — every user gets cache hits rather than the first wave of users after a deploy hitting cold cache.",
          "Cache invalidation was handled manually via a control event with timestamps, rather than relying purely on TTL expiration — giving more precise control over when stale data was purged.",
          "One real tension the team navigated: user-specific data like quantities and registry selections required network-first behavior to avoid serving stale state. The lesson there is that caching strategy should be segmented by data type — stable assets cache aggressively, transactional/user-specific data bypasses the cache entirely.",
        ],
      },
      {
        heading: "The combined impact",
        body: [
          "The lazy loading work and the caching layer solved different problems at different points in the user journey:",
          {
            list: [
              {
                label: "Lazy loading",
                text: "addressed the cold start problem — reducing what the browser had to parse and execute before showing the user anything meaningful.",
              },
              {
                label: "Service worker caching",
                text: "addressed repeat visit performance — eliminating network round trips entirely for returning users.",
              },
            ],
          },
          "Together they produced the 65% LCP improvement and contributed to the 32% YoY revenue growth attributed to the re-platforming effort.",
        ],
      },
    ],
  },
];

export const experience: Job[] = [
  {
    role: "Senior Software Engineer",
    company: "Macy's Technology",
    period: "April 2022 – Present",
    bullets: [
      "Led the re-platforming of a high-traffic customer-facing web application, modernizing frontend architecture and UX to drive 32% YoY growth in Registry revenue.",
      "Collaborated with Product and Design to identify customer journey friction, forming hypotheses backed by behavioral analytics (FullStory, funnel analysis) and shipping iterative A/B experiments to measurably improve conversion.",
      "Owned frontend performance as a product lever, reducing LCP by 65% (to <2.2s) through dynamic component loading and bundle optimization — improving Core Web Vitals, SEO visibility, and page speed.",
      "Drove design system adoption within a Vue.js web application, building reusable components and establishing patterns that accelerated feature delivery, while leading WCAG-compliant accessibility implementation that reduced audit findings from 20 to 0.",
      "Provided technical leadership for 16 engineers — setting architectural direction, code quality standards, and delivery strategy — while maintaining technical documentation and adopting AI-assisted tooling (Gemini Code Assist) to accelerate team velocity.",
    ],
  },
  {
    role: "Mid-level Software Engineer",
    company: "CodeMettle",
    period: "March 2019 – March 2022",
    bullets: [
      "Re-architected a complex Electron + React + TypeScript web application, improving reliability and modularity, contributing to a 20% increase in user retention.",
      "Built scalable, component-driven UI systems for complex multi-step workflows, solving problems at the intersection of usability and maintainable frontend architecture.",
      "Established test-driven development practices (Jest + React Testing Library), raising coverage to 80%+ and improving confidence in rapid feature iteration.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Mercury Systems",
    period: "June 2017 – February 2019",
    bullets: [
      "Contributed to safety-critical software requiring strict reliability and fault tolerance; built a Python automation framework integrating with JAMA's REST API to manage thousands of requirements, improving traceability and reducing operational risk.",
    ],
  },
];

export const education = [
  {
    school: "Georgia Institute of Technology",
    detail: "Bachelor of Science in Computer Engineering",
    period: "Atlanta, GA",
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Frontend",
    items: [
      "React",
      "Vue.js",
      "Next.js",
      "Pinia",
      "TypeScript",
      "JavaScript (ES6+)",
      "Node.js",
      "Webpack",
      "Vite",
      "Figma",
    ],
  },
  {
    group: "Architecture & Product Craft",
    items: [
      "Component Architecture",
      "Design Systems",
      "Performance Optimization",
      "Accessibility (WCAG)",
      "State Management Patterns",
      "RESTful APIs",
      "GCP",
      "Agile Project Development",
      "Gemini Code Assist",
    ],
  },
  {
    group: "Observability & Analytics",
    items: [
      "Adobe Analytics",
      "Frontend Instrumentation",
      "A/B Experimentation",
      "Core Web Vitals",
    ],
  },
  {
    group: "Quality & Delivery",
    items: [
      "Jest",
      "React Testing Library",
      "Vue Testing Library",
      "End-to-End Testing",
      "User Acceptance Testing",
      "Technical Documentation",
      "CI/CD (GitLab)",
    ],
  },
];
