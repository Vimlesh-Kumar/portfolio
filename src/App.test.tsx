import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";

vi.mock("framer-motion", async () => {
  const actual = (await vi.importActual("framer-motion")) as any;

  return {
    ...actual,
    useScroll: vi.fn(() => ({ scrollYProgress: 0 })),
    useSpring: vi.fn(() => 0),
    AnimatePresence: ({ children }: any) => <>{children}</>,
    motion: {
      div: ({ children, ...props }: any) => {
        const {
          initial,
          animate,
          whileInView,
          viewport,
          variants,
          exit,
          layout,
          layoutId,
          whileHover,
          style,
          ...validProps
        } = props;
        return (
          <div style={style} {...validProps}>
            {children}
          </div>
        );
      },
      a: ({ children, ...props }: any) => {
        const {
          initial,
          animate,
          whileInView,
          viewport,
          variants,
          transition,
          ...validProps
        } = props;
        return (
          <a {...validProps}>
            {children}
          </a>
        );
      },
      button: ({ children, ...props }: any) => {
        const { whileTap, whileHover, ...validProps } = props;
        return <button {...validProps}>{children}</button>;
      },
      span: ({ children, ...props }: any) => {
        const { initial, animate, exit, transition, ...validProps } = props;
        return <span {...validProps}>{children}</span>;
      },
    },
  };
});

describe("App", () => {
  it("renders the main portfolio shell", () => {
    render(
      <ThemeProvider>
        <App />
      </ThemeProvider>,
    );

    expect(screen.getByText("Vimlesh Kumar")).toBeInTheDocument();
    expect(
      screen.getByText("Building crisp UIs and scalable backend systems."),
    ).toBeInTheDocument();
  });

  it("contains the requested portfolio sections", () => {
    render(
      <ThemeProvider>
        <App />
      </ThemeProvider>,
    );

    expect(
      screen.getByText("Selected Work"),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Engineering coverage from polished UI to production systems."),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/build a product that looks sharp and scales cleanly/i),
    ).toBeInTheDocument();
  });

  it("updates mouse position CSS custom properties on mousemove", () => {
    render(
      <ThemeProvider>
        <App />
      </ThemeProvider>,
    );

    const container = document.querySelector(".spotlight-container") as HTMLElement;
    expect(container).toBeTruthy();

    // Fire a mousemove event on window
    fireEvent.mouseMove(window, { clientX: 200, clientY: 300 });

    // The container should now have updated CSS custom properties
    expect(container.style.getPropertyValue("--mouse-x")).toBe("200px");
    expect(container.style.getPropertyValue("--mouse-y")).toBe("300px");
  });
});
