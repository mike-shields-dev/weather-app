import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";
import unixTimestampToFormattedDate from "../../helpers/unixTimestampToFormattedDate";

const validProps = {
  date: 1525046400000,
  temperature: {
    max: 11,
    min: 4,
  },
  wind: {
    speed: 13,
    direction: "s",
  },
  humidity: 30,
  description: "Clear",
  icon: 800,
};

const { date, temperature, humidity, wind } = validProps;
const formattedDate = unixTimestampToFormattedDate(date);

describe("ForecastDetails", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<ForecastDetails {...validProps} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders formatted date, min and max temperature, humidity and wind speed and direction", () => {
    const { getByText, getByTestId } = render(
      <ForecastDetails {...validProps} />
    );

    expect(getByText(formattedDate)).toBeInTheDocument();
    expect(getByText(humidity)).toBeInTheDocument();
    expect(getByText(temperature.max)).toBeInTheDocument();
    expect(getByText(temperature.min)).toBeInTheDocument();
    expect(getByText(wind.speed)).toBeInTheDocument();
    expect(getByTestId("wind-direction-icon")).toBeInTheDocument();
  });

  it("renders elements with correct class names", () => {
    const { getByTestId } = render(<ForecastDetails {...validProps} />);

    expect(getByTestId("forecast-details-date")).toHaveClass(
      "forecast-details__date"
    );
    expect(getByTestId("forecast-details-humidity")).toHaveClass(
      "forecast-details__humidity"
    );
    expect(getByTestId("forecast-details-temperature-max")).toHaveClass(
      "forecast-details__temperature-max"
    );
    expect(getByTestId("forecast-details-temperature-min")).toHaveClass(
      "forecast-details__temperature-min"
    );
    expect(getByTestId("forecast-details-wind")).toHaveClass(
      "forecast-details__wind"
    );
  });
});
