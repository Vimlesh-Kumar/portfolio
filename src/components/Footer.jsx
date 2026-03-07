import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 font-medium text-sm">
          © {new Date().getFullYear()} Vimlesh Kumar. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a
            href="https://github.com/Vimlesh-Kumar"
            className="text-gray-400 hover:text-indigo-600 transition-colors"
            target="_blank"
            rel="noreferrer"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/vimlesh11"
            className="text-gray-400 hover:text-indigo-600 transition-colors"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:vimlesh11072000@gmail.com"
            className="text-gray-400 hover:text-indigo-600 transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
