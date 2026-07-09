/**
 * Particle
 * --------
 * A single drifting node in the constellation background rendered by the
 * `CodeRain` component.
 *
 * The class is intentionally kept at module scope (rather than declared inline
 * inside a React effect) for two reasons:
 *  1. React Compiler / `react-hooks` lint rules don't support inline class
 *     declarations inside components.
 *  2. Extracting it keeps the physics pure and unit-testable in isolation.
 *
 * All time-varying inputs (canvas size, pointer position) are passed in per
 * call rather than captured, so a single instance stays valid across resizes.
 */
export class Particle {
  /**
   * @param {number} width - Current canvas width in pixels.
   * @param {number} height - Current canvas height in pixels.
   * @param {Array<{r: number, g: number, b: number}>} colors - Palette to
   *   sample this particle's color from.
   */
  constructor(width, height, colors) {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.size = Math.random() * 2 + 1; // 1px to 3px
    this.vx = (Math.random() - 0.5) * 0.35; // slow drift speed
    this.vy = (Math.random() - 0.5) * 0.35;

    const colorObj = colors[Math.floor(Math.random() * colors.length)];
    this.r = colorObj.r;
    this.g = colorObj.g;
    this.b = colorObj.b;
    this.baseOpacity = Math.random() * 0.15 + 0.12;
  }

  /**
   * Advance the particle one frame: drift, bounce off edges, stay contained,
   * and drift gently toward the pointer when it is within range.
   *
   * @param {number} width - Current canvas width.
   * @param {number} height - Current canvas height.
   * @param {{x: number|null, y: number|null, radius: number}} mouse - Pointer
   *   state; `x`/`y` are `null` when the pointer is off-screen.
   */
  update(width, height, mouse) {
    this.x += this.vx;
    this.y += this.vy;

    // Bounce off the edges.
    if (this.x < 0 || this.x > width) this.vx = -this.vx;
    if (this.y < 0 || this.y > height) this.vy = -this.vy;

    // Keep the particle inside the canvas bounds.
    if (this.x < 0) this.x = 0;
    if (this.x > width) this.x = width;
    if (this.y < 0) this.y = 0;
    if (this.y > height) this.y = height;

    // Gentle attraction toward the pointer when it is nearby.
    if (mouse.x !== null && mouse.y !== null) {
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < mouse.radius) {
        const force = (mouse.radius - dist) / mouse.radius;
        this.x += (dx / dist) * force * 0.25;
        this.y += (dy / dist) * force * 0.25;
      }
    }
  }

  /**
   * Paint the particle as a filled circle on the given 2D context.
   * @param {CanvasRenderingContext2D} ctx
   */
  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${this.r}, ${this.g}, ${this.b}, ${this.baseOpacity})`;
    ctx.fill();
  }
}
