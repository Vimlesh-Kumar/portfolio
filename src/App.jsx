import React, { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  MapPin,
  Award,
  Menu,
  X,
  ChevronRight,
  MonitorPlay,
  Cloud,
  Database,
  Download,
  CalendarDays,
} from "lucide-react";
import profileImg from "./assets/profile_real_3.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Calculate experience dynamically from Jan 2023
  const expStartDate = new Date("2023-01-01");
  const yearsOfExperience = Math.floor(
    (new Date() - expStartDate) / (1000 * 60 * 60 * 24 * 365.25),
  );

  const skills = [
    {
      category: "Frontend",
      items: ["Vue.js", "Nuxt.js", "React", "Angular", "Tailwind CSS"],
      icon: <MonitorPlay className="w-5 h-5" />,
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", ".NET", "REST API", "Microservices"],
      icon: <Code className="w-5 h-5" />,
    },
    {
      category: "Cloud / DevOps",
      items: ["Azure", "Azure Functions", "CI/CD", "Git/GitHub"],
      icon: <Cloud className="w-5 h-5" />,
    },
    {
      category: "Databases",
      items: ["SQL Server", "PostgreSQL", "MySQL", "MongoDB", "Prisma"],
      icon: <Database className="w-5 h-5" />,
    },
  ];

  const experience = [
    {
      role: "Full Stack Developer",
      company: "ArguSoft India",
      period: "Jan 2023 - Present",
      location: "Gandhinagar, Gujarat",
      highlights: [
        "Migrated 10+ modules from Vue 2 to Vue 3 (Composition API), vastly improving maintainability and performance.",
        "Engineered dynamic UI components with Nuxt.js serving over 100+ concurrent reporting users.",
        "Built and integrated robust RESTful APIs using Node.js and SQL Server running inside microservice containers.",
        "Automated critical workflows using Cypress, yielding a 60% reduction in manual QA time.",
        "Led the architectural migration of high-throughput Data Import services from Node.js to .NET.",
        "Designed and deployed auto-scaling Azure microservices to ensure up to 99.9% uptime during load peaks.",
      ],
    },
    {
      role: "Software Developer Intern",
      company: "ArguSoft India",
      period: "Jan 2023 - Mar 2023",
      location: "Gandhinagar, Gujarat",
      highlights: [
        "Engineered an automated invoice & tax generation system utilizing Node.js & PostgreSQL.",
        "Developed a responsive contact management system in Vue.js featuring advanced search and dynamic filtering.",
      ],
    },
  ];

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

  return (
    <div className="bg-gray-50 min-h-screen text-gray-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-white z-50 origin-[0%]"
        style={{ scaleX }}
      />

      {/* Modern NavBar inside Hero */}
      <nav className="absolute top-0 left-0 right-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center text-white/90">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold tracking-tight text-white hover:text-white transition-colors cursor-pointer"
          >
            VK
          </motion.div>

          <div className="hidden md:flex gap-8 items-center text-sm font-medium">
            {["About", "Experience", "Projects", "Skills"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/10 backdrop-blur-xl border-t border-white/10">
            <div className="flex flex-col p-4 text-white">
              {["About", "Experience", "Projects", "Skills"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="py-3 px-4 hover:bg-white/10 rounded-lg font-medium"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Minimalist Vivid Hero Section */}
      <section className="hero-gradient relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="hero-overlay absolute inset-0"></div>
        <div className="relative z-10 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 mt-20 md:mt-0">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            <p className="text-white/80 font-medium tracking-widest uppercase text-sm mb-4">
              Full Stack Developer | Architect
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight drop-shadow-lg">
              Vimlesh Kumar
            </h1>
            <h2 className="text-xl md:text-3xl text-white/90 font-medium mb-6 drop-shadow-md">
              Vue.js & Node.js Specialist | .NET Infrastructure
            </h2>
            <p className="text-lg text-white/80 max-w-xl mx-auto md:mx-0 leading-relaxed mb-10 drop-shadow-sm">
              Specializing in Vue, Node.js, .NET, and Azure microservices. I
              help modernize legacy systems and build robust, beautifully
              scalable digital solutions.
            </p>

            <div className="flex items-center justify-center md:justify-start gap-2 mb-10">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-white/90">
                Available for new projects
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 flex-wrap">
              <a
                href="#projects"
                className="w-full sm:w-auto px-6 py-3.5 bg-white text-indigo-600 rounded-lg font-bold hover:bg-gray-50 hover:-translate-y-1 transition-all shadow-[0_4px_30px_rgba(255,255,255,0.3)] text-center ring-2 ring-white/50 ring-offset-2 ring-offset-transparent"
              >
                View My Work
              </a>
              <a
                href="mailto:vimlesh11072000@gmail.com"
                className="w-full sm:w-auto px-6 py-3.5 bg-indigo-600/30 backdrop-blur-md border border-white/30 text-white rounded-lg font-bold hover:bg-indigo-600/50 hover:border-white/50 hover:-translate-y-1 transition-all shadow-[0_4px_30px_rgba(0,0,0,0.1)] text-center flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" /> Get in Touch
              </a>
              <a
                href="https://drive.google.com/uc?export=download&id=1M6sDmm16j4LEKSjINYaiScjDA2ytz7_v"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 bg-indigo-600/30 backdrop-blur-md border border-white/30 text-white rounded-lg font-bold hover:bg-indigo-600/50 hover:border-white/50 hover:-translate-y-1 transition-all shadow-[0_4px_30px_rgba(0,0,0,0.1)] text-center flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" /> Resume
              </a>
            </div>

            <div className="flex justify-center md:justify-start gap-5 mt-10">
              <a
                href="https://github.com/Vimlesh-Kumar"
                target="_blank"
                className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 hover:scale-110 transition-all border border-white/20 shadow-lg"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/vimlesh11"
                target="_blank"
                className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 hover:scale-110 transition-all border border-white/20 shadow-lg"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring" }}
            className="flex-1 relative w-full max-w-[320px] md:max-w-[420px] mx-auto md:mr-0 z-10 hidden md:block"
          >
            <div className="absolute inset-x-0 -bottom-10 h-20 bg-white/20 blur-[100px] rounded-full"></div>
            <div className="relative bg-white/10 backdrop-blur-xl p-3 rounded-[2.5rem] border border-white/20 shadow-2xl group">
              <img
                src={profileImg}
                alt="Vimlesh Kumar"
                className="w-full h-[480px] object-cover rounded-[2rem] transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 rounded-[2.5rem] border border-white/20 bg-gradient-to-t from-indigo-900/60 via-transparent to-transparent opacity-80 pointer-events-none"></div>
            </div>

            {/* Fancy Floating Elements */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-8 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-xl z-20"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-xl text-white shadow-inner">
                  <CalendarDays size={24} />
                </div>
                <div>
                  <p className="text-white text-sm font-bold">
                    {yearsOfExperience}+ Years
                  </p>
                  <p className="text-indigo-200 text-xs font-semibold uppercase tracking-widest">
                    Experience
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-24 space-y-32">
        {/* About Section */}
        <section id="about" className="scroll-mt-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12"
          >
            <div className="lg:col-span-4">
              <h2 className="text-sm font-bold tracking-widest text-indigo-600 uppercase mb-3">
                01. About Me
              </h2>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Building Solutions That Scale
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-600 font-medium bg-gray-100/50 p-4 rounded-xl border border-gray-200/50">
                  <MapPin className="text-indigo-500 shrink-0" size={20} />
                  Based in Gandhinagar, Gujarat
                </div>
                <div className="flex items-center gap-3 text-gray-600 font-medium bg-gray-100/50 p-4 rounded-xl border border-gray-200/50">
                  <Award className="text-indigo-500 shrink-0" size={20} />
                  Employee of the Month (Sep 2025)
                </div>
              </div>
            </div>
            <div className="lg:col-span-8 bg-white rounded-2xl p-8 lg:p-10 shadow-sm border border-gray-100 leading-relaxed text-gray-600 space-y-6 text-lg">
              <p>
                As a software engineer deeply integrated into product
                architecture, I hold a proven record in migrating legacy
                systems—bridging old architectures seamlessly into modern Vue.js
                and robust .NET/Node.js microservices.
              </p>
              <p>
                My fundamental approach to engineering insists on clean code,
                automated validation workflows (reducing manual QA pipelines by
                up to 60%), and deploying incredibly scalable Azure
                infrastructure modules utilized by massive concurrent user
                networks.
              </p>
              <p>
                I thrive in agile executions and believe modern technology
                should actively resolve enterprise blockages, rather than just
                acting as a digital facelift. Let’s build something powerful.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Experience Timeline */}
        <section id="experience" className="scroll-mt-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <div className="mb-12">
              <h2 className="text-sm font-bold tracking-widest text-indigo-600 uppercase mb-3">
                02. Experience
              </h2>
              <h3 className="text-3xl font-bold text-gray-900">
                Professional Journey
              </h3>
            </div>

            <div className="space-y-8 relative">
              {/* Vertical line indicator */}
              <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-gray-200"></div>

              {experience.map((exp, index) => (
                <div
                  key={index}
                  className="relative flex flex-col md:flex-row gap-6 md:gap-12 group"
                >
                  <div className="md:w-48 shrink-0 relative">
                    {/* Circle Node */}
                    <div className="hidden md:flex absolute -right-[29px] top-6 w-4 h-4 rounded-full bg-white border-4 border-indigo-100 group-hover:border-indigo-500 transition-colors z-10"></div>
                    <div className="bg-white px-5 py-4 border border-gray-100 rounded-xl shadow-sm">
                      <p className="font-mono text-sm text-indigo-600 font-bold mb-1">
                        {exp.period}
                      </p>
                      <p className="text-sm text-gray-500 font-medium">
                        {exp.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex-1 bg-white rounded-2xl p-8 border border-gray-100 shadow-sm transition-all hover:shadow-md hover:border-indigo-100">
                    <h4 className="text-xl font-bold text-gray-900 mb-1">
                      {exp.role}
                    </h4>
                    <div className="flex items-center justify-between mb-6">
                      <p className="text-indigo-600 font-medium">
                        {exp.company}
                      </p>
                      {exp.role === "Full Stack Developer" && (
                        <span className="bg-indigo-50 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full border border-indigo-100 hidden sm:inline-flex items-center gap-1 shadow-sm">
                          ✨ 10+ Modules Migrated
                        </span>
                      )}
                    </div>
                    <ul className="space-y-3">
                      {exp.highlights.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-gray-600"
                        >
                          <ChevronRight className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Open Source / GitHub Projects */}
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

        {/* Skills Board */}
        <section id="skills" className="scroll-mt-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <div className="mb-12 text-center">
              <h2 className="text-sm font-bold tracking-widest text-indigo-600 uppercase mb-3">
                04. Technical Capabilities
              </h2>
              <h3 className="text-3xl font-bold text-gray-900">
                Core Architecture Stack
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center"
                >
                  <div className="inline-flex bg-indigo-50 text-indigo-600 p-3 rounded-xl mb-4">
                    {skill.icon}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">
                    {skill.category}
                  </h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 bg-gray-50 text-gray-700 text-sm font-medium rounded-lg border border-gray-100"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>
      </main>

      {/* Clean Minimal Site Footer */}
      <footer className="bg-white border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 font-medium text-sm">
            © {new Date().getFullYear()} Vimlesh Kumar. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="https://github.com/Vimlesh-Kumar"
              className="text-gray-400 hover:text-indigo-600 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/vimlesh11"
              className="text-gray-400 hover:text-indigo-600 transition-colors"
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
    </div>
  );
};

export default App;
