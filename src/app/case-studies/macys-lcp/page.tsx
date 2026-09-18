import type { Metadata } from "next";
import Link from "next/link";
import { caseStudies, profile } from "@/data/content";

const caseStudy = caseStudies.find((c) => c.slug === "macys-lcp")!;

export const metadata: Metadata = {
  title: `${caseStudy.title} | ${profile.name}`,
  description: caseStudy.summary,
};

export default function MacysLcpCaseStudy() {
  return (
    <div className="article-page">
      <Link href="/" className="back-link">
        ← Back to {profile.name}
      </Link>

      <header className="article-header">
        <p className="article-eyebrow">{caseStudy.eyebrow}</p>
        <h1>{caseStudy.title}</h1>
        <p className="article-meta">{caseStudy.period}</p>
        <p className="article-summary">{caseStudy.summary}</p>
      </header>

      {caseStudy.sections.map((s) => (
        <section key={s.heading} className="article-section">
          <h2>{s.heading}</h2>
          {s.body.map((block, i) =>
            typeof block === "string" ? (
              <p key={i}>{block}</p>
            ) : (
              <ul key={i} className="case-list">
                {block.list.map((item) => (
                  <li key={item.label}>
                    <strong>{item.label}</strong> — {item.text}
                  </li>
                ))}
              </ul>
            )
          )}
        </section>
      ))}
    </div>
  );
}
