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
  ChevronUp,
  ExternalLink,
  GraduationCap,
  KeyRound,
} from "lucide-react";

const projects = [
  {
    title: "Online Pathshala",
    description:
      "A full-stack online learning platform with course catalog, video streaming, search & filtering, and paginated views. Built with Vue 3, Vuetify, Node.js, and MySQL.",
    stack: ["Vue 3", "Vuetify", "Node.js", "MySQL"],
    href: "https://github.com/Vimlesh-Kumar/online-pathshala",
    live: "https://online-pathshala.vimlesh.dev/",
    image: "/projects/pathshala.png",
    accent: "from-indigo-400/30 to-blue-500/10",
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
    accent: "from-emerald-400/30 to-green-500/10",
    icon: KeyRound,
  },
  {
    title: "SkyCast Weather",
    description:
      "A responsive weather dashboard with clean forecasting flows, location search, and fast TypeScript-powered rendering. Deployed at skycast.vimlesh.dev.",
    stack: ["React", "TypeScript", "API Integration"],
    href: "https://github.com/Vimlesh-Kumar/weather-website",
    live: "https://skycast.vimlesh.dev/",
    image: "/projects/weather.png",
    accent: "from-cyan-400/30 to-sky-500/10",
    icon: CloudSun,
  },
  {
    title: "Zync Audio Sync",
    description:
      "A synchronized playback experiment focused on multi-device timing, real-time events, and latency coordination across browsers.",
    stack: ["TypeScript", "WebSockets", "Realtime"],
    href: "https://github.com/Vimlesh-Kumar/zync",
    live: "https://zync.vimlesh.dev/",
    image: "/projects/zync.png",
    accent: "from-violet-400/25 to-fuchsia-500/10",
    icon: Music,
  },
  {
    title: "Tatkal Reminder Platform",
    description:
      "A full-stack reminder system with backend automation, deployment workflows, and public-facing interaction surfaces.",
    stack: ["Node.js", "Express", "Render"],
    href: "https://github.com/Vimlesh-Kumar/Tatkal-Booking-Reminder",
    live: "https://tatkal-booking-reminder.onrender.com",
    image: "/projects/tatkal.png",
    accent: "from-yellow-400/25 to-amber-500/10",
    icon: Bell,
  },
  {
    title: "CashSync Ledger",
    description:
      "Financial transaction aggregation system that parses SMS, email, and API-based transaction data, deduplicates records, and maintains a unified ledger.",
    stack: ["TypeScript", "Node.js", "Parsing"],
    href: "https://github.com/Vimlesh-Kumar/CashSync",
    image: "/projects/cashsync.png",
    accent: "from-amber-400/25 to-orange-500/10",
    icon: Wallet,
  },
  {
    title: "Natural++",
    description:
      "A natural language-to-code IDE that translates plain English instructions into executable programs through an intuitive, browser-based interface.",
    stack: ["JavaScript", "Node.js", "Render"],
    href: "https://github.com/Vimlesh-Kumar/natural-pluse-pluse",
    live: "https://natural-pluse-pluse.onrender.com",
    image: "/projects/naturalpp.png",
    accent: "from-sky-400/25 to-indigo-500/10",
    icon: Code2,
  },
  {
    title: "Monster Slayer Game",
    description:
      "An interactive browser-based game built with Vue.js featuring attack, special attacks, healing mechanics, and battle logs.",
    stack: ["Vue.js", "JavaScript", "CSS"],
    href: "https://github.com/Vimlesh-Kumar/Monster-Slayer-Game",
    live: "https://vimlesh-kumar.github.io/Monster-Slayer-Game/",
    image: "/projects/monster.png",
    accent: "from-rose-400/25 to-pink-500/10",
    icon: Gamepad2,
  },
  {
    title: "Bike Repair Website",
    description:
      "A responsive service-based landing page for a bike repair business with clean hero sections, service cards, and contact forms.",
    stack: ["HTML", "CSS", "JavaScript"],
    href: "https://github.com/Vimlesh-Kumar/bike-repair-website",
    live: "https://vimlesh-kumar.github.io/bike-repair-website/",
    image: "/projects/bike.png",
    accent: "from-lime-400/25 to-green-500/10",
    icon: Wrench,
  },
  {
    title: "Restaurant Website",
    description:
      "A polished front-end restaurant landing page featuring menu displays, reservation CTAs, and responsive design with rich visuals.",
    stack: ["HTML", "CSS", "JavaScript"],
    href: "https://github.com/Vimlesh-Kumar/restaurant-website",
    live: "https://vimlesh-kumar.github.io/restaurant-website/",
    image: "/projects/restaurant.png",
    accent: "from-orange-400/25 to-red-500/10",
    icon: UtensilsCrossed,
  },
];

const INITIAL_COUNT = 3;

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_COUNT);

  return (
    <section id="projects" className="scroll-mt-28">
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="glass-panel rounded-[2rem] p-8 md:p-10"
      >
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <p
              className="text-xs font-semibold uppercase tracking-[0.3em]"
              style={{ color: "var(--accent-primary-text)" }}
            >
              Projects
            </p>
            <h2
              className="text-3xl font-semibold tracking-tight md:text-5xl"
              style={{ color: "var(--text-primary)" }}
            >
              Selected builds with product and engineering depth.
            </h2>
          </div>
          <p
            className="max-w-xl text-sm leading-7 md:text-base"
            style={{ color: "var(--text-muted)" }}
          >
            A curated set of {projects.length} projects that reflect the kind of
            work I like: functional products, sharp interfaces, and
            implementation choices that stay practical in production.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="group relative overflow-hidden rounded-[1.75rem] transition duration-300 hover:-translate-y-1.5"
                  style={{
                    border: "1px solid var(--border-subtle)",
                    background: "var(--surface-subtle)",
                  }}
                >
                  {/* Screenshot */}
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, var(--surface-bg) 0%, transparent 60%)",
                      }}
                    />
                    {/* Live link badge */}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-md transition hover:scale-105"
                        style={{
                          background: "rgba(0,0,0,0.55)",
                          color: "#fff",
                          border: "1px solid rgba(255,255,255,0.15)",
                        }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="h-3 w-3" />
                        Live
                      </a>
                    )}
                  </div>

                  {/* Content */}
                  <div className="relative flex flex-col p-6 pt-2">
                    <div className="mb-4 flex items-center justify-between">
                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-xl"
                        style={{
                          border: "1px solid var(--border-subtle)",
                          background: "var(--icon-bg)",
                          color: "var(--accent-primary)",
                        }}
                      >
                        <Icon className="h-4 w-4" />
                      </div>
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        style={{ color: "var(--text-dim)" }}
                      >
                        <ArrowUpRight className="h-5 w-5" />
                      </a>
                    </div>

                    <h3
                      className="text-xl font-semibold"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="mt-3 flex-1 text-sm leading-7"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {project.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className="rounded-full px-3 py-1.5 text-xs font-medium"
                          style={{
                            border: "1px solid var(--border-subtle)",
                            background: "var(--tag-bg)",
                            color: "var(--tag-text)",
                          }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Show More / Show Less */}
        {projects.length > INITIAL_COUNT && (
          <div className="mt-8 flex justify-center">
            <motion.button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition"
              style={{
                border: "1px solid var(--border-subtle)",
                background: "var(--surface-subtle)",
                color: "var(--text-primary)",
              }}
            >
              {showAll ? (
                <>
                  Show Less <ChevronUp className="h-4 w-4" />
                </>
              ) : (
                <>
                  Show All {projects.length} Projects{" "}
                  <ChevronDown className="h-4 w-4" />
                </>
              )}
            </motion.button>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default Projects;
