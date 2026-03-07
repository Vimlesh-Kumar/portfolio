import { describe, it, expect, vi, beforeEach } from "vitest";

const renderMock = vi.fn();
const createRootMock = vi.fn(() => ({
  render: renderMock,
  unmount: vi.fn(),
}));

vi.mock("react-dom/client", () => ({
  createRoot: createRootMock,
}));

vi.mock("./App.jsx", () => ({
  default: () => <div data-testid="mock-app"></div>,
}));

describe("main.jsx entry point", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
    vi.clearAllMocks();
    vi.resetModules();
  });

  it("should render without crashing into root dom element", async () => {
    // Create DOM element for createRoot before importing main
    const rootEl = document.createElement("div");
    rootEl.id = "root";
    document.body.appendChild(rootEl);

    // Dynamic import to execute main.jsx
    await import("./main.jsx");

    expect(createRootMock).toHaveBeenCalledWith(rootEl);
    expect(renderMock).toHaveBeenCalled();

    // In a stricter test we could assert the JSX arguments rendered inside,
    // but verifying it calls render is standard for main.jsx entry points.
  });
});
