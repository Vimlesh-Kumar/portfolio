import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Skills from "../Skills";

vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: any) => {
      const { initial, whileInView, viewport, transition, ...validProps } =
        props;
      return <div {...validProps}>{children}</div>;
    },
  },
}));

describe("Skills", () => {
  it("renders the skills heading", () => {
    render(<Skills />);
    expect(
      screen.getByText("Engineering coverage from polished UI to production systems."),
    ).toBeInTheDocument();
  });

  it("renders skill groups", () => {
    render(<Skills />);
    expect(screen.getByText("Frontend")).toBeInTheDocument();
    expect(screen.getByText("Backend")).toBeInTheDocument();
    expect(screen.getByText("Cloud")).toBeInTheDocument();
    expect(screen.getByText("Data")).toBeInTheDocument();
  });

  it("renders workflow capabilities", () => {
    render(<Skills />);
    expect(screen.getByText("Product-minded execution")).toBeInTheDocument();
    expect(screen.getByText("Performance tuning")).toBeInTheDocument();
  });
});
