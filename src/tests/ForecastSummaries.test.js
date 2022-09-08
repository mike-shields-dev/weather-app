import React from "react";
import { render } from "@testing-library/react";
import ForecastSummaries from "../components/ForecastSummaries";
import forecast from "../data/forecast.json";

const { forecasts } = forecast;

describe("ForecastSummaries", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<ForecastSummaries forecasts={forecasts} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders forecasts as ForecastSummary components", () => {
    const { getAllByTestId } = render(
      <ForecastSummaries forecasts={forecasts} />
    );
    expect(getAllByTestId("forecast-summary")).toHaveLength(forecasts.length);
  });
});
