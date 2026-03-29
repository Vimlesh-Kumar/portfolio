import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Hero from "../Hero";

vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: any) => {
      const { initial, animate, whileHover, layout, layoutId, transition, ...validProps } = props;
      return <div {...validProps}>{children}</div>;
    },
    button: ({ children, ...props }: any) => {
      const { whileTap, whileHover, layoutId, ...validProps } = props;
      return <button {...validProps}>{children}</button>;
    },
  },
}));

describe("Hero", () => {
  it("renders the main headline", () => {
    render(<Hero />);
    expect(
      screen.getByText("Building crisp UIs and scalable backend systems."),
    ).toBeInTheDocument();
  });

  it("renders the primary actions", () => {
    render(<Hero />);
    expect(screen.getByText("View Projects")).toBeInTheDocument();
    expect(screen.getByText("Start a Conversation")).toBeInTheDocument();
    expect(screen.getByText("Resume")).toBeInTheDocument();
  });

  it("shows interactive terminal", () => {
    render(<Hero />);
    expect(screen.getByText("vimlesh@dev ~ zsh")).toBeInTheDocument();
  });
});
