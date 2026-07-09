import React from "react";
import { render, screen, fireEvent, waitFor, act } from "@testing-library/react";
import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import Contact from "../Contact";

// Mock framer-motion
vi.mock("framer-motion", async () => {
  const actual = (await vi.importActual("framer-motion")) as any;
  return {
    ...actual,
    AnimatePresence: ({ children }: any) => <>{children}</>,
    motion: {
      div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
      a: ({ children, ...props }: any) => <a {...props}>{children}</a>,
      button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
      span: ({ children, ...props }: any) => <span {...props}>{children}</span>,
      form: ({ children, ...props }: any) => <form {...props}>{children}</form>,
    },
  };
});

describe("Contact Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.useRealTimers();
    global.fetch = vi.fn();
    // A configured key by default so the happy paths hit the network.
    vi.stubEnv("VITE_WEB3FORMS_ACCESS_KEY", "test-access-key");
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("renders correctly", () => {
    render(<Contact />);
    expect(screen.getByText(/Have an idea\?/i)).toBeInTheDocument();
  });

  it("updates form fields", () => {
    render(<Contact />);
    const nameInput = screen.getByLabelText(/Your Name/i) as HTMLInputElement;
    fireEvent.change(nameInput, { target: { name: "name", value: "John Doe" } });
    expect(nameInput.value).toBe("John Doe");
  });

  it("prevents message from exceeding max length", () => {
    render(<Contact />);
    const messageInput = screen.getByLabelText(/Your Message/i) as HTMLTextAreaElement;
    const longMessage = "a".repeat(501);
    fireEvent.change(messageInput, { target: { name: "message", value: longMessage } });
    expect(messageInput.value).not.toBe(longMessage);
  });

  it("enables submit button correctly", () => {
    render(<Contact />);
    const submitButton = screen.getByRole("button", { name: /Send Message/i });
    fireEvent.change(screen.getByLabelText(/Your Name/i), { target: { name: "name", value: "John Doe" } });
    fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { name: "email", value: "john@example.com" } });
    fireEvent.change(screen.getByLabelText(/Your Message/i), { target: { name: "message", value: "This is a valid message of sufficient length." } });
    expect(submitButton).not.toBeDisabled();
  });

  it("handles focus states for inputs and textarea", () => {
    render(<Contact />);
    const nameInput = screen.getByLabelText(/Your Name/i);
    const messageInput = screen.getByLabelText(/Your Message/i);
    fireEvent.focus(nameInput);
    fireEvent.blur(nameInput);
    fireEvent.focus(messageInput);
    fireEvent.blur(messageInput);
  });

  it("updates character counter color at thresholds", () => {
    render(<Contact />);
    const messageInput = screen.getByLabelText(/Your Message/i);
    fireEvent.change(messageInput, { target: { name: "message", value: "a".repeat(375) } });
    fireEvent.change(messageInput, { target: { name: "message", value: "a".repeat(475) } });
    expect(screen.getByText("475/500")).toBeInTheDocument();
  });

  it("shows a direct-email hint and skips the request when unconfigured", async () => {
    vi.stubEnv("VITE_WEB3FORMS_ACCESS_KEY", "");
    const setTimeoutSpy = vi.spyOn(window, "setTimeout");
    render(<Contact />);
    fireEvent.change(screen.getByLabelText(/Your Name/i), { target: { name: "name", value: "John" } });
    fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { name: "email", value: "j@t.com" } });
    fireEvent.change(screen.getByLabelText(/Your Message/i), { target: { name: "message", value: "Msg valid." } });
    fireEvent.click(screen.getByRole("button", { name: /Send Message/i }));

    await screen.findByText(/isn't set up yet/i);
    expect(global.fetch).not.toHaveBeenCalled();

    expect(setTimeoutSpy).toHaveBeenCalledWith(expect.any(Function), 6000);
    const callback = setTimeoutSpy.mock.calls.find(call => call[1] === 6000)![0];
    act(() => {
      callback();
    });
    expect(screen.queryByText(/isn't set up yet/i)).not.toBeInTheDocument();
    setTimeoutSpy.mockRestore();
  });

  it("submits and resets status after success timeout", async () => {
    const setTimeoutSpy = vi.spyOn(window, "setTimeout");
    (global.fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true }),
    });
    render(<Contact />);
    fireEvent.change(screen.getByLabelText(/Your Name/i), { target: { name: "name", value: "John" } });
    fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { name: "email", value: "j@t.com" } });
    fireEvent.change(screen.getByLabelText(/Your Message/i), { target: { name: "message", value: "Msg valid." } });
    fireEvent.click(screen.getByRole("button", { name: /Send Message/i }));
    
    await screen.findByText(/Message Sent!/i);

    expect(setTimeoutSpy).toHaveBeenCalledWith(expect.any(Function), 5000);
    const callback = setTimeoutSpy.mock.calls.find(call => call[1] === 5000)![0];
    act(() => {
      callback();
    });

    expect(screen.queryByText(/Message Sent!/i)).not.toBeInTheDocument();
    setTimeoutSpy.mockRestore();
  });

  it("resets status after API error message", async () => {
    const setTimeoutSpy = vi.spyOn(window, "setTimeout");
    (global.fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: false, message: "API Error" }),
    });
    render(<Contact />);
    fireEvent.change(screen.getByLabelText(/Your Name/i), { target: { name: "name", value: "John" } });
    fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { name: "email", value: "j@t.com" } });
    fireEvent.change(screen.getByLabelText(/Your Message/i), { target: { name: "message", value: "Msg valid." } });
    fireEvent.click(screen.getByRole("button", { name: /Send Message/i }));
    
    await screen.findByText(/API Error/i);

    expect(setTimeoutSpy).toHaveBeenCalledWith(expect.any(Function), 4000);
    const callback = setTimeoutSpy.mock.calls.find(call => call[1] === 4000)![0];
    act(() => {
      callback();
    });

    expect(screen.queryByText(/API Error/i)).not.toBeInTheDocument();
    setTimeoutSpy.mockRestore();
  });

  it("resets status after API fallback error message", async () => {
    const setTimeoutSpy = vi.spyOn(window, "setTimeout");
    (global.fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: false }),
    });
    render(<Contact />);
    fireEvent.change(screen.getByLabelText(/Your Name/i), { target: { name: "name", value: "John" } });
    fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { name: "email", value: "j@t.com" } });
    fireEvent.change(screen.getByLabelText(/Your Message/i), { target: { name: "message", value: "Msg valid." } });
    fireEvent.click(screen.getByRole("button", { name: /Send Message/i }));
    
    await screen.findByText("Something went wrong. Please try again.");

    expect(setTimeoutSpy).toHaveBeenCalledWith(expect.any(Function), 4000);
    const callback = setTimeoutSpy.mock.calls.find(call => call[1] === 4000)![0];
    act(() => {
      callback();
    });

    expect(screen.queryByText("Something went wrong. Please try again.")).not.toBeInTheDocument();
    setTimeoutSpy.mockRestore();
  });

  it("resets status after network failure", async () => {
    const setTimeoutSpy = vi.spyOn(window, "setTimeout");
    (global.fetch as any).mockRejectedValueOnce(new Error("Net"));
    render(<Contact />);
    fireEvent.change(screen.getByLabelText(/Your Name/i), { target: { name: "name", value: "John" } });
    fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { name: "email", value: "j@t.com" } });
    fireEvent.change(screen.getByLabelText(/Your Message/i), { target: { name: "message", value: "Msg valid." } });
    fireEvent.click(screen.getByRole("button", { name: /Send Message/i }));
    
    await screen.findByText(/Network error/i);

    expect(setTimeoutSpy).toHaveBeenCalledWith(expect.any(Function), 4000);
    const callback = setTimeoutSpy.mock.calls.find(call => call[1] === 4000)![0];
    act(() => {
      callback();
    });

    expect(screen.queryByText(/Network error/i)).not.toBeInTheDocument();
    setTimeoutSpy.mockRestore();
  });
});
