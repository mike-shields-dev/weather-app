import { render, screen } from "@testing-library/react";
import React from "react";
import WeatherApp from "../../components/WeatherApp";

describe("WeatherApp", () => {
  it("renders LocationDetails component", async () => {
    render(<WeatherApp />);

    const LocationDetails = await screen.findByTestId("location-details");

    expect(LocationDetails).toBeInTheDocument();
  });

  it("renders ForecastSummaries component", async () => {
    render(<WeatherApp />);

    const ForecastSummariesContainerElement = await screen.findByTestId(
      "forecast-summaries"
    );

    expect(ForecastSummariesContainerElement).toBeInTheDocument();
  });

  it("renders ForecastDetails component", async () => {
    render(<WeatherApp />);

    const ForecastDetails = await screen.findByTestId("forecast-details");

    expect(ForecastDetails).toBeInTheDocument();
  });
});
