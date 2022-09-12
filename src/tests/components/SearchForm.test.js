import React from "react";
import { fireEvent, render } from "@testing-library/react";
import SearchForm from "../../components/SearchForm";

const validProps = {
  handleChange: jest.fn(),
  handleSubmit: jest.fn(),
  placeholderText: "Enter city name",
};

describe("SearchForm", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<SearchForm {...validProps} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders a search text input", () => {
    const { getByRole } = render(<SearchForm {...validProps} />);

    expect(getByRole("textbox")).toBeInTheDocument();
  });

  it("search text input renders provided placeholder text", () => {
    const { getByTestId } = render(<SearchForm {...validProps} />);
    const searchInput = getByTestId("search-form-input");

    expect(searchInput.placeholder).toEqual(validProps.placeholderText);
  });

  it("search text input renders default placeholder if no placeholder text prop is provided", () => {
    const { placeholderText, ...validPropsNoPlaceholderText } = validProps;
    const { getByTestId } = render(
      <SearchForm {...validPropsNoPlaceholderText} />
    );
    const searchInput = getByTestId("search-form-input");

    expect(searchInput.placeholder).toEqual("Enter your search");
  });

  it("typing into the search text input calls handleChange function", async () => {
    const { getByRole } = render(<SearchForm {...validProps} />);
    const textInput = getByRole("textbox");

    fireEvent.change(textInput, { target: { value: "Manchester" } });

    expect(validProps.handleChange).toHaveBeenCalled();
  });

  it("renders a submit button", () => {
    const { getByRole } = render(<SearchForm {...validProps} />);

    expect(getByRole("button", { type: "submit" })).toBeInTheDocument();
  });

  it("clicking submit button calls handleSubmit function", () => {
    const { getByRole } = render(<SearchForm {...validProps} />);
    const button = getByRole("button");

    fireEvent.click(button);

    expect(validProps.handleSubmit).toHaveBeenCalled();
  });
});
