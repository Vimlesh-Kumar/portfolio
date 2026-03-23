import React from "react";
import { motion } from "framer-motion";
import { Cloud, Code2, Database, Figma, Layers3, Server } from "lucide-react";

const skillGroups = [
  {
    title: "Frontend",
    icon: Layers3,
    items: ["React", "Vue", "Tailwind CSS", "TypeScript", "Framer Motion"],
  },
  {
    title: "Backend",
    icon: Server,
    items: ["Node.js", "Express", ".NET", "REST APIs", "Microservices"],
  },
  {
    title: "Cloud",
    icon: Cloud,
    items: ["Azure", "CI/CD", "Deployments", "Scalable Services"],
  },
  {
    title: "Data",
    icon: Database,
    items: ["PostgreSQL", "SQL Server", "MongoDB", "Prisma"],
  },
];

const toolbelt = [
  "UI systems",
  "Interaction design",
  "Testing mindset",
  "Architecture reviews",
  "Performance tuning",
  "Developer experience",
];

const Skills = () => {
  return (
    <section id="skills" className="scroll-mt-28">
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]"
      >
        <div className="glass-panel rounded-[2rem] p-8 md:p-10">
          <div className="mb-8 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
              Skills
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Engineering coverage from polished UI to production systems.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {skillGroups.map((group, index) => {
              const Icon = group.icon;

              return (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="rounded-[1.6rem] border border-white/10 bg-white/6 p-5"
                >
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/55 text-cyan-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {group.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-slate-950/50 px-3 py-1.5 text-xs font-medium text-slate-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="glass-panel rounded-[2rem] p-8 md:p-10">
          <div className="mb-8 flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                Workflow
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
                Product-minded execution
              </h3>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/55 text-cyan-200">
              <Code2 className="h-5 w-5" />
            </div>
          </div>

          <p className="text-sm leading-7 text-slate-300 md:text-base">
            I like shipping interfaces that feel intentional, aligning design
            choices with system constraints, and leaving behind code that other
            engineers can evolve without friction.
          </p>

          <div className="mt-8 grid gap-3">
            {toolbelt.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/6 px-4 py-3"
              >
                <span className="text-sm font-medium text-slate-100">
                  {item}
                </span>
                <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />
              </motion.div>
            ))}
          </div>

          <div className="mt-8 rounded-[1.6rem] border border-fuchsia-300/20 bg-fuchsia-300/8 p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/55 text-fuchsia-200">
                <Figma className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-fuchsia-200">
                  UI Sensibility
                </p>
                <p className="mt-1 text-base text-white">
                  Strong preference for visual clarity, motion hierarchy, and
                  interfaces that avoid generic startup templates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
