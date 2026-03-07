import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Experience from "../Experience";

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

describe("Experience Component", () => {
  it("renders without crashing", () => {
    render(<Experience />);
    expect(screen.getByText("02. Experience")).toBeInTheDocument();
  });

  it("contains the correct heading", () => {
    render(<Experience />);
    expect(screen.getByText("Professional Journey")).toBeInTheDocument();
  });

  it("lists all jobs", () => {
    render(<Experience />);
    expect(screen.getByText("Full Stack Developer")).toBeInTheDocument();
    expect(screen.getByText("Software Developer Intern")).toBeInTheDocument();
  });
});
