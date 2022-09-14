import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ForecastSummary from "../../components/ForecastSummary";

const validProps = {
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
  handleForecastSelect: jest.fn(),
};
const { description, temperature } = validProps;

describe("ForecastSummary", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<ForecastSummary {...validProps} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("displays correct day of week, or 'Today'", () => {
    const weekdayUnixTimeLookUp = {
      Sunday: 1662883154000,
      Monday: 1662969554000,
      Tuesday: 1663055954000,
      Wednesday: 1663142354000,
      Thursday: 1663228754000,
      Friday: 1663315154000,
      Saturday: 1663401554000,
    };

    Object.entries(weekdayUnixTimeLookUp).forEach(([weekday, unixTime]) => {
      const { getByText } = render(
        <ForecastSummary
          data-testid="forecast-summary"
          {...validProps}
          date={weekdayUnixTimeLookUp[weekday]}
        />
      );
      const isToday = new Date(unixTime).getDay() === new Date().getDay();

      if (isToday) {
        expect(getByText("Today")).toBeInTheDocument();
      } else {
        expect(getByText(weekday)).toBeInTheDocument();
      }
    });
  });

  it("displays description", () => {
    const { getByText } = render(
      <ForecastSummary data-testid="forecast-summary" {...validProps} />
    );

    expect(getByText(description)).toBeInTheDocument();
  });

  it("displays a weather icon", () => {
    const { getByTestId } = render(
      <ForecastSummary data-testid="forecast-summary" {...validProps} />
    );

    expect(getByTestId("weather-icon-component")).toBeInTheDocument();
  });

  it("displays temperature", () => {
    const { getByText } = render(
      <ForecastSummary data-testid="forecast-summary" {...validProps} />
    );

    expect(getByText(temperature.max)).toBeInTheDocument();
  });

  it("displays a 'More details...' button which calls handleForecastSelect callback when clicked", () => {
    const { getByText } = render(
      <ForecastSummary data-testid="forecast-summary" {...validProps} />
    );
    const detailsButton = getByText("More details...");

    fireEvent.click(detailsButton);

    expect(validProps.handleForecastSelect).toHaveBeenCalled();
  });
});
