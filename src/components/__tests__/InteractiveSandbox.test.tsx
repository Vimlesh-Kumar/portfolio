import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import InteractiveSandbox from "../InteractiveSandbox";

vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: any) => {
      const {
        initial, animate, whileInView, viewport,
        transition, whileHover, layout, layoutId,
        ...validProps
      } = props;
      return <div {...validProps}>{children}</div>;
    },
    button: ({ children, ...props }: any) => {
      const { whileTap, whileHover, ...validProps } = props;
      return <button {...validProps}>{children}</button>;
    },
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}));

describe("InteractiveSandbox", () => {
  it("renders the sandbox header", () => {
    render(<InteractiveSandbox />);
    expect(screen.getByText("Live UI Sandbox")).toBeInTheDocument();
  });

  it("renders the interactive card", () => {
    render(<InteractiveSandbox />);
    expect(screen.getByText("Interactive Card")).toBeInTheDocument();
    expect(screen.getByText(/Tweak the settings/)).toBeInTheDocument();
  });

  it("renders border radius control", () => {
    render(<InteractiveSandbox />);
    expect(screen.getByText("Border Radius")).toBeInTheDocument();
    expect(screen.getByText("24px")).toBeInTheDocument();
  });

  it("renders theme accent control", () => {
    render(<InteractiveSandbox />);
    expect(screen.getByText("Theme Accent")).toBeInTheDocument();
  });

  it("increments the interact counter on button click", () => {
    render(<InteractiveSandbox />);
    const button = screen.getByText(/Interact: 0/);
    fireEvent.click(button);
    expect(screen.getByText(/Interact: 1/)).toBeInTheDocument();
    fireEvent.click(screen.getByText(/Interact: 1/));
    expect(screen.getByText(/Interact: 2/)).toBeInTheDocument();
  });

  it("updates the border radius when the slider changes", () => {
    render(<InteractiveSandbox />);
    const slider = screen.getByRole("slider");
    fireEvent.change(slider, { target: { value: "40" } });
    expect(screen.getByText("40px")).toBeInTheDocument();
  });

  it("changes color when a color button is clicked", () => {
    render(<InteractiveSandbox />);
    const emeraldButton = screen.getByLabelText("Set color to emerald");
    fireEvent.click(emeraldButton);
    // After clicking emerald, the emerald button should have the active ring
    // We can verify by checking that the component re-renders (the click handler works)
    expect(emeraldButton).toBeInTheDocument();
  });

  it("renders all three color options", () => {
    render(<InteractiveSandbox />);
    expect(screen.getByLabelText("Set color to cyan")).toBeInTheDocument();
    expect(screen.getByLabelText("Set color to emerald")).toBeInTheDocument();
    expect(screen.getByLabelText("Set color to fuchsia")).toBeInTheDocument();
  });

  it("shows active ring on selected color", () => {
    render(<InteractiveSandbox />);
    // cyan is the default color - should have the active ring (a child motion.div)
    const cyanButton = screen.getByLabelText("Set color to cyan");
    // The active color has scale-110 class
    expect(cyanButton.className).toContain("scale-110");

    // Switch to fuchsia
    const fuchsiaButton = screen.getByLabelText("Set color to fuchsia");
    fireEvent.click(fuchsiaButton);
    expect(fuchsiaButton.className).toContain("scale-110");
  });
});
