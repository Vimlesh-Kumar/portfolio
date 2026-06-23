import React from "react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const socialLinks = [
  {
    href: "https://github.com/Vimlesh-Kumar",
    label: "GitHub",
    icon: Github,
  },
  {
    href: "https://linkedin.com/in/vimlesh11",
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: "mailto:vimlesh11072000@gmail.com",
    label: "Email",
    icon: Mail,
  },
];

const Footer = () => {
  return (
    <footer className="px-6 pb-8 pt-2 md:px-8">
      <div
        className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 rounded-2xl px-5 py-5 text-sm md:flex-row"
        style={{
          border: '1px solid var(--border-subtle)',
          background: 'var(--footer-bg)',
          color: 'var(--text-dim)',
        }}
      >
        <p className="flex items-center gap-1.5">
          © {new Date().getFullYear()} Vimlesh Kumar. Built with
          <Heart className="h-3.5 w-3.5" style={{ color: 'var(--accent-primary)' }} />
          React & Tailwind.
        </p>
        <div className="flex items-center gap-3">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={link.label}
                className="rounded-full p-2.5 transition"
                style={{
                  border: '1px solid var(--border-subtle)',
                  background: 'var(--surface-subtle)',
                  color: 'var(--text-muted)',
                }}
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
