import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import QuizButton from "../../src/components/quizButton/QuizButton.jsx";

describe("testing QuizButton component", () => {
  it("renders text correctly and is a link", () => {
    const testText = "Take the quiz";
    render(<QuizButton text={testText} />);

    const linkElement = screen.getByText(testText);

    expect(linkElement.tagName).toBe("A"); // it is a link
    expect(linkElement).toHaveAttribute("href", "/climate-change-quiz");
    expect(linkElement.textContent).toBe(testText);
  });
});
