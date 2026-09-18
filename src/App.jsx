

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  ExternalLink,
  Layers3,
  Bot,
  ShoppingCart,
  Wrench,
  Blocks,
  Sparkles,
  Code2,
  ShoppingBag,
  ShieldCheck,
  Boxes,
  Network,
  Mail,
  Menu,
  X,
  GraduationCap,
  BriefcaseBusiness,
  MapPin,
  Database,
  BrainCircuit,
  Workflow,
} from "lucide-react";

import "./index.css";
import Skills from "./Skills";
import Contact from "./Contact"
import WhatsAppButton from "./WhatsAppButton"
import Footer from "./Footer";

const codeLines = [
  "const developer = 'Ali';",
  "buildFuture();",
  "AI.create();",
  "while (learning) {",
  "  improve();",
  "return innovation;",
];

const navLinks = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Journey", "#journey"],
  ["Services", "#services"],
  ["Contact", "#contact"],
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <a
        href="#home"
        className="logo"
        onClick={() => setMenuOpen(false)}
      >
        <span className="logo-bracket">&lt;</span>
        Ali<span className="logo-highlight">.dev</span>
        <span className="logo-bracket"> /&gt;</span>
      </a>

      <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
        <div className="nav-menu-pill">
          {navLinks.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="nav-cta"
          onClick={() => setMenuOpen(false)}
        >
          Let's Talk
          <ArrowUpRight size={18} />
        </a>
      </div>

      <button
        type="button"
        className="menu-toggle"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        {menuOpen ? <X /> : <Menu />}
      </button>
    </nav>
  );
}






function FloatingCode() {
  return (
    <div className="code-background" aria-hidden="true">
      {codeLines.map((line, index) => (
        <motion.div
          key={line}
          className={`code-line code-line-${index + 1}`}
          animate={{
            y: [0, -18, 0],
            opacity: [0.15, 0.5, 0.15],
          }}
          transition={{
            duration: 4 + index * 0.7,
            repeat: Infinity,
            delay: index * 0.4,
            ease: "easeInOut",
          }}
        >
          {line}
        </motion.div>
      ))}
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="hero-visual">
      <div className="visual-glow" />

      <motion.div
        className="orbit orbit-one"
        animate={{ rotate: 360 }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="orbit orbit-two"
        animate={{ rotate: -360 }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="visual-core"
        animate={{
          y: [0, -12, 0],
          rotate: [0, 4, -4, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="core-inner">
          <span className="core-symbol">&lt;/&gt;</span>
          <span className="core-label">
            BUILDING THE FUTURE
          </span>
        </div>
      </motion.div>

      <motion.div
        className="float-card card-ai"
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <span className="status-dot" />
        AI Automation
      </motion.div>

      <motion.div
        className="float-card card-code"
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Code2 size={18} className="card-code-icon" />
        Full-Stack Dev
      </motion.div>

      <motion.div
        className="float-card card-python"
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          delay: 0.5,
          ease: "easeInOut",
        }}
      >
        <span className="status-dot" />
        Intelligent Systems
      </motion.div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <FloatingCode />

      <div className="hero-grid">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -45 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          <div className="availability">
            <span className="status-dot" />
            AI · AUTOMATION · DEVELOPMENT
          </div>

          <p className="hero-intro">Hello, I'm</p>

          <h1>
            Ali Akbar
            <br />
            <span className="gradient-text">Shah.</span>
          </h1>

          <h2>
            AI Automation Engineer
            <br />
            <span>& Full-Stack Developer</span>
          </h2>

          <p className="hero-description">
            I build intelligent automation systems, scalable
            applications, and digital experiences that solve
            real-world problems.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="button-primary">
              Explore My Work
              <ArrowUpRight size={18} />
            </a>

            <a href="#contact" className="button-secondary">
              Let's Connect
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/aliakbar123634"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <Code2 size={19} />
            </a>

            <a
              href="https://www.linkedin.com/in/ali-akbar-shah-802661358/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <Network size={19} />
            </a>

            <a
              href="mailto:saliakbar790@gmail.com"
              aria-label="Email"
              title="Email"
            >
              <Mail size={19} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-art"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.1,
            delay: 0.2,
          }}
        >
          <HeroVisual />
        </motion.div>
      </div>

      <a href="#about" className="scroll-indicator">
        <span>SCROLL TO EXPLORE</span>
        <ArrowDown size={16} />
      </a>
    </section>
  );
}

// ABOUT SECTION

const techIcons = [
  {
    Icon: Code2,
    name: "Development",
    className: "tech-icon-one",
  },
  {
    Icon: BrainCircuit,
    name: "Artificial Intelligence",
    className: "tech-icon-two",
  },
  {
    Icon: Database,
    name: "Database",
    className: "tech-icon-three",
  },
  {
    Icon: Workflow,
    name: "Automation",
    className: "tech-icon-four",
  },
];

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        <motion.div
          className="about-heading"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-eyebrow">
            01 / ABOUT ME
          </span>

          <h2>
            The Developer
            <br />
            <span className="gradient-text">
              Behind the Code.
            </span>
          </h2>

          <p>
            A little about my journey, experience, and passion
            for building technology.
          </p>
        </motion.div>

        <div className="about-grid">

          {/* Profile image card */}

          <motion.div
            className="about-photo-column"
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <div className="about-photo-card">
              <div className="photo-card-glow" />

              <div className="photo-top-label">
                <span className="status-dot" />
                <span>DEVELOPER PROFILE</span>
              </div>

              <div className="about-photo-frame">
                <img
                  src="/images/ali-profile.jpg"
                  alt="Ali Akbar Shah"
                  className="about-photo"
                />
              </div>

              {/* Floating technology icons */}

              {techIcons.map(
                ({ Icon, name, className }, index) => (
                  <motion.div
                    key={name}
                    className={`floating-tech-icon ${className}`}
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 4 + index * 0.6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3,
                    }}
                    title={name}
                  >
                    <Icon size={23} />
                  </motion.div>
                )
              )}

              <div className="photo-card-bottom">
                <div>
                  <span className="photo-name">
                    Ali Akbar Shah
                  </span>

                  <span className="photo-role">
                    Backend Engineer
                  </span>
                </div>

                <span className="photo-card-arrow">
                  <ArrowUpRight size={20} />
                </span>
              </div>
            </div>

            <motion.div
              className="about-location"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <MapPin size={16} />
              Pakistan
            </motion.div>
          </motion.div>

          {/* About content */}

          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <span className="about-small-heading">
              WHO AM I?
            </span>

            <h3>
              Building solutions
              <br />
              <span className="gradient-text">
                beyond the code.
              </span>
            </h3>

            <p className="about-description">
              I'm Ali Akbar Shah, a Backend Engineer,
              AI Automation Engineer, and Full-Stack Developer
              with 3 years of professional experience at
              Enigmatix.
            </p>

            <p className="about-description">
              My work focuses on developing backend systems,
              building APIs, and creating software solutions
              that solve real-world problems. I'm also
              exploring AI and intelligent automation to
              build more capable and efficient applications.
            </p>

            <p className="about-description">
              Alongside my professional journey, I'm pursuing
              a BS in Information Technology and continuously
              expanding my skills in software engineering
              and AI.
            </p>

            {/* Experience and education */}

            <div className="about-info-cards">
              <div className="about-info-card">
                <div className="info-icon">
                  <BriefcaseBusiness size={20} />
                </div>

                <div>
                  <span className="info-label">
                    PROFESSIONAL EXPERIENCE
                  </span>

                  <h4>3 Years</h4>

                  <p>
                    Backend Engineer · Enigmatix
                  </p>
                </div>
              </div>

              <div className="about-info-card">
                <div className="info-icon">
                  <GraduationCap size={21} />
                </div>

                <div>
                  <span className="info-label">
                    EDUCATION
                  </span>

                  <h4>BS Information Technology</h4>

                  <p>Currently pursuing my degree</p>
                </div>
              </div>
            </div>

            {/* Specialties */}

            <div className="about-specialties">
              <span>MY FOCUS</span>

              <div className="specialty-tags">
                <span>Backend Engineering</span>
                <span>AI Automation</span>
                <span>Full-Stack Development</span>
                <span>API Development</span>
              </div>
            </div>

            <a
              href="#projects"
              className="button-primary about-button"
            >
              Explore My Projects
              <ArrowUpRight size={18} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}



const projects = [
  {
    number: "01",
    title: "QuickEcommerce",
    subtitle: "AI-Powered Quick Commerce Platform",
    description:
      "A full-stack quick-commerce platform combining a React storefront, Django REST API, and a separate AI shopping assistant powered by FastAPI and LangGraph.",
    category: "FULL-STACK · AI",
    icon: ShoppingBag,
    tech: [
      "React",
      "Django REST",
      "FastAPI",
      "LangGraph",
      "PostgreSQL",
      "Stripe",
      "Supabase",
    ],
    highlights: [
      "AI-powered conversational shopping assistant",
      "JWT authentication and role-based access",
      "Cart, orders, and Stripe Checkout integration",
      "Map-based location and delivery functionality",
    ],
    github:
      "https://github.com/aliakbar123634/AI-Powered-Quick-Ecommerce-",
    live:
      "https://ai-powered-quick-ecommerce-ql4d.vercel.app/",
    api:
      "https://ai-powered-quick-ecommerce.onrender.com",
  },
  {
    number: "02",
    title: "Emergency Service System",
    subtitle: "Service Marketplace Backend API",
    description:
      "A Django REST Framework backend where customers request services, providers accept jobs, and payments are processed through a wallet-based transaction system.",
    category: "BACKEND · API",
    icon: ShieldCheck,
    tech: [
      "Python",
      "Django",
      "DRF",
      "PostgreSQL",
      "SimpleJWT",
      "Railway",
    ],
    highlights: [
      "JWT authentication and email verification",
      "Role-based customer and provider permissions",
      "Atomic wallet transactions",
      "Automatic 15% platform fee calculation",
    ],
    github:
      "https://github.com/aliakbar123634/Emergency-Service-Providing-System",
    live:
      "https://emergency-service-providing-system-production.up.railway.app/",
    api:
      "https://emergency-service-providing-system-production.up.railway.app/",
  },
  {
    number: "03",
    title: "Inventory & Billing System",
    subtitle: "SME Inventory Management Backend",
    description:
      "A business management API for inventory, customers, suppliers, purchase and sales invoices, partial payments, outstanding dues, and financial reporting.",
    category: "BACKEND · BUSINESS LOGIC",
    icon: Boxes,
    tech: [
      "Python",
      "Django REST",
      "PostgreSQL",
      "SimpleJWT",
      "DRF Spectacular",
    ],
    highlights: [
      "Automatic stock updates for purchases and sales",
      "Nested invoice creation with transactions",
      "Partial payments and due tracking",
      "Sales, profit, and ledger reports",
    ],
    github:
      "https://github.com/aliakbar123634/Inventory-Billing-System-SME-",
    live: null,
    api: null,
  },
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">

        <motion.div
          className="projects-heading"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-eyebrow">
            03 / SELECTED WORK
          </span>

          <h2>
            Projects That
            <br />
            <span className="gradient-text">
              Solve Real Problems.
            </span>
          </h2>

          <p>
            A collection of backend systems, full-stack
            applications, and AI-powered solutions I've
            worked on.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => {
            const ProjectIcon = project.icon;

            return (
              <motion.article
                className="project-card"
                key={project.number}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.25 },
                }}
              >
                <div className="project-card-top">
                  <span className="project-number">
                    PROJECT / {project.number}
                  </span>

                  <span className="project-category">
                    {project.category}
                  </span>
                </div>

                <div className="project-visual">
                  <div className="project-visual-glow" />

                  <div className="project-icon-box">
                    <ProjectIcon size={38} />
                  </div>

                  <span className="project-visual-code">
                    {"</>"}
                  </span>

                  <span className="project-visual-label">
                    {project.number} — SYSTEM
                  </span>
                </div>

                <div className="project-content">
                  <h3>{project.title}</h3>

                  <h4>{project.subtitle}</h4>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="project-highlights">
                    {project.highlights.map((item) => (
                      <div
                        className="project-highlight"
                        key={item}
                      >
                        <span className="highlight-dot" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="project-tech">
                    {project.tech.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  <div className="project-actions">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link project-link-primary"
                    >
                      <Code2 size={17} />
                      Source Code
                      <ArrowUpRight size={16} />
                    </a>

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          className="projects-footer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="status-dot" />
          MORE PROJECTS & IDEAS IN PROGRESS
        </motion.div>
      </div>
    </section>
  );
}





// JOURNEY SECTION

const journeyItems = [
  {
    number: "01",
    period: "THE BEGINNING",
    title: "From Medical Dreams to IT",
    subtitle: "An unexpected change of direction",
    icon: GraduationCap,
    description:
      "My first goal was to pursue medicine. When I couldn't secure admission to MBBS, I decided to choose IT. At that time, I had little knowledge of computers or programming—but I was ready to explore something new.",
    tags: ["A New Beginning", "Information Technology"],
  },
  {
    number: "02",
    period: "FOUNDATION",
    title: "Discovering the World of Code",
    subtitle: "C++ · OOP · Data Structures",
    icon: Code2,
    description:
      "I started with C++ and gradually learned programming fundamentals, object-oriented programming, and data structures. Understanding logic and solving problems made coding increasingly interesting to me.",
    tags: ["C++", "OOP", "Data Structures", "Linux"],
  },
  {
    number: "03",
    period: "EXPLORATION",
    title: "Trying Frontend Development",
    subtitle: "HTML · CSS · JavaScript · React",
    icon: Code2,
    description:
      "I moved into web development and explored HTML, CSS, and JavaScript. When I started learning React, I realized that frontend development wasn't the direction I enjoyed most. That experience helped me understand my strengths and interests better.",
    tags: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    number: "04",
    period: "FINDING MY PATH",
    title: "Falling in Love with Backend",
    subtitle: "Python · Django · REST APIs",
    icon: Database,
    description:
      "I shifted my focus to backend development and started learning Python. I enjoyed its logic and problem-solving approach, then moved into Django, REST APIs, SQL, databases, and ORM concepts.",
    tags: ["Python", "Django", "DRF", "SQL", "ORM"],
  },
  {
    number: "05",
    period: "DEEPER ENGINEERING",
    title: "Understanding How Systems Work",
    subtitle: "Redis · Celery · WebSockets · System Design",
    icon: Workflow,
    description:
      "I kept expanding my backend knowledge by exploring Redis, Celery, WebSockets, and system design. Instead of focusing only on writing code, I became more interested in how applications process tasks, communicate, and work together.",
    tags: ["Redis", "Celery", "WebSockets", "System Design"],
  },
  {
    number: "06",
    period: "BUILDING IN PUBLIC",
    title: "Turning Knowledge into Projects",
    subtitle: "Inventory · Emergency Services · E-commerce",
    icon: Boxes,
    description:
      "I started building multiple projects to apply what I was learning. My Inventory Management System helped me explore business logic and APIs. The Emergency Service System strengthened my understanding of application logic and database operations. Later, I worked on a larger AI-powered e-commerce project.",
    tags: [
      "Inventory Management",
      "Emergency Service System",
      "AI E-commerce",
    ],
  },
  {
    number: "07",
    period: "PROFESSIONAL EXPERIENCE",
    title: "Starting My Professional Journey",
    subtitle: "Internship at Enigmatix",
    icon: BriefcaseBusiness,
    description:
      "After building my backend foundation and working on projects, I got an internship opportunity at Enigmatix. My professional experience there has become an important part of my learning journey, and I continue to grow through practical work.",
    tags: ["Internship", "Backend Development", "Learning by Doing"],
  },
  {
    number: "08",
    period: "WHAT'S NEXT",
    title: "Moving Towards AI & Automation",
    subtitle: "Building intelligent solutions",
    icon: BrainCircuit,
    description:
      "I'm now focusing more on AI, intelligent automation, and larger engineering projects. I'm continuing to build, learn, and explore opportunities where I can contribute as a developer, including remote roles. In the long term, I also hope to pursue advanced studies and explore research, with the ambition of working towards an MPhil and PhD.",
    tags: ["AI", "Automation", "Advanced Studies", "Research"],
  },
];

function Journey() {
  return (
    <section className="journey-section" id="journey">
      <div className="journey-container">
        <motion.div
          className="journey-heading"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-eyebrow">
            04 / MY JOURNEY
          </span>

          <h2>
            Not a Straight Line.
            <br />
            <span className="gradient-text">
              A Journey of Growth.
            </span>
          </h2>

          <p>
            From dreaming of medicine to discovering my passion
            for backend engineering, every step has taught me
            something valuable.
          </p>
        </motion.div>

        <div className="journey-timeline">
          {journeyItems.map((item, index) => {
            const JourneyIcon = item.icon;

            return (
              <motion.article
                className="journey-item"
                key={item.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
              >
                <div className="journey-marker">
                  <span>{item.number}</span>
                </div>

                <div className="journey-card">
                  <div className="journey-card-top">
                    <span className="journey-period">
                      {item.period}
                    </span>

                    <div className="journey-icon">
                      <JourneyIcon size={21} />
                    </div>
                  </div>

                  <h3>{item.title}</h3>
                  <h4>{item.subtitle}</h4>

                  <p>{item.description}</p>

                  <div className="journey-tags">
                    {item.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          className="journey-footer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="status-dot" />
          <p>
            Still learning. Still building. Still moving forward.
          </p>
        </motion.div>
      </div>
    </section>
  );
}


// const services = [
//   {
//     number: "01",
//     title: "Full-Stack Development",
//     description:
//       "Modern web applications built from frontend to backend, with reliable APIs, secure authentication, and scalable architecture.",
//     icon: Code2,
//     tags: ["React", "Python", "Django", "DRF"],
//     featured: true,
//   },
//   {
//     number: "02",
//     title: "Backend Development",
//     description:
//       "Robust backend systems with clean business logic, authentication, permissions, and maintainable application structure.",
//     icon: ShieldCheck,
//     tags: ["Python", "Django", "DRF"],
//   },
//   {
//     number: "03",
//     title: "REST API Development",
//     description:
//       "Well-structured REST APIs and third-party integrations that help your applications and services communicate smoothly.",
//     icon: Network,
//     tags: ["REST APIs", "JWT", "Integrations"],
//   },
//   {
//     number: "04",
//     title: "AI Integration & Applications",
//     description:
//       "Add practical AI capabilities to your products, from intelligent features to AI-powered application workflows.",
//     icon: BrainCircuit,
//     tags: ["AI Integration", "LLMs", "AI Apps"],
//   },
//   {
//     number: "05",
//     title: "AI Agents & Automation",
//     description:
//       "Build AI agents and automate repetitive business processes using APIs, workflows, and connected tools.",
//     icon: Workflow,
//     tags: ["AI Agents", "n8n", "APIs"],
//   },
//   {
//     number: "06",
//     title: "E-commerce Development",
//     description:
//       "E-commerce websites and backend systems with product management, carts, orders, payments, and delivery workflows.",
//     icon: ShoppingBag,
//     tags: ["E-commerce", "Payments", "Orders"],
//   },
//   {
//     number: "07",
//     title: "Database Design & Management",
//     description:
//       "Design structured databases and efficient data models that support reliable queries and application growth.",
//     icon: Database,
//     tags: ["SQL", "PostgreSQL", "ORM"],
//   },
//   {
//     number: "08",
//     title: "System Design & Architecture",
//     description:
//       "Plan backend architecture, data flow, and system components to support performance, maintainability, and scale.",
//     icon: Boxes,
//     tags: ["System Design", "Architecture"],
//   },
//   {
//     number: "09",
//     title: "Bug Fixing & Backend Improvements",
//     description:
//       "Debug existing applications, improve backend logic, resolve API issues, and make code easier to maintain.",
//     icon: BriefcaseBusiness,
//     tags: ["Debugging", "Optimization", "Refactoring"],
//   },
// ];

// function Services() {
//   return (
//     <section className="services-section" id="services">
//       <div className="services-container">
//         <motion.div
//           className="services-heading"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.2 }}
//           transition={{ duration: 0.7 }}
//         >
//           <span className="section-eyebrow">
//             05 / WHAT I DO
//           </span>

//           <h2>
//             Services Built
//             <br />
//             <span className="gradient-text">
//               Around Your Goals.
//             </span>
//           </h2>

//           <p>
//             From full-stack web applications to backend
//             engineering and AI-powered automation, I help
//             turn ideas into practical digital solutions.
//           </p>
//         </motion.div>

//         <div className="services-grid">
//           {services.map((service, index) => {
//             const ServiceIcon = service.icon;

//             return (
//               <motion.article
//                 className={`service-card ${
//                   service.featured ? "service-card-featured" : ""
//                 }`}
//                 key={service.number}
//                 initial={{ opacity: 0, y: 28 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.12 }}
//                 transition={{
//                   duration: 0.55,
//                   delay: (index % 3) * 0.08,
//                   ease: "easeOut",
//                 }}
//                 whileHover={{
//                   y: -6,
//                   transition: { duration: 0.22 },
//                 }}
//               >
//                 <div className="service-card-top">
//                   <span className="service-number">
//                     SERVICE / {service.number}
//                   </span>

//                   <span className="service-icon">
//                     <ServiceIcon size={22} strokeWidth={1.8} />
//                   </span>
//                 </div>

//                 <h3>{service.title}</h3>

//                 <p>{service.description}</p>

//                 <div className="service-tags">
//                   {service.tags.map((tag) => (
//                     <span key={tag}>{tag}</span>
//                   ))}
//                 </div>

//                 <div className="service-card-bottom">
//                   <span>LET'S BUILD</span>
//                   <ArrowUpRight size={18} />
//                 </div>
//               </motion.article>
//             );
//           })}
//         </div>

//         <motion.div
//           className="services-cta"
//           initial={{ opacity: 0, y: 18 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <div className="services-cta-text">
//             <span className="status-dot" />
//             <span>
//               HAVE A PROJECT IN MIND?
//             </span>
//           </div>

//           <a href="#contact" className="services-cta-button">
//             Let's Talk
//             <ArrowUpRight size={17} />
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   );
// }



const services = [
  {
    number: "01",
    title: "Backend Development",
    description:
      "Scalable and maintainable backend systems built with Python, Django, and Django REST Framework.",
    tags: ["Python", "Django", "DRF"],
    icon: Code2,
    className: "service-purple",
  },
  {
    number: "02",
    title: "REST API Development",
    description:
      "Secure, well-structured APIs and seamless integrations that connect your apps and services.",
    tags: ["REST APIs", "JWT", "Integrations"],
    icon: Network,
    className: "service-blue",
  },
  {
    number: "03",
    title: "Full-Stack Applications",
    description:
      "End-to-end web applications with responsive interfaces, reliable backend logic, and database integration.",
    tags: ["React", "Django", "Full-Stack"],
    icon: Layers3,
    className: "service-cyan",
  },
  {
    number: "04",
    title: "AI Integration",
    description:
      "Bring AI capabilities into your web applications to create smarter and more useful user experiences.",
    tags: ["LLMs", "AI APIs", "Web Apps"],
    icon: BrainCircuit,
    className: "service-pink",
  },
  {
    number: "05",
    title: "AI Agents & Applications",
    description:
      "AI-powered applications and agent workflows designed to assist users and handle complex tasks.",
    tags: ["AI Agents", "LangGraph", "Python"],
    icon: Bot,
    className: "service-orange",
  },
  {
    number: "06",
    title: "Workflow Automation",
    description:
      "Automate repetitive business processes by connecting APIs, apps, and intelligent workflows.",
    tags: ["n8n", "APIs", "Automation"],
    icon: Workflow,
    className: "service-green",
  },
  {
    number: "07",
    title: "E-commerce Development",
    description:
      "Custom e-commerce websites and backend systems for products, carts, orders, payments, and delivery.",
    tags: ["E-commerce", "Payments", "Django"],
    icon: ShoppingCart,
    className: "service-yellow",
  },
  {
    number: "08",
    title: "Database Design",
    description:
      "Structured database design, optimized queries, and reliable data management for growing applications.",
    tags: ["SQL", "PostgreSQL", "ORM"],
    icon: Database,
    className: "service-indigo",
  },
  {
    number: "09",
    title: "Bug Fixing & Improvements",
    description:
      "Debug existing applications, improve backend logic, and make codebases more stable and maintainable.",
    tags: ["Debugging", "Refactoring", "APIs"],
    icon: Wrench,
    className: "service-red",
  },
  {
    number: "10",
    title: "System Design & Architecture",
    description:
      "Plan application structure, data flow, and backend architecture with scalability and maintainability in mind.",
    tags: ["System Design", "Architecture", "Backend"],
    icon: Blocks,
    className: "service-teal",
  },
];

function Services() {
  return (
    <section className="services-section" id="services">
      <div className="services-bg-orb services-orb-one" />
      <div className="services-bg-orb services-orb-two" />
      <div className="services-grid-pattern" />

      <div className="services-container">
        <motion.div
          className="services-heading"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-eyebrow">
            05 / WHAT I DO
          </span>

          <h2>
            Turning Ideas
            <br />
            <span className="gradient-text">
              Into Digital Solutions.
            </span>
          </h2>

          <p>
            From backend engineering to AI-powered applications,
            I help turn complex ideas into reliable digital products.
          </p>
        </motion.div>

        <div className="services-intro-strip">
          <div className="services-intro-icon">
            <Sparkles size={19} />
          </div>

          <div>
            <span className="services-intro-label">
              MY CORE APPROACH
            </span>
            <p>
              Build smart. Automate wisely. Scale confidently.
            </p>
          </div>

          <span className="services-intro-badge">
            <span className="status-dot" />
            OPEN TO PROJECTS
          </span>
        </div>

        <div className="services-grid">
          {services.map((service, index) => {
            const ServiceIcon = service.icon;

            return (
              <motion.article
                className={`service-card ${service.className}`}
                key={service.number}
                initial={{ opacity: 0, y: 45, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.6,
                  delay: (index % 3) * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -10,
                  rotateX: 2,
                  rotateY: -2,
                  transition: { duration: 0.25 },
                }}
              >
                <div className="service-card-glow" />

                <div className="service-card-top">
                  <span className="service-number">
                    SERVICE / {service.number}
                  </span>

                  <span className="service-icon">
                    <ServiceIcon size={23} strokeWidth={1.8} />
                  </span>
                </div>

                <div className="service-card-content">
                  <h3>{service.title}</h3>

                  <p>{service.description}</p>
                </div>

                <div className="service-tags">
                  {service.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="service-card-bottom">
                  <span>LET'S BUILD IT</span>

                  <span className="service-arrow">
                    <ArrowUpRight size={19} />
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          className="services-bottom-cta"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="services-cta-eyebrow">
              HAVE A PROJECT IN MIND?
            </span>

            <h3>
              Let's make something
              <span className="gradient-text"> meaningful.</span>
            </h3>

            <p>
              Share your idea, and let's explore how we can build it.
            </p>
          </div>

          <a href="#contact" className="services-cta-button">
            Let's Talk
            <ArrowUpRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <About />

        <Skills />

        <Projects />
        <Journey />
        <Services />

        <Contact />
        <WhatsAppButton />
        <Footer />
      </main>
    </>
  );
}















