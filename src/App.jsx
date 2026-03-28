import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 26,
    restDelta: 0.001,
  });

  return (
    <div className="relative min-h-screen overflow-x-hidden" style={{ backgroundColor: 'var(--surface-bg)', color: 'var(--text-secondary)' }}>
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'var(--overlay-gradient)' }}
      />

      <motion.div
        className="fixed inset-x-0 top-0 z-50 h-1 origin-left"
        style={{
          scaleX,
          background: `linear-gradient(to right, var(--progress-from), var(--progress-via), var(--progress-to))`,
        }}
      />

      <Navbar />

      <main>
        <Hero />

        <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-6 pb-12 md:px-8">
          <Projects />
          <Skills />
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
