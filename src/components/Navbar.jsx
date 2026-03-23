import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = ["Projects", "Skills", "Contact"];

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
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300 to-sky-500 text-sm font-black tracking-[0.24em] text-slate-950">
            VK
          </span>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
              Developer
            </p>
            <p className="text-sm text-white">Vimlesh Kumar</p>
          </div>
        </motion.a>

        <div className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/8 hover:text-white"
            >
              {item}
            </a>
          ))}
          <a
            href="mailto:vimlesh11072000@gmail.com"
            className="ml-2 rounded-full border border-cyan-300/30 bg-cyan-300/12 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300/50 hover:bg-cyan-300/18"
          >
            Let&apos;s Talk
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="rounded-xl border border-white/10 bg-white/5 p-2 text-slate-200 transition hover:bg-white/10 md:hidden"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="mx-auto mt-3 max-w-7xl px-1 md:hidden">
          <div className="glass-panel rounded-2xl p-3">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/8"
                >
                  {item}
                </a>
              ))}
              <a
                href="mailto:vimlesh11072000@gmail.com"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/12"
              >
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
