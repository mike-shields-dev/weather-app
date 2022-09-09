import React from "react";
import { render } from "@testing-library/react";
import ForecastSummary from "../components/ForecastSummary";
import forecast from "../data/forecast.json";
import ordinalDate from "../helpers/ordinalDate";

const dailyForecast = forecast.forecasts[0];
const { date, description, icon, temperature } = dailyForecast;

const dateString = new Date(date).toDateString();
const [weekday, month, dayOfMonth] = dateString.split(" ");
const formattedDate = `${weekday} ${ordinalDate(Number(dayOfMonth))} ${month}`;

describe("ForecastSummary", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(
      <ForecastSummary
        date={date}
        description={description}
        icon={icon}
        temperature={temperature}
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
      />
    );

    expect(getByText(formattedDate)).toBeInTheDocument();
    expect(getByText(description)).toBeInTheDocument();
    expect(getByTestId("forecast-summary-icon")).toBeInTheDocument();
    expect(getByText(temperature.max)).toBeInTheDocument();
  });

  it("rendered elements have correct class names", () => {
    const { getByText, getByTestId } = render(
      <ForecastSummary
        data-testid="forecast-summary"
        date={date}
        description={description}
        icon={icon}
        temperature={temperature}
      />
    );

    expect(getByText(formattedDate)).toHaveClass("forecast-summary__date");
    expect(getByText(description)).toHaveClass("forecast-summary__description");
    expect(getByTestId("forecast-summary-icon")).toHaveClass(
      "forecast-summary__icon"
    );
    expect(getByText(temperature.max)).toHaveClass(
      "forecast-summary__temperature"
    );
  });
});
