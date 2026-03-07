import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

const App = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="bg-gray-50 min-h-screen text-gray-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-white z-50 origin-[0%]"
        style={{ scaleX }}
      />

      <Navbar />
      <Hero />

      <main className="max-w-7xl mx-auto px-6 py-24 space-y-32">
        <About />
        <Experience />
        <Projects />
        <Skills />
      </main>

      <Footer />
    </div>
  );
};

export default App;
