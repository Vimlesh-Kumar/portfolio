import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { describe, expect, it, vi, beforeEach } from "vitest";
import { ThemeProvider } from "../../context/ThemeContext";
import { useTheme, THEME_STORAGE_KEY } from "../../context/theme-context";

// Test component that uses the theme context
const ThemeConsumer = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <span data-testid="theme-value">{theme}</span>
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  );
};

describe("ThemeContext", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute("data-theme");
    // Reset matchMedia to the default (dark) so tests that override it —
    // e.g. the prefers-color-scheme case — don't leak into later tests.
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: vi.fn().mockImplementation((query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });
  });

  it("provides the default dark theme", () => {
    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    );
    expect(screen.getByTestId("theme-value").textContent).toBe("dark");
  });

  it("toggles theme from dark to light", () => {
    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    );
    fireEvent.click(screen.getByText("Toggle"));
    expect(screen.getByTestId("theme-value").textContent).toBe("light");
  });

  it("toggles theme from light back to dark", () => {
    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    );
    fireEvent.click(screen.getByText("Toggle"));
    expect(screen.getByTestId("theme-value").textContent).toBe("light");
    fireEvent.click(screen.getByText("Toggle"));
    expect(screen.getByTestId("theme-value").textContent).toBe("dark");
  });

  it("sets data-theme attribute on document root", () => {
    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    );
    expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
    fireEvent.click(screen.getByText("Toggle"));
    expect(document.documentElement.getAttribute("data-theme")).toBe("light");
  });

  it("persists theme to localStorage", () => {
    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    );
    fireEvent.click(screen.getByText("Toggle"));
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe("light");
  });

  it("reads theme from localStorage on mount", () => {
    localStorage.setItem(THEME_STORAGE_KEY, "light");
    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    );
    expect(screen.getByTestId("theme-value").textContent).toBe("light");
  });

  it("falls back to prefers-color-scheme when no localStorage value", () => {
    // Mock window.matchMedia to return light preference
    const matchMediaMock = vi.fn().mockImplementation((query) => ({
      matches: query === "(prefers-color-scheme: light)",
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));
    
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: matchMediaMock,
    });

    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    );
    expect(screen.getByTestId("theme-value").textContent).toBe("light");
  });

  it("syncs theme from a storage event fired by another tab", () => {
    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    );
    expect(screen.getByTestId("theme-value").textContent).toBe("dark");

    act(() => {
      window.dispatchEvent(
        new StorageEvent("storage", {
          key: THEME_STORAGE_KEY,
          newValue: "light",
        })
      );
    });
    expect(screen.getByTestId("theme-value").textContent).toBe("light");
  });

  it("ignores storage events for unrelated keys", () => {
    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    );
    act(() => {
      window.dispatchEvent(
        new StorageEvent("storage", {
          key: "some-other-key",
          newValue: "light",
        })
      );
    });
    expect(screen.getByTestId("theme-value").textContent).toBe("dark");
  });

  it("ignores storage events with an invalid theme value", () => {
    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    );
    act(() => {
      window.dispatchEvent(
        new StorageEvent("storage", {
          key: THEME_STORAGE_KEY,
          newValue: null, // e.g. localStorage cleared in another tab
        })
      );
    });
    expect(screen.getByTestId("theme-value").textContent).toBe("dark");
  });

  it("removes the storage listener on unmount", () => {
    const removeSpy = vi.spyOn(window, "removeEventListener");
    const { unmount } = render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    );
    unmount();
    expect(removeSpy).toHaveBeenCalledWith("storage", expect.any(Function));
    removeSpy.mockRestore();
  });

  it("throws an error when useTheme is used outside ThemeProvider", () => {
    // Suppress console.error for this test
    const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    
    expect(() => {
      render(<ThemeConsumer />);
    }).toThrow("useTheme must be used inside ThemeProvider");
    
    consoleSpy.mockRestore();
  });
});
