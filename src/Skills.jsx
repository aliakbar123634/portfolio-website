
import { motion } from "framer-motion";
import {
  Code2,
  BrainCircuit,
  Database,
  Server,
  Workflow,
  Cloud,
  Globe,
  Cpu,
  Layers,
  ShieldCheck,
  GitBranch,
  Boxes,
} from "lucide-react";

import "./skills.css";

const skillCategories = [
  {
    number: "01",
    title: "Backend & APIs",
    description: "Building reliable backend systems and APIs.",
    icon: Server,
    skills: [
      "Python",
      "Django",
      "Django REST Framework",
      "FastAPI",
      "JWT",
      "REST APIs",
      "WebSockets",
    ],
  },
  {
    number: "02",
    title: "AI & Agentic AI",
    description: "Creating intelligent AI-powered solutions.",
    icon: BrainCircuit,
    skills: [
      "Agentic AI",
      "LangGraph",
      "AI Agents",
      "Embeddings",
      "Vector Databases",
      "LLM Workflows",
    ],
  },
  {
    number: "03",
    title: "Frontend Development",
    description: "Creating responsive and interactive interfaces.",
    icon: Globe,
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
    ],
  },
  {
    number: "04",
    title: "Databases & Caching",
    description: "Managing data and improving application performance.",
    icon: Database,
    skills: [
      "SQL",
      "PostgreSQL",
      "Redis",
      "Database Design",
      "ORM",
    ],
  },
  {
    number: "05",
    title: "DevOps & Deployment",
    description: "Deploying and maintaining applications.",
    icon: Cloud,
    skills: [
      "Render",
      "Deployment",
      "Git",
      "GitHub",
      "Celery",
    ],
  },
  {
    number: "06",
    title: "Tools & Programming",
    description: "Core programming and software engineering tools.",
    icon: Code2,
    skills: [
      "C++",
      "Python",
      "JavaScript",
      "OOP",
      "Git",
      "GitHub",
    ],
  },
];

const orbitItems = [
  {
    name: "Python",
    icon: Code2,
    className: "orbit-item-one",
  },
  {
    name: "AI",
    icon: BrainCircuit,
    className: "orbit-item-two",
  },
  {
    name: "Database",
    icon: Database,
    className: "orbit-item-three",
  },
  {
    name: "Backend",
    icon: Server,
    className: "orbit-item-four",
  },
  {
    name: "Automation",
    icon: Workflow,
    className: "orbit-item-five",
  },
  {
    name: "Cloud",
    icon: Cloud,
    className: "orbit-item-six",
  },
  {
    name: "Architecture",
    icon: Boxes,
    className: "orbit-item-seven",
  },
  {
    name: "Security",
    icon: ShieldCheck,
    className: "orbit-item-eight",
  },
];






function OrbitVisual() {
  return (
    <div className="skills-universe">
      <div className="universe-glow" />

      {/* Decorative orbital rings */}

      <motion.div
        className="universe-orbit universe-orbit-one"
        animate={{ rotate: 360 }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="universe-orbit universe-orbit-two"
        animate={{ rotate: -360 }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="universe-orbit universe-orbit-three"
        animate={{ rotate: 360 }}
        transition={{
          duration: 55,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Central AI core */}

      <motion.div
        className="universe-core"
        animate={{
          y: [0, -10, 0],
          scale: [1, 1.04, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="core-glass">
          <BrainCircuit size={48} strokeWidth={1.3} />

          <span className="core-title">
            AI CORE
          </span>

          <span className="core-subtitle">
            SYSTEM ACTIVE
          </span>
        </div>
      </motion.div>

      {/* Floating technology icons */}

      {orbitItems.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.name}
            className={`universe-icon ${item.className}`}
            animate={{
              y: [0, -12, 0],
              rotate: [0, 6, -6, 0],
            }}
            transition={{
              duration: 4 + index * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.25,
            }}
            title={item.name}
          >
            <Icon size={23} strokeWidth={1.7} />
            <span>{item.name}</span>
          </motion.div>
        );
      })}

      <div className="universe-caption">
        <span className="status-dot" />
        CONNECTING TECHNOLOGIES
      </div>
    </div>
  );
}

function SkillCard({ category, index }) {
  const Icon = category.icon;

  return (
    <motion.article
      className="skill-card"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
      }}
    >
      <div className="skill-card-top">
        <div className="skill-card-icon">
          <Icon size={23} strokeWidth={1.7} />
        </div>

        <span className="skill-number">
          {category.number}
        </span>
      </div>

      <h3>{category.title}</h3>

      <p className="skill-description">
        {category.description}
      </p>

      <div className="skill-tags">
        {category.skills.map((skill) => (
          <span className="skill-tag" key={skill}>
            {skill}
          </span>
        ))}
      </div>

      <div className="skill-card-line" />
    </motion.article>
  );
}

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">

        {/* Section heading */}

        <motion.div
          className="skills-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-eyebrow">
            02 / MY TECH STACK
          </span>

          <h2>
            My Technical
            <br />
            <span className="gradient-text">
              Universe.
            </span>
          </h2>

          <p>
            A collection of technologies I use to build
            intelligent systems, scalable applications,
            and modern digital experiences.
          </p>
        </motion.div>

        {/* Animated tech universe */}

        <motion.div
          className="skills-visual-wrapper"
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9 }}
        >
          <OrbitVisual />
        </motion.div>

        {/* Skills categories */}

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={category.number}
              category={category}
              index={index}
            />
          ))}
        </div>

        {/* Bottom note */}

        <motion.div
          className="skills-footer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Cpu size={20} />

          <p>
            Always learning. Always building.
            <span> Always improving.</span>
          </p>

          <GitBranch size={20} />
        </motion.div>

      </div>
    </section>
  );
}













