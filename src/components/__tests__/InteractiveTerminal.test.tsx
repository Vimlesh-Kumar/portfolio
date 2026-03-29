import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi, beforeEach } from "vitest";
import InteractiveTerminal from "../InteractiveTerminal";

vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: any) => {
      const { initial, animate, whileHover, layout, layoutId, transition, ...validProps } = props;
      return <div {...validProps}>{children}</div>;
    },
    button: ({ children, ...props }: any) => {
      const { whileTap, whileHover, ...validProps } = props;
      return <button {...validProps}>{children}</button>;
    },
  },
}));

const getInput = () =>
  screen.getByRole("textbox") as HTMLInputElement;

const runCommand = (cmd: string) => {
  const input = getInput();
  fireEvent.change(input, { target: { value: cmd } });
  fireEvent.keyDown(input, { key: "Enter" });
};

describe("InteractiveTerminal", () => {
  beforeEach(() => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
    vi.setSystemTime(new Date("2026-01-01T12:00:00Z"));
  });

  it("renders the terminal header", () => {
    render(<InteractiveTerminal />);
    expect(screen.getByText("vimlesh@dev ~ zsh")).toBeInTheDocument();
  });

  it("renders the initial welcome message", () => {
    render(<InteractiveTerminal />);
    expect(
      screen.getByText(/Portfolio dev server is running/)
    ).toBeInTheDocument();
  });

  it("handles the help command", () => {
    render(<InteractiveTerminal />);
    runCommand("help");
    expect(screen.getByText(/Available commands/)).toBeInTheDocument();
  });

  it("handles the whoami command", () => {
    render(<InteractiveTerminal />);
    runCommand("whoami");
    expect(screen.getByText(/Vimlesh Kumar/)).toBeInTheDocument();
  });

  it("handles the skills command", () => {
    render(<InteractiveTerminal />);
    runCommand("skills");
    expect(screen.getByText(/Frontend:/)).toBeInTheDocument();
  });

  it("handles the contact command", () => {
    render(<InteractiveTerminal />);
    runCommand("contact");
    expect(screen.getByText(/vimlesh11072000@gmail.com/)).toBeInTheDocument();
  });

  it("handles the ls command", () => {
    render(<InteractiveTerminal />);
    runCommand("ls");
    expect(screen.getByText(/projects\//)).toBeInTheDocument();
  });

  it("handles the sudo command", () => {
    render(<InteractiveTerminal />);
    runCommand("sudo");
    expect(screen.getByText(/nice try/)).toBeInTheDocument();
  });

  it("handles the date command", () => {
    render(<InteractiveTerminal />);
    runCommand("date");
    expect(screen.getByText(/2026/)).toBeInTheDocument();
  });

  it("handles the echo command", () => {
    render(<InteractiveTerminal />);
    runCommand("echo hello world");
    expect(screen.getByText("hello world")).toBeInTheDocument();
  });

  it("handles the clear command", () => {
    render(<InteractiveTerminal />);
    // First add some output, then clear
    runCommand("help");
    expect(screen.getByText(/Available commands/)).toBeInTheDocument();
    runCommand("clear");
    expect(screen.queryByText(/Available commands/)).not.toBeInTheDocument();
    // Welcome message should also be gone
    expect(screen.queryByText(/Portfolio dev server/)).not.toBeInTheDocument();
  });

  it("handles unknown command", () => {
    render(<InteractiveTerminal />);
    runCommand("foobar");
    expect(screen.getByText(/command not found: foobar/)).toBeInTheDocument();
  });

  it("handles empty input (just pressing Enter)", () => {
    render(<InteractiveTerminal />);
    runCommand("");
    // Should just add empty input line, no error
    expect(screen.queryByText(/command not found/)).not.toBeInTheDocument();
  });

  it("handles non-Enter key (does not trigger command)", () => {
    render(<InteractiveTerminal />);
    const input = getInput();
    fireEvent.change(input, { target: { value: "help" } });
    fireEvent.keyDown(input, { key: "a" });
    // "help" output should NOT appear
    expect(screen.queryByText(/Available commands/)).not.toBeInTheDocument();
  });

  it("clears input after command execution", () => {
    render(<InteractiveTerminal />);
    const input = getInput();
    fireEvent.change(input, { target: { value: "help" } });
    fireEvent.keyDown(input, { key: "Enter" });
    expect(input.value).toBe("");
  });

  it("focuses input when terminal body is clicked", () => {
    render(<InteractiveTerminal />);
    const terminal = screen.getByText("vimlesh@dev ~ zsh").closest(".dev-terminal")!;
    const input = getInput();
    // Simulate clicking the terminal container
    fireEvent.click(terminal);
    expect(document.activeElement).toBe(input);
  });

  it("handles command with uppercase letters (case insensitive base command)", () => {
    render(<InteractiveTerminal />);
    runCommand("HELP");
    expect(screen.getByText(/Available commands/)).toBeInTheDocument();
  });

  it("handles command with leading/trailing spaces", () => {
    render(<InteractiveTerminal />);
    runCommand("  whoami  ");
    expect(screen.getByText(/Vimlesh Kumar/)).toBeInTheDocument();
  });

  it("scrolls to bottom on new history entries", () => {
    const scrollIntoViewMock = vi.fn();
    HTMLDivElement.prototype.scrollIntoView = scrollIntoViewMock;

    render(<InteractiveTerminal />);
    runCommand("help");
    expect(scrollIntoViewMock).toHaveBeenCalledWith({ behavior: "smooth" });
  });
});
