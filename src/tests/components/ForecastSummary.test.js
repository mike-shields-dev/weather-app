import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ForecastSummary from "../../components/ForecastSummary";
import forecast from "../../data/forecast.json";
import unixTimestampToHumanFormattedDate from "../../helpers/unixTimestampToFormattedDate";

const dailyForecast = forecast.forecasts[0];
const { date, description, temperature } = dailyForecast;
const formattedDate = unixTimestampToHumanFormattedDate(date);

describe("ForecastSummary", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(
      <ForecastSummary handleForecastSelect={jest.fn()} {...dailyForecast} />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders formatted date, description, icon and temperature", () => {
    const { getByText, getByTestId } = render(
      <ForecastSummary
        data-testid="forecast-summary"
        handleForecastSelect={jest.fn()}
        {...dailyForecast}
      />
    );

    expect(getByText(formattedDate)).toBeInTheDocument();
    expect(getByText(description)).toBeInTheDocument();
    expect(getByTestId("forecast-summary-icon")).toBeInTheDocument();
    expect(getByText(temperature.max)).toBeInTheDocument();
  });

  it("renders elements with correct class names", () => {
    const { getByTestId } = render(
      <ForecastSummary
        data-testid="forecast-summary"
        handleForecastSelect={jest.fn()}
        {...dailyForecast}
      />
    );

    expect(getByTestId("forecast-summary-date")).toHaveClass(
      "forecast-summary__date"
    );
    expect(getByTestId("forecast-summary-description")).toHaveClass(
      "forecast-summary__description"
    );
    expect(getByTestId("forecast-summary-icon")).toHaveClass(
      "forecast-summary__icon"
    );
    expect(getByTestId("forecast-summary-temperature")).toHaveClass(
      "forecast-summary__temperature"
    );
  });

  it("More details... button should call handleForecastSelect callback", () => {
    const handleForecastSelect = jest.fn();

    const { getByText } = render(
      <ForecastSummary
        data-testid="forecast-summary"
        handleForecastSelect={handleForecastSelect}
        {...dailyForecast}
      />
    );

    const detailsButton = getByText("More details...");

    fireEvent.click(detailsButton);

    expect(handleForecastSelect).toHaveBeenCalled();
  });
});
