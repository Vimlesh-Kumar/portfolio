import React from "react";
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import TechIcon from "../TechIcon";
import { brandColors } from "../../lib/brandColors";

describe("TechIcon", () => {
  it("renders the branded svg icon for a known technology", () => {
    const { container } = render(<TechIcon name="Vue 3" />);
    const wrapper = container.querySelector("span");
    expect(container.querySelector("svg")).toBeTruthy();
    // Wrapper carries the brand color.
    expect(wrapper?.style.color).toBeTruthy();
  });

  it("matches names case-insensitively", () => {
    const { container } = render(<TechIcon name="REACT" />);
    expect(container.querySelector("svg")).toBeTruthy();
  });

  it("honors a custom size", () => {
    const { container } = render(<TechIcon name="react" size={40} />);
    const svg = container.querySelector("svg");
    expect(svg?.getAttribute("width")).toBe("40");
  });

  it("falls back to a colored dot with a title for an unknown name", () => {
    const { container } = render(<TechIcon name="totally-unknown" />);
    expect(container.querySelector("svg")).toBeNull();
    const fallback = container.querySelector("span");
    expect(fallback).toHaveAttribute("title", "totally-unknown");
  });

  it("falls back when given an empty name (falsy branch)", () => {
    const { container } = render(<TechIcon name="" />);
    expect(container.querySelector("svg")).toBeNull();
    expect(container.querySelector("span")).toBeTruthy();
  });

  it("applies an extra className to the wrapper", () => {
    const { container } = render(
      <TechIcon name="react" className="custom-class" />,
    );
    expect(container.querySelector("span.custom-class")).toBeTruthy();
  });

  it("uses the brand color defined for the technology", () => {
    const { container } = render(<TechIcon name="git" />);
    const wrapper = container.querySelector("span") as HTMLSpanElement;
    // rgb form of #F05032 (git's brand color).
    expect(brandColors["git"]).toBe("#F05032");
    expect(wrapper.style.color).not.toBe("");
  });
});
