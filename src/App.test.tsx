import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import App from "./App";

vi.mock("framer-motion", async () => {
  const actual = (await vi.importActual("framer-motion")) as any;
  return {
    ...actual,
    useScroll: vi.fn(() => ({ scrollYProgress: 0 })),
    useSpring: vi.fn(() => 0),
    motion: {
      div: ({ children, ...props }: any) => {
        const {
          initial,
          whileInView,
          animate,
          viewport,
          variants,
          transition,
          ...validProps
        } = props;
        return (
          <div data-testid="motion-div" {...validProps}>
            {children}
          </div>
        );
      },
    },
  };
});

// Since App has a scroll indicator, we mock out window resize or matchMedia if needed.
// But mostly Framer Motion's useScroll is fully mocked.

describe("App Component", () => {
  it("renders main application structure without crashing", () => {
    render(<App />);
    // Check if the Navbar is loaded (Brand VK or Name)
    expect(screen.getByText("VK")).toBeInTheDocument();
  });

  it("contains all major sections", () => {
    render(<App />);
    // About Section
    expect(screen.getByText("01. About Me")).toBeInTheDocument();
    // Experience Section
    expect(screen.getByText("02. Experience")).toBeInTheDocument();
    // Projects Section
    expect(screen.getByText("03. Open Source & Repos")).toBeInTheDocument();
    // Skills Section
    expect(screen.getByText("04. Technical Capabilities")).toBeInTheDocument();
  });
});
