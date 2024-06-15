import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ReadNext from "../../src/components/articles/readNext/ReadNext.jsx";

describe("testing Readnext component", () => {
  it("Read next should be in the document", () => {
    render(<ReadNext />);

    const text = screen.getByText("Read Next!");

    expect(text).toBeInTheDocument();
  });
});
