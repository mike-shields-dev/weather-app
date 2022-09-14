import React from "react";
import { render, screen } from "@testing-library/react";
import WindDirectionIcon from "../../components/WindDirectionIcon";
import {
  degreesFromWindDirection,
  unabbreviatedWindDirection,
} from "../../helpers/windDirection";

const windDirections = [
  "n",
  "nne",
  "ne",
  "ene",
  "e",
  "ese",
  "se",
  "sse",
  "s",
  "ssw",
  "sw",
  "wsw",
  "w",
  "wnw",
  "nw",
  "nnw",
];

describe("WindDirectionIcon", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<WindDirectionIcon direction="n" />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders an icon pointing in the provided direction", async () => {
    windDirections.forEach(async (direction) => {
      render(<WindDirectionIcon direction={direction} />);

      const WindDirectionIconComponent = await screen.findByTestId(
        "wind-direction-icon"
      );

      expect(WindDirectionIconComponent).toHaveStyle(
        `transform: rotate(${degreesFromWindDirection(direction)}deg)`
      );
    });
  });

  it("renders an svg with a title describing the direction", () => {
    windDirections.forEach(async (direction) => {
      render(<WindDirectionIcon direction={direction} />);

      const descriptionRegex = new RegExp(
        unabbreviatedWindDirection(direction),
        "i"
      );

      const windDirectionDescription = await screen.findByText(
        descriptionRegex
      );

      expect(windDirectionDescription).toBeInTheDocument();
    });
  });
});
