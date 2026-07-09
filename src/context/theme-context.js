import { createContext, useContext } from "react";

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
