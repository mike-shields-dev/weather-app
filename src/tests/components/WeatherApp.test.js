import { render, screen } from "@testing-library/react";
import React from "react";
import WeatherApp from "../../components/WeatherApp";
import forecast from "../../data/forecast.json";

const { location, forecasts } = forecast;

describe("WeatherApp", () => {
  it("renders LocationDetails component", () => {
    render(<WeatherApp location={location} forecasts={forecasts} />);
    const LocationDetails = screen.getByTestId("location-details");

    expect(LocationDetails).toBeInTheDocument();
  });

  it("renders ForecastSummaries component", () => {
    render(<WeatherApp location={location} forecasts={forecasts} />);
    const ForecastSummariesContainerElement =
      screen.getByTestId("forecast-summaries");

    expect(ForecastSummariesContainerElement).toBeInTheDocument();
  });

  it("renders ForecastDetails component", () => {
    render(<WeatherApp location={location} forecasts={forecasts} />);
    const ForecastDetails = screen.getByTestId("forecast-details");

    expect(ForecastDetails).toBeInTheDocument();
  });
});
