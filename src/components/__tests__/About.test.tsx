import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import About from "../About";

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

describe("About Component", () => {
  it("renders without crashing", () => {
    render(<About />);
    expect(screen.getByText("01. About Me")).toBeInTheDocument();
  });

  it("contains the expected heading", () => {
    render(<About />);
    expect(
      screen.getByText("Building Solutions That Scale"),
    ).toBeInTheDocument();
  });

  it("contains description text", () => {
    render(<About />);
    expect(
      screen.getByText(
        /As a software engineer deeply integrated into product architecture/i,
      ),
    ).toBeInTheDocument();
  });
});
