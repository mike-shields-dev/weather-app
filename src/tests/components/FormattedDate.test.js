import React from "react";
import { render } from "@testing-library/react";
import FormattedDate from "../../components/FormattedDate";
import unixTimestampToFormattedDate from "../../helpers/unixTimestampToFormattedDate";

const validDate = 1525046400000;
const formattedDate = unixTimestampToFormattedDate(validDate);

describe("FormattedDate", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<FormattedDate date={validDate} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders date in a human readable format", () => {
    const { getByText } = render(<FormattedDate date={validDate} />);

    expect(getByText(formattedDate)).toBeInTheDocument();
  });
});
