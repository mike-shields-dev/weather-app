import { fireEvent, render, screen } from "@testing-library/react";
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

  it("renders SearchForm component", async () => {
    render(<WeatherApp />);

    const SearchForm = await screen.findByTestId("search-form");

    expect(SearchForm).toBeInTheDocument();
  });

  it("renders ErrorMessage if API call responds with an error", async () => {
    render(<WeatherApp />);

    const searchFormTextInput = await screen.findByTestId("search-form-input");
    const searchFormSubmitButton = await screen.findByText("search");

    fireEvent.change(searchFormTextInput, { target: { value: "Trumpton" } });
    fireEvent.click(searchFormSubmitButton);

    expect(await screen.findByText("City not found")).toBeInTheDocument();
  });
});
