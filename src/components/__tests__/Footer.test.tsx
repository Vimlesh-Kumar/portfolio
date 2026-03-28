import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Footer from "../Footer";

describe("Footer", () => {
  it("renders the footer copy", () => {
    render(<Footer />);
    // The text is split across elements by a Heart icon, so match the <p> tag specifically
    const footerParagraph = screen.getByText((_, element) => {
      if (element?.tagName !== "P") return false;
      const text = element.textContent || "";
      return /Vimlesh Kumar\. Built with.*React & Tailwind\./i.test(text);
    });
    expect(footerParagraph).toBeInTheDocument();
  });

  it("renders social links", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute(
      "href",
      "https://github.com/Vimlesh-Kumar",
    );
    expect(screen.getByRole("link", { name: "LinkedIn" })).toHaveAttribute(
      "href",
      "https://linkedin.com/in/vimlesh11",
    );
    expect(screen.getByRole("link", { name: "Email" })).toHaveAttribute(
      "href",
      "mailto:vimlesh11072000@gmail.com",
    );
  });
});
