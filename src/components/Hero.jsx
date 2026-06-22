import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Sparkles,
} from "lucide-react";
import InteractiveTerminal from "./InteractiveTerminal";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center px-6 pb-18 pt-14 md:px-8 md:pb-24 md:pt-20"
    >
      <div className="grid w-full items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] hover-glow"
            style={{
              border: '1px solid var(--border-subtle)',
              background: 'var(--surface-subtle)',
              color: 'var(--accent-primary-text)',
            }}
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span className="shimmer-text">Vue 3 & Microservices Expert</span>
          </div>

          <div className="space-y-5">
            <p
              className="text-sm font-medium uppercase tracking-[0.38em]"
              style={{ color: 'var(--text-dim)' }}
            >
              Full-Stack Engineer
            </p>
            <h1
              className="max-w-4xl text-5xl font-semibold leading-[0.96] tracking-tight md:text-7xl"
              style={{ color: 'var(--text-primary)' }}
            >
              Building crisp UIs and scalable backend systems.
            </h1>
            <p
              className="max-w-2xl text-base leading-8 md:text-lg"
              style={{ color: 'var(--text-muted)' }}
            >
              I build product experiences that feel premium on the surface and
              stay maintainable underneath. Specialized in modern architectures like 
              <strong style={{ color: "var(--accent-emerald)", fontWeight: 600 }}> Vue 3</strong>, <strong style={{ color: "var(--accent-primary)", fontWeight: 600 }}>Node.js</strong>, 
              Express, and scalable microservices.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="hover-glow inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition cursor-pointer"
              style={{
                background: 'var(--text-primary)',
                color: 'var(--surface-bg)',
              }}
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="mailto:vimlesh11072000@gmail.com"
              className="hover-glow inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition"
              style={{
                border: '1px solid var(--border-subtle)',
                background: 'var(--surface-subtle)',
                color: 'var(--text-primary)',
              }}
            >
              Start a Conversation
            </a>
            <a
              href="https://drive.google.com/uc?export=download&id=1M6sDmm16j4LEKSjINYaiScjDA2ytz7_v"
              target="_blank"
              rel="noreferrer"
              className="hover-glow inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition"
              style={{
                border: '1px solid var(--border-subtle)',
                background: 'transparent',
                color: 'var(--text-primary)',
              }}
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-4 mt-6">
            <a
              href="https://github.com/Vimlesh-Kumar"
              target="_blank"
              rel="noreferrer"
              className="hover-glow inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition"
              style={{
                border: '1px solid var(--border-subtle)',
                background: 'var(--surface-subtle)',
                color: 'var(--text-muted)',
              }}
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/vimlesh11"
              target="_blank"
              rel="noreferrer"
              className="hover-glow inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition"
              style={{
                border: '1px solid var(--border-subtle)',
                background: 'var(--surface-subtle)',
                color: 'var(--text-muted)',
              }}
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
          className="relative tilt-card pulse-glow group"
        >
          <div className="absolute -left-8 top-10 h-28 w-28 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition duration-500" style={{ background: 'var(--accent-primary)' }} />
          <div className="absolute -right-8 bottom-8 h-36 w-36 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition duration-500" style={{ background: 'var(--accent-emerald)' }} />

          <InteractiveTerminal />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
