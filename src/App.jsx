import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CodeRain from './components/CodeRain';

/**
 * App
 * ---
 * Root layout for the portfolio. Composes the navigation, the animated
 * background (CodeRain), a scroll-progress indicator, the main content sections
 * (Hero, Projects, Skills, Contact), and the footer.
 *
 * Also tracks the cursor and exposes it as CSS custom properties
 * (`--mouse-x` / `--mouse-y`) that drive the spotlight hover effect.
 *
 * @returns {JSX.Element}
 */
const App = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 26,
    restDelta: 0.001,
  });

  const [mousePos, setMousePos] = useState({ x: '50%', y: '50%' });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: `${e.clientX}px`,
        y: `${e.clientY}px`,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className="relative min-h-screen overflow-x-hidden spotlight-container" 
      style={{ 
        backgroundColor: 'var(--surface-bg)', 
        color: 'var(--text-secondary)',
        '--mouse-x': mousePos.x,
        '--mouse-y': mousePos.y
      }}
    >
      <CodeRain />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'var(--overlay-gradient)', zIndex: 0 }}
      />

      <motion.div
        className="fixed inset-x-0 top-0 z-50 h-1 origin-left"
        style={{
          scaleX,
          background: `linear-gradient(to right, var(--progress-from), var(--progress-via), var(--progress-to))`,
        }}
      />

      <Navbar />

      <main className="relative z-10">
        <Hero />

        <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-6 pb-12 md:px-8">
          <Stats />
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
