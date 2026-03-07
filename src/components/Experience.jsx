import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { fadeUp } from "./About";

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

const Experience = () => {
  return (
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
                  <p className="text-indigo-600 font-medium">{exp.company}</p>
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
  );
};

export default Experience;
