import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Skills from "../Skills";

vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: any) => {
      const { initial, whileInView, viewport, transition, ...validProps } =
        props;
      return <div {...validProps}>{children}</div>;
    },
  },
}));

describe("Skills", () => {
  it("renders the skills heading", () => {
    render(<Skills />);
    expect(
      screen.getByText("Engineering coverage from polished UI to production systems."),
    ).toBeInTheDocument();
  });

  it("renders skill groups", () => {
    render(<Skills />);
    expect(screen.getByText("Frontend")).toBeInTheDocument();
    expect(screen.getByText("Backend")).toBeInTheDocument();
    expect(screen.getByText("Cloud")).toBeInTheDocument();
    expect(screen.getByText("Data")).toBeInTheDocument();
  });

  it("renders workflow capabilities", () => {
    render(<Skills />);
    expect(screen.getByText("Product-minded execution")).toBeInTheDocument();
    expect(screen.getByText("Performance tuning")).toBeInTheDocument();
  });

  it("applies and removes the hover styling on a skill tag", () => {
    const { container } = render(<Skills />);
    const tag = container.querySelector(".skill-tag") as HTMLElement;
    expect(tag).toBeTruthy();

    // Default (not hovered) state.
    expect(tag.style.transform).toBe("none");

    fireEvent.mouseEnter(tag);
    expect(tag.style.transform).not.toBe("none");
    expect(tag.style.boxShadow).not.toBe("none");

    fireEvent.mouseLeave(tag);
    expect(tag.style.transform).toBe("none");
  });
});
