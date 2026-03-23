import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Navbar from "../Navbar";

vi.mock("framer-motion", () => ({
  motion: {
    a: ({ children, ...props }: any) => {
      const { initial, animate, ...validProps } = props;
      return <a {...validProps}>{children}</a>;
    },
  },
}));

describe("Navbar", () => {
  it("renders the portfolio brand", () => {
    render(<Navbar />);
    expect(screen.getByText("VK")).toBeInTheDocument();
    expect(screen.getByText("Vimlesh Kumar")).toBeInTheDocument();
  });

  it("contains desktop navigation links", () => {
    render(<Navbar />);
    expect(screen.getAllByText("Projects").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Skills").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Contact").length).toBeGreaterThan(0);
  });

  it("toggles the mobile menu", () => {
    render(<Navbar />);
    const button = screen.getByRole("button", {
      name: "Toggle navigation menu",
    });

    fireEvent.click(button);
    expect(screen.getAllByText("Let's Talk").length).toBeGreaterThan(0);

    fireEvent.click(button);
    expect(screen.queryAllByText("Let's Talk").length).toBe(1);
  });

  it("closes the mobile menu when a mobile link is selected", () => {
    render(<Navbar />);
    const button = screen.getByRole("button", {
      name: "Toggle navigation menu",
    });

    fireEvent.click(button);
    const mobileProjectsLink = screen.getAllByText("Projects")[1];
    fireEvent.click(mobileProjectsLink);

    expect(screen.queryAllByText("Let's Talk").length).toBe(1);
  });

  it("closes the mobile menu when the mobile cta is selected", () => {
    render(<Navbar />);
    const button = screen.getByRole("button", {
      name: "Toggle navigation menu",
    });

    fireEvent.click(button);
    const mobileCta = screen.getAllByText("Let's Talk")[1];
    fireEvent.click(mobileCta);

    expect(screen.queryAllByText("Let's Talk").length).toBe(1);
  });
});
