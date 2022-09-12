import React from "react";
import { render } from "@testing-library/react";
import ForecastSummaries from "../../components/ForecastSummaries";

const validProps = [
  {
    date: 1525046400000,
    temperature: {
      max: 11,
      min: 4,
    },
    wind: {
      speed: 13,
      direction: "s",
    },
    humidity: 30,
    description: "Clear",
    icon: "800",
  },
  {
    date: 1525132800000,
    temperature: {
      max: 13,
      min: 8,
    },
    wind: {
      speed: 60,
      direction: "ne",
    },
    humidity: 80,
    description: "Stormy",
    icon: "211",
  },
  {
    date: 1525219200000,
    temperature: {
      max: 1,
      min: -2,
    },
    wind: {
      speed: 5,
      direction: "n",
    },
    humidity: 50,
    description: "Heavy Snow",
    icon: "602",
  },
];

describe("ForecastSummaries", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(
      <ForecastSummaries
        forecasts={validProps}
        handleForecastSelect={jest.fn()}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders forecasts as ForecastSummary components", () => {
    const { getAllByTestId } = render(
      <ForecastSummaries
        forecasts={validProps}
        handleForecastSelect={jest.fn()}
      />
    );
    expect(getAllByTestId("forecast-summary")).toHaveLength(validProps.length);
  });
});
