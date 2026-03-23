import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Code2 } from "lucide-react";

const projects = [
  {
    title: "Realtime Weather Studio",
    description:
      "A responsive weather dashboard with clean forecasting flows, location search, and fast TypeScript-powered rendering.",
    stack: ["React", "TypeScript", "API Integration"],
    href: "https://github.com/Vimlesh-Kumar/weather-website",
    accent: "from-cyan-400/30 to-sky-500/10",
  },
  {
    title: "Tatkal Reminder Platform",
    description:
      "A full-stack reminder system with backend automation, deployment workflows, and public-facing interaction surfaces.",
    stack: ["Node.js", "Express", "Render"],
    href: "https://github.com/Vimlesh-Kumar/Tatkal-Booking-Reminder",
    accent: "from-emerald-400/25 to-teal-500/10",
  },
  {
    title: "Zync Audio Sync",
    description:
      "A synchronized playback experiment focused on multi-device timing, real-time events, and latency coordination.",
    stack: ["TypeScript", "WebSockets", "Realtime"],
    href: "https://github.com/Vimlesh-Kumar/zync",
    accent: "from-violet-400/25 to-fuchsia-500/10",
  },
];

const Projects = () => {
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
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
              Projects
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Selected builds with product and engineering depth.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-300 md:text-base">
            A small set of projects that reflect the kind of work I like:
            functional products, sharp interfaces, and implementation choices
            that stay practical in production.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/6 p-6 transition duration-300 hover:-translate-y-1.5 hover:border-cyan-300/35 hover:bg-white/10"
            >
              <div
                className={`absolute inset-x-6 top-0 h-24 rounded-b-[2rem] bg-gradient-to-br ${project.accent} blur-2xl`}
              />

              <div className="relative flex h-full flex-col">
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/55 text-cyan-200">
                    <Code2 className="h-5 w-5" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-slate-500 transition group-hover:text-cyan-200" />
                </div>

                <h3 className="text-2xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-slate-300">
                  {project.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-slate-950/45 px-3 py-1.5 text-xs font-medium text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
