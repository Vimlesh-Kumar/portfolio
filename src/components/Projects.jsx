import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  CloudSun,
  Bell,
  Music,
  Wallet,
  Code2,
  Gamepad2,
  Wrench,
  UtensilsCrossed,
  ChevronDown,
  ExternalLink,
  GraduationCap,
  KeyRound,
  X,
  Layers,
  Database
} from "lucide-react";
import TechIcon, { getBrandColor } from "./TechIcon";

// Subcomponent for interactive technology tags inside project cards
const ProjectTechTag = ({ name }) => {
  const [hovered, setHovered] = useState(false);
  const brandColor = getBrandColor(name);
  return (
    <span
      className="skill-tag inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium cursor-default transition-all duration-300"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: hovered ? `1px solid ${brandColor}` : "1px solid var(--border-subtle)",
        background: hovered ? `${brandColor}18` : "var(--tag-bg)",
        color: hovered ? "var(--text-primary)" : "var(--tag-text)",
        boxShadow: hovered ? `0 4px 12px ${brandColor}20` : "none",
        transform: hovered ? "translateY(-1.5px)" : "none"
      }}
    >
      <TechIcon name={name} size={11} />
      {name}
    </span>
  );
};

const projects = [
  {
    title: "Squel.js",
    description:
      "Active maintainer of the flexible SQL query builder library for JavaScript. Modernized and updated features for cleaner, object-oriented query generation in Node.js and browsers.",
    stack: ["JavaScript", "SQL", "Open Source", "npm Library"],
    href: "https://github.com/hiddentao/squel",
    image: "/projects/squel.png",
    icon: Database,
  },
  {
    title: "Online Pathshala",
    description:
      "A full-stack online learning platform with course catalog, video streaming, search & filtering, and paginated views. Built with Vue 3, Vuetify, Node.js, and MySQL.",
    stack: ["Vue 3", "Vuetify", "Node.js", "MySQL"],
    href: "https://github.com/Vimlesh-Kumar/online-pathshala",
    live: "https://online-pathshala.vimlesh.dev/",
    image: "/projects/pathshala.png",
    icon: GraduationCap,
  },
  {
    title: "VimPGP",
    description:
      "A browser-based PGP/GPG key manager for generating, importing, and managing encryption keys with a clean dashboard interface. Built with Vue 3.",
    stack: ["Vue 3", "Cryptography", "PGP/GPG"],
    href: "https://github.com/Vimlesh-Kumar/vimpgp",
    live: "https://vimpgp.vimlesh.dev",
    image: "/projects/vimpgp.png",
    icon: KeyRound,
  },
  {
    title: "SkyCast Weather",
    description:
      "A responsive weather dashboard with clean forecasting flows, location search, and fast TypeScript-powered rendering. Deployed at skycast.vimlesh.dev.",
    stack: ["Vue 3", "TypeScript", "REST API"],
    href: "https://github.com/Vimlesh-Kumar/weather-website",
    live: "https://skycast.vimlesh.dev/",
    image: "/projects/weather.png",
    icon: CloudSun,
  },
  {
    title: "Zync Audio Sync",
    description:
      "A synchronized playback experiment focused on multi-device timing, real-time events, and latency coordination across browsers.",
    stack: ["TypeScript", "WebSockets", "Node.js"],
    href: "https://github.com/Vimlesh-Kumar/zync",
    live: "https://zync.vimlesh.dev/",
    image: "/projects/zync.png",
    icon: Music,
  },
  {
    title: "Tatkal Reminder Platform",
    description:
      "A full-stack reminder system with backend automation, deployment workflows, and public-facing interaction surfaces.",
    stack: ["Node.js", "Express", "MongoDB"],
    href: "https://github.com/Vimlesh-Kumar/Tatkal-Booking-Reminder",
    live: "https://tatkal-booking-reminder.onrender.com",
    image: "/projects/tatkal.png",
    icon: Bell,
  },
  {
    title: "CashSync Ledger",
    description:
      "Financial transaction aggregation system that parses SMS, email, and API-based transaction data, deduplicates records, and maintains a unified ledger.",
    stack: ["TypeScript", "Node.js", "Regex APIs"],
    href: "https://github.com/Vimlesh-Kumar/CashSync",
    image: "/projects/cashsync.png",
    icon: Wallet,
  },
  {
    title: "Natural++",
    description:
      "A natural language-to-code IDE that translates plain English instructions into executable programs through an intuitive, browser-based interface.",
    stack: ["JavaScript", "Node.js", "Parsing"],
    href: "https://github.com/Vimlesh-Kumar/natural-pluse-pluse",
    live: "https://natural-pluse-pluse.onrender.com",
    image: "/projects/naturalpp.png",
    icon: Code2,
  },
  {
    title: "Monster Slayer Game",
    description:
      "An interactive browser-based game built with Vue.js featuring attack, special attacks, healing mechanics, and battle logs.",
    stack: ["Vue.js", "CSS3", "Logic"],
    href: "https://github.com/Vimlesh-Kumar/Monster-Slayer-Game",
    live: "https://vimlesh-kumar.github.io/Monster-Slayer-Game/",
    image: "/projects/monster.png",
    icon: Gamepad2,
  },
  {
    title: "Bike Repair Website",
    description:
      "A responsive service-based landing page for a bike repair business with clean hero sections, service cards, and contact forms.",
    stack: ["HTML5", "CSS3", "JavaScript"],
    href: "https://github.com/Vimlesh-Kumar/bike-repair-website",
    live: "https://vimlesh-kumar.github.io/bike-repair-website/",
    image: "/projects/bike.png",
    icon: Wrench,
  },
  {
    title: "Restaurant Website",
    description:
      "A polished front-end restaurant landing page featuring menu displays, reservation CTAs, and responsive design with rich visuals.",
    stack: ["HTML5", "CSS3", "Vanilla JS"],
    href: "https://github.com/Vimlesh-Kumar/restaurant-website",
    live: "https://vimlesh-kumar.github.io/restaurant-website/",
    image: "/projects/restaurant.png",
    icon: UtensilsCrossed,
  },
];

const INITIAL_COUNT = 3;

const ProjectCard = ({ project, index }) => {
  const Icon = project.icon;
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="project-card rounded-[1.75rem] w-full"
      style={{
        border: "1px solid var(--border-subtle)",
        background: "var(--surface-subtle)",
      }}
      onClick={() => {
        if (project.live) window.open(project.live, "_blank");
        else window.open(project.href, "_blank");
      }}
    >
      <div className="relative h-48 overflow-hidden rounded-t-[1.75rem]">
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className="project-screenshot h-full w-full object-cover object-top"
        />
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(to top, var(--surface-bg) 0%, transparent 60%)",
          }}
        />
        
        <div className="absolute inset-x-0 bottom-4 flex justify-center project-expand-hint z-20">
          <span className="bg-black/80 backdrop-blur-md border border-white/20 text-white text-xs font-semibold px-4 py-1.5 rounded-full flex items-center gap-2">
            <ExternalLink className="h-3.5 w-3.5" /> View Project
          </span>
        </div>

        <div className="absolute top-4 right-4 z-20 flex gap-2">
          {project.live && (
            <span className="bg-black/60 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full flex items-center gap-1.5 status-pulse shadow-xl">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span> Live
            </span>
          )}
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="bg-black/50 backdrop-blur-md rounded-full p-1.5 border border-white/10 hover:bg-white/20 transition-colors"
          >
            <ArrowUpRight className="h-4 w-4 text-white" />
          </a>
        </div>
      </div>

      <div className="relative flex flex-col p-6 z-10">
        <div className="flex items-center gap-3 w-full mb-3">
          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
            style={{
              border: "1px solid var(--border-subtle)",
              background: "var(--icon-bg)",
              color: "var(--accent-primary)",
            }}
          >
            <Icon className="h-5 w-5" />
          </div>
          <h3
            className="text-xl font-bold truncate pr-4"
            style={{ color: "var(--text-primary)" }}
          >
            {project.title}
          </h3>
        </div>

        <p
          className="mb-6 flex-1 text-sm leading-relaxed line-clamp-3"
          style={{ color: "var(--text-muted)" }}
        >
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.stack.map((item) => (
            <ProjectTechTag key={item} name={item} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const visibleProjects = projects.slice(0, INITIAL_COUNT);

  // Lock body scroll when modal is open
  React.useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [modalOpen]);

  return (
    <section id="projects" className="scroll-mt-28">
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="glass-panel rounded-4xl p-8 md:p-10"
      >
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3 relative">
            <p
              className="text-xs font-semibold uppercase tracking-[0.3em]"
              style={{ color: "var(--accent-primary-text)" }}
            >
              Projects
            </p>
            <h2
              className="text-3xl font-semibold tracking-tight md:text-5xl flex items-center gap-3"
              style={{ color: "var(--text-primary)" }}
            >
              Selected Work 
            </h2>
            <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-2 h-16 rounded-full bg-linear-to-b from-cyan-400 to-emerald-400 opacity-50 blur-sm"></div>
          </div>
          <p
            className="max-w-xl text-sm leading-7 md:text-base"
            style={{ color: "var(--text-muted)" }}
          >
            A curated set of {projects.length} projects reflecting a focus on functional products, sharp interfaces, and state-of-the-art implementations.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {projects.length > INITIAL_COUNT && (
          <div className="mt-12 flex justify-center">
            <motion.button
              type="button"
              onClick={() => setModalOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hover-glow flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold transition-all"
              style={{
                border: "1px solid var(--border-hover)",
                background: "var(--surface-subtle)",
                color: "var(--text-primary)",
              }}
            >
              <Layers className="h-4 w-4 text-cyan-400" />
              View All {projects.length} Projects
            </motion.button>
          </div>
        )}
      </motion.div>

      {/* Projects Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="modal-overlay"
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="modal-content glass-panel"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 z-30 flex items-center justify-between border-b px-8 py-6 backdrop-blur-xl" style={{ borderColor: 'var(--border-subtle)', background: 'rgba(6, 8, 22, 0.85)' }}>
                <div>
                  <h3 className="text-2xl font-bold flex items-center gap-3" style={{ color: 'var(--text-primary)' }}>
                    <Layers className="h-6 w-6 text-cyan-400" /> All Projects Collection
                  </h3>
                  <p className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>Explore all {projects.length} projects</p>
                </div>
                <button
                  onClick={() => setModalOpen(false)}
                  className="rounded-full p-2.5 transition-colors hover:bg-white/10"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="grid gap-6 p-8 sm:grid-cols-2 lg:grid-cols-3" style={{ background: 'var(--surface-bg)' }}>
                {projects.map((project, index) => (
                  <ProjectCard key={project.title} project={project} index={index} />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
