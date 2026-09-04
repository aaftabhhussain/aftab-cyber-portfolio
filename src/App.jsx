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

function Reveal({ children, className = "" }) {
  useEffect(() => {
    const nodes = document.querySelectorAll(".reveal:not(.is-visible)");
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12 }
    );
    nodes.forEach(node => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return <div className={`reveal ${className}`}>{children}</div>;
}

function TypingText() {
  const words = [
    "CYBERSECURITY STUDENT",
    "SECURITY ENTHUSIAST",
    "WEB BUILDER",
    "DIGITAL INVESTIGATOR"
  ];
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex];
    const delay = deleting ? 45 : 90;
    const pause = !deleting && text === word ? 1400 : 0;

    const timer = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setWordIndex(index => (index + 1) % words.length);
      } else {
        setText(current => deleting
          ? word.slice(0, current.length - 1)
          : word.slice(0, current.length + 1)
        );
      }
    }, pause || delay);

    return () => clearTimeout(timer);
  }, [text, deleting, wordIndex]);

  return (
    <div className="typing-line" aria-label={words[wordIndex]}>
      <span className="typing-prefix">// </span>{text}<span className="typing-cursor">▋</span>
    </div>
  );
}

function LiveClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return <span>{time.toLocaleTimeString([], { hour12: false })} IST</span>;
}

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
        <div className="live-status"><span className="status-dot" /> SYSTEM ONLINE <LiveClock /></div>
        <p className="eyebrow">STATUS: OPEN TO OPPORTUNITIES</p>
        <h1>Aftab<br /><span>Hussain</span></h1>
        <TypingText />
        <p className="hero-sub">
          BCA Cybersecurity student building practical skills in security,
          web development, networking, and digital investigation.
        </p>
        <div className="hero-actions">
          <Link className="btn primary" to="/projects">View Projects →</Link>
          <Link className="btn ghost" to="/contact">Open Contact</Link>
        </div>
      </div>

      <div className="terminal-wrap">
        <div className="terminal-glow" />
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
          <div className="terminal-scan" />
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <Reveal>
      <section className="stats container">
        <div><strong>01</strong><span>Cybersecurity Focus</span></div>
        <div><strong>03+</strong><span>Portfolio Projects</span></div>
        <div><strong>∞</strong><span>Curiosity Level</span></div>
      </section>
    </Reveal>
  );
}

function About() {
  return (
    <section className="page container">
      <Reveal>
        <p className="file-label">FILE 001 — PROFILE</p>
        <h2>About Me</h2>
      </Reveal>
      <div className="about-grid">
        <Reveal>
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
        </Reveal>
        <Reveal>
          <div className="fact-card">
            <span>CURRENT OBJECTIVE</span>
            <h3>Build. Break. Learn. Secure.</h3>
            <p>Looking for opportunities to turn classroom knowledge into real-world experience.</p>
          </div>
        </Reveal>
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
      <Reveal>
        <p className="file-label">FILE 002 — TOOLKIT</p>
        <h2>Skill Set</h2>
      </Reveal>
      <div className="skills-grid">
        {skills.map(([name, value], index) => (
          <Reveal key={name} className={`skill reveal-delay-${index % 3}`}>
            <div className="skill-head"><span>{name}</span><span>{value}%</span></div>
            <div className="bar"><span style={{ width: `${value}%` }} /></div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  return (
    <Reveal className={`project-card-wrap reveal-delay-${index}`}>
      <article className="project-card">
        <div className="project-image"><span className="image-grid" />{project.image}<span className="case-badge">CASE</span></div>
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
    </Reveal>
  );
}

function Projects() {
  return (
    <section className="page container">
      <Reveal>
        <p className="file-label">FILE 003 — PROJECT LOCKER</p>
        <h2>Projects</h2>
        <p className="section-intro">A growing collection of academic and personal work. Replace the sample entries below with your real projects.</p>
      </Reveal>
      <div className="projects-grid">
        {projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}
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
      <Reveal>
        <p className="file-label">FILE 004 — CONTACT</p>
        <h2>Let's Connect</h2>
      </Reveal>
      <div className="contact-grid">
        <Reveal>
          <div>
            <p className="lead">Have an internship, project, or collaboration in mind?</p>
            <p>Use the form or replace the links below with your real contact details.</p>
            <div className="contact-links">
              <a href="mailto:your.email@example.com">your.email@example.com</a>
              <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <ContactForm />
        </Reveal>
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
    <div className="app-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="grid-overlay" />
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
    </div>
  );
}

export default App;
