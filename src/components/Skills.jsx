import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Cloud,
  Braces,
  Database,
  Layers3,
  Server,
  Wand2,
  CircleCheckBig,
} from "lucide-react";
import TechIcon from "./TechIcon";
import { getBrandColor } from "../lib/brandColors";

const skillGroups = [
  {
    title: "Frontend",
    icon: Layers3,
    items: [
      { name: "Vue 3" },
      { name: "Nuxt.js" },
      { name: "Tailwind CSS" },
      { name: "TypeScript" },
      { name: "Framer Motion" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    items: [
      { name: "Node.js" },
      { name: "Express" },
      { name: ".NET" },
      { name: "REST APIs" },
      { name: "Microservices" },
    ],
  },
  {
    title: "Cloud",
    icon: Cloud,
    items: [
      { name: "Azure" },
      { name: "CI/CD" },
      { name: "Deployments" },
      { name: "Scalable Services" },
    ],
  },
  {
    title: "Data",
    icon: Database,
    items: [
      { name: "PostgreSQL" },
      { name: "SQL Server" },
      { name: "MongoDB" },
      { name: "Prisma" },
    ],
  },
];

// Inner component for an interactive, brand-glowing skill tag
const SkillTag = ({ name }) => {
  const [hovered, setHovered] = useState(false);
  const brandColor = getBrandColor(name);

  return (
    <span
      className="skill-tag inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium cursor-default transition-all duration-300"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: hovered ? `1px solid ${brandColor}` : "1px solid var(--border-subtle)",
        background: hovered ? `${brandColor}18` : "var(--tag-bg)",
        color: hovered ? "var(--text-primary)" : "var(--tag-text)",
        boxShadow: hovered ? `0 4px 20px ${brandColor}25` : "none",
        transform: hovered ? "translateY(-2px) scale(1.05)" : "none"
      }}
    >
      <TechIcon name={name} size={13} />
      {name}
    </span>
  );
};

const toolbelt = [
  "UI systems",
  "Interaction design",
  "Testing mindset",
  "Architecture reviews",
  "Performance tuning",
  "Developer experience",
];

/**
 * Skills
 * ------
 * Capability overview grouped by domain (frontend, backend, cloud, data) with
 * brand-colored skill tags, plus a workflow / strengths panel.
 *
 * @returns {JSX.Element}
 */
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
        <div className="glass-panel rounded-4xl p-8 md:p-10">
          <div className="mb-8 space-y-3">
            <p
              className="text-xs font-semibold uppercase tracking-[0.3em]"
              style={{ color: "var(--accent-primary-text)" }}
            >
              Skills
            </p>
            <h2
              className="text-3xl font-semibold tracking-tight md:text-5xl"
              style={{ color: "var(--text-primary)" }}
            >
              Engineering coverage from polished UI to production systems.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {skillGroups.map((group, index) => {
              const GroupIcon = group.icon;

              return (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="skill-card rounded-[1.6rem] p-5"
                  style={{
                    border: "1px solid var(--border-subtle)",
                    background: "var(--surface-subtle)",
                  }}
                >
                  <div className="mb-5 flex items-center gap-3">
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-2xl"
                      style={{
                        border: "1px solid var(--border-subtle)",
                        background: "var(--icon-bg)",
                        color: "var(--accent-primary)",
                      }}
                    >
                      <GroupIcon className="h-5 w-5" />
                    </div>
                    <h3
                      className="text-lg font-semibold"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {group.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <SkillTag key={item.name} name={item.name} />
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="glass-panel rounded-4xl p-8 md:p-10">
          <div className="mb-8 flex items-start justify-between gap-4">
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-[0.3em]"
                style={{ color: "var(--text-dim)" }}
              >
                Workflow
              </p>
              <h3
                className="mt-3 text-2xl font-semibold md:text-3xl"
                style={{ color: "var(--text-primary)" }}
              >
                Product-minded execution
              </h3>
            </div>
            <div
              className="flex h-12 w-12 items-center justify-center rounded-2xl"
              style={{
                border: "1px solid var(--border-subtle)",
                background: "var(--icon-bg)",
                color: "var(--accent-primary)",
              }}
            >
              <Braces className="h-5 w-5" />
            </div>
          </div>

          <p
            className="text-sm leading-7 md:text-base"
            style={{ color: "var(--text-muted)" }}
          >
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
                className="workflow-item flex items-center justify-between rounded-2xl px-4 py-3 cursor-default"
                style={{
                  border: "1px solid var(--border-subtle)",
                  background: "var(--surface-subtle)",
                }}
              >
                <span
                  className="flex items-center gap-2.5 text-sm font-medium"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <CircleCheckBig
                    className="h-4 w-4"
                    style={{ color: "var(--accent-primary)" }}
                  />
                  {item}
                </span>
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ background: "var(--accent-primary)" }}
                />
              </motion.div>
            ))}
          </div>

          <div
            className="hover-glow mt-8 rounded-[1.6rem] p-5"
            style={{
              border: "1px solid var(--accent-fuchsia-border)",
              background: "var(--accent-fuchsia)",
            }}
          >
            <div className="flex items-center gap-3">
              <div
                className="flex h-11 w-11 items-center justify-center rounded-2xl"
                style={{
                  border: "1px solid var(--border-subtle)",
                  background: "var(--icon-bg)",
                  color: "var(--accent-fuchsia-text)",
                }}
              >
                <Wand2 className="h-5 w-5" />
              </div>
              <div>
                <p
                  className="text-sm uppercase tracking-[0.24em]"
                  style={{ color: "var(--accent-fuchsia-text)" }}
                >
                  UI Sensibility
                </p>
                <p
                  className="mt-1 text-base"
                  style={{ color: "var(--text-primary)" }}
                >
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
