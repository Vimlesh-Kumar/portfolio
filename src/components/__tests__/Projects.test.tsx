import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Projects from "../Projects";

vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: any) => {
      const { initial, whileInView, viewport, transition, ...validProps } =
        props;
      return <div {...validProps}>{children}</div>;
    },
    a: ({ children, ...props }: any) => {
      const { initial, whileInView, viewport, transition, ...validProps } =
        props;
      return <a {...validProps}>{children}</a>;
    },
  },
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
    expect(screen.getByText("Realtime Weather Studio")).toBeInTheDocument();
    expect(screen.getByText("Tatkal Reminder Platform")).toBeInTheDocument();
    expect(screen.getByText("Zync Audio Sync")).toBeInTheDocument();
  });

  it("renders project stack tags", () => {
    render(<Projects />);
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("Node.js")).toBeInTheDocument();
    expect(screen.getByText("Realtime")).toBeInTheDocument();
  });
});
