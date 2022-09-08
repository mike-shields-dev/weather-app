import React from "react";
import { render } from "@testing-library/react";
import ForecastSummary from "../components/ForecastSummary";
import forecast from "../data/forecast.json";

const dailyForecast = forecast.forecasts[0];
const { date, description, icon, temperature } = dailyForecast;

describe("ForecastSummary", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <ForecastSummary
        date={date}
        description={description}
        icon={icon}
        temperature={temperature.max}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders provided props correctly", () => {
    const { getByText, getByTestId } = render(
      <ForecastSummary
        date={date}
        description={description}
        icon={icon}
        temperature={temperature.max}
      />
    );

    const dateEl = getByText(date);
    const descriptionEl = getByText(description);
    const iconEl = getByTestId("forecast-summary-icon");
    const temperatureEl = getByText(temperature.max);

    expect(dateEl).toBeInstanceOf(HTMLHeadingElement);
    expect(dateEl).toHaveClass("forecast-summary__date");

    expect(descriptionEl).toBeInstanceOf(HTMLParagraphElement);
    expect(descriptionEl).toHaveClass("forecast-summary__description");

    expect(iconEl).toBeInstanceOf(HTMLParagraphElement);
    expect(iconEl).toHaveClass("forecast-summary__icon");

    expect(temperatureEl).toBeInstanceOf(HTMLParagraphElement);
    expect(temperatureEl).toHaveClass("forecast-summary__temperature");
  });
});
