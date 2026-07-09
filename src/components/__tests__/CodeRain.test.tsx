import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import CodeRain from "../CodeRain";
import { ThemeProvider } from "../../context/ThemeContext";

/** Minimal stub of a 2D canvas context — enough for the animation to run. */
const makeCtx = () =>
  ({
    clearRect: vi.fn(),
    beginPath: vi.fn(),
    arc: vi.fn(),
    fill: vi.fn(),
    moveTo: vi.fn(),
    lineTo: vi.fn(),
    stroke: vi.fn(),
    fillStyle: "",
    strokeStyle: "",
    lineWidth: 0,
  }) as unknown as CanvasRenderingContext2D;

const renderCodeRain = () =>
  render(
    <ThemeProvider>
      <CodeRain />
    </ThemeProvider>,
  );

describe("CodeRain", () => {
  let getContextSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    getContextSpy = vi
      .spyOn(HTMLCanvasElement.prototype, "getContext")
      .mockImplementation(() => makeCtx() as never);
    // Prevent an infinite animation loop: schedule but never invoke the frame.
    vi.stubGlobal("requestAnimationFrame", vi.fn(() => 1));
    vi.stubGlobal("cancelAnimationFrame", vi.fn());
    window.localStorage.clear();
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });

  it("renders a canvas and initializes the 2d animation (dark theme)", () => {
    const { container } = renderCodeRain();
    expect(container.querySelector("canvas")).toBeInTheDocument();
    expect(getContextSpy).toHaveBeenCalledWith("2d");
    expect(requestAnimationFrame).toHaveBeenCalled();
  });

  it("builds the light palette when the theme is light", () => {
    window.localStorage.setItem("portfolio-theme", "light");
    const { container } = renderCodeRain();
    expect(container.querySelector("canvas")).toBeInTheDocument();
  });

  it("handles resize, mousemove and mouseleave without throwing", () => {
    renderCodeRain();
    fireEvent(window, new Event("resize"));
    fireEvent(window, new MouseEvent("mousemove", { clientX: 120, clientY: 90 }));
    fireEvent(window, new MouseEvent("mouseleave"));
    expect(document.querySelector("canvas")).toBeInTheDocument();
  });

  it("bails out early when the 2d context is unavailable", () => {
    getContextSpy.mockReturnValueOnce(null as never);
    const { container } = renderCodeRain();
    expect(container.querySelector("canvas")).toBeInTheDocument();
  });

  it("tears down listeners and the animation frame on unmount", () => {
    const removeSpy = vi.spyOn(window, "removeEventListener");
    const { unmount } = renderCodeRain();
    unmount();
    expect(cancelAnimationFrame).toHaveBeenCalled();
    expect(removeSpy).toHaveBeenCalledWith("resize", expect.any(Function));
    expect(removeSpy).toHaveBeenCalledWith("mousemove", expect.any(Function));
    expect(removeSpy).toHaveBeenCalledWith("mouseleave", expect.any(Function));
  });
});
