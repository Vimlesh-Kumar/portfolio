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

  it("toggles the mobile menu open and closed", () => {
    render(<Navbar />);
    const menuButton = screen.getByRole("button");

    // Desktop links normally present, mobile dropdown is hidden initially
    const linkCountInitial = screen.getAllByRole("link").length;

    // Open menu
    fireEvent.click(menuButton);
    const linkCountOpen = screen.getAllByRole("link").length;
    expect(linkCountOpen).toBeGreaterThan(linkCountInitial);

    // Click a mobile link to close menu
    // We expect the first new link added to the DOM to be 'About' in the mobile dropdown
    const mobileLink = screen.getAllByText("About")[1]; // first is desktop, second is mobile
    fireEvent.click(mobileLink);

    // Expect dropdown to close, reverting count
    const linkCountClosed = screen.getAllByRole("link").length;
    expect(linkCountClosed).toBe(linkCountInitial);

    // Open menu again to test closing via the X icon
    fireEvent.click(menuButton);
    expect(screen.getAllByRole("link").length).toBeGreaterThan(
      linkCountInitial,
    );

    // Click closing X button
    fireEvent.click(menuButton);
    expect(screen.getAllByRole("link").length).toBe(linkCountInitial);
  });
});
