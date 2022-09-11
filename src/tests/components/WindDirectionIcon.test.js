import React from "react";
import { render, screen } from "@testing-library/react";
import WindDirectionIcon from "../../components/WindDirectionIcon";
import directionLookup from "../../data/directionLookup.json";

describe("WindDirectionIcon", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<WindDirectionIcon direction="n" />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders an icon pointing in the provided direction", async () => {
    Object.keys(directionLookup).forEach(async (direction) => {
      render(<WindDirectionIcon direction={direction} />);

      const WindDirectionIconComponent = await screen.findByTestId(
        "wind-direction-icon"
      );

      expect(WindDirectionIconComponent).toHaveStyle(
        `transform: rotate(${directionLookup[direction].degrees}deg)`
      );
    });
  });

  it("renders an icon with an alt attribute describing the direction of the icon", () => {
    Object.keys(directionLookup).forEach(async (direction) => {
      render(<WindDirectionIcon direction={direction} />);

      const description = new RegExp(directionLookup[direction.humanReadable]);

      const WindDirectionIconComponent = await screen.findByAltText(
        description,
        "i"
      );

      expect(WindDirectionIconComponent).toBeInTheDocument();
    });
  });
});
