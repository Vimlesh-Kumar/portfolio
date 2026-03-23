import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
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
          animate,
          whileInView,
          viewport,
          variants,
          transition,
          style,
          ...validProps
        } = props;
        return (
          <div {...validProps}>
            {children}
          </div>
        );
      },
      a: ({ children, ...props }: any) => {
        const {
          initial,
          animate,
          whileInView,
          viewport,
          variants,
          transition,
          ...validProps
        } = props;
        return (
          <a {...validProps}>
            {children}
          </a>
        );
      },
    },
  };
});

describe("App", () => {
  it("renders the main portfolio shell", () => {
    render(<App />);

    expect(screen.getByText("Vimlesh Kumar")).toBeInTheDocument();
    expect(
      screen.getByText("Designing crisp interfaces and shipping cloud-ready products."),
    ).toBeInTheDocument();
  });

  it("contains the requested portfolio sections", () => {
    render(<App />);

    expect(
      screen.getByText("Selected builds with product and engineering depth."),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Engineering coverage from polished UI to production systems."),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/build a product that looks sharp and scales cleanly/i),
    ).toBeInTheDocument();
  });
});
