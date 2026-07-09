import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
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
  let windowOpenSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
    vi.setSystemTime(new Date("2026-01-01T12:00:00Z"));
    windowOpenSpy = vi.spyOn(window, "open").mockImplementation(() => null);
  });

  afterEach(() => {
    windowOpenSpy.mockRestore();
    vi.useRealTimers();
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
    const scrollToMock = vi.fn();
    HTMLDivElement.prototype.scrollTo = scrollToMock;

    render(<InteractiveTerminal />);
    runCommand("help");
    expect(scrollToMock).toHaveBeenCalled();
  });

  it("falls back to scrollTop when scrollTo is unavailable", () => {
    // @ts-expect-error – intentionally remove scrollTo to hit the fallback path
    HTMLDivElement.prototype.scrollTo = undefined;
    render(<InteractiveTerminal />);
    runCommand("help");
    expect(screen.getByText(/Available commands/)).toBeInTheDocument();
  });

  // ── cd / ls navigation ────────────────────────────────────────────────
  describe("directory navigation", () => {
    it("lists project files after cd projects", () => {
      render(<InteractiveTerminal />);
      runCommand("cd projects");
      runCommand("ls");
      expect(screen.getByText(/online-pathshala\//)).toBeInTheDocument();
    });

    it("returns home with 'cd' and 'cd ~'", () => {
      render(<InteractiveTerminal />);
      runCommand("cd projects");
      runCommand("cd");
      runCommand("ls");
      expect(screen.getByText(/resume\.pdf/)).toBeInTheDocument();
    });

    it("goes up a level with 'cd ..'", () => {
      render(<InteractiveTerminal />);
      runCommand("cd projects");
      runCommand("cd ..");
      runCommand("ls");
      expect(screen.getByText(/resume\.pdf/)).toBeInTheDocument();
    });

    it("stays home when running 'cd ..' from home", () => {
      render(<InteractiveTerminal />);
      runCommand("cd ..");
      runCommand("ls");
      expect(screen.getByText(/resume\.pdf/)).toBeInTheDocument();
    });

    it("errors when cd projects is run from inside projects", () => {
      render(<InteractiveTerminal />);
      runCommand("cd projects");
      runCommand("cd projects");
      expect(
        screen.getByText(/no such file or directory: projects/),
      ).toBeInTheDocument();
    });

    it("explains that project sub-paths are not cd-able", () => {
      render(<InteractiveTerminal />);
      runCommand("cd projects/squel");
      expect(
        screen.getByText(/projects are directories but we don't cd/),
      ).toBeInTheDocument();
    });

    it("errors for an unknown cd target", () => {
      render(<InteractiveTerminal />);
      runCommand("cd nowhere");
      expect(
        screen.getByText(/no such file or directory: nowhere/),
      ).toBeInTheDocument();
    });
  });

  // ── cat ───────────────────────────────────────────────────────────────
  describe("cat", () => {
    it("shows usage when no file is given", () => {
      render(<InteractiveTerminal />);
      runCommand("cat");
      expect(screen.getByText(/missing file name/)).toBeInTheDocument();
    });

    it("prints README.md", () => {
      render(<InteractiveTerminal />);
      runCommand("cat README.md");
      expect(screen.getByText(/Full-Stack & Microservices Expert/)).toBeInTheDocument();
    });

    it("opens the resume in a new tab for resume.pdf", () => {
      render(<InteractiveTerminal />);
      runCommand("cat resume.pdf");
      expect(windowOpenSpy).toHaveBeenCalledWith(
        expect.stringContaining("drive.google.com"),
        "_blank",
      );
    });

    it("prints skills.txt", () => {
      render(<InteractiveTerminal />);
      runCommand("cat skills.txt");
      expect(screen.getByText(/Language\/Frameworks:/)).toBeInTheDocument();
    });

    it("reports that projects is a directory", () => {
      render(<InteractiveTerminal />);
      runCommand("cat projects");
      expect(screen.getByText(/Is a directory/)).toBeInTheDocument();
    });

    it("errors for an unknown file in home", () => {
      render(<InteractiveTerminal />);
      runCommand("cat nope.txt");
      expect(
        screen.getByText(/nope\.txt: No such file or directory/),
      ).toBeInTheDocument();
    });

    it("prints a project's details from inside projects", () => {
      render(<InteractiveTerminal />);
      runCommand("cd projects");
      runCommand("cat squel");
      expect(screen.getByText(/SQL query builder library/)).toBeInTheDocument();
    });

    it("errors for an unknown project file", () => {
      render(<InteractiveTerminal />);
      runCommand("cd projects");
      runCommand("cat ghost");
      expect(
        screen.getByText(/ghost: No such file or directory/),
      ).toBeInTheDocument();
    });
  });

  // ── open ──────────────────────────────────────────────────────────────
  describe("open", () => {
    it("shows options when no target is given", () => {
      render(<InteractiveTerminal />);
      runCommand("open");
      expect(screen.getByText(/missing target/)).toBeInTheDocument();
    });

    it("opens GitHub, LinkedIn and resume", () => {
      render(<InteractiveTerminal />);
      runCommand("open github");
      runCommand("open linkedin");
      runCommand("open resume");
      expect(windowOpenSpy).toHaveBeenCalledWith(
        "https://github.com/Vimlesh-Kumar",
        "_blank",
      );
      expect(windowOpenSpy).toHaveBeenCalledWith(
        "https://linkedin.com/in/vimlesh11",
        "_blank",
      );
      expect(windowOpenSpy).toHaveBeenCalledTimes(3);
    });

    it("opens a known project repository", () => {
      render(<InteractiveTerminal />);
      runCommand("open projects/squel");
      expect(windowOpenSpy).toHaveBeenCalledWith(
        "https://github.com/hiddentao/squel",
        "_blank",
      );
    });

    it("errors for an unknown project repository", () => {
      render(<InteractiveTerminal />);
      runCommand("open projects/ghost");
      expect(screen.getByText(/project repo 'ghost' not found/)).toBeInTheDocument();
    });

    it("errors for an unknown open target", () => {
      render(<InteractiveTerminal />);
      runCommand("open spotify");
      expect(screen.getByText(/unknown target 'spotify'/)).toBeInTheDocument();
    });
  });

  // ── curl ──────────────────────────────────────────────────────────────
  describe("curl", () => {
    it("shows usage when no URL is given", () => {
      render(<InteractiveTerminal />);
      runCommand("curl");
      expect(screen.getByText(/missing URL/)).toBeInTheDocument();
    });

    it("renders ASCII art for the personal domain", () => {
      render(<InteractiveTerminal />);
      runCommand("curl vimlesh.dev");
      expect(
        screen.getByText(/Expert Vue 3 & Node Microservices Developer/),
      ).toBeInTheDocument();
    });

    it("blocks external URLs with a CORS notice", () => {
      render(<InteractiveTerminal />);
      runCommand("curl example.com");
      expect(screen.getByText(/blocked due to CORS simulation/)).toBeInTheDocument();
    });
  });

  // ── github ────────────────────────────────────────────────────────────
  describe("github", () => {
    afterEach(() => {
      vi.unstubAllGlobals();
    });

    it("shows the CLI simulator help with no action", () => {
      render(<InteractiveTerminal />);
      runCommand("github");
      expect(screen.getByText(/GitHub CLI Simulator/)).toBeInTheDocument();
    });

    it("errors for an unknown github option", () => {
      render(<InteractiveTerminal />);
      runCommand("github stars");
      expect(screen.getByText(/unknown option 'stars'/)).toBeInTheDocument();
    });

    it("lists repositories from a successful API response", async () => {
      vi.stubGlobal(
        "fetch",
        vi.fn().mockResolvedValue({
          ok: true,
          json: async () => [
            {
              name: "squel",
              language: "JavaScript",
              stargazers_count: 12,
              description: "Query builder",
              html_url: "https://github.com/hiddentao/squel",
            },
            // Second repo omits language & description to exercise the fallbacks.
            {
              name: "mystery",
              language: null,
              stargazers_count: 0,
              description: null,
              html_url: "https://github.com/Vimlesh-Kumar/mystery",
            },
          ],
        }),
      );
      render(<InteractiveTerminal />);
      runCommand("github repos");
      const output = await screen.findByText(/ACTIVE GITHUB REPOSITORIES ===/);
      expect(output).toBeInTheDocument();
      expect(output.textContent).toContain("[Misc]");
      expect(output.textContent).toContain("No description provided.");
    });

    it("falls back to a static repo list on API failure", async () => {
      vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: false }));
      render(<InteractiveTerminal />);
      runCommand("github repos");
      expect(
        await screen.findByText(/ACTIVE GITHUB REPOSITORIES \(FALLBACK\)/),
      ).toBeInTheDocument();
    });

    it("shows profile stats from a successful API response", async () => {
      vi.stubGlobal(
        "fetch",
        vi.fn().mockResolvedValue({
          ok: true,
          json: async () => ({
            login: "Vimlesh-Kumar",
            name: "Vimlesh Kumar",
            bio: "Engineer",
            public_repos: 27,
            followers: 5,
            following: 3,
            html_url: "https://github.com/Vimlesh-Kumar",
          }),
        }),
      );
      render(<InteractiveTerminal />);
      runCommand("github profile");
      expect(
        await screen.findByText(/GitHub Username:\s+Vimlesh-Kumar/),
      ).toBeInTheDocument();
    });

    it("uses default name/bio when the profile omits them", async () => {
      vi.stubGlobal(
        "fetch",
        vi.fn().mockResolvedValue({
          ok: true,
          json: async () => ({
            login: "Vimlesh-Kumar",
            name: null,
            bio: null,
            public_repos: 27,
            followers: 5,
            following: 3,
            html_url: "https://github.com/Vimlesh-Kumar",
          }),
        }),
      );
      render(<InteractiveTerminal />);
      runCommand("github profile");
      const output = await screen.findByText(/GitHub Username:\s+Vimlesh-Kumar/);
      expect(output.textContent).toContain("Vimlesh Kumar");
      expect(output.textContent).toContain(
        "Full-Stack Engineer specialized in Vue 3 & Node",
      );
    });

    it("falls back to static profile stats on a non-OK response", async () => {
      vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: false }));
      render(<InteractiveTerminal />);
      runCommand("github profile");
      expect(
        await screen.findByText(/GitHub Profile \(Fallback\)/),
      ).toBeInTheDocument();
    });
  });
});
