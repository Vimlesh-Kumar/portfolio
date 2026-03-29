import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Send,
  Rocket,
} from "lucide-react";

const channels = [
  {
    label: "Email",
    value: "vimlesh11072000@gmail.com",
    href: "mailto:vimlesh11072000@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/Vimlesh-Kumar",
    href: "https://github.com/Vimlesh-Kumar",
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/vimlesh11",
    href: "https://linkedin.com/in/vimlesh11",
    icon: Linkedin,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="scroll-mt-28 pb-8">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="glass-panel grid gap-8 overflow-hidden rounded-[2rem] p-8 md:grid-cols-[1.1fr_0.9fr] md:p-10"
      >
        <div className="space-y-6">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] hover-glow"
            style={{
              border: '1px solid var(--border-subtle)',
              background: 'var(--surface-subtle)',
              color: 'var(--accent-primary-text)',
            }}
          >
            <Send className="h-3.5 w-3.5" />
            Contact
          </div>

          <div className="space-y-4">
            <h2
              className="max-w-xl text-3xl font-semibold tracking-tight md:text-5xl"
              style={{ color: 'var(--text-primary)' }}
            >
              Let&apos;s build a product that looks sharp and scales cleanly.
            </h2>
            <p
              className="max-w-2xl text-base leading-7 md:text-lg"
              style={{ color: 'var(--text-muted)' }}
            >
              Available for full-stack product work, frontend systems, and
              platform modernization across React, Node.js, and cloud-backed
              architectures.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 text-sm">
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2"
              style={{
                border: '1px solid rgba(52, 211, 153, 0.30)',
                background: 'rgba(52, 211, 153, 0.10)',
                color: 'var(--accent-emerald)',
              }}
            >
              <span
                className="h-2.5 w-2.5 rounded-full status-pulse"
                style={{
                  background: 'var(--accent-emerald)',
                  boxShadow: '0 0 20px rgba(52, 211, 153, 0.8)',
                }}
              />
              Open to selected freelance projects
            </div>
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2"
              style={{
                border: '1px solid var(--border-subtle)',
                background: 'var(--surface-subtle)',
                color: 'var(--text-muted)',
              }}
            >
              <MapPin className="h-4 w-4" style={{ color: 'var(--accent-primary)' }} />
              Gandhinagar, India
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          {channels.map((channel, index) => {
            const Icon = channel.icon;

            return (
              <motion.a
                key={channel.label}
                href={channel.href}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  channel.href.startsWith("http") ? "noreferrer" : undefined
                }
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="contact-card group rounded-[1.5rem] p-5 transition duration-300 hover:-translate-y-1 block w-full"
                style={{
                  border: '1px solid var(--border-subtle)',
                  background: 'var(--surface-subtle)',
                }}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-2xl"
                      style={{
                        border: '1px solid var(--border-subtle)',
                        background: 'var(--icon-bg)',
                        color: 'var(--accent-primary)',
                      }}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p
                        className="text-sm uppercase tracking-[0.2em]"
                        style={{ color: 'var(--text-dim)' }}
                      >
                        {channel.label}
                      </p>
                      <p
                        className="text-base font-medium"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {channel.value}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight
                    className="h-5 w-5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    style={{ color: 'var(--text-dim)' }}
                  />
                </div>
              </motion.a>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
