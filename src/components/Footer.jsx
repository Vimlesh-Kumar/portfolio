import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="px-6 pb-8 pt-2 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 rounded-2xl border border-white/10 bg-slate-950/40 px-5 py-5 text-sm text-slate-400 md:flex-row">
        <p>© {new Date().getFullYear()} Vimlesh Kumar. Built with React and Tailwind.</p>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Vimlesh-Kumar"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-full border border-white/10 bg-white/5 p-2.5 text-slate-300 transition hover:border-cyan-300/40 hover:text-white"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://linkedin.com/in/vimlesh11"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-full border border-white/10 bg-white/5 p-2.5 text-slate-300 transition hover:border-cyan-300/40 hover:text-white"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="mailto:vimlesh11072000@gmail.com"
            aria-label="Email"
            className="rounded-full border border-white/10 bg-white/5 p-2.5 text-slate-300 transition hover:border-cyan-300/40 hover:text-white"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
