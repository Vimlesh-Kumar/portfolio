import React from "react";
import { motion } from "framer-motion";
import { Rocket, Github, Package, Layers3 } from "lucide-react";

/**
 * Quick-glance impact metrics.
 *
 * Values are grounded in content shown elsewhere on the site (projects list,
 * GitHub profile, maintained libraries). Update these as the portfolio grows.
 *
 * @type {ReadonlyArray<{ value: string, label: string, icon: React.ComponentType<{ className?: string }> }>}
 */
const stats = [
  { value: "11", label: "Projects Shipped", icon: Rocket },
  { value: "27", label: "Public Repositories", icon: Github },
  { value: "1", label: "npm Package Co-Maintained (squel.js)", icon: Package },
  { value: "15+", label: "Technologies in the Toolbelt", icon: Layers3 },
];

/**
 * Stats
 * -----
 * A compact "impact" band of headline metrics rendered as glass cards. Reveals
 * on scroll (consistent with the rest of the page) and lifts each card on hover.
 *
 * @returns {JSX.Element}
 */
const Stats = () => {
  return (
    <section id="stats" aria-label="Impact at a glance" className="scroll-mt-28">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6"
      >
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="skill-card glass-panel flex flex-col items-center justify-center gap-2 rounded-3xl p-6 text-center md:p-8"
            >
              <div
                className="mb-1 flex h-11 w-11 items-center justify-center rounded-2xl"
                style={{
                  border: "1px solid var(--border-subtle)",
                  background: "var(--icon-bg)",
                  color: "var(--accent-primary)",
                }}
              >
                <Icon className="h-5 w-5" />
              </div>
              <span
                className="shimmer-text text-4xl font-bold tracking-tight md:text-5xl"
                style={{ color: "var(--text-primary)" }}
              >
                {stat.value}
              </span>
              <span
                className="text-xs font-medium leading-snug md:text-sm"
                style={{ color: "var(--text-muted)" }}
              >
                {stat.label}
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Stats;
