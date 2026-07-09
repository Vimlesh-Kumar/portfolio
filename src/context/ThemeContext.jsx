import React, { useEffect, useMemo, useState } from "react";
import { ThemeContext } from "./theme-context";

/**
 * ThemeProvider
 * -------------
 * Owns the app's light/dark theme state and exposes it via {@link ThemeContext}.
 *
 * Behavior:
 *  - On first render, restores a previously saved theme from `localStorage`,
 *    falling back to the user's OS `prefers-color-scheme` preference.
 *  - Persists the theme to `localStorage` and reflects it on
 *    `document.documentElement[data-theme]` so CSS variables can react to it.
 *
 * Consume the value with the `useTheme` hook from `./theme-context`.
 *
 * @param {object} props
 * @param {import("react").ReactNode} props.children
 * @returns {JSX.Element}
 */
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    /* v8 ignore start: SSR guard – window always exists in jsdom */
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("portfolio-theme");
      if (stored) return stored;
      return window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark";
    }
    return "dark";
    /* v8 ignore stop */
  });

  // Persist the selection and expose it to CSS via the root data attribute.
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  // Memoize the context value so consumers only re-render when `theme` changes,
  // not on every render of this provider.
  const value = useMemo(
    () => ({
      theme,
      toggleTheme: () =>
        setTheme((prev) => (prev === "dark" ? "light" : "dark")),
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
