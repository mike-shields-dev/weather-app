import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";
import { forecasts } from "../../data/forecast.json";
import unixTimestampToFormattedDate from "../../helpers/unixTimestampToFormattedDate";

const [forecast] = forecasts;
const { date, temperature, humidity, wind } = forecast;
const formattedDate = unixTimestampToFormattedDate(date);

describe("ForecastDetails", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<ForecastDetails {...forecast} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders formatted date, min and max temperature, humidity and wind speed and direction", () => {
    const { getByText, getByTestId } = render(
      <ForecastDetails {...forecast} />
    );

    expect(getByText(formattedDate)).toBeInTheDocument();
    expect(getByText(humidity)).toBeInTheDocument();
    expect(getByText(temperature.max)).toBeInTheDocument();
    expect(getByText(temperature.min)).toBeInTheDocument();
    expect(getByText(wind.speed)).toBeInTheDocument();
    expect(getByTestId("wind-direction-icon")).toBeInTheDocument();
  });

  it("renders elements with correct class names", () => {
    const { getByTestId } = render(<ForecastDetails {...forecast} />);

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
