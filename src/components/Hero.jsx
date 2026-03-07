import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, CalendarDays } from "lucide-react";
import profileImg from "../assets/profile_real_3.jpg";

const Hero = () => {
  const expStartDate = new Date("2023-01-01");
  const yearsOfExperience = Math.floor(
    (new Date() - expStartDate) / (1000 * 60 * 60 * 24 * 365.25),
  );

  return (
    <section className="hero-gradient relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="hero-overlay absolute inset-0"></div>
      <div className="relative z-10 px-6 w-full max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-16 md:gap-12 mt-8 md:mt-0">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left w-full"
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
            Specializing in Vue, Node.js, .NET, and Azure microservices. I help
            modernize legacy systems and build robust, beautifully scalable
            digital solutions.
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
              rel="noreferrer"
              className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 hover:scale-110 transition-all border border-white/20 shadow-lg"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/vimlesh11"
              target="_blank"
              rel="noreferrer"
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
          className="flex-1 relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[420px] mx-auto md:mr-0 z-10 block"
        >
          <div className="absolute inset-x-0 -bottom-10 h-20 bg-white/20 blur-[100px] rounded-full"></div>
          <div className="relative bg-white/10 backdrop-blur-xl p-3 rounded-[2rem] md:rounded-[2.5rem] border border-white/20 shadow-2xl group">
            <img
              src={profileImg}
              alt="Vimlesh Kumar"
              className="w-full h-[320px] md:h-[480px] object-cover rounded-[1.5rem] md:rounded-[2rem] transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 rounded-[2rem] md:rounded-[2.5rem] border border-white/20 bg-gradient-to-t from-indigo-900/60 via-transparent to-transparent opacity-80 pointer-events-none"></div>
          </div>

          {/* Fancy Floating Elements */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-4 sm:-right-8 bg-white/10 backdrop-blur-xl border border-white/20 p-3 md:p-4 rounded-2xl shadow-xl z-20"
          >
            <div className="flex items-center gap-3 md:gap-4">
              <div className="p-2 md:p-3 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-xl text-white shadow-inner">
                <CalendarDays className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <p className="text-white text-xs md:text-sm font-bold">
                  {yearsOfExperience}+ Years
                </p>
                <p className="text-indigo-200 text-[10px] md:text-xs font-semibold uppercase tracking-widest">
                  Experience
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
