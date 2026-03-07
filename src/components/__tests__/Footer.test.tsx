import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Footer from "../Footer";

describe("Footer Component", () => {
  it("renders without crashing", () => {
    render(<Footer />);
    // Check if copyright text exists (using regex to match the year dynamically)
    const textElement = screen.getByText(
      /Vimlesh Kumar\. All rights reserved\./i,
    );
    expect(textElement).toBeInTheDocument();
  });

  it("renders social links", () => {
    render(<Footer />);
    const links = screen.getAllByRole("link");
    expect(links.length).toBe(3); // GitHub, LinkedIn, Email

    // Check href attributes
    expect(links[0]).toHaveAttribute(
      "href",
      "https://github.com/Vimlesh-Kumar",
    );
    expect(links[1]).toHaveAttribute(
      "href",
      "https://linkedin.com/in/vimlesh11",
    );
    expect(links[2]).toHaveAttribute(
      "href",
      "mailto:vimlesh11072000@gmail.com",
    );
  });
});
