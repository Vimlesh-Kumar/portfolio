import React from "react";
import { motion } from "framer-motion";
import { Code, ExternalLink } from "lucide-react";
import { fadeUp } from "./About";

const githubProjects = [
  {
    title: "Weather App",
    tech: ["TypeScript", "React"],
    description:
      "Real-time weather tracking application built with modern TypeScript and API integrations.",
    link: "https://github.com/Vimlesh-Kumar/weather-website",
  },
  {
    title: "Tatkal Booking Reminder",
    tech: ["Node.js", "Express", "HTML"],
    description:
      "Full-stack Node.js project deployed on Render. Includes an Express backend (REST APIs) and a public frontend.",
    link: "https://github.com/Vimlesh-Kumar/Tatkal-Booking-Reminder",
  },
  {
    title: "Zync Audio Sync",
    tech: ["TypeScript", "WebSockets"],
    description:
      "Sophisticated multi-device audio synchronization tool for seamless playback latency matching across clients.",
    link: "https://github.com/Vimlesh-Kumar/zync",
  },
  {
    title: "Student Result Portal",
    tech: ["Vue.js", "Vuex"],
    description:
      "A comprehensive internal portal for managing and displaying student academic results, rankings, and datasets.",
    link: "https://github.com/Vimlesh-Kumar/student-result-portel",
  },
  {
    title: "Vue JSON Tree View",
    tech: ["Vue.js", "Open Source"],
    description:
      "A highly customizable JSON Tree View Component for rendering complex backend models directly into Vue applications.",
    link: "https://github.com/Vimlesh-Kumar/vue-json-tree-view",
  },
  {
    title: "Dynamic Task Manager",
    tech: ["JavaScript", "DOM"],
    description:
      "A clean, highly efficient, and dependency-free task management system written in pure, scalable JavaScript.",
    link: "https://github.com/Vimlesh-Kumar/Task-App",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
      >
        <div className="mb-12">
          <h2 className="text-sm font-bold tracking-widest text-indigo-600 uppercase mb-3">
            03. Open Source & Repos
          </h2>
          <h3 className="text-3xl font-bold text-gray-900">
            Featured GitHub Projects
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {githubProjects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:border-indigo-200 flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="bg-indigo-50 p-3 rounded-xl text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <Code className="w-6 h-6" />
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 transition-colors" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                {project.title}
              </h4>
              <p className="text-gray-600 leading-relaxed mb-8 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-50 text-gray-600 text-xs font-semibold rounded-md border border-gray-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
