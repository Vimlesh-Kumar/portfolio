import React, { useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";

const CodeRain = () => {
  const canvasRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle density based on screen dimensions
    const particleCount = Math.min(Math.floor((width * height) / 16000), 85);
    const particles = [];
    const connectionDistance = 110;
    const mouse = { x: null, y: null, radius: 180 };

    const getColors = () => {
      if (theme === "light") {
        return [
          { r: 8, g: 145, b: 178 },   // cyan-600
          { r: 5, g: 150, b: 105 },   // emerald-600
          { r: 162, g: 28, b: 175 }   // fuchsia-600
        ];
      } else {
        return [
          { r: 34, g: 211, b: 238 },  // cyan-400
          { r: 52, g: 211, b: 153 },  // emerald-400
          { r: 232, g: 121, b: 249 }  // fuchsia-400
        ];
      }
    };

    let colors = getColors();

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2 + 1; // 1px to 3px
        this.vx = (Math.random() - 0.5) * 0.35; // slow speed
        this.vy = (Math.random() - 0.5) * 0.35;
        
        const colorObj = colors[Math.floor(Math.random() * colors.length)];
        this.r = colorObj.r;
        this.g = colorObj.g;
        this.b = colorObj.b;
        this.baseOpacity = Math.random() * 0.15 + 0.12;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce on edges
        if (this.x < 0 || this.x > width) this.vx = -this.vx;
        if (this.y < 0 || this.y > height) this.vy = -this.vy;

        // Containment check
        if (this.x < 0) this.x = 0;
        if (this.x > width) this.x = width;
        if (this.y < 0) this.y = 0;
        if (this.y > height) this.y = height;

        // Pull to mouse
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            this.x += (dx / dist) * force * 0.25;
            this.y += (dy / dist) * force * 0.25;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.r}, ${this.g}, ${this.b}, ${this.baseOpacity})`;
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Render links between particles
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.update();
        p1.draw();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const opacity = (1 - dist / connectionDistance) * 0.08;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${Math.floor((p1.r + p2.r) / 2)}, ${Math.floor((p1.g + p2.g) / 2)}, ${Math.floor((p1.b + p2.b) / 2)}, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }

        // Render connection link to mouse
        if (mouse.x !== null && mouse.y !== null) {
          const dx = p1.x - mouse.x;
          const dy = p1.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius - 20) {
            const opacity = (1 - dist / (mouse.radius - 20)) * 0.12;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(${p1.r}, ${p1.g}, ${p1.b}, ${opacity})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [theme]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {/* Aurora Ambient Blobs */}
      <div 
        className="absolute w-[500px] h-[500px] rounded-full blur-[120px] opacity-[0.06] dark:opacity-[0.08] transition-all duration-1000"
        style={{
          background: "radial-gradient(circle, var(--accent-primary) 0%, transparent 70%)",
          top: "-10%",
          left: "-10%",
          animation: "float-blob-1 25s infinite ease-in-out"
        }}
      />
      <div 
        className="absolute w-[600px] h-[600px] rounded-full blur-[140px] opacity-[0.06] dark:opacity-[0.09] transition-all duration-1000"
        style={{
          background: "radial-gradient(circle, var(--accent-emerald) 0%, transparent 70%)",
          bottom: "10%",
          right: "-10%",
          animation: "float-blob-2 30s infinite ease-in-out"
        }}
      />
      <div 
        className="absolute w-[400px] h-[400px] rounded-full blur-[100px] opacity-[0.04] dark:opacity-[0.06] transition-all duration-1000"
        style={{
          background: "radial-gradient(circle, #d946ef 0%, transparent 70%)",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          animation: "float-blob-3 20s infinite ease-in-out"
        }}
      />

      {/* Grid Pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.025]"
        style={{
          backgroundImage: "linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(to right, var(--text-primary) 1px, transparent 1px)",
          backgroundSize: "64px 64px"
        }}
      />

      {/* Constellation Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
};

export default CodeRain;
