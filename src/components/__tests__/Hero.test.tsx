import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Hero from "../Hero";

vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: any) => {
      const { initial, animate, transition, ...validProps } = props;
      return <div {...validProps}>{children}</div>;
    },
  },
}));

describe("Hero", () => {
  it("renders the main headline", () => {
    render(<Hero />);
    expect(
      screen.getByText("Designing crisp interfaces and shipping cloud-ready products."),
    ).toBeInTheDocument();
  });

  it("renders the primary actions", () => {
    render(<Hero />);
    expect(screen.getByText("View Projects")).toBeInTheDocument();
    expect(screen.getByText("Start a Conversation")).toBeInTheDocument();
    expect(screen.getByText("Resume")).toBeInTheDocument();
  });

  it("shows portfolio metrics", () => {
    render(<Hero />);
    expect(screen.getByText("3+")).toBeInTheDocument();
    expect(screen.getByText("Production launches")).toBeInTheDocument();
  });
});
