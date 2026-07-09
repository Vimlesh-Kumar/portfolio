import { describe, expect, it, vi } from "vitest";
import { Particle } from "../particle";

const COLORS = [
  { r: 34, g: 211, b: 238 },
  { r: 52, g: 211, b: 153 },
  { r: 232, g: 121, b: 249 },
];

const NO_MOUSE = { x: null as number | null, y: null as number | null, radius: 180 };

describe("Particle", () => {
  it("initializes within the canvas bounds and picks a palette color", () => {
    const p = new Particle(100, 200, COLORS);

    expect(p.x).toBeGreaterThanOrEqual(0);
    expect(p.x).toBeLessThanOrEqual(100);
    expect(p.y).toBeGreaterThanOrEqual(0);
    expect(p.y).toBeLessThanOrEqual(200);
    expect(p.size).toBeGreaterThanOrEqual(1);
    expect(p.size).toBeLessThanOrEqual(3);
    // Color must be one of the provided palette entries.
    expect(COLORS).toContainEqual({ r: p.r, g: p.g, b: p.b });
    expect(p.baseOpacity).toBeGreaterThanOrEqual(0.12);
    expect(p.baseOpacity).toBeLessThanOrEqual(0.27);
  });

  it("drifts by its velocity each update", () => {
    const p = new Particle(100, 100, COLORS);
    p.x = 50;
    p.y = 50;
    p.vx = 2;
    p.vy = 3;
    p.update(100, 100, NO_MOUSE);
    expect(p.x).toBe(52);
    expect(p.y).toBe(53);
  });

  it("bounces and stays contained at the left/top edges", () => {
    const p = new Particle(100, 100, COLORS);
    p.x = 0.5;
    p.y = 0.5;
    p.vx = -1;
    p.vy = -1;
    p.update(100, 100, NO_MOUSE);
    // Velocity is inverted and position clamped back into bounds.
    expect(p.vx).toBe(1);
    expect(p.vy).toBe(1);
    expect(p.x).toBe(0);
    expect(p.y).toBe(0);
  });

  it("bounces and stays contained at the right/bottom edges", () => {
    const p = new Particle(100, 100, COLORS);
    p.x = 100;
    p.y = 100;
    p.vx = 1;
    p.vy = 1;
    p.update(100, 100, NO_MOUSE);
    expect(p.vx).toBe(-1);
    expect(p.vy).toBe(-1);
    expect(p.x).toBe(100);
    expect(p.y).toBe(100);
  });

  it("is pulled toward the pointer when it is within range", () => {
    const p = new Particle(100, 100, COLORS);
    p.x = 50;
    p.y = 50;
    p.vx = 0;
    p.vy = 0;
    const mouse = { x: 60, y: 50, radius: 180 };
    p.update(100, 100, mouse);
    // Moves toward the pointer along +x, but not past it.
    expect(p.x).toBeGreaterThan(50);
    expect(p.x).toBeLessThan(60);
    expect(p.y).toBe(50);
  });

  it("is not pulled when the pointer is outside its radius", () => {
    const p = new Particle(500, 500, COLORS);
    p.x = 10;
    p.y = 10;
    p.vx = 0;
    p.vy = 0;
    const mouse = { x: 400, y: 400, radius: 5 };
    p.update(500, 500, mouse);
    expect(p.x).toBe(10);
    expect(p.y).toBe(10);
  });

  it("draws itself as a filled circle on the 2d context", () => {
    const p = new Particle(100, 100, COLORS);
    p.x = 10;
    p.y = 20;
    p.size = 2;
    const ctx = {
      beginPath: vi.fn(),
      arc: vi.fn(),
      fill: vi.fn(),
      fillStyle: "",
    } as unknown as CanvasRenderingContext2D;

    p.draw(ctx);

    expect(ctx.beginPath).toHaveBeenCalledTimes(1);
    expect(ctx.arc).toHaveBeenCalledWith(10, 20, 2, 0, Math.PI * 2);
    expect(ctx.fill).toHaveBeenCalledTimes(1);
    expect(ctx.fillStyle).toContain("rgba(");
  });
});
