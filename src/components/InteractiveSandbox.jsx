import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sliders, MousePointer2, Paintbrush, Zap } from "lucide-react";

/**
 * InteractiveSandbox
 * ------------------
 * A self-contained "live playground" demo: controls let visitors tweak a
 * preview element's corner radius, accent color, and a click counter in real
 * time — a lightweight showcase of interactive UI state.
 *
 * NOTE: Standalone component (not currently mounted in the page). Kept and
 * fully tested so it can be dropped into a section when desired.
 *
 * @returns {JSX.Element}
 */
const InteractiveSandbox = () => {
  const [radius, setRadius] = useState(24);
  const [color, setColor] = useState("cyan");
  const [count, setCount] = useState(0);

  const colors = {
    cyan: "var(--accent-primary)",
    emerald: "var(--accent-emerald)",
    fuchsia: "var(--accent-fuchsia-text)",
  };

  const activeColor = colors[color];

  return (
    <div 
      className="relative z-10 overflow-hidden rounded-3xl transition-all duration-500" 
      style={{ 
        background: "rgba(6, 8, 22, 0.7)", 
        border: "1px solid var(--border-subtle)", 
        backdropFilter: "blur(16px)",
        boxShadow: `0 20px 40px -10px ${activeColor}20`
      }}
    >
      {/* Header */}
      <div className="border-b px-5 py-3 flex items-center justify-between" style={{ borderColor: "var(--border-subtle)", background: "rgba(255, 255, 255, 0.02)" }}>
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4" style={{ color: activeColor }} />
          <span className="text-xs font-bold tracking-wider text-gray-200 uppercase">Live UI Sandbox</span>
        </div>
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
        </div>
      </div>

      {/* Live Preview Area */}
      <div className="p-8 flex items-center justify-center min-h-[220px] relative" style={{ background: "radial-gradient(circle at center, rgba(255,255,255,0.03) 0%, transparent 100%)" }}>
        {/* Grid Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "16px 16px" }}></div>
        
        <motion.div
          layout
          className="relative flex flex-col items-center justify-center gap-4 p-6 w-full max-w-[260px] cursor-pointer group"
          style={{
            borderRadius: `${radius}px`,
            border: `1px solid ${activeColor}50`,
            background: `linear-gradient(135deg, ${activeColor}15, transparent)`,
            boxShadow: `0 8px 32px ${activeColor}20`
          }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          whileHover={{ scale: 1.02, boxShadow: `0 12px 40px ${activeColor}30` }}
        >
          <div className="w-12 h-12 rounded-full flex items-center justify-center mb-1 group-hover:scale-110 transition-transform duration-300" style={{ background: `${activeColor}30` }}>
            <MousePointer2 className="w-6 h-6" style={{ color: activeColor }} />
          </div>
          <div className="text-center">
            <h4 className="text-sm font-bold text-white mb-1">Interactive Card</h4>
            <p className="text-xs text-gray-400">Tweak the settings below to see reactive component state in action.</p>
          </div>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setCount(c => c + 1)}
            className="mt-3 px-5 py-2.5 rounded-full text-xs font-bold text-white transition-colors shadow-lg relative overflow-hidden"
            style={{ background: activeColor }}
          >
            <span className="relative z-10">Interact: {count}</span>
            <div className="absolute inset-0 bg-white opacity-0 hover:opacity-20 transition-opacity"></div>
          </motion.button>
        </motion.div>
      </div>

      {/* Controls Container */}
      <div className="border-t p-6 grid gap-6" style={{ borderColor: "var(--border-subtle)", background: "rgba(0, 0, 0, 0.3)" }}>
        
        {/* Radius Slider */}
        <div>
          <div className="flex justify-between items-center text-xs text-gray-400 mb-3">
            <div className="flex items-center gap-2">
              <Sliders className="w-3.5 h-3.5" />
              <span className="font-medium text-gray-300">Border Radius</span>
            </div>
            <span className="font-mono bg-white/5 px-2 py-0.5 rounded">{radius}px</span>
          </div>
          <input 
            type="range" 
            min="0" 
            max="60" 
            value={radius} 
            onChange={(e) => setRadius(parseInt(e.target.value))}
            className="w-full h-1.5 bg-gray-700/50 rounded-lg appearance-none cursor-pointer outline-none overflow-hidden"
            style={{ 
              boxShadow: `inset 0 0 0 1px rgba(255,255,255,0.05)`,
              accentColor: activeColor
            }}
          />
        </div>

        {/* Color Picker */}
        <div>
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
            <Paintbrush className="w-3.5 h-3.5" />
            <span className="font-medium text-gray-300">Theme Accent</span>
          </div>
          <div className="flex gap-4">
            {Object.keys(colors).map(c => (
              <button
                key={c}
                onClick={() => setColor(c)}
                className={`group relative w-8 h-8 rounded-full transition-all duration-300 flex items-center justify-center ${color === c ? 'scale-110' : 'hover:scale-105 opacity-60 hover:opacity-100'}`}
                style={{ background: colors[c] }}
                aria-label={`Set color to ${c}`}
              >
                {color === c && (
                  <motion.div 
                    layoutId="activeColorRing"
                    className="absolute inset-0 rounded-full border-2 border-white pointer-events-none"
                    style={{ padding: '2px', marginLeft: '-2px', marginTop: '-2px', width: '36px', height: '36px' }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default InteractiveSandbox;
