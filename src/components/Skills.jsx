import React from "react";
import { motion } from "framer-motion";
import { MonitorPlay, Code, Cloud, Database } from "lucide-react";
import { fadeUp } from "./About";

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

const Skills = () => {
  return (
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
  );
};

export default Skills;
