import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Send,
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
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">
            <Send className="h-3.5 w-3.5" />
            Contact
          </div>

          <div className="space-y-4">
            <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Let&apos;s build a product that looks sharp and scales cleanly.
            </h2>
            <p className="max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
              Available for full-stack product work, frontend systems, and
              platform modernization across React, Node.js, and cloud-backed
              architectures.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 text-sm text-slate-300">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.8)]" />
              Open to selected freelance projects
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <MapPin className="h-4 w-4 text-cyan-200" />
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
                className="group rounded-[1.5rem] border border-white/10 bg-white/6 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/10"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/60 text-cyan-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                        {channel.label}
                      </p>
                      <p className="text-base font-medium text-white">
                        {channel.value}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-slate-500 transition group-hover:text-cyan-200" />
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
