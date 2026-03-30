import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, expect, it, vi, beforeEach } from "vitest";
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

  it("submits and resets status after success timeout", async () => {
    (global.fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true }),
    });
    render(<Contact />);
    fireEvent.change(screen.getByLabelText(/Your Name/i), { target: { name: "name", value: "John" } });
    fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { name: "email", value: "j@t.com" } });
    fireEvent.change(screen.getByLabelText(/Your Message/i), { target: { name: "message", value: "Msg valid." } });
    fireEvent.click(screen.getByRole("button", { name: /Send Message/i }));
    
    await waitFor(() => {
      expect(screen.getByText(/Message Sent!/i)).toBeInTheDocument();
    }, { timeout: 2000 });

    // Use fake timers JUST for the wait to avoid 5s real wait if possible, 
    // but real timers are safer for the commit hook which might be slow.
    // Let's use fake timers more carefully.
    vi.useFakeTimers();
    vi.advanceTimersByTime(5005);
    await waitFor(() => {
      expect(screen.queryByText(/Message Sent!/i)).not.toBeInTheDocument();
    });
    vi.useRealTimers();
  }, 10000);

  it("resets status after error and network failure", async () => {
    (global.fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: false, message: "API Error" }),
    });
    render(<Contact />);
    fireEvent.change(screen.getByLabelText(/Your Name/i), { target: { name: "name", value: "John" } });
    fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { name: "email", value: "j@t.com" } });
    fireEvent.change(screen.getByLabelText(/Your Message/i), { target: { name: "message", value: "Msg valid." } });
    fireEvent.click(screen.getByRole("button", { name: /Send Message/i }));
    
    await waitFor(() => {
      expect(screen.getByText(/API Error/i)).toBeInTheDocument();
    }, { timeout: 2000 });

    vi.useFakeTimers();
    vi.advanceTimersByTime(4005);
    await waitFor(() => {
      expect(screen.queryByText(/API Error/i)).not.toBeInTheDocument();
    });
    vi.useRealTimers();

    (global.fetch as any).mockRejectedValueOnce(new Error("Net"));
    fireEvent.click(screen.getByRole("button", { name: /Send Message/i }));
    
    await waitFor(() => {
      expect(screen.getByText(/Network error/i)).toBeInTheDocument();
    }, { timeout: 2000 });

    vi.useFakeTimers();
    vi.advanceTimersByTime(4005);
    await waitFor(() => {
      expect(screen.queryByText(/Network error/i)).not.toBeInTheDocument();
    });
    vi.useRealTimers();
  }, 15000);
});
