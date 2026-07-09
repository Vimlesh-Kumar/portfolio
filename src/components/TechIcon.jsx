import React from "react";
import { brandColors } from "../lib/brandColors";
import { icons } from "../lib/techIcons";

/**
 * TechIcon
 * --------
 * Renders a brand-colored SVG icon for a technology / skill by name.
 *
 * Name matching is case-insensitive and whitespace-trimmed. When no icon exists
 * for the given name a small brand-cyan square is rendered as a graceful
 * fallback (with the raw name in a `title` for accessibility).
 *
 * @param {object} props
 * @param {string} props.name - Technology / skill label (e.g. `"Vue 3"`).
 * @param {number} [props.size=16] - Icon width & height in pixels.
 * @param {string} [props.className=""] - Extra classes applied to the wrapper.
 * @returns {JSX.Element}
 */
const TechIcon = ({ name, size = 16, className = "" }) => {
  const normalizedKey = name ? name.toLowerCase().trim() : "";
  const iconFn = icons[normalizedKey];

  if (!iconFn) {
    // Fallback: simple colored square dot if icon isn't found
    return (
      <span 
        className={`inline-block h-3.5 w-3.5 rounded-sm bg-cyan-400 ${className}`} 
        style={{ verticalAlign: "middle" }}
        title={name}
      />
    );
  }

  return (
    <span 
      className={`inline-flex items-center justify-center ${className}`}
      style={{
        verticalAlign: "middle",
        // Every catalogued icon has a matching brand color; an undefined value
        // (e.g. a future icon added without one) simply inherits the color.
        color: brandColors[normalizedKey],
      }}
    >
      {iconFn(size)}
    </span>
  );
};

export default TechIcon;
