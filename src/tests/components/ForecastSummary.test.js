import React from "react";
import { render } from "@testing-library/react";
import ForecastSummary from "../../components/ForecastSummary";
import forecast from "../../data/forecast.json";
import unixTimestampToHumanFormattedDate from "../../helpers/unixTimestampToFormattedDate";

const dailyForecast = forecast.forecasts[0];
const { date, description, icon, temperature } = dailyForecast;
const formattedDate = unixTimestampToHumanFormattedDate(date);

describe("ForecastSummary", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(
      <ForecastSummary
        date={date}
        description={description}
        icon={icon}
        temperature={temperature}
        handleForecastSelect={jest.fn()}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders formatted date, description, icon and temperature", () => {
    const { getByText, getByTestId } = render(
      <ForecastSummary
        data-testid="forecast-summary"
        date={date}
        description={description}
        icon={icon}
        temperature={temperature}
        handleForecastSelect={jest.fn()}
      />
    );

    expect(getByText(formattedDate)).toBeInTheDocument();
    expect(getByText(description)).toBeInTheDocument();
    expect(getByTestId("forecast-summary-icon")).toBeInTheDocument();
    expect(getByText(temperature.max)).toBeInTheDocument();
  });

  it("renders elements with correct class names", () => {
    const { getByText, getByTestId } = render(
      <ForecastSummary
        data-testid="forecast-summary"
        date={date}
        description={description}
        icon={icon}
        temperature={temperature}
        handleForecastSelect={jest.fn()}
      />
    );

    expect(getByTestId("forecast-summary-date")).toHaveClass(
      "forecast-summary__date"
    );
    expect(getByText(description)).toHaveClass("forecast-summary__description");
    expect(getByTestId("forecast-summary-icon")).toHaveClass(
      "forecast-summary__icon"
    );
    expect(getByTestId("forecast-summary-temperature")).toHaveClass(
      "forecast-summary__temperature"
    );
  });
});
