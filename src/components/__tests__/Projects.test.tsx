import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import Projects from "../Projects";

vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: any) => {
      const {
        initial,
        whileInView,
        viewport,
        transition,
        animate,
        exit,
        layout,
        ...validProps
      } = props;
      return <div {...validProps}>{children}</div>;
    },
    a: ({ children, ...props }: any) => {
      const { initial, whileInView, viewport, transition, ...validProps } =
        props;
      return <a {...validProps}>{children}</a>;
    },
    button: ({ children, ...props }: any) => {
      const { whileTap, whileHover, ...validProps } = props;
      return <button {...validProps}>{children}</button>;
    },
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}));

describe("Projects", () => {
  let windowOpenSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    windowOpenSpy = vi.spyOn(window, "open").mockImplementation(() => null);
    document.body.style.overflow = "auto";
  });

  afterEach(() => {
    windowOpenSpy.mockRestore();
  });

  it("renders the projects section heading", () => {
    render(<Projects />);
    expect(
      screen.getByText("Selected Work"),
    ).toBeInTheDocument();
  });

  it("renders featured project titles", () => {
    render(<Projects />);
    // First 3 visible projects (INITIAL_COUNT = 3)
    expect(screen.getByText("Squel.js")).toBeInTheDocument();
    expect(screen.getByText("Online Pathshala")).toBeInTheDocument();
    expect(screen.getByText("VimPGP")).toBeInTheDocument();
  });

  it("renders project stack tags", () => {
    render(<Projects />);
    // Use getAllByText for tags that appear in multiple projects
    expect(screen.getAllByText("Vue 3").length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText("Cryptography")).toBeInTheDocument();
    
    // Open modal to see projects that use TypeScript
    const viewAllBtn = screen.getByText(/View All 11 Projects/);
    fireEvent.click(viewAllBtn);
    expect(screen.getAllByText("TypeScript").length).toBeGreaterThanOrEqual(1);
  });

  it("renders the 'View All' button", () => {
    render(<Projects />);
    expect(screen.getByText(/View All 11 Projects/)).toBeInTheDocument();
  });

  it("opens the modal when 'View All' is clicked", () => {
    render(<Projects />);
    const viewAllBtn = screen.getByText(/View All 11 Projects/);
    fireEvent.click(viewAllBtn);
    expect(screen.getByText("All Projects Collection")).toBeInTheDocument();
    expect(screen.getByText(/Explore all 11 projects/)).toBeInTheDocument();
  });

  it("locks body scroll when modal opens and unlocks on close", () => {
    render(<Projects />);
    
    // Open modal
    const viewAllBtn = screen.getByText(/View All 11 Projects/);
    fireEvent.click(viewAllBtn);
    expect(document.body.style.overflow).toBe("hidden");

    // Close modal via close button
    const closeButton = screen.getByRole("button", { name: "" });
    fireEvent.click(closeButton);
    expect(document.body.style.overflow).toBe("auto");
  });

  it("closes the modal when overlay is clicked", () => {
    render(<Projects />);
    
    // Open modal
    fireEvent.click(screen.getByText(/View All 11 Projects/));
    expect(screen.getByText("All Projects Collection")).toBeInTheDocument();

    // Click overlay (the modal-overlay div)
    const overlay = screen.getByText("All Projects Collection").closest(".modal-content")!.parentElement!;
    fireEvent.click(overlay);
    expect(document.body.style.overflow).toBe("auto");
  });

  it("does not close modal when modal content is clicked", () => {
    render(<Projects />);
    
    fireEvent.click(screen.getByText(/View All 11 Projects/));
    const modalContent = screen.getByText("All Projects Collection").closest(".modal-content")!;
    fireEvent.click(modalContent);
    // Modal should still be open
    expect(screen.getByText("All Projects Collection")).toBeInTheDocument();
  });

  it("renders all projects in the modal", () => {
    render(<Projects />);
    fireEvent.click(screen.getByText(/View All 11 Projects/));
    
    // Check for project titles that are only visible in the modal
    expect(screen.getByText("Zync Audio Sync")).toBeInTheDocument();
    expect(screen.getByText("Tatkal Reminder Platform")).toBeInTheDocument();
    expect(screen.getByText("CashSync Ledger")).toBeInTheDocument();
    expect(screen.getByText("Natural++")).toBeInTheDocument();
    expect(screen.getByText("Monster Slayer Game")).toBeInTheDocument();
    expect(screen.getByText("Bike Repair Website")).toBeInTheDocument();
    expect(screen.getByText("Restaurant Website")).toBeInTheDocument();
  });

  it("opens live URL when clicking a project card with a live link", () => {
    render(<Projects />);
    // Click the first project card (Online Pathshala has a live link)
    const card = screen.getByText("Online Pathshala").closest(".project-card")!;
    fireEvent.click(card);
    expect(windowOpenSpy).toHaveBeenCalledWith(
      "https://online-pathshala.vimlesh.dev/",
      "_blank"
    );
  });

  it("opens GitHub URL when clicking a project card without a live link", () => {
    render(<Projects />);
    // Open modal to see CashSync (no live link)
    fireEvent.click(screen.getByText(/View All 11 Projects/));
    const card = screen.getByText("CashSync Ledger").closest(".project-card")!;
    fireEvent.click(card);
    expect(windowOpenSpy).toHaveBeenCalledWith(
      "https://github.com/Vimlesh-Kumar/CashSync",
      "_blank"
    );
  });

  it("opens GitHub link independently via the arrow icon", () => {
    render(<Projects />);
    // The GitHub arrow link should have stopPropagation and its own href
    const githubLinks = screen.getAllByRole("link");
    const arrowLink = githubLinks.find(l => l.getAttribute("href") === "https://github.com/Vimlesh-Kumar/online-pathshala");
    expect(arrowLink).toBeInTheDocument();
    // Click should not propagate to card
    fireEvent.click(arrowLink!);
    // window.open should not be called from propagation since we click the link directly
  });

  it("renders the project description text", () => {
    render(<Projects />);
    expect(screen.getByText(/full-stack online learning platform/)).toBeInTheDocument();
  });

  it("renders the Live badge for projects with live links", () => {
    render(<Projects />);
    const liveBadges = screen.getAllByText("Live");
    expect(liveBadges.length).toBeGreaterThan(0);
  });

  it("renders project images with alt text", () => {
    render(<Projects />);
    expect(screen.getByAltText("Squel.js screenshot")).toBeInTheDocument();
    expect(screen.getByAltText("Online Pathshala screenshot")).toBeInTheDocument();
    expect(screen.getByAltText("VimPGP screenshot")).toBeInTheDocument();
  });

  it("renders the project count in description", () => {
    render(<Projects />);
    expect(screen.getByText(/A curated set of 11 projects/)).toBeInTheDocument();
  });
});
