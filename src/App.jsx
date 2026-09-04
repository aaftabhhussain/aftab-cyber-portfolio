import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";

const projects = [
  {
    id: "CY-01",
    title: "Network Threat Monitor",
    description: "A student cybersecurity project for observing network traffic and identifying suspicious connection patterns.",
    techStack: ["Python", "Networking", "Wireshark"],
    image: "NETWORK",
    link: "https://github.com/"
  },
  {
    id: "CY-02",
    title: "Secure Login System",
    description: "A web authentication project demonstrating password validation, input handling, and basic security practices.",
    techStack: ["JavaScript", "React", "Security"],
    image: "AUTH",
    link: "https://github.com/"
  },
  {
    id: "CY-03",
    title: "Digital Evidence Lab",
    description: "An academic mini-project exploring file metadata, hashing, evidence preservation, and basic forensic workflows.",
    techStack: ["Cyber Forensics", "SHA-256", "Linux"],
    image: "FORENSICS",
    link: "https://github.com/"
  }
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    ["/", "Home"],
    ["/about", "About"],
    ["/projects", "Projects"],
    ["/contact", "Contact"]
  ];

  return (
    <header className="nav-wrap">
      <nav className="navbar container">
        <Link className="brand" to="/" onClick={() => setOpen(false)}>
          A.H<span>_</span>
        </Link>
        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? "×" : "☰"}
        </button>
        <div className={`nav-links ${open ? "show" : ""}`}>
          {links.map(([path, label]) => (
            <Link key={path} to={path} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero container">
      <div className="hero-copy">
        <p className="eyebrow">STATUS: OPEN TO OPPORTUNITIES</p>
        <h1>Aftab<br /><span>Hussain</span></h1>
        <p className="hero-sub">
          BCA Cybersecurity student building practical skills in security,
          web development, networking, and digital investigation.
        </p>
        <div className="hero-actions">
          <Link className="btn primary" to="/projects">View Projects →</Link>
          <Link className="btn ghost" to="/contact">Open Contact</Link>
        </div>
      </div>

      <div className="terminal">
        <div className="terminal-top"><span>security_terminal</span><span>● ● ●</span></div>
        <div className="terminal-body">
          <p><b>$</b> whoami</p>
          <p className="green">aftab@cyber-lab</p>
          <p><b>$</b> scan --profile student</p>
          <p className="muted">[ok] web development</p>
          <p className="muted">[ok] cybersecurity fundamentals</p>
          <p className="muted">[ok] networking</p>
          <p className="muted">[ok] problem solving</p>
          <p><b>$</b> status</p>
          <p className="green">learning → building → improving<span className="cursor">_</span></p>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="stats container">
      <div><strong>01</strong><span>Cybersecurity Focus</span></div>
      <div><strong>03+</strong><span>Portfolio Projects</span></div>
      <div><strong>∞</strong><span>Curiosity Level</span></div>
    </section>
  );
}

function About() {
  return (
    <section className="page container">
      <p className="file-label">FILE 001 — PROFILE</p>
      <h2>About Me</h2>
      <div className="about-grid">
        <div>
          <p className="lead">
            I'm Aftab Hussain, a BCA Cybersecurity student interested in how
            systems work, how they fail, and how they can be made safer.
          </p>
          <p>
            I enjoy combining programming with security concepts to build
            useful projects rather than learning only through theory. My
            current focus is strengthening my foundations in web development,
            networking, Linux, and cybersecurity.
          </p>
        </div>
        <div className="fact-card">
          <span>CURRENT OBJECTIVE</span>
          <h3>Build. Break. Learn. Secure.</h3>
          <p>Looking for opportunities to turn classroom knowledge into real-world experience.</p>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const skills = [
    ["JavaScript", 78],
    ["React", 72],
    ["Python", 75],
    ["Cybersecurity", 70],
    ["Networking", 68],
    ["Linux", 65]
  ];

  return (
    <section className="section container">
      <p className="file-label">FILE 002 — TOOLKIT</p>
      <h2>Skill Set</h2>
      <div className="skills-grid">
        {skills.map(([name, value]) => (
          <div className="skill" key={name}>
            <div className="skill-head"><span>{name}</span><span>{value}%</span></div>
            <div className="bar"><span style={{ width: `${value}%` }} /></div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-image">{project.image}<span>CASE</span></div>
      <div className="project-content">
        <div className="case-id">{project.id}</div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tags">
          {project.techStack.map(tag => <span key={tag}>{tag}</span>)}
        </div>
        <a href={project.link} target="_blank" rel="noreferrer">Inspect project ↗</a>
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section className="page container">
      <p className="file-label">FILE 003 — PROJECT LOCKER</p>
      <h2>Projects</h2>
      <p className="section-intro">A growing collection of academic and personal work. Replace the sample entries below with your real projects.</p>
      <div className="projects-grid">
        {projects.map(project => <ProjectCard key={project.id} project={project} />)}
      </div>
    </section>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e) => {
    e.preventDefault();
    console.log("Portfolio contact:", form);
    alert("Message captured! Connect this form to a backend/email service before production use.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <form className="contact-form" onSubmit={submit}>
      <label>Name<input required value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Your name" /></label>
      <label>Email<input required type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="you@example.com" /></label>
      <label>Message<textarea required rows="6" value={form.message} onChange={e => setForm({...form, message: e.target.value})} placeholder="Tell me what you want to build..." /></label>
      <button className="btn primary" type="submit">Submit Message →</button>
    </form>
  );
}

function Contact() {
  return (
    <section className="page container">
      <p className="file-label">FILE 004 — CONTACT</p>
      <h2>Let's Connect</h2>
      <div className="contact-grid">
        <div>
          <p className="lead">Have an internship, project, or collaboration in mind?</p>
          <p>Use the form or replace the links below with your real contact details.</p>
          <div className="contact-links">
            <a href="mailto:your.email@example.com">your.email@example.com</a>
            <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

function Home() {
  useEffect(() => {
    document.title = "Aftab Hussain — Cybersecurity Portfolio";
  }, []);
  return <><Hero /><Stats /><About /><Skills /></>;
}

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <footer className="footer">
        <div className="container footer-inner">
          <span>© 2026 Aftab Hussain</span>
          <span>Built with React · Cybersecurity Portfolio</span>
        </div>
      </footer>
    </>
  );
}

export default App;
