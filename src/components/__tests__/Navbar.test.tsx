import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Navbar from "../Navbar";

vi.mock("framer-motion", () => {
  return {
    motion: {
      div: ({ children, ...props }: any) => {
        const { initial, animate, ...validProps } = props;
        return <div {...validProps}>{children}</div>;
      },
    },
  };
});

describe("Navbar Component", () => {
  it("renders the brand or logo", () => {
    render(<Navbar />);
    expect(screen.getByText("VK")).toBeInTheDocument();
  });

  it("contains navigation links", () => {
    render(<Navbar />);
    const desktopLinks = screen.getAllByRole("link");
    expect(desktopLinks.some((link) => link.textContent === "About")).toBe(
      true,
    );
    expect(desktopLinks.some((link) => link.textContent === "Experience")).toBe(
      true,
    );
    expect(desktopLinks.some((link) => link.textContent === "Projects")).toBe(
      true,
    );
    expect(desktopLinks.some((link) => link.textContent === "Skills")).toBe(
      true,
    );
  });
});
