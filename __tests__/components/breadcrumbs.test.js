import { render, screen } from "@testing-library/react";
import Breadcrumbs from "../../src/components/breadcrumbs/Breadcrumbs.jsx";
import { useSelectedLayoutSegments } from "next/navigation";

jest.mock("next/navigation", () => ({
  useSelectedLayoutSegments: jest.fn(),
}));

describe("testing Breadcrumbs component", () => {
  beforeEach(() => {
    useSelectedLayoutSegments.mockClear();
  });

  it("renders without crashing", () => {
    useSelectedLayoutSegments.mockReturnValue([]);
    render(<Breadcrumbs />);

    const homeLink = screen.getByText("Home");

    expect(homeLink).toBeInTheDocument();
  });

  it("renders segments correctly", () => {
    useSelectedLayoutSegments.mockReturnValue(["segment-one", "segment-two"]);
    render(<Breadcrumbs />);

    const segmentLinks = screen.getAllByRole("link");

    expect(segmentLinks).toHaveLength(4); // Home + Articles + 2 segments

    expect(segmentLinks[0]).toHaveTextContent("Home");
    expect(segmentLinks[1]).toHaveTextContent("Articles");
    expect(segmentLinks[2]).toHaveTextContent("Segment One");
    expect(segmentLinks[3]).toHaveTextContent("Segment Two");

    expect(segmentLinks[1]).toHaveAttribute("href", "/articles");
    expect(segmentLinks[2]).toHaveAttribute("href", "/articles/segment-one");
    expect(segmentLinks[3]).toHaveAttribute(
      "href",
      "/articles/segment-one/segment-two"
    );
  });

  it('renders image in each segment except "Home"', () => {
    useSelectedLayoutSegments.mockReturnValue(["segment-one"]);
    render(<Breadcrumbs />);

    const images = screen.getAllByRole("img");
    
    expect(images).toHaveLength(2); // One image for each segment except "Home" + image for "Articles"

    images.forEach((image) => {
      expect(image).toHaveAttribute(
        "src",
        "/images/article/vector/polygon.svg"
      );
      expect(image).toHaveAttribute("alt", "breadcrumbs figure");
    });
  });
});
