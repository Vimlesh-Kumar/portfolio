import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Hero from "../Hero";

vi.mock("framer-motion", () => {
  return {
    motion: {
      div: ({ children, ...props }: any) => {
        const { initial, animate, transition, ...validProps } = props;
        return <div {...validProps}>{children}</div>;
      },
    },
  };
});

describe("Hero Component", () => {
  it("renders without crashing", () => {
    render(<Hero />);
    expect(
      screen.getByText("Full Stack Developer | Architect"),
    ).toBeInTheDocument();
  });

  it("contains the name", () => {
    render(<Hero />);
    expect(screen.getByText("Vimlesh Kumar")).toBeInTheDocument();
  });

  it("contains calls to action", () => {
    render(<Hero />);
    expect(screen.getByText("View My Work")).toBeInTheDocument();
    expect(screen.getByText(/Get in Touch/i)).toBeInTheDocument();
    expect(screen.getByText(/Resume/i)).toBeInTheDocument();
  });
});
