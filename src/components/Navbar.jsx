import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
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
  );
};

export default Navbar;
