import React from "react";
import { render } from "@testing-library/react";
import LocationDetails from "../components/LocationDetails";
import forecast from "../data/forecast.json";

describe("LocationDetails", () => {
  it("renders the correct city and location props", () => {
    const { city, country } = forecast.location;
    const { getByText } = render(
      <LocationDetails city={city} country={country} />
    );
    expect(getByText(`${city}, ${country}`)).toBeInstanceOf(HTMLHeadingElement);
  });
});
