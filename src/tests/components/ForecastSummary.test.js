import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ForecastSummary from "../../components/ForecastSummary";
import unixTimestampToHumanFormattedDate from "../../helpers/unixTimestampToFormattedDate";

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

const { date, description, temperature } = validProps;
const formattedDate = unixTimestampToHumanFormattedDate(date);

describe("ForecastSummary", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<ForecastSummary {...validProps} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders formatted date, description, icon and temperature", () => {
    const { getByText, getByTestId } = render(
      <ForecastSummary data-testid="forecast-summary" {...validProps} />
    );

    expect(getByText(formattedDate)).toBeInTheDocument();
    expect(getByText(description)).toBeInTheDocument();
    expect(getByTestId("weather-icon-component")).toBeInTheDocument();
    expect(getByText(temperature.max)).toBeInTheDocument();
  });

  it("More details... button should call handleForecastSelect callback", () => {
    const { getByText } = render(
      <ForecastSummary data-testid="forecast-summary" {...validProps} />
    );
    const detailsButton = getByText("More details...");

    fireEvent.click(detailsButton);

    expect(validProps.handleForecastSelect).toHaveBeenCalled();
  });
});
