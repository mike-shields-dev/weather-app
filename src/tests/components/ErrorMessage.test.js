import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ErrorMessage from "../../components/ErrorMessage";

const errorMessage = "City not found";

describe("ErrorMessage", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(
      <ErrorMessage errorMessage={errorMessage} handleClick={jest.fn()} />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders an error message", () => {
    const { getByText } = render(
      <ErrorMessage errorMessage={errorMessage} handleClick={jest.fn()} />
    );

    expect(getByText("City not found")).toBeInTheDocument();
  });

  it("renders an 'OK' button", () => {
    const { getByText } = render(
      <ErrorMessage errorMessage={errorMessage} handleClick={jest.fn()} />
    );

    expect(getByText("OK")).toBeInTheDocument();
  });

  it("OK button calls handleClick callback", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <ErrorMessage errorMessage={errorMessage} handleClick={handleClick} />
    );
    const okButton = getByText("OK");

    fireEvent.click(okButton);

    expect(handleClick).toHaveBeenCalled();
  });
});
