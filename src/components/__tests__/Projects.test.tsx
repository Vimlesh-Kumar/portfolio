import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Projects from "../Projects";

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

describe("Projects Component", () => {
  it("renders without crashing", () => {
    render(<Projects />);
    expect(screen.getByText("Featured GitHub Projects")).toBeInTheDocument();
  });

  it("renders a list of projects", () => {
    render(<Projects />);

    // Check for some project titles
    expect(screen.getByText("Weather App")).toBeInTheDocument();
    expect(screen.getByText("Zync Audio Sync")).toBeInTheDocument();
    expect(screen.getByText("Student Result Portal")).toBeInTheDocument();
  });

  it("contains tags for tech specs", () => {
    render(<Projects />);

    // Test that the technologies text exist in the document
    expect(screen.getAllByText("TypeScript").length).toBeGreaterThan(0); // React and Typescript tags shown for Weather
    expect(screen.getByText("Vuex")).toBeInTheDocument();
  });
});
