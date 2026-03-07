import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Skills from "../Skills";

// Setup mock for framer-motion since it relies on intersection observer
vi.mock("framer-motion", () => {
  return {
    motion: {
      div: ({ children, ...props }: any) => {
        const { initial, whileInView, viewport, variants, ...validProps } =
          props;
        return <div {...validProps}>{children}</div>;
      },
    },
  };
});

describe("Skills Component", () => {
  it("renders without crashing", () => {
    render(<Skills />);
    expect(screen.getByText("Core Architecture Stack")).toBeInTheDocument();
  });

  it("renders skill categories", () => {
    render(<Skills />);
    expect(screen.getByText("Frontend")).toBeInTheDocument();
    expect(screen.getByText("Backend")).toBeInTheDocument();
    expect(screen.getByText("Cloud / DevOps")).toBeInTheDocument();
    expect(screen.getByText("Databases")).toBeInTheDocument();
  });

  it("renders specific skills", () => {
    render(<Skills />);
    expect(screen.getByText("Vue.js")).toBeInTheDocument();
    expect(screen.getByText("Node.js")).toBeInTheDocument();
    expect(screen.getByText("Azure")).toBeInTheDocument();
    expect(screen.getByText("PostgreSQL")).toBeInTheDocument();
  });
});
