/**
 * brandColors
 * -----------
 * Canonical map of technology / skill names to their official brand colors.
 *
 * Keys are stored lowercase and are matched case-insensitively (see
 * {@link getBrandColor}). Several aliases point at the same color on purpose
 * (e.g. `"vue"`, `"vue 3"`, `"vue.js"`) so callers can pass whatever label the
 * design copy uses without normalizing it first.
 *
 * This data intentionally lives outside of any React component so it can be
 * imported by presentational components (TechIcon, Skills, Projects) and unit
 * tested in isolation.
 *
 * @type {Readonly<Record<string, string>>}
 */
export const brandColors = Object.freeze({
  vue: "#41B883",
  "vue 3": "#41B883",
  "vue.js": "#41B883",
  nuxt: "#00C58E",
  "nuxt.js": "#00C58E",
  react: "#61DAFB",
  tailwind: "#38BDF8",
  "tailwind css": "#38BDF8",
  typescript: "#3178C6",
  javascript: "#F7DF1E",
  "vanilla js": "#F7DF1E",
  framer: "#F43F5E",
  "framer motion": "#F43F5E",
  node: "#339933",
  "node.js": "#339933",
  express: "#A3A3A3",
  ".net": "#512BD4",
  postgresql: "#336791",
  mongodb: "#47A248",
  prisma: "#5A67D8",
  azure: "#0089D6",
  microservices: "#A78BFA",
  "rest api": "#34D399",
  "rest apis": "#34D399",
  websockets: "#FB7185",
  git: "#F05032",
  github: "#E2E8F0",
  vuetify: "#1867C0",
  sql: "#38BDF8",
  "sql server": "#38BDF8",
  mysql: "#00758F",
  cryptography: "#F59E0B",
  "pgp/gpg": "#F59E0B",
  "open source": "#10B981",
  "npm library": "#CB3837",
  html5: "#E34F26",
  css3: "#1572B6",
  logic: "#EC4899",
  parsing: "#F43F5E",
  "ci/cd": "#10B981",
  deployments: "#F59E0B",
  "scalable services": "#06B6D4",
  vite: "#FFD600",
  "regex apis": "#EC4899",
});

/**
 * Fallback color used when a name is empty/missing — a translucent cyan that
 * blends with the site's default accent so unknown tags still look intentional.
 * @type {string}
 */
export const DEFAULT_BRAND_COLOR = "rgba(34, 211, 238, 0.4)";

/**
 * Fallback color for a name that has no dedicated brand color — the solid site
 * accent (cyan-400), so recognized-but-uncatalogued tags stay on-brand.
 * @type {string}
 */
export const ACCENT_FALLBACK_COLOR = "#22d3ee";

/**
 * Resolve the brand color for a given technology / skill name.
 *
 * Matching is case-insensitive and trims surrounding whitespace, so
 * `"  Vue 3 "` resolves the same as `"vue 3"`.
 *
 * @param {string} [name] - The technology or skill label (any casing).
 * @returns {string} A CSS color string:
 *   - {@link DEFAULT_BRAND_COLOR} when `name` is falsy,
 *   - the matched brand color when found,
 *   - {@link ACCENT_FALLBACK_COLOR} otherwise.
 */
export const getBrandColor = (name) => {
  if (!name) return DEFAULT_BRAND_COLOR;
  const normalizedKey = name.toLowerCase().trim();
  return brandColors[normalizedKey] || ACCENT_FALLBACK_COLOR;
};
