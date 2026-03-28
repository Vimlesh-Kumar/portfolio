import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Projects from "../Projects";

vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: any) => {
      const {
        initial,
        whileInView,
        viewport,
        transition,
        animate,
        exit,
        layout,
        ...validProps
      } = props;
      return <div {...validProps}>{children}</div>;
    },
    a: ({ children, ...props }: any) => {
      const { initial, whileInView, viewport, transition, ...validProps } =
        props;
      return <a {...validProps}>{children}</a>;
    },
    button: ({ children, ...props }: any) => {
      const { whileTap, ...validProps } = props;
      return <button {...validProps}>{children}</button>;
    },
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}));

describe("Projects", () => {
  it("renders the projects section heading", () => {
    render(<Projects />);
    expect(
      screen.getByText("Selected builds with product and engineering depth."),
    ).toBeInTheDocument();
  });

  it("renders featured project titles", () => {
    render(<Projects />);
    // First 3 visible projects (INITIAL_COUNT = 3)
    expect(screen.getByText("Online Pathshala")).toBeInTheDocument();
    expect(screen.getByText("VimPGP")).toBeInTheDocument();
    expect(screen.getByText("SkyCast Weather")).toBeInTheDocument();
  });

  it("renders project stack tags", () => {
    render(<Projects />);
    // Use getAllByText for tags that appear in multiple projects
    expect(screen.getAllByText("Vue 3").length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText("Cryptography")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
  });
});
