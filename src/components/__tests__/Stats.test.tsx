import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Stats from "../Stats";

vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: any) => {
      const { initial, whileInView, viewport, transition, ...validProps } =
        props;
      return <div {...validProps}>{children}</div>;
    },
  },
}));

describe("Stats", () => {
  it("renders the impact section landmark", () => {
    render(<Stats />);
    expect(
      screen.getByRole("region", { name: /impact at a glance/i }),
    ).toBeInTheDocument();
  });

  it("renders every metric value and label", () => {
    render(<Stats />);
    expect(screen.getByText("11")).toBeInTheDocument();
    expect(screen.getByText("Projects Shipped")).toBeInTheDocument();
    expect(screen.getByText("27")).toBeInTheDocument();
    expect(screen.getByText("Public Repositories")).toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(
      screen.getByText("npm Package Co-Maintained (squel.js)"),
    ).toBeInTheDocument();
    expect(screen.getByText("15+")).toBeInTheDocument();
    expect(screen.getByText("Technologies in the Toolbelt")).toBeInTheDocument();
  });

  it("renders exactly four metric cards", () => {
    const { container } = render(<Stats />);
    expect(container.querySelectorAll(".skill-card")).toHaveLength(4);
  });
});
