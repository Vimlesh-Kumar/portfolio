import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Braces,
  Download,
  Github,
  Layers3,
  Linkedin,
  Sparkles,
  Zap,
  Terminal,
  Palette,
} from "lucide-react";

const metrics = [
  { label: "Years building", value: "3+", icon: Zap },
  { label: "Production launches", value: "12", icon: Terminal },
  { label: "Core focus", value: "React + Node", icon: Palette },
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
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em]"
            style={{
              border: '1px solid var(--border-subtle)',
              background: 'var(--surface-subtle)',
              color: 'var(--accent-primary-text)',
            }}
          >
            <Sparkles className="h-3.5 w-3.5" />
            Modern Developer Portfolio
          </div>

          <div className="space-y-5">
            <p
              className="text-sm font-medium uppercase tracking-[0.38em]"
              style={{ color: 'var(--text-dim)' }}
            >
              Full-stack engineer
            </p>
            <h1
              className="max-w-4xl text-5xl font-semibold leading-[0.96] tracking-tight md:text-7xl"
              style={{ color: 'var(--text-primary)' }}
            >
              Designing crisp interfaces and shipping cloud-ready products.
            </h1>
            <p
              className="max-w-2xl text-base leading-8 md:text-lg"
              style={{ color: 'var(--text-muted)' }}
            >
              I build product experiences that feel premium on the surface and
              stay maintainable underneath, with a focus on React, Node.js,
              scalable APIs, and deliberate UI systems.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition hover:-translate-y-0.5"
              style={{
                background: 'var(--cta-bg)',
                color: 'var(--cta-text)',
              }}
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="mailto:vimlesh11072000@gmail.com"
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition hover:-translate-y-0.5"
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
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition"
              style={{
                border: '1px solid var(--border-subtle)',
                background: 'transparent',
                color: 'var(--text-muted)',
              }}
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://github.com/Vimlesh-Kumar"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition"
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
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition"
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
          className="relative"
        >
          <div className="absolute -left-8 top-10 h-28 w-28 rounded-full blur-3xl" style={{ background: 'rgba(34, 211, 238, 0.20)' }} />
          <div className="absolute -right-8 bottom-8 h-36 w-36 rounded-full blur-3xl" style={{ background: 'rgba(139, 92, 246, 0.20)' }} />

          <div className="glass-panel relative overflow-hidden rounded-[2rem] p-5 md:p-6">
            <div className="absolute inset-x-0 top-0 h-px" style={{ background: 'linear-gradient(to right, transparent, var(--accent-primary), transparent)', opacity: 0.6 }} />

            <div className="grid gap-4">
              <div
                className="rounded-[1.6rem] p-6"
                style={{
                  border: '1px solid var(--border-subtle)',
                  background: 'var(--inner-card-bg)',
                }}
              >
                <div className="mb-12 flex items-center justify-between">
                  <div>
                    <p
                      className="text-xs uppercase tracking-[0.32em]"
                      style={{ color: 'var(--text-dim)' }}
                    >
                      Toolkit
                    </p>
                    <p
                      className="mt-2 text-2xl font-semibold"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      Premium product stack
                    </p>
                  </div>
                  <div
                    className="rounded-2xl p-3"
                    style={{
                      border: '1px solid var(--border-subtle)',
                      background: 'var(--icon-bg)',
                      color: 'var(--accent-primary)',
                    }}
                  >
                    <Braces className="h-6 w-6" />
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {metrics.map((metric) => {
                    const Icon = metric.icon;
                    return (
                      <div
                        key={metric.label}
                        className="rounded-2xl p-4"
                        style={{
                          border: '1px solid var(--border-subtle)',
                          background: 'var(--stat-card-bg)',
                        }}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <Icon className="h-4 w-4" style={{ color: 'var(--accent-primary)' }} />
                          <p
                            className="text-2xl font-semibold"
                            style={{ color: 'var(--text-primary)' }}
                          >
                            {metric.value}
                          </p>
                        </div>
                        <p className="mt-2 text-sm" style={{ color: 'var(--text-dim)' }}>
                          {metric.label}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-[0.95fr_1.05fr]">
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="rounded-[1.6rem] p-5"
                  style={{
                    border: '1px solid var(--cyan-card-border)',
                    background: 'var(--cyan-card-bg)',
                  }}
                >
                  <div className="flex items-center gap-3" style={{ color: 'var(--cyan-card-text)' }}>
                    <Layers3 className="h-5 w-5" />
                    <p className="text-sm font-medium uppercase tracking-[0.24em]">
                      Design System
                    </p>
                  </div>
                  <p className="mt-6 text-lg font-medium" style={{ color: 'var(--text-primary)' }}>
                    Glass surfaces, strong contrast, and motion with intent.
                  </p>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                  className="rounded-[1.6rem] p-5"
                  style={{
                    border: '1px solid var(--border-subtle)',
                    background: 'var(--surface-subtle)',
                  }}
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm uppercase tracking-[0.26em]" style={{ color: 'var(--text-dim)' }}>
                      Current focus
                    </p>
                    <span
                      className="rounded-full px-3 py-1 text-xs font-semibold"
                      style={{
                        border: '1px solid rgba(52, 211, 153, 0.30)',
                        background: 'rgba(52, 211, 153, 0.10)',
                        color: 'var(--accent-emerald)',
                      }}
                    >
                      Available
                    </span>
                  </div>
                  <p className="mt-6 text-lg leading-8" style={{ color: 'var(--text-secondary)' }}>
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
