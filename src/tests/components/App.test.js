import { render, screen } from "@testing-library/react";
import React from "react";
import App from "../../components/App";
import forecast from "../../data/forecast.json";

const { location, forecasts } = forecast;

describe("App", () => {
  it("renders LocationDetails component", () => {
    render(<App location={location} forecasts={forecasts} />);
    const LocationDetails = screen.getByTestId("location-details");

    expect(LocationDetails).toBeInTheDocument();
  });

  it("renders ForecastSummaries component", () => {
    render(<App location={location} forecasts={forecasts} />);
    const ForecastSummariesContainerElement =
      screen.getByTestId("forecast-summaries");

    expect(ForecastSummariesContainerElement).toBeInTheDocument();
  });
});
