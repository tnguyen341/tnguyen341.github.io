import { about, education, experience, profile, projects, skills } from "@/data/content";

const nav = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#resume", label: "Resume" },
];

export default function Home() {
  return (
    <div className="layout">
      <header className="rail">
        <div className="rail-inner">
          <h1 className="name">{profile.name}</h1>
          <p className="title">{profile.title}</p>
          <p className="tagline">{profile.tagline}</p>

          <nav aria-label="Sections" className="nav">
            {nav.map((n) => (
              <a key={n.href} href={n.href}>
                {n.label}
              </a>
            ))}
          </nav>

          <ul className="links" aria-label="Contact">
            {profile.links.map((l) => (
              <li key={l.label}>
                <a href={l.href} rel="me noopener">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>

      <main id="main" className="content">
        <section id="about" aria-labelledby="about-h">
          <h2 id="about-h">About</h2>
          {about.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </section>

        <section id="projects" aria-labelledby="projects-h">
          <h2 id="projects-h">Projects</h2>
          <ul className="list">
            {projects.map((p) => (
              <li key={p.name} className="item">
                <h3>
                  {p.name}
                  {p.status ? <span className="badge">{p.status}</span> : null}
                </h3>
                <p>{p.summary}</p>
                <ul className="tags" aria-label="Tech used">
                  {p.stack.map((t, i) => (
                    <li key={`${t}-${i}`}>{t}</li>
                  ))}
                </ul>
                {p.links.length > 0 && (
                  <p className="item-links">
                    {p.links.map((l) => (
                      <a key={l.href} href={l.href} rel="noopener">
                        {l.label}
                      </a>
                    ))}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </section>

        <section id="resume" aria-labelledby="resume-h">
          <div className="section-head">
            <h2 id="resume-h">Resume</h2>
            {profile.resumeUrl ? (
              <a className="button" href={profile.resumeUrl} download>
                Download PDF
              </a>
            ) : null}
          </div>

          <h3 className="sub">Experience</h3>
          <ul className="list">
            {experience.map((j) => (
              <li key={`${j.company}-${j.period}`} className="item">
                <div className="row">
                  <h4>
                    {j.role}, {j.company}
                  </h4>
                  <span className="period">{j.period}</span>
                </div>
                <ul className="bullets">
                  {j.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          <h3 className="sub">Skills</h3>
          <dl className="skills">
            {skills.map((s) => (
              <div key={s.group}>
                <dt>{s.group}</dt>
                <dd>{s.items.join(", ")}</dd>
              </div>
            ))}
          </dl>

          <h3 className="sub">Education</h3>
          <ul className="list">
            {education.map((e) => (
              <li key={e.school} className="item">
                <div className="row">
                  <h4>{e.school}</h4>
                  <span className="period">{e.period}</span>
                </div>
                <p>{e.detail}</p>
              </li>
            ))}
          </ul>
        </section>

        <footer className="footer">
          <p>Built with Next.js and hosted on GitHub Pages.</p>
        </footer>
      </main>
    </div>
  );
}
