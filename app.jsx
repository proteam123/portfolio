const { useState, useEffect } = React;

// Navbar Component
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav style={{ background: scrolled ? 'rgba(15, 23, 42, 0.9)' : 'rgba(15, 23, 42, 0.3)' }}>
      <div className="container nav-content">
        <a href="#" className="logo">
          <span>&lt;</span>Misha<span>/&gt;</span>
        </a>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

// Hero Component
const Hero = () => {
  const roles = ["Full Stack Dev", "Tutor", "Problem Solver"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const currentRole = roles[currentRoleIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setCurrentText(
          currentRole.substring(0, currentText.length + (isDeleting ? -1 : 1))
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentRoleIndex, roles]);

  return (
    <section id="home" className="hero container">
      <div className="hero-grid">
        <div className="hero-text">
          <span className="greeting">👋 Hello, World! I am</span>
          <h1>Misha</h1>
          <div className="roles">
            I build&nbsp;<span className="role-text">{currentText}</span>
          </div>
          <p>
            Passionate developer & educator crafting seamless digital experiences — from web apps to live tutoring platforms.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-ghost">Get In Touch</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="code-card">
            <div className="code-header">
              <div className="code-dot dot-red"></div>
              <div className="code-dot dot-yellow"></div>
              <div className="code-dot dot-green"></div>
            </div>
            <pre className="code-content">
              <code>
<span className="code-kw">const</span> <span className="code-var">developer</span> = {'{'}
<br/>  <span className="code-var">name</span>: <span className="code-str">"Misha"</span>,
<br/>  <span className="code-var">role</span>: <span className="code-str">"Full Stack Dev"</span>,
<br/>  <span className="code-var">passion</span>: [
<br/>    <span className="code-str">"Clean Code"</span>,
<br/>    <span className="code-str">"Education"</span>,
<br/>    <span className="code-str">"Innovation"</span>
<br/>  ],
<br/>  <span className="code-var">availableForHire</span>: <span className="code-kw">true</span>
<br/>{'}'};
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

// Skills Component
const Skills = () => {
  const skills = [
    { name: "React", icon: "⚛️" },
    { name: "JavaScript", icon: "⚡" },
    { name: "HTML / CSS", icon: "🎨" },
    { name: "Python", icon: "🐍" },
    { name: "Flask", icon: "🌶️" },
    { name: "SQL / SQLite", icon: "🗄️" },
    { name: "Git", icon: "🐙" },
    { name: "APIs & Ngrok", icon: "🔗" }
  ];

  return (
    <section id="skills" className="section container">
      <div className="section-header">
        <span className="section-tag">What I Know</span>
        <h2 className="section-title">Skills & Technologies</h2>
      </div>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <span className="skill-icon">{skill.icon}</span>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

// Projects Component
const Projects = () => {
  const projects = [
    {
      title: "Live Tutor Call Center",
      desc: "A real-time tutoring management platform connecting students, parents, and tutors. Built with Python, Flask, SQLite, and exposed via ngrok.",
      tech: ["Python", "Flask", "SQLite", "JS"],
      icon: "📞"
    },
    {
      title: "Student Analytics Dashboard",
      desc: "A multi-role dashboard with distinct views for tutors, students, and parents to track attendance and performance.",
      tech: ["HTML/CSS", "Flask", "Jinja"],
      icon: "📊"
    },
    {
      title: "RESTful Student API",
      desc: "A fully featured backend API for student management with CRUD operations and JSON responses.",
      tech: ["Python", "REST", "JSON"],
      icon: "🔌"
    },
    {
      title: "React Portfolio",
      desc: "This very website! A handcrafted React SPA with glassmorphism, dynamic typing effects, and custom animations.",
      tech: ["React", "CSS3", "JSX"],
      icon: "✨"
    }
  ];

  return (
    <section id="projects" className="section container">
      <div className="section-header">
        <span className="section-tag">What I've Built</span>
        <h2 className="section-title">Featured Projects</h2>
      </div>
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <div key={idx} className="project-card">
            <div className="project-content">
              <div className="project-top">
                <span className="project-icon">{project.icon}</span>
                <div className="project-links">
                  <a href="#"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg></a>
                </div>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
              <div className="project-tech">
                {project.tech.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Contact Component
const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for reaching out! (This is a demo form)");
  };

  return (
    <section id="contact" className="section container">
      <div className="section-header">
        <span className="section-tag">Let's Talk</span>
        <h2 className="section-title">Get In Touch</h2>
      </div>
      <div className="contact-grid">
        <div className="contact-info">
          <p>
            Whether you have a project in mind, want to collaborate, or just want to say hello — my inbox is always open!
          </p>
          
          <div className="contact-item">
            <div className="contact-item-icon">📧</div>
            <div className="contact-item-details">
              <h4>Email</h4>
              <a href="mailto:misha@example.com">misha@example.com</a>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="contact-item-icon">📍</div>
            <div className="contact-item-details">
              <h4>Location</h4>
              <span>India 🇮🇳</span>
            </div>
          </div>
        </div>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="your@email.com" required />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea rows="4" placeholder="How can I help you?" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary btn-full">Send Message 🚀</button>
        </form>
      </div>
    </section>
  );
};

// Main App Component
const App = () => {
  return (
    <React.Fragment>
      <div className="bg-effects">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
      </div>
      
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      
      <footer>
        <div className="container">
          <p>Built with React & ❤️ by Misha © {new Date().getFullYear()}</p>
        </div>
      </footer>
    </React.Fragment>
  );
};

// Render the App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
