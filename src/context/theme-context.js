import { createContext, useContext } from "react";

/**
 * `localStorage` key under which the active theme is persisted.
 *
 * Namespaced to this app so it can't collide with another site sharing the
 * same origin, and so the cross-tab `storage` listener only reacts to *our*
 * theme changes. This is the single source of truth — import it everywhere the
 * key is needed rather than repeating the string literal.
 *
 * @type {string}
 */
export const THEME_STORAGE_KEY = "vimlesh-portfolio:theme";

/**
 * @typedef {"dark" | "light"} Theme
 *
 * @typedef {object} ThemeContextValue
 * @property {Theme} theme - The currently active theme.
 * @property {() => void} toggleTheme - Switches between `"dark"` and `"light"`.
 */

/**
 * React context carrying the active theme and a toggle function.
 *
 * Lives in a component-free module (separate from `ThemeProvider`) so that the
 * provider file only exports a component. This keeps Vite Fast Refresh happy and
 * lets the context + hook be imported without pulling in the provider.
 *
 * @type {import("react").Context<ThemeContextValue | undefined>}
 */
export const ThemeContext = createContext(undefined);

/**
 * Access the current theme and toggle function.
 *
 * @throws {Error} If called outside of a `ThemeProvider`.
 * @returns {ThemeContextValue}
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used inside ThemeProvider");
  return context;
};
