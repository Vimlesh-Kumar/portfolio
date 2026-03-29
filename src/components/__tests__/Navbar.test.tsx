import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Navbar from "../Navbar";
import { ThemeProvider } from "../../context/ThemeContext";

vi.mock("framer-motion", () => ({
  motion: {
    a: ({ children, ...props }: any) => {
      const { initial, animate, ...validProps } = props;
      return <a {...validProps}>{children}</a>;
    },
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

const renderWithProviders = (ui: React.ReactElement) =>
  render(<ThemeProvider>{ui}</ThemeProvider>);

describe("Navbar", () => {
  it("renders the portfolio brand", () => {
    renderWithProviders(<Navbar />);
    expect(screen.getByText("VK")).toBeInTheDocument();
    expect(screen.getByText("Vimlesh Kumar")).toBeInTheDocument();
  });

  it("contains desktop navigation links", () => {
    renderWithProviders(<Navbar />);
    expect(screen.getAllByText("Projects").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Skills").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Contact").length).toBeGreaterThan(0);
  });

  it("toggles the mobile menu", () => {
    renderWithProviders(<Navbar />);
    const button = screen.getByRole("button", {
      name: "Toggle navigation menu",
    });

    fireEvent.click(button);
    expect(screen.getAllByText("Let's Talk").length).toBeGreaterThan(0);

    fireEvent.click(button);
    expect(screen.queryAllByText("Let's Talk").length).toBe(1);
  });

  it("closes the mobile menu when a mobile link is selected", () => {
    renderWithProviders(<Navbar />);
    const button = screen.getByRole("button", {
      name: "Toggle navigation menu",
    });

    fireEvent.click(button);
    const mobileProjectsLink = screen.getAllByText("Projects")[1];
    fireEvent.click(mobileProjectsLink);

    expect(screen.queryAllByText("Let's Talk").length).toBe(1);
  });

  it("closes the mobile menu when the mobile cta is selected", () => {
    renderWithProviders(<Navbar />);
    const button = screen.getByRole("button", {
      name: "Toggle navigation menu",
    });

    fireEvent.click(button);
    const mobileCta = screen.getAllByText("Let's Talk")[1];
    fireEvent.click(mobileCta);

    expect(screen.queryAllByText("Let's Talk").length).toBe(1);
  });

  it("applies hover styles on mouseEnter and removes on mouseLeave for desktop links", () => {
    renderWithProviders(<Navbar />);
    // Get the desktop nav links (first instance of each since mobile menu is closed)
    const projectsLink = screen.getAllByText("Projects")[0];
    
    // Simulate mouseEnter 
    fireEvent.mouseEnter(projectsLink);
    expect(projectsLink.style.color).toBe("var(--text-primary)");
    expect(projectsLink.style.background).toBe("var(--surface-hover)");

    // Simulate mouseLeave
    fireEvent.mouseLeave(projectsLink);
    expect(projectsLink.style.color).toBe("var(--text-muted)");
    expect(projectsLink.style.background).toBe("transparent");
  });

  it("renders the Developer label", () => {
    renderWithProviders(<Navbar />);
    expect(screen.getByText("Developer")).toBeInTheDocument();
  });

  it("renders the desktop Let's Talk CTA with mailto link", () => {
    renderWithProviders(<Navbar />);
    const ctaLinks = screen.getAllByText("Let's Talk");
    const desktopCta = ctaLinks[0].closest("a");
    expect(desktopCta).toHaveAttribute("href", "mailto:vimlesh11072000@gmail.com");
  });
});
