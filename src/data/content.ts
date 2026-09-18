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

export const profile = {
  name: "Tyler", // TODO: add last name
  title: "Frontend software engineer",
  tagline:
    "I build fast, accessible interfaces in React and Vue, and I care about performance you can measure.",
  location: "City, ST", // TODO
  siteTitle: "Tyler | Frontend software engineer",
  siteDescription:
    "Portfolio and resume of Tyler, a frontend software engineer specializing in React, Vue, and web performance.",
  resumeUrl: "", // TODO: put resume.pdf in /public and set to "/resume.pdf" to show a download link
  links: [
    { label: "GitHub", href: "https://github.com/tnguyen341" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/your-handle" }, // TODO
    { label: "Email", href: "mailto:you@example.com" }, // TODO
  ],
};

export const about = [
  // TODO: 2-3 short paragraphs. Recruiters skim: lead with what you do and what you're good at.
  "I'm a frontend engineer with a Vue and React background. I like the part of the job where a slow, clunky page becomes a fast, clear one.",
  "Lately I've been going full-stack on a side project to learn how the data layer works, so the interfaces I build fit the systems behind them.",
];

export const projects: Project[] = [
  {
    name: "Ludara",
    summary:
      "A restaurant discovery app that replaces star ratings with a card-game mechanic. Rankings come from what people actually choose.",
    stack: ["Next.js", "TypeScript", "Prisma", "Supabase", "Framer Motion"],
    links: [{ label: "Source", href: "https://github.com/tnguyen341/luddie" }],
    status: "In progress",
  },
  {
    name: "Improving Largest Contentful Paint at Macy's",
    summary:
      "A web performance initiative to speed up how fast the main content loads. TODO: add the problem, what you changed, and the measured result (e.g. LCP before and after).",
    stack: ["Web performance", "Core Web Vitals"], // TODO
    links: [], // TODO: link the write-up once it's published
  },
  {
    name: "Project name", // TODO
    summary: "One sentence on what it does and why it matters.",
    stack: ["Tech", "Tech"],
    links: [],
  },
];

export const experience: Job[] = [
  {
    role: "Frontend Software Engineer", // TODO
    company: "Company name",
    period: "2023 to present",
    bullets: [
      // TODO: lead with outcomes and numbers, not duties.
      "Did X, which improved Y by Z.",
      "Shipped A for B users.",
    ],
  },
];

export const education = [
  { school: "University name", detail: "Degree, field", period: "Year" }, // TODO
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Frontend", items: ["TypeScript", "JavaScript", "React", "Next.js", "Vue"] },
  { group: "Styling and motion", items: ["CSS", "Tailwind CSS", "Framer Motion"] },
  { group: "Performance", items: ["Core Web Vitals", "LCP optimization", "Profiling"] },
  { group: "Learning: backend", items: ["Postgres", "Prisma", "Supabase"] },
  { group: "Tooling", items: ["Git", "Vercel", "Claude Code"] },
];
