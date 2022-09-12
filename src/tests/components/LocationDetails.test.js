import React from "react";
import { render } from "@testing-library/react";
import LocationDetails from "../../components/LocationDetails";

const validProps = {
  city: "Lancaster",
  country: "GB",
};
const { city, country } = validProps;

describe("LocationDetails", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<LocationDetails {...validProps} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders city and country", () => {
    const { getByText } = render(<LocationDetails {...validProps} />);

    expect(getByText(`${city}, ${country}`)).toBeInTheDocument();
  });

  it("has correct css class name", () => {
    const { getByText } = render(<LocationDetails {...validProps} />);

    expect(getByText(`${city}, ${country}`)).toHaveClass(
      "location-details__title"
    );
  });
});
