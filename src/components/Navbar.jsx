import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Rocket } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "Projects", icon: "🚀" },
  { label: "Skills", icon: "⚡" },
  { label: "Contact", icon: "✉️" },
];

/**
 * Navbar
 * ------
 * Sticky top navigation: brand mark, section anchor links, the theme toggle,
 * and a collapsible mobile menu.
 *
 * @returns {JSX.Element}
 */
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 px-4 pt-4 md:px-6">
      <nav className="glass-panel mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-5 py-4 md:px-6">
        <motion.a
          href="#hero"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3"
        >
          <span
            className="flex h-11 w-11 items-center justify-center rounded-2xl text-sm font-black tracking-[0.24em]"
            style={{
              background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-emerald))',
              color: 'var(--cta-text)',
            }}
          >
            VK
          </span>
          <div>
            <p
              className="text-sm font-semibold uppercase tracking-[0.3em]"
              style={{ color: 'var(--text-dim)' }}
            >
              Developer
            </p>
            <p className="text-sm" style={{ color: 'var(--text-primary)' }}>
              Vimlesh Kumar
            </p>
          </div>
        </motion.a>

        <div className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={`#${item.label.toLowerCase()}`}
              className="rounded-full px-4 py-2 text-sm font-medium transition"
              style={{ color: 'var(--text-muted)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--surface-hover)';
                e.currentTarget.style.color = 'var(--text-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'var(--text-muted)';
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="mailto:vimlesh11072000@gmail.com"
            className="ml-2 flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition"
            style={{
              border: '1px solid var(--border-hover)',
              background: 'var(--accent-primary-faded)',
              color: 'var(--accent-primary-text)',
            }}
          >
            <Rocket className="h-3.5 w-3.5" />
            Let&apos;s Talk
          </a>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle navigation menu"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="rounded-xl p-2 transition"
            style={{
              border: '1px solid var(--border-subtle)',
              background: 'var(--surface-subtle)',
              color: 'var(--text-secondary)',
            }}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="mx-auto mt-3 max-w-7xl px-1 md:hidden">
          <div className="glass-panel rounded-2xl p-3">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={`#${item.label.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium transition"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <span>{item.icon}</span>
                  {item.label}
                </a>
              ))}
              <a
                href="mailto:vimlesh11072000@gmail.com"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition"
                style={{ color: 'var(--accent-primary-text)' }}
              >
                <Rocket className="h-3.5 w-3.5" />
                Let&apos;s Talk
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
