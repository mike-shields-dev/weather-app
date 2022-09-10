import React from "react";
import { render } from "@testing-library/react";
import LocationDetails from "../../components/LocationDetails";
import forecast from "../../data/forecast.json";

describe("LocationDetails", () => {
  const { city, country } = forecast.location;

  it("matches snapshot", () => {
    const { asFragment } = render(
      <LocationDetails city={city} country={country} />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders city and country", () => {
    const { getByText } = render(
      <LocationDetails city={city} country={country} />
    );
    expect(getByText(`${city}, ${country}`)).toBeInTheDocument();
  });

  it("has correct css class name", () => {
    const { getByText } = render(
      <LocationDetails city={city} country={country} />
    );
    expect(getByText(`${city}, ${country}`)).toHaveClass(
      "location-details__title"
    );
  });
});
