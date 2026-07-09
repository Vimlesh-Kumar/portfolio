import { describe, expect, it } from "vitest";
import {
  brandColors,
  getBrandColor,
  DEFAULT_BRAND_COLOR,
  ACCENT_FALLBACK_COLOR,
} from "../brandColors";

describe("getBrandColor", () => {
  it("returns the exact brand color for a known name", () => {
    expect(getBrandColor("vue")).toBe("#41B883");
    expect(getBrandColor("react")).toBe("#61DAFB");
  });

  it("matches case-insensitively and trims whitespace", () => {
    expect(getBrandColor("  Vue 3 ")).toBe(brandColors["vue 3"]);
    expect(getBrandColor("REACT")).toBe(brandColors["react"]);
  });

  it("resolves aliases to the same color", () => {
    expect(getBrandColor("vue")).toBe(getBrandColor("vue.js"));
    expect(getBrandColor("node")).toBe(getBrandColor("node.js"));
  });

  it("returns the default color for a falsy name", () => {
    expect(getBrandColor("")).toBe(DEFAULT_BRAND_COLOR);
    expect(getBrandColor(undefined)).toBe(DEFAULT_BRAND_COLOR);
  });

  it("returns the accent fallback for an unknown name", () => {
    expect(getBrandColor("some-unknown-tech")).toBe(ACCENT_FALLBACK_COLOR);
  });
});

describe("brandColors", () => {
  it("is a frozen (immutable) map", () => {
    expect(Object.isFrozen(brandColors)).toBe(true);
  });

  it("stores every key in lowercase", () => {
    for (const key of Object.keys(brandColors)) {
      expect(key).toBe(key.toLowerCase());
    }
  });
});
