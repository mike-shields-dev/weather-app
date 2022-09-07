import React from "react";
import { render } from "@testing-library/react";
import ForecastSummary from "../components/ForecastSummary";
import forecast from "../data/forecast.json";

describe("ForecastSummary", () => {
  const dailyForecast = forecast.forecasts[0];
  const { date, description, icon, temperature } = dailyForecast;

  it("correctly renders forecast props", () => {
    const { getByText } = render(
      <ForecastSummary
        date={date}
        description={description}
        icon={icon}
        temperature={temperature.max}
      />
    );
    expect(getByText(date)).toBeInstanceOf(HTMLHeadingElement);
    expect(getByText(description)).toBeInstanceOf(HTMLParagraphElement);
    expect(getByText(icon)).toBeInstanceOf(HTMLParagraphElement);
    expect(getByText(temperature.max)).toBeInstanceOf(HTMLParagraphElement);
  });
});
