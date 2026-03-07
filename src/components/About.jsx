import React from "react";
import { motion } from "framer-motion";
import { MapPin, Award } from "lucide-react";

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const About = () => {
  return (
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
            As a software engineer deeply integrated into product architecture,
            I hold a proven record in migrating legacy systems—bridging old
            architectures seamlessly into modern Vue.js and robust .NET/Node.js
            microservices.
          </p>
          <p>
            My fundamental approach to engineering insists on clean code,
            automated validation workflows (reducing manual QA pipelines by up
            to 60%), and deploying incredibly scalable Azure infrastructure
            modules utilized by massive concurrent user networks.
          </p>
          <p>
            I thrive in agile executions and believe modern technology should
            actively resolve enterprise blockages, rather than just acting as a
            digital facelift. Let’s build something powerful.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
