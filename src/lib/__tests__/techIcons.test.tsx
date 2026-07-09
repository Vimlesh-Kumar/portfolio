import React from "react";
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { icons } from "../techIcons";
import { brandColors } from "../brandColors";

describe("techIcons", () => {
  it("exposes at least one icon", () => {
    expect(Object.keys(icons).length).toBeGreaterThan(0);
  });

  it("renders a sized <svg> for every catalogued icon", () => {
    for (const [name, renderIcon] of Object.entries(icons)) {
      const { container, unmount } = render(<>{renderIcon(24)}</>);
      const svg = container.querySelector("svg");
      expect(svg, `expected an svg for "${name}"`).toBeTruthy();
      expect(svg?.getAttribute("width"), name).toBe("24");
      expect(svg?.getAttribute("height"), name).toBe("24");
      unmount();
    }
  });

  it("has a matching brand color for every icon key", () => {
    for (const name of Object.keys(icons)) {
      expect(brandColors[name], `missing brand color for "${name}"`).toBeDefined();
    }
  });
});
