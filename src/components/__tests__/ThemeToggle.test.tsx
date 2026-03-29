import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi, beforeEach } from "vitest";
import ThemeToggle from "../ThemeToggle";
import { ThemeProvider } from "../../context/ThemeContext";

vi.mock("framer-motion", () => ({
  motion: {
    button: ({ children, ...props }: any) => {
      const { whileTap, whileHover, ...validProps } = props;
      return <button {...validProps}>{children}</button>;
    },
    span: ({ children, ...props }: any) => {
      const { initial, animate, exit, transition, ...validProps } = props;
      return <span {...validProps}>{children}</span>;
    },
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}));

const renderWithProvider = (ui: React.ReactElement) =>
  render(<ThemeProvider>{ui}</ThemeProvider>);

describe("ThemeToggle", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute("data-theme");
  });

  it("renders the toggle button in dark mode by default", () => {
    renderWithProvider(<ThemeToggle />);
    const button = screen.getByRole("button", { name: /switch to light mode/i });
    expect(button).toBeInTheDocument();
  });

  it("switches to light mode on click and shows sun icon", () => {
    renderWithProvider(<ThemeToggle />);
    const button = screen.getByRole("button", { name: /switch to light mode/i });
    fireEvent.click(button);
    expect(screen.getByRole("button", { name: /switch to dark mode/i })).toBeInTheDocument();
  });

  it("switches back to dark mode on double click", () => {
    renderWithProvider(<ThemeToggle />);
    // Starts dark -> switch to light mode
    const darkButton = screen.getByRole("button", { name: /switch to light mode/i });
    fireEvent.click(darkButton);
    // Now light -> switch to dark mode
    const lightButton = screen.getByRole("button", { name: /switch to dark mode/i });
    fireEvent.click(lightButton);
    // Should be back to dark -> button shows "switch to light mode"
    expect(screen.getByRole("button", { name: /switch to light mode/i })).toBeInTheDocument();
  });

  it("renders in light mode when localStorage has light theme", () => {
    localStorage.setItem("portfolio-theme", "light");
    renderWithProvider(<ThemeToggle />);
    expect(screen.getByRole("button", { name: /switch to dark mode/i })).toBeInTheDocument();
  });
});
