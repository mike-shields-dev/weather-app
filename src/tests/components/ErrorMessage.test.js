import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ErrorMessage from "../../components/ErrorMessage";

const validProps = {
  errorMessage: "City not found",
  handleClick: jest.fn(),
};

describe("ErrorMessage", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<ErrorMessage {...validProps} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders an error message", () => {
    const { getByText } = render(<ErrorMessage {...validProps} />);

    expect(getByText(validProps.errorMessage)).toBeInTheDocument();
  });

  it("renders an 'OK' button", () => {
    const { getByText } = render(<ErrorMessage {...validProps} />);

    expect(getByText("OK")).toBeInTheDocument();
  });

  it("OK button calls handleClick callback", () => {
    const { getByText } = render(<ErrorMessage {...validProps} />);
    const okButton = getByText("OK");

    fireEvent.click(okButton);

    expect(validProps.handleClick).toHaveBeenCalled();
  });
});
