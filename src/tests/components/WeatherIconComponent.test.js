import React from "react";
import { render } from "@testing-library/react";
import WeatherIconComponent from "../../components/WeatherIconComponent";

describe("WeatherIconComponent", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<WeatherIconComponent iconId="800" />);

    expect(asFragment()).toMatchSnapshot();
  });
});
