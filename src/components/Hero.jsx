import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Download,
  Github,
  Layers3,
  Linkedin,
  Sparkles,
} from "lucide-react";

const metrics = [
  { label: "Years building", value: "3+" },
  { label: "Production launches", value: "12" },
  { label: "Core focus", value: "React + Node" },
];

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center px-6 pb-18 pt-14 md:px-8 md:pb-24 md:pt-20"
    >
      <div className="grid w-full items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">
            <Sparkles className="h-3.5 w-3.5" />
            Modern Developer Portfolio
          </div>

          <div className="space-y-5">
            <p className="text-sm font-medium uppercase tracking-[0.38em] text-slate-400">
              Full-stack engineer
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.96] tracking-tight text-white md:text-7xl">
              Designing crisp interfaces and shipping cloud-ready products.
            </h1>
            <p className="max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              I build product experiences that feel premium on the surface and
              stay maintainable underneath, with a focus on React, Node.js,
              scalable APIs, and deliberate UI systems.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-100"
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="mailto:vimlesh11072000@gmail.com"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/6 px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-white/10"
            >
              Start a Conversation
            </a>
            <a
              href="https://drive.google.com/uc?export=download&id=1M6sDmm16j4LEKSjINYaiScjDA2ytz7_v"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-transparent px-6 py-3.5 text-sm font-semibold text-slate-300 transition hover:border-white/20 hover:text-white"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-slate-300">
            <a
              href="https://github.com/Vimlesh-Kumar"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm transition hover:border-cyan-300/40 hover:text-white"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/vimlesh11"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm transition hover:border-cyan-300/40 hover:text-white"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.85, ease: "easeOut", delay: 0.12 }}
          className="relative"
        >
          <div className="absolute -left-8 top-10 h-28 w-28 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="absolute -right-8 bottom-8 h-36 w-36 rounded-full bg-violet-500/20 blur-3xl" />

          <div className="glass-panel relative overflow-hidden rounded-[2rem] p-5 md:p-6">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />

            <div className="grid gap-4">
              <div className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.1),rgba(255,255,255,0.03))] p-6">
                <div className="mb-12 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.32em] text-slate-400">
                      Toolkit
                    </p>
                    <p className="mt-2 text-2xl font-semibold text-white">
                      Premium product stack
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-3 text-cyan-200">
                    <Code2 className="h-6 w-6" />
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-2xl border border-white/10 bg-slate-950/50 p-4"
                    >
                      <p className="text-2xl font-semibold text-white">
                        {metric.value}
                      </p>
                      <p className="mt-2 text-sm text-slate-400">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-[0.95fr_1.05fr]">
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="rounded-[1.6rem] border border-cyan-300/20 bg-cyan-300/10 p-5"
                >
                  <div className="flex items-center gap-3 text-cyan-100">
                    <Layers3 className="h-5 w-5" />
                    <p className="text-sm font-medium uppercase tracking-[0.24em]">
                      Design System
                    </p>
                  </div>
                  <p className="mt-6 text-lg font-medium text-white">
                    Glass surfaces, strong contrast, and motion with intent.
                  </p>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                  className="rounded-[1.6rem] border border-white/10 bg-white/6 p-5"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm uppercase tracking-[0.26em] text-slate-400">
                      Current focus
                    </p>
                    <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                      Available
                    </span>
                  </div>
                  <p className="mt-6 text-lg leading-8 text-slate-200">
                    React frontends, Node services, internal tools, and
                    modernization work for teams moving faster than their
                    existing stack allows.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
