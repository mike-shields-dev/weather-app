import React from "react";
import { render } from "@testing-library/react";
import FormattedDate from "../../components/FormattedDate";
import { forecasts } from "../../data/forecast.json";
import unixTimestampToFormattedDate from "../../helpers/unixTimestampToFormattedDate";

const { date } = forecasts[0];
const formattedDate = unixTimestampToFormattedDate(date);

describe("FormattedDate", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<FormattedDate date={date} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders date in a human readable format", () => {
    const { getByText } = render(<FormattedDate date={date} />);

    expect(getByText(formattedDate)).toBeInTheDocument();
  });
});
